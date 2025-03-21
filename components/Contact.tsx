"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const ContactSection: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Le nom est requis"),
      email: Yup.string().email("Email invalide").required("L'email est requis"),
      message: Yup.string().min(10, "Message trop court").required("Le message est requis"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          alert("Message envoyé avec succès !");
          resetForm();
        } else {
          alert("Erreur lors de l'envoi, réessayez.");
        }
      } catch (error) {
        console.error("Erreur :", error);
        alert("Erreur lors de l'envoi du message.");
      }
    },
  });

  return (
    <section className="py-16 min-h-screen flex flex-col justify-center items-center bg-white text-gray-900" id="contact">
      <motion.div 
        className="max-w-3xl w-full text-center bg-white shadow-md rounded-xl p-10"
        initial="initial"
        animate="animate"
      >
        <motion.h2 className="text-3xl font-bold text-blue-600 uppercase mb-4" variants={fadeInUp}>
         ✉️ Contact
        </motion.h2>
        <motion.p className="text-gray-700 mb-6" variants={fadeInUp}>
          Vous avez une question ou un projet ? Envoyez-moi un message.
        </motion.p>

        <motion.form 
          className="space-y-4"
          onSubmit={formik.handleSubmit}
          variants={fadeInUp}
        >
          <motion.div variants={fadeInUp}>
            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              value={formik.values.name}
              onChange={formik.handleChange}
              className="w-full p-3 rounded-md bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-sm">{formik.errors.name}</p>
            )}
          </motion.div>

          <motion.div variants={fadeInUp}>
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className="w-full p-3 rounded-md bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm">{formik.errors.email}</p>
            )}
          </motion.div>

          <motion.div variants={fadeInUp}>
            <textarea
              name="message"
              placeholder="Votre message..."
              value={formik.values.message}
              onChange={formik.handleChange}
              rows={4}
              className="w-full p-3 rounded-md bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
            {formik.touched.message && formik.errors.message && (
              <p className="text-red-500 text-sm">{formik.errors.message}</p>
            )}
          </motion.div>

          <motion.button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            variants={fadeInUp}
          >
            Envoyer
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default ContactSection;
