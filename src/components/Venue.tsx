import React from "react";
import { MapPin, Calendar, Clock, MapPinHouse } from "lucide-react";
import { Section } from "./Section";
import { useTranslation } from "react-i18next";

export const Venue: React.FC = () => {
  const { t } = useTranslation();

  const handleAddToCalendar = () => {
    const event = {
      title: t("venue.calendarEvent.title"),
      location: t("venue.calendarEvent.location"),
      description: t("venue.calendarEvent.description"),
      start: "20260620T153000",
      end: "20260621T020000"
    };

    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${event.title}
LOCATION:${event.location}
DESCRIPTION:${event.description}
DTSTART:${event.start}
DTEND:${event.end}
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", t("venue.calendarEvent.filename"));
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Section id="venue" className="text-center" withPattern>
      <div className="flex justify-center mb-4">
        <MapPin className="text-primary w-8 h-8" />
      </div>

      <h2 className="font-script text-4xl text-primary mb-2">
        {t("venue.title")}
      </h2>
      <p className="font-sans text-text/60 mb-8 uppercase tracking-widest text-xs">
        {t("venue.subtitle")}
      </p>

      <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto border border-primary/20">
        {/* Keep venue name + address as-is (usually not translated) */}
        <h3 className="font-serif text-2xl text-text mb-2">
          Bildungsgut Schmochtitz Sankt Benno
        </h3>
        <p className="font-sans text-text/70 mb-1">
          Schmochtitz Nr. 1, 02625 Bautzen
        </p>

        <div className="flex justify-center gap-4 my-6 text-sm text-text/80">
          <div className="flex items-center gap-1">
            <Calendar size={16} className="text-accent" />
            <span>20.06.2026</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={16} className="text-accent" />
            <span>{t("venue.timeDisplay")}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
          <a
            href="https://maps.app.goo.gl/8QrAwpc9QdeyCjW76"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-primary text-white font-sans text-sm rounded-full hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
          >
            <MapPinHouse size={16} />
            {t("venue.gettingThere")}
          </a>

          <button
            type="button"
            onClick={handleAddToCalendar}
            className="px-6 py-2 border border-primary text-primary font-sans text-sm rounded-full hover:bg-primary/5 transition-colors flex items-center justify-center gap-2"
          >
            <Calendar size={16} />
            {t("venue.addToCalendar")}
          </button>
        </div>
      </div>
    </Section>
  );
};
