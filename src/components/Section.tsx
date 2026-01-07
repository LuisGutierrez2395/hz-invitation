import React, { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  withPattern?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, className, id, withPattern = false }) => {
  return (
    <section 
      id={id} 
      className={clsx(
        "relative py-16 px-4 md:px-8 max-w-4xl mx-auto",
        withPattern && "bg-paper-texture",
        className
      )}
    >
      {/* Floral decorations could go here absolutely positioned */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {children}
      </motion.div>
    </section>
  );
};
