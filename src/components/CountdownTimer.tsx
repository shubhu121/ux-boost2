import React from 'react';
import { Clock, Zap } from 'lucide-react';

const CountdownTimer = () => {
  // Sale has ended - show regular pricing message
  return (
    <div className="bg-blue-400 border-4 border-black dark:border-gray-100 p-4 text-center shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#f3f4f6]">
      <div className="flex items-center justify-center space-x-3 mb-2">
        <Zap className="h-6 w-6 text-black" />
        <h3 className="text-black font-black text-lg">Professional UX Audits</h3>
        <Zap className="h-6 w-6 text-black" />
      </div>
      
      <p className="text-black font-bold text-sm">
        Get expert UX analysis and conversion strategies for your startup
      </p>
    </div>
  );
};

export default CountdownTimer;