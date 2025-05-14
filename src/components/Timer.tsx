
import React, { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

interface TimerProps {
  timeLimit: number;
  onTimeout: () => void;
  isActive: boolean;
}

const Timer: React.FC<TimerProps> = ({ timeLimit, onTimeout, isActive }) => {
  const [seconds, setSeconds] = useState(timeLimit);

  useEffect(() => {
    // Reset timer when isActive changes or timeLimit changes
    if (isActive) {
      setSeconds(timeLimit);
    }
  }, [isActive, timeLimit]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds <= 1) {
            clearInterval(interval as NodeJS.Timeout);
            onTimeout();
            return 0;
          }
          return prevSeconds - 1;
        });
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, onTimeout]);

  // Calculate percentage for progress indicator
  const percentage = (seconds / timeLimit) * 100;
  
  const getTimerColor = () => {
    if (seconds > timeLimit * 0.6) return 'text-green-500';
    if (seconds > timeLimit * 0.3) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="flex flex-col items-center">
      <div className={`flex items-center gap-2 text-xl font-semibold mb-1 ${getTimerColor()}`}>
        <Clock className="w-5 h-5" />
        <span>{seconds}s</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className={`h-full transition-all duration-1000 ease-linear ${seconds > timeLimit * 0.6 ? 'bg-green-500' : seconds > timeLimit * 0.3 ? 'bg-yellow-500' : 'bg-red-500'}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default Timer;
