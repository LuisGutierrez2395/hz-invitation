import { useState, useEffect } from 'react';
import { differenceInSeconds } from 'date-fns';
import type { CountdownTime } from '../types';

export const useCountdown = (targetDate: Date): CountdownTime => {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = differenceInSeconds(targetDate, now);

      if (difference > 0) {
        const days = Math.floor(difference / (3600 * 24));
        const hours = Math.floor((difference % (3600 * 24)) / 3600);
        const minutes = Math.floor((difference % 3600) / 60);
        const seconds = Math.floor(difference % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
};
