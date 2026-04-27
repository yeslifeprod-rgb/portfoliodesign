"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/context/LangContext";
import { BorderBeam } from "@/components/ui/border-beam";
import { User, Mail, MessageSquare, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

/* ─── Animated Field ─────────────────────────────────── */
interface FieldProps {
  icon: React.ElementType;
  label: string;
  error?: string;
  touched?: boolean;
  index: number;
  children: React.ReactNode;
}

const Field: React.FC<FieldProps> = ({ icon: Icon, label, error, touched, index, children }) => {
  const [focused, setFocused] = useState(false);
  const hasError = touched && error;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 + index * 0.08, duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
    >
      <div
        className={`relative rounded-xl border transition-all duration-300 overflow-hidden group
          ${focused
            ? "border-primary/60 bg-card shadow-[0_0_0_3px_rgba(220,38,38,0.08)]"
            : hasError
              ? "border-destructive/50 bg-card"
              : "border-border bg-card/60 hover:border-border/80"
          }`}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      >
        {/* Icon + label row */}
        <div className="flex items-center gap-2 px-4 pt-3 pb-1">
          <Icon className={`w-3.5 h-3.5 shrink-0 transition-colors duration-200 ${focused ? "text-primary" : "text-muted-foreground/50"}`} />
          <span className={`text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors duration-200 ${focused ? "text-primary" : "text-muted-foreground/50"}`}>
            {label}
          </span>
        </div>

        {/* Input slot */}
        <div className="px-4 pb-3 [&_input]:w-full [&_input]:bg-transparent [&_input]:text-sm [&_input]:text-foreground [&_input]:outline-none [&_input]:placeholder:text-muted-foreground/30 [&_textarea]:w-full [&_textarea]:bg-transparent [&_textarea]:text-sm [&_textarea]:text-foreground [&_textarea]:outline-none [&_textarea]:resize-none [&_textarea]:placeholder:text-muted-foreground/30">
          {children}
        </div>

        {/* Bottom progress bar */}
        <AnimatePresence>
          {focused && (
            <motion.div
              className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary/60 via-primary to-primary/60"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0, originX: 1 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Error */}
      <AnimatePresence>
        {hasError && (
          <motion.p
            className="flex items-center gap-1 mt-1.5 px-1 text-[11px] text-destructive"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <AlertCircle className="w-3 h-3" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

/* ─── Submit button ──────────────────────────────────── */
type Status = "idle" | "loading" | "success" | "error";

const SubmitButton: React.FC<{ status: Status; lang: string }> = ({ status, lang }) => {
  const labels = {
    idle:    lang === "fr" ? "Envoyer le message" : "Send message",
    loading: lang === "fr" ? "Envoi en cours…"  : "Sending…",
    success: lang === "fr" ? "Message envoyé !" : "Message sent!",
    error:   lang === "fr" ? "Erreur, réessayer" : "Error, retry",
  };

  const icons = {
    idle:    <Send className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />,
    loading: <Loader2 className="w-4 h-4 ml-2 animate-spin" />,
    success: <CheckCircle2 className="w-4 h-4 ml-2" />,
    error:   <AlertCircle className="w-4 h-4 ml-2" />,
  };

  const colors = {
    idle:    "from-primary to-red-700 hover:from-red-500 hover:to-primary",
    loading: "from-primary/80 to-red-700/80",
    success: "from-emerald-600 to-emerald-500",
    error:   "from-destructive to-red-800",
  };

  return (
    <motion.button
      type="submit"
      disabled={status === "loading" || status === "success"}
      className={`group relative w-full flex items-center justify-center py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r transition-all duration-300 overflow-hidden
        ${colors[status]}
        disabled:opacity-80 disabled:cursor-not-allowed
        shadow-[0_4px_20px_rgba(220,38,38,0.25)] hover:shadow-[0_6px_28px_rgba(220,38,38,0.35)]`}
      whileTap={{ scale: status === "idle" ? 0.98 : 1 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.42 }}
    >
      {/* Shimmer sweep */}
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <AnimatePresence mode="wait">
        <motion.span
          key={status}
          className="flex items-center"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2 }}
        >
          {labels[status]}
          {icons[status]}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
};

/* ─── Main form ──────────────────────────────────────── */
const ContactForm: React.FC = () => {
  const { language } = useLang();
  const [buttonStatus, setButtonStatus] = useState<Status>("idle");
  const [messageSent, setMessageSent] = useState(false);
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
    };
  }, []);
  const [confettiLib, setConfettiLib] = useState<((opts?: confetti.Options) => Promise<undefined> | null) | null>(null);

  useEffect(() => {
    import("canvas-confetti").then((mod) => setConfettiLib(() => mod.default));
  }, []);

  const triggerConfetti = useCallback(() => {
    if (confettiLib) {
      confettiLib({
        particleCount: 160,
        spread: 90,
        origin: { y: 0.6 },
        colors: ["#dc2626", "#ef4444", "#f87171", "#ffffff"],
        scalar: 1.2,
      });
    }
  }, [confettiLib]);

  const formik = useFormik({
    initialValues: { name: "", email: "", message: "" },
    validationSchema: Yup.object({
      name:    Yup.string().required(language === "fr" ? "Nom requis" : "Name required"),
      email:   Yup.string().email(language === "fr" ? "Email invalide" : "Invalid email").required(language === "fr" ? "Email requis" : "Email required"),
      message: Yup.string().min(10, language === "fr" ? "Message trop court" : "Message too short").required(language === "fr" ? "Message requis" : "Message required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setButtonStatus("loading");
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        if (res.ok) {
          setButtonStatus("success");
          triggerConfetti();
          setMessageSent(true);
          resetForm();
        } else {
          setButtonStatus("error");
        }
      } catch {
        setButtonStatus("error");
      } finally {
        if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
        resetTimerRef.current = setTimeout(() => { setButtonStatus("idle"); setMessageSent(false); }, 3000);
      }
    },
  });

  return (
    <div className="relative w-full">
      {/* BorderBeam on the card */}
      <BorderBeam size={280} duration={8} colorFrom="#dc2626" colorTo="#7f1d1d" />

      <form onSubmit={formik.handleSubmit} className="space-y-3 pt-1">

        <Field icon={User} label={language === "fr" ? "Nom" : "Name"} error={formik.errors.name} touched={formik.touched.name} index={0}>
          <input
            type="text"
            name="name"
            placeholder={language === "fr" ? "Jean Dupont" : "John Doe"}
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Field>

        <Field icon={Mail} label="Email" error={formik.errors.email} touched={formik.touched.email} index={1}>
          <input
            type="email"
            name="email"
            placeholder="hello@example.com"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Field>

        <Field icon={MessageSquare} label={language === "fr" ? "Message" : "Message"} error={formik.errors.message} touched={formik.touched.message} index={2}>
          <textarea
            name="message"
            placeholder={language === "fr" ? "Décrivez votre projet…" : "Tell me about your project…"}
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            rows={4}
          />
        </Field>

        <div className="pt-1">
          <SubmitButton status={buttonStatus} lang={language} />
        </div>
      </form>

      {/* Success toast */}
      <AnimatePresence>
        {messageSent && (
          <motion.div
            key="toast"
            className="mt-4 flex items-center gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-500"
            initial={{ opacity: 0, y: 10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8 }}
          >
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            {language === "fr" ? "Message envoyé avec succès !" : "Message sent successfully!"}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
