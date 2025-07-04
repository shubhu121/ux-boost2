import React, { useState, useEffect } from 'react';
import { getAuditRequests, updateAuditRequestStatus, type AuditRequest } from '../lib/supabase';
import { Calendar, Mail, Globe, Users, Target, Package, RefreshCw } from 'lucide-react';

const AdminDashboard = () => {
  const [requests, setRequests] = useState<AuditRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRequests = async () => {
    try {
      setLoading(true);
      const data = await getAuditRequests();
      setRequests(data || []);
      setError(null);
    } catch (err) {
      console.error('Error fetching requests:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch requests');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const handleStatusUpdate = async (id: string, newStatus: AuditRequest['status']) => {
    try {
      await updateAuditRequestStatus(id, newStatus);
      // Refresh the list
      await fetchRequests();
    } catch (err) {
      console.error('Error updating status:', err);
      alert('Failed to update status');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-400';
      case 'in_progress': return 'bg-blue-400';
      case 'completed': return 'bg-green-400';
      case 'cancelled': return 'bg-red-400';
      default: return 'bg-gray-400';
    }
  };

  const getPlanPrice = (plan: string) => {
    switch (plan) {
      case 'starter': return '$149';
      case 'growth': return '$299';
      case 'founder': return '$499';
      default: return 'N/A';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="h-12 w-12 text-blue-600 animate-spin mx-auto mb-4" />
          <p className="text-xl font-bold text-black dark:text-gray-100">Loading audit requests...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-black text-black dark:text-gray-100 mb-4">
            UXBoost Admin Dashboard
          </h1>
          <div className="flex items-center justify-between">
            <p className="text-xl font-bold text-gray-600 dark:text-gray-400">
              Manage audit requests and track progress
            </p>
            <button
              onClick={fetchRequests}
              className="bg-blue-400 border-4 border-black dark:border-gray-100 text-black px-4 py-2 font-black shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#f3f4f6] hover:shadow-[6px_6px_0px_0px_#000] dark:hover:shadow-[6px_6px_0px_0px_#f3f4f6] transition-all duration-300 transform hover:-translate-x-1 hover:-translate-y-1 flex items-center space-x-2"
            >
              <RefreshCw className="h-5 w-5" />
              <span>Refresh</span>
            </button>
          </div>
        </div>

        {error && (
          <div className="mb-6 bg-red-100 border-4 border-red-500 p-4 text-red-800 font-bold">
            Error: {error}
          </div>
        )}

        <div className="grid gap-6">
          {requests.length === 0 ? (
            <div className="bg-white dark:bg-gray-800 border-4 border-black dark:border-gray-100 p-8 text-center shadow-[8px_8px_0px_0px_#000] dark:shadow-[8px_8px_0px_0px_#f3f4f6]">
              <p className="text-xl font-bold text-gray-600 dark:text-gray-400">
                No audit requests yet. Waiting for the first submission!
              </p>
            </div>
          ) : (
            requests.map((request) => (
              <div
                key={request.id}
                className="bg-white dark:bg-gray-800 border-4 border-black dark:border-gray-100 p-6 shadow-[8px_8px_0px_0px_#000] dark:shadow-[8px_8px_0px_0px_#f3f4f6] hover:shadow-[12px_12px_0px_0px_#000] dark:hover:shadow-[12px_12px_0px_0px_#f3f4f6] transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-black text-black dark:text-gray-100 mb-2">
                      {request.name}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm font-bold text-gray-600 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(request.created_at!).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Package className="h-4 w-4" />
                        <span>{request.plan.toUpperCase()} - {getPlanPrice(request.plan)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className={`${getStatusColor(request.status!)} border-2 border-black dark:border-gray-100 px-3 py-1 font-black text-black`}>
                      {request.status!.toUpperCase()}
                    </div>
                    <select
                      value={request.status}
                      onChange={(e) => handleStatusUpdate(request.id!, e.target.value as AuditRequest['status'])}
                      className="border-2 border-black dark:border-gray-100 px-2 py-1 font-bold text-black dark:text-gray-100 bg-white dark:bg-gray-700"
                    >
                      <option value="pending">Pending</option>
                      <option value="in_progress">In Progress</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-5 w-5 text-blue-600" />
                      <span className="font-bold text-black dark:text-gray-100">{request.email}</span>
                    </div>
                    {request.company && (
                      <div className="flex items-center space-x-2">
                        <Package className="h-5 w-5 text-purple-600" />
                        <span className="font-bold text-black dark:text-gray-100">{request.company}</span>
                      </div>
                    )}
                    <div className="flex items-center space-x-2">
                      <Globe className="h-5 w-5 text-green-600" />
                      <a
                        href={request.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-blue-600 hover:text-blue-800 underline"
                      >
                        {request.website}
                      </a>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <Users className="h-5 w-5 text-orange-600" />
                        <span className="font-black text-black dark:text-gray-100">Primary Users:</span>
                      </div>
                      <p className="font-bold text-gray-700 dark:text-gray-300 ml-7">{request.user_type}</p>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <Target className="h-5 w-5 text-red-600" />
                        <span className="font-black text-black dark:text-gray-100">Conversion Goal:</span>
                      </div>
                      <p className="font-bold text-gray-700 dark:text-gray-300 ml-7">{request.goal}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;