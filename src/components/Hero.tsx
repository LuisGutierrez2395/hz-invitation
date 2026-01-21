import React from "react";
import { motion } from "framer-motion";
import { MailQuestionMark } from "lucide-react";
import { Section } from "./Section";
import { useTranslation } from "react-i18next";

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  const scrollToRSVP = () => {
    const el = document.getElementById("rsvp");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Section className="text-center pt-20 pb-10 min-h-screen flex flex-col justify-center items-center relative">
      <div className="border-2 border-primary/30 p-8 md:p-16 relative max-w-2xl w-full">
        {/* Decorative corners */}
        <div className="absolute top-[-10px] left-[-10px] w-20 h-20 border-t-2 border-l-2 border-primary/50" />
        <div className="absolute top-[-10px] right-[-10px] w-20 h-20 border-t-2 border-r-2 border-primary/50" />
        <div className="absolute bottom-[-10px] left-[-10px] w-20 h-20 border-b-2 border-l-2 border-primary/50" />
        <div className="absolute bottom-[-10px] right-[-10px] w-20 h-20 border-b-2 border-r-2 border-primary/50" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="font-script text-4xl md:text-5xl text-primary mb-6"
        >
          {t("hero.tagline")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="font-serif text-5xl md:text-7xl tracking-widest text-text mb-4"
        >
          {t("hero.couple.left")} <span className="text-accent">&</span>{" "}
          {t("hero.couple.right")}
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="h-px w-24 bg-accent mx-auto my-6"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="font-serif text-2xl md:text-3xl mt-6 text-text"
        >
          20.06.2026
        </motion.p>
      </div>
    </Section>
  );
};
