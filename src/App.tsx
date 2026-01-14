import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { Envelope } from "./components/Envelope";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import { Hero } from "./components/Hero";
import { Countdown } from "./components/Countdown";
import { Venue } from "./components/Venue";
import { Timeline } from "./components/Timeline";
import { Gifts } from "./components/Gifts";
import { RSVPForm } from "./components/RSVPForm";
import { Footer } from "./components/Footer";
import { Accommodation } from "./components/Accommodation";
import { Contact } from "./components/Contact";
import { DressCode } from "./components/DressCode";
import { Directions } from "./components/Directions";

type Lang = "en" | "de";
type Phase = "choose" | "envelope" | "content";

const LANG_CONFIRMED_KEY = "lang_confirmed";

function App() {
  const { i18n } = useTranslation();

  const [phase, setPhase] = useState<Phase>(() => {
    const confirmed = localStorage.getItem(LANG_CONFIRMED_KEY) === "1";
    return confirmed ? "envelope" : "choose";
  });

  const [startSignal, setStartSignal] = useState(0);

  const current = useMemo(() => {
    const lng = (i18n.resolvedLanguage ?? i18n.language ?? "en") as Lang;
    return lng === "de" ? "de" : "en";
  }, [i18n.language, i18n.resolvedLanguage]);

  const startEnvelope = () => {
    setPhase("envelope");
    setStartSignal((s) => s + 1);
  };

  const setLanguage = async (lng: Lang) => {
    await i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
    localStorage.setItem(LANG_CONFIRMED_KEY, "1");
    document.documentElement.lang = lng;

    startEnvelope();
  };

  // If language was previously confirmed, start envelope once on load
  useEffect(() => {
    const confirmed = localStorage.getItem(LANG_CONFIRMED_KEY) === "1";
    if (confirmed) {
      const storedLng = localStorage.getItem("lng");
      if (storedLng === "en" || storedLng === "de") {
        i18n.changeLanguage(storedLng);
        document.documentElement.lang = storedLng;
      }
      startEnvelope();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-secondary overflow-x-hidden">
      {/* Envelope is shown (static) during choose/envelope phases, but it never autoplays */}
      {phase !== "content" && (
        <Envelope
          autoplay={false}
          startSignal={startSignal}
          onOpen={() => setPhase("content")}
        />
      )}

      {/* Language chooser overlay */}
      {phase === "choose" && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center pointer-events-none">
          <div className="pointer-events-auto bg-white/75 border border-primary/10 shadow-lg rounded-2xl p-8 mx-4 w-full max-w-sm text-center backdrop-blur-sm">
            <h2 className="font-script text-4xl text-primary mb-3">
              Choose language
            </h2>

            <div className="flex flex-col gap-3 mt-6">
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className="
                  w-full px-6 py-3
                  bg-white text-primary
                  border border-primary
                  font-sans text-sm rounded-full
                  transition-colors
                  hover:bg-primary hover:text-white
                  active:bg-primary/90
                "
              >
                English
              </button>

              <button
                type="button"
                onClick={() => setLanguage("de")}
                className="
                  w-full px-6 py-3
                  bg-white text-primary
                  border border-primary
                  font-sans text-sm rounded-full
                  transition-colors
                  hover:bg-primary hover:text-white
                  active:bg-primary/90
                "
              >
                Deutsch
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main content */}
      {phase === "content" && (
        <>
          {/* Top-right in-app language switcher */}
          <LanguageSwitcher />

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
        </>
      )}
    </div>
  );
}

export default App;
