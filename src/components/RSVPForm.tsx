import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { supabase } from "../supabase";
import { Section } from "./Section";
import type { RsvpFormData } from "../types";
import {
  MailQuestionMark,
  Loader2,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const RSVPForm: React.FC = () => {
  const { t } = useTranslation();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<RsvpFormData>();

  const asistiraValue = watch("asistira");
  const person2Name = watch("nombre_completo_2");

  const onSubmit = async (data: RsvpFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const isYes = data.asistira === "si";
      const hasPerson2 = !!data.nombre_completo_2?.trim();

      const payload: Record<string, any> = {
        asistira: data.asistira,

        // If NO -> store nombre_completo as the single "Full Name" required
        // If YES -> person 1 required, person 2 optional
        nombre_completo: (data.nombre_completo ?? "").trim() || null,
        nombre_completo_2: isYes
          ? ((data.nombre_completo_2 ?? "").trim() || null)
          : null,

        otras_alergias: isYes ? ((data.otras_alergias ?? "").trim() || null) : null,
        cancion_deseada: isYes ? ((data.cancion_deseada ?? "").trim() || null) : null,

        // new columns (recommended)
        fun_fact_person_1: isYes
          ? ((data.fun_fact_person_1 ?? "").trim() || null)
          : null,
        fun_fact_person_2: isYes && hasPerson2
          ? ((data.fun_fact_person_2 ?? "").trim() || null)
          : null,

        // legacy columns you no longer use
        email: null,
        fiesta: false,
        vegetariano: false,
        sin_gluten: false,
        vegano: false,
        sin_lactosa: false
      };

      const { error } = await supabase.from("rsvp_responses").insert([payload]);
      if (error) throw error;

      setSubmitStatus("success");
    } catch (error) {
      console.error("Error submitting RSVP:", error);
      setSubmitStatus("error");
      setErrorMessage((error as Error).message || t("rsvp.errors.generic"));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === "success") {
    return (
      <Section id="rsvp" className="text-center py-20">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white p-8 rounded-lg shadow-lg border border-primary/20 max-w-md mx-auto"
        >
          <div className="flex justify-center mb-4">
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>

          <h2 className="font-script text-4xl text-primary mb-2">
            {t("rsvp.success.title")}
          </h2>

          <p className="font-sans text-text/80 mb-6">
            {t("rsvp.success.message")}
          </p>

          <button
            type="button"
            onClick={() => window.location.reload()}
            className="text-primary underline font-sans text-sm hover:text-primary/80"
          >
            {t("rsvp.success.back")}
          </button>
        </motion.div>
      </Section>
    );
  }

  return (
    <Section id="rsvp" className="max-w-2xl" withPattern>
      <div className="flex justify-center mb-4">
        <MailQuestionMark className="text-primary w-8 h-8" />
      </div>

      <div className="text-center mb-10">
        <h2 className="font-script text-4xl text-primary mb-2">
          {t("rsvp.title")}
        </h2>
        <p className="font-sans text-text/60 uppercase tracking-widest text-xs">
          {t("rsvp.subtitle")}
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 bg-white p-6 md:p-10 rounded-lg shadow-lg border border-primary/10"
      >
        {/* Deadline notice */}
        <p className="text-left font-sans font-bold text-text mb-6">
          {t("rsvp.deadline", { date: "31.03.2026" })}
        </p>

        {/* Attendance */}
        <div className="space-y-2">
          <label className="block font-serif text-lg text-text">
            {t("rsvp.attendance.label")}
          </label>

          <div className="space-y-2">
            <label className="flex items-center space-x-3 cursor-pointer p-3 border border-transparent hover:bg-secondary/30 rounded transition-colors">
              <input
                {...register("asistira", { required: t("rsvp.validation.selectOne") })}
                type="radio"
                value="si"
                className="text-primary focus:ring-primary h-4 w-4"
              />
              <span className="font-sans text-text">
                {t("rsvp.attendance.yes")}
              </span>
            </label>

            <label className="flex items-center space-x-3 cursor-pointer p-3 border border-transparent hover:bg-secondary/30 rounded transition-colors">
              <input
                {...register("asistira", { required: t("rsvp.validation.selectOne") })}
                type="radio"
                value="no"
                className="text-primary focus:ring-primary h-4 w-4"
              />
              <span className="font-sans text-text">
                {t("rsvp.attendance.no")}
              </span>
            </label>
          </div>

          {errors.asistira && (
            <span className="text-red-500 text-xs font-sans">
              {errors.asistira.message}
            </span>
          )}
        </div>

        {/* If NO -> show required single Full Name */}
        {asistiraValue === "no" && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            className="space-y-6 pt-4 border-t border-primary/10"
          >
            <p className="font-sans text-lg text-text/80 text-center">
              {t("rsvp.attendance.sadMessage")}
            </p>

            <div className="space-y-1">
              <label className="block font-serif text-lg text-text">
                {t("rsvp.fields.fullNameSingleLabel")}
              </label>
              <input
                {...register("nombre_completo", {
                  validate: (v) => (!!v?.trim() ? true : t("rsvp.validation.required"))
                })}
                type="text"
                className="w-full px-4 py-2 border border-primary/20 rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 bg-secondary/30"
                placeholder={t("rsvp.fields.fullNamePlaceholder")}
              />
              {errors.nombre_completo && (
                <span className="text-red-500 text-xs font-sans">
                  {errors.nombre_completo.message}
                </span>
              )}
            </div>
          </motion.div>
        )}

        {/* If YES -> show full section */}
        {asistiraValue === "si" && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            className="space-y-6 pt-4 border-t border-primary/10"
          >
            {/* Person 1 (required) */}
            <div className="space-y-1">
              <label className="block font-serif text-lg text-text">
                {t("rsvp.fields.fullNamePerson1Label")}
              </label>
              <input
                {...register("nombre_completo", {
                  validate: (v) => (!!v?.trim() ? true : t("rsvp.validation.required"))
                })}
                type="text"
                className="w-full px-4 py-2 border border-primary/20 rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 bg-secondary/30"
                placeholder={t("rsvp.fields.fullNamePlaceholder")}
              />
              {errors.nombre_completo && (
                <span className="text-red-500 text-xs font-sans">
                  {errors.nombre_completo.message}
                </span>
              )}
            </div>

            {/* Fun fact person 1 (required) */}
            <div className="space-y-1">
              <label className="block font-serif text-lg text-text">
                {t("rsvp.fields.funFactPerson1Label")}
              </label>
              <textarea
                {...register("fun_fact_person_1", {
                  validate: (v) => !!v?.trim() || t("rsvp.validation.requiredField")
                })}
                rows={3}
                className="w-full px-4 py-2 border border-primary/20 rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 bg-secondary/30"
                placeholder={t("rsvp.fields.funFactPlaceholder")}
              />
              {errors.fun_fact_person_1 && (
                <span className="text-red-500 text-xs font-sans">
                  {errors.fun_fact_person_1.message}
                </span>
              )}
            </div>

            {/* Person 2 (optional) */}
            <div className="space-y-1">
              <label className="block font-serif text-lg text-text">
                {t("rsvp.fields.fullNamePerson2Label")}
              </label>
              <input
                {...register("nombre_completo_2")}
                type="text"
                className="w-full px-4 py-2 border border-primary/20 rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 bg-secondary/30"
                placeholder={t("rsvp.fields.person2Placeholder")}
              />
            </div>

            {/* Fun fact person 2 (required if person 2 name is filled) */}
            <div className="space-y-1">
              <label className="block font-serif text-lg text-text">
                {t("rsvp.fields.funFactPerson2Label")}
                {person2Name?.trim() ? " *" : ""}
              </label>
              <textarea
                {...register("fun_fact_person_2", {
                  validate: (v) => {
                    if (!person2Name?.trim()) return true;
                    return !!v?.trim() || t("rsvp.validation.requiredIfPerson2");
                  }
                })}
                rows={3}
                className="w-full px-4 py-2 border border-primary/20 rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 bg-secondary/30"
                placeholder={t("rsvp.fields.funFactPlaceholder")}
              />
              {errors.fun_fact_person_2 && (
                <span className="text-red-500 text-xs font-sans">
                  {errors.fun_fact_person_2.message}
                </span>
              )}
            </div>

            {/* Allergies */}
            <div className="space-y-1">
              <label className="block font-serif text-lg text-text">
                {t("rsvp.fields.allergiesLabel")}
              </label>
              <textarea
                {...register("otras_alergias")}
                rows={3}
                className="w-full px-4 py-2 border border-primary/20 rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 bg-secondary/30"
                placeholder={t("rsvp.fields.allergiesPlaceholder")}
              />
            </div>

            {/* Song wish (required) */}
            <div className="space-y-1">
              <label className="block font-serif text-lg text-text">
                {t("rsvp.fields.songWishLabel")}
              </label>
              <textarea
                {...register("cancion_deseada", {
                  validate: (v) => (!!v?.trim() ? true : t("rsvp.validation.required"))
                })}
                rows={3}
                className="w-full px-4 py-2 border border-primary/20 rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 bg-secondary/30"
                placeholder={t("rsvp.fields.songWishPlaceholder")}
              />
              {errors.cancion_deseada && (
                <span className="text-red-500 text-xs font-sans">
                  {errors.cancion_deseada.message}
                </span>
              )}
            </div>
          </motion.div>
        )}

        {/* Error Message */}
        {submitStatus === "error" && (
          <div className="p-3 bg-red-50 text-red-600 rounded flex items-center gap-2 text-sm font-sans">
            <AlertCircle size={16} />
            {errorMessage}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 bg-primary text-white font-sans font-medium uppercase tracking-wider rounded shadow-md hover:bg-primary/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin" />
              {t("rsvp.submit.sending")}
            </>
          ) : (
            t("rsvp.submit.sendConfirmation")
          )}
        </button>
      </form>
    </Section>
  );
};
