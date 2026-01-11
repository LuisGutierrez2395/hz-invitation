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
import { Accommodation } from './components/Accommodation';
import { Contact } from './components/Contact';
import { DressCode } from './components/DressCode';
import { Directions } from './components/Directions';



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
          <Directions />
          <Accommodation />
          <Timeline />
          <DressCode />
          <Gifts />
          <Contact />
          <RSVPForm />
          <Footer />
        </motion.main>
      )}
    </div>
  );
}

export default App;
