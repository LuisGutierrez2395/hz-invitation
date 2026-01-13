import React from 'react';
import { Section } from './Section';
import { Gift } from 'lucide-react';

export const Gifts: React.FC = () => {
  // All unused state variables (isOpen, copied) and functions (handleCopy) have been removed

  return (
    <Section id="gifts" className="text-center" withPattern>
      <div className="flex justify-center mb-4">
        <Gift className="text-primary w-8 h-8" />
      </div>
      
      <h2 className="font-script text-4xl text-primary mb-2">Gifts</h2>
      <p className="font-sans text-text/60 mb-6 uppercase tracking-widest text-xs">Your presence is our greatest gift</p>
      
      <p className="font-serif text-lg text-text max-w-xl mx-auto mb-8">
        If you still would like to give us a present, a contribution towards our travel funds would be highly appreciated!
      </p>

    </Section>
  );
};
