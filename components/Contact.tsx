"use client";

import dynamic from "next/dynamic";
import { useLang } from "@/context/LangContext";
import { ContactIntro } from "./ContactIntro";

const ContactForm = dynamic(() => import("./ContactForm"), { ssr: false });

const ContactSection = () => {
  const { language } = useLang();

  return (
    <section
      id="contact"
      className="pt-16 pb-8 min-h-screen flex flex-col justify-start items-center bg-white text-gray-900"
    >
      <div className="max-w-3xl w-full text-center bg-white shadow-md rounded-xl p-10">
        <ContactIntro language={language} />
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
