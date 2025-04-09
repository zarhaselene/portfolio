"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative w-screen left-1/2 -translate-x-1/2 pt-20 md:pt-12 pb-5 px-4 sm:px-10 bg-primary/5">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8 flex flex-col items-center "
        >
          <h3 className="text-4xl font-bold tracking-[2px]">
            Ready to Collaborate?
          </h3>
          <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
            Let's discuss how we can work together to create something amazing.
          </p>
          <a
            href="mailto:zarhabuske@hotmail.com"
            className="block w-56 px-8 py-4 bg-primary hover:animate-jello text-secondary rounded-full text-xl font-bold border border-secondary/20 hover:border-secondary/50 transition-colors"
          >
            Get in Touch
          </a>

          <p className="text-base-content/60 text-sm pb-16 md:pb-0">
            © 2024 Zarha Selene.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
