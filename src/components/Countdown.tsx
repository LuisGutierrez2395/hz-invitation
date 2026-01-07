import React from 'react';
import { useCountdown } from '../hooks/useCountdown';
import { Section } from './Section';

const TimeUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center mx-2 md:mx-4">
    <div className="w-16 h-16 md:w-20 md:h-20 bg-white shadow-sm rounded-lg flex items-center justify-center border border-primary/10 mb-2">
      <span className="font-serif text-2xl md:text-3xl text-primary font-medium">
        {value.toString().padStart(2, '0')}
      </span>
    </div>
    <span className="font-sans text-xs uppercase tracking-wider text-text/70">{label}</span>
  </div>
);

export const Countdown: React.FC = () => {
  // Target Date: March 28, 2026
  const targetDate = new Date('2026-03-28T15:30:00');
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  return (
    <Section className="text-center my-8">
      <div className="bg-white/50 rounded-3xl p-8 mx-4 md:mx-0 shadow-sm border border-white/40">
        <h2 className="font-script text-4xl text-text mb-8">Para el gran día</h2>
        <div className="flex justify-center flex-wrap gap-y-4">
          <TimeUnit value={days} label="Días" />
          <TimeUnit value={hours} label="Horas" />
          <TimeUnit value={minutes} label="Minutos" />
          <TimeUnit value={seconds} label="Segundos" />
        </div>
      </div>
    </Section>
  );
};
