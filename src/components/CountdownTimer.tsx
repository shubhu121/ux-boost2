import React, { useState, useEffect } from 'react';
import { Clock, Zap } from 'lucide-react';

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ hours: 0, minutes: 0, seconds: 0 });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    // Set the countdown to end at midnight (24 hours from now for demo purposes)
    // In production, you'd set this to a specific end date
    const endTime = new Date();
    endTime.setHours(23, 59, 59, 999); // End at 11:59:59 PM today

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime.getTime() - now;

      if (distance < 0) {
        setIsExpired(true);
        clearInterval(timer);
        return;
      }

      const hours = Math.floor(distance / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (isExpired) {
    return (
      <div className="bg-gray-400 border-4 border-black dark:border-gray-100 p-4 text-center shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#f3f4f6]">
        <p className="text-black font-black text-lg">
          🔒 Launch Special Has Ended - Regular Pricing Now Active
        </p>
      </div>
    );
  }

  return (
    <div className="bg-red-500 border-4 border-black dark:border-gray-100 p-4 text-center shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#f3f4f6] animate-pulse">
      <div className="flex items-center justify-center space-x-3 mb-2">
        <Clock className="h-6 w-6 text-white animate-bounce" />
        <h3 className="text-white font-black text-lg">LAUNCH SPECIAL ENDS IN:</h3>
        <Zap className="h-6 w-6 text-white animate-bounce" />
      </div>
      
      <div className="flex items-center justify-center space-x-4">
        <div className="bg-white border-2 border-black px-3 py-2 shadow-[3px_3px_0px_0px_#000]">
          <div className="text-2xl font-black text-black">{timeLeft.hours.toString().padStart(2, '0')}</div>
          <div className="text-xs font-bold text-black">HOURS</div>
        </div>
        <div className="text-white font-black text-2xl">:</div>
        <div className="bg-white border-2 border-black px-3 py-2 shadow-[3px_3px_0px_0px_#000]">
          <div className="text-2xl font-black text-black">{timeLeft.minutes.toString().padStart(2, '0')}</div>
          <div className="text-xs font-bold text-black">MINS</div>
        </div>
        <div className="text-white font-black text-2xl">:</div>
        <div className="bg-white border-2 border-black px-3 py-2 shadow-[3px_3px_0px_0px_#000]">
          <div className="text-2xl font-black text-black">{timeLeft.seconds.toString().padStart(2, '0')}</div>
          <div className="text-xs font-bold text-black">SECS</div>
        </div>
      </div>
      
      <p className="text-white font-bold text-sm mt-2">
        ⚡ Don't miss out on 50% savings!
      </p>
    </div>
  );
};

export default CountdownTimer;