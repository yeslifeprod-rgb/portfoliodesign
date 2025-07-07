"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useLang } from "@/context/LangContext";
import { StatefulButton } from "./ui/StatefulButton";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const ContactForm: React.FC = () => {
  const { language } = useLang();
  const [buttonStatus, setButtonStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
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
      setButtonStatus("loading");
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          setButtonStatus("success");
          triggerConfetti();
          setMessageSent(true);
          resetForm();
        } else {
          setButtonStatus("error");
          console.error("Erreur lors de l'envoi du message");
        }
      } catch (error) {
        setButtonStatus("error");
        console.error("Erreur :", error);
      } finally {
        setTimeout(() => {
          setButtonStatus("idle");
          setMessageSent(false);
        }, 2500);
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

        <StatefulButton
          type="submit"
          status={buttonStatus}
          loadingText={language === "fr" ? "Envoi..." : "Sending..."}
          successText={language === "fr" ? "Envoyé !" : "Sent!"}
          errorText={language === "fr" ? "Erreur !" : "Error!"}
        >
          {language === "fr" ? "Envoyer" : "Send"}
        </StatefulButton>
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
