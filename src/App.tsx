import { useState } from 'react';
import { motion } from 'framer-motion';
import { Envelope } from './components/Envelope';
import { Hero } from './components/Hero';
import { Countdown } from './components/Countdown';
import { Venue } from './components/Venue';
import { Timeline } from './components/Timeline';
import { Gifts } from './components/Gifts';
import { RSVPForm } from './components/RSVPForm';
import { Footer } from './components/Footer';

function App() {
  const [contentVisible, setContentVisible] = useState(false);

  return (
    <div className="min-h-screen bg-secondary overflow-x-hidden">
      <Envelope onOpen={() => setContentVisible(true)} />
      
      {contentVisible && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Hero />
          <Countdown />
          <Venue />
          <Timeline />
          <Gifts />
          <RSVPForm />
          <Footer />
        </motion.main>
      )}
    </div>
  );
}

export default App;
