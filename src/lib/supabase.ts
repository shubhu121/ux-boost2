import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
})

// Type definition for audit request data
export interface AuditRequest {
  id?: string
  name: string
  email: string
  company?: string | null
  website: string
  user_type: string
  goal: string
  plan: 'starter' | 'growth' | 'founder'
  status?: 'pending' | 'in_progress' | 'completed' | 'cancelled'
  created_at?: string
  updated_at?: string
}

// Function to insert audit request
export async function insertAuditRequest(data: Omit<AuditRequest, 'id' | 'created_at' | 'updated_at'>) {
  const { data: result, error } = await supabase
    .from('audit_requests')
    .insert([data])
    .select()
    .single()

  if (error) throw error
  return result
}

// Function to get all audit requests (for admin)
export async function getAuditRequests(): Promise<AuditRequest[]> {
  const { data, error } = await supabase
    .from('audit_requests')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw error
  return data || []
}

// Function to update audit request status
export async function updateAuditRequestStatus(id: string, status: AuditRequest['status']) {
  const { error } = await supabase
    .from('audit_requests')
    .update({ status, updated_at: new Date().toISOString() })
    .eq('id', id)

  if (error) throw error
}