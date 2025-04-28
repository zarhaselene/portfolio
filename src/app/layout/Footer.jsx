"use client";
import React from "react";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";

const Footer = () => {
  return (
    <footer className="relative w-screen left-1/2 -translate-x-1/2 pt-20 md:pt-12 pb-5 px-4 sm:px-10 ">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8 flex flex-col md:items-center "
        >
          <h3 className="text-4xl font-bold tracking-[2px]">
            Ready to Collaborate?
          </h3>
          <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
            Looking to collaborate with a team where I can contribute my
            technical skills, creative approach, and enthusiasm for continuous
            learning.
            <br /> Let's build something amazing together!
          </p>
          <div className="md:w-3/4 lg:w-1/2 ">
            <ContactForm />
          </div>
        </motion.div>
      </div>
      <div className="mt-12 pt-4 border-t border-secondary/20 w-full">
        <p className="text-secondary text-sm pb-16 md:pb-0 leading-relaxed text-center">
          © 2025 Zarha Selene
        </p>
      </div>
    </footer>
  );
};

export default Footer;
