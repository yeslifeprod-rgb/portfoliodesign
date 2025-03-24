"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useLang } from "@/context/LangContext";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const ContactForm: React.FC = () => {
  const { language } = useLang();
  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [confettiLib, setConfettiLib] = useState<any>(null);

  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true });

  useEffect(() => {
    import("canvas-confetti").then((mod) => setConfettiLib(() => mod.default));
  }, []);

  const triggerConfetti = useCallback(() => {
    if (confettiLib) {
      confettiLib({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        scalar: 1.2,
      });
    }
  }, [confettiLib]);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required(language === "fr" ? "Le nom est requis" : "Name is required"),
      email: Yup.string()
        .email(language === "fr" ? "Email invalide" : "Invalid email")
        .required(language === "fr" ? "L'email est requis" : "Email is required"),
      message: Yup.string()
        .min(10, language === "fr" ? "Message trop court" : "Message too short")
        .required(language === "fr" ? "Le message est requis" : "Message is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          triggerConfetti();
          setMessageSent(true);
          resetForm();
        } else {
          alert(language === "fr" ? "Erreur lors de l'envoi, réessayez." : "Error sending message. Try again.");
        }
      } catch (error) {
        console.error("Erreur :", error);
        alert(language === "fr" ? "Erreur lors de l'envoi du message." : "Error sending message.");
      } finally {
        setLoading(false);
        setTimeout(() => setMessageSent(false), 2500);
      }
    },
  });

  return (
    <motion.div
      ref={formRef}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full"
    >
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder={language === "fr" ? "Votre nom" : "Your name"}
          value={formik.values.name}
          onChange={formik.handleChange}
          className="w-full p-3 rounded-md bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
        {formik.touched.name && formik.errors.name && (
          <p className="text-red-500 text-sm">{formik.errors.name}</p>
        )}

        <input
          type="email"
          name="email"
          placeholder={language === "fr" ? "Votre email" : "Your email"}
          value={formik.values.email}
          onChange={formik.handleChange}
          className="w-full p-3 rounded-md bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
        {formik.touched.email && formik.errors.email && (
          <p className="text-red-500 text-sm">{formik.errors.email}</p>
        )}

        <textarea
          name="message"
          placeholder={language === "fr" ? "Votre message..." : "Your message..."}
          value={formik.values.message}
          onChange={formik.handleChange}
          rows={4}
          className="w-full p-3 rounded-md bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
        {formik.touched.message && formik.errors.message && (
          <p className="text-red-500 text-sm">{formik.errors.message}</p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-all flex items-center justify-center"
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              {language === "fr" ? "Envoi..." : "Sending..."}
            </span>
          ) : (
            <span>{language === "fr" ? "Envoyer" : "Send"}</span>
          )}
        </button>
      </form>

      <AnimatePresence>
        {messageSent && (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6 }}
            className="mt-4 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg font-semibold text-center"
          >
            {language === "fr" ? "Message envoyé avec succès !" : "Message sent successfully!"}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ContactForm;
