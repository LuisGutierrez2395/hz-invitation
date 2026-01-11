import React from "react";
import { useCountdown } from "../hooks/useCountdown";
import { Section } from "./Section";
import { Hourglass } from "lucide-react";

const TimeUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center mx-2 md:mx-4">
    <div className="w-16 h-16 md:w-20 md:h-20 bg-white shadow-sm rounded-lg flex items-center justify-center border border-primary/10 mb-2">
      <span className="font-serif text-2xl md:text-3xl text-primary font-medium">
        {value.toString().padStart(2, "0")}
      </span>
    </div>
    <span className="font-sans text-xs uppercase tracking-wider text-text/70">
      {label}
    </span>
  </div>
);

export const Countdown: React.FC = () => {
  // Target Date: June 20, 2026 at 15:00
  const targetDate = new Date("2026-06-20T15:00:00");
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  return (
    <Section className="text-center my-8">
      {/* Icon */}
      <div className="flex justify-center mb-4">
        <Hourglass className="w-8 h-8 text-primary" />
      </div>

      {/* Title + Subtitle */}
      <div className="text-center mb-10">
        <h2 className="font-script text-4xl text-primary mb-2">
          Countdown
        </h2>
        <p className="font-sans text-text/60 uppercase tracking-widest text-xs">
          Time until the big day
        </p>
      </div>

      {/* Countdown Box */}
      <div className="bg-white/50 rounded-3xl p-8 mx-4 md:mx-0 shadow-sm border border-white/40">
        <div className="flex justify-center flex-wrap gap-y-4">
          <TimeUnit value={days} label="Days" />
          <TimeUnit value={hours} label="Hours" />
          <TimeUnit value={minutes} label="Minutes" />
          <TimeUnit value={seconds} label="Seconds" />
        </div>
      </div>
    </Section>
  );
};
