import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 text-center bg-secondary/50 border-t border-primary/10 mt-12">
      <div className="flex justify-center mb-4">
        <Heart size={24} className="text-primary/40 fill-primary/10" />
      </div>
      <h2 className="font-script text-3xl text-primary mb-2">Luis & Nele</h2>
      <p className="font-sans text-xs text-text/60 mb-6 uppercase tracking-widest">20.06.2026</p>
      <p className="font-sans text-xs text-text/40 flex items-center justify-center gap-1">
        Self-made with <Heart size={10} className="fill-red-400 text-red-400" /> for our wedding
      </p>
    </footer>
  );
};
