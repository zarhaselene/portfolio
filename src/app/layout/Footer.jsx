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
          className="space-y-8"
        >
          <h3 className="text-4xl font-bold tracking-[2px]">
            Ready to Collaborate?
          </h3>
          <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
            Let's discuss how we can work together to create something amazing.
          </p>
          <button className="px-8 py-4 bg-primary hover:animate-jello text-secondary rounded-full text-xl font-bold border border-secondary/20 hover:border-secondary/50 transition-colors">
            Get in Touch
          </button>
          <div className="flex justify-center gap-8 mt-16">
            <a
              href="#"
              className="text-2xl hover:animate-jello hover:text-secondary transition-all duration-300 ease-linear"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              className="text-2xl hover:animate-jello hover:text-secondary transition-all duration-300 ease-linear"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="text-2xl hover:animate-jello hover:text-secondary transition-all duration-300 ease-linear"
            >
              <FaEnvelope />
            </a>
          </div>
          <p className="text-base-content/60 text-sm">© 2024 Zarha Selene.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
