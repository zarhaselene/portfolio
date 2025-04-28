"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Script from "next/script";

const ContactForm = () => {
  const form = useRef();
  const recaptchaRef = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [isRecaptchaLoaded, setIsRecaptchaLoaded] = useState(false);

  useEffect(() => {
    setIsClient(true);
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

    // Define global callbacks for reCAPTCHA
    window.onRecaptchaLoad = () => {
      setIsRecaptchaLoaded(true);

      // Explicitly render reCAPTCHA when loaded
      if (
        typeof window.grecaptcha !== "undefined" &&
        window.grecaptcha.render &&
        recaptchaRef.current
      ) {
        try {
          window.grecaptcha.render("recaptcha", {
            sitekey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
            theme: "dark",
            size: "normal",
            callback: (token) => {
              setRecaptchaToken(token);
            },
            "expired-callback": () => {
              setRecaptchaToken(null);
            },
          });
        } catch (error) {
          console.error("reCAPTCHA rendering error:", error);
        }
      }
    };

    return () => {
      // Clean up
      delete window.onRecaptchaLoad;
    };
  }, [isClient]);

  const sendEmail = (e) => {
    e.preventDefault();

    // Verify recaptcha
    if (!recaptchaToken) {
      setIsError(true);
      setTimeout(() => setIsError(false), 5000);
      return;
    }

    setIsSending(true);

    // Create formData from the form
    const formData = new FormData(form.current);
    const now = new Date();
    const formattedTime = now.toLocaleString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    // Convert FormData to emailjs expected format
    const templateParams = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      title: formData.get("subject"),
      message: formData.get("message"),
      time: formattedTime,
      "g-recaptcha-response": recaptchaToken,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
          setIsError(false);
          form.current.reset();

          // Reset reCAPTCHA
          if (window.grecaptcha) {
            window.grecaptcha.reset();
          }
          setRecaptchaToken(null);

          // Hide success message after 5 seconds
          setTimeout(() => setIsSent(false), 5000);
        },
        (error) => {
          console.log(error.text);
          setIsError(true);
          // Hide error message after 5 seconds
          setTimeout(() => setIsError(false), 5000);
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  // Animation variants
  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.3,
      },
    },
  };

  return (
    <>
      {/* reCAPTCHA Script */}
      <Script
        src="https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit"
        strategy="afterInteractive"
      />

      <motion.div
        className="w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="bg-primary/5 backdrop-blur-sm border border-secondary/10 rounded-2xl p-4 md:p-8 shadow-lg relative overflow-hidden">
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col space-y-6 relative z-10"
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Form fields */}
            <motion.div variants={itemVariants}>
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                required
                className="w-full px-5 py-4 bg-primary/10 border border-secondary/20 rounded-xl focus:border-secondary focus:outline-none text-base-content placeholder:text-base-content/50 transition-all duration-300"
                aria-label="Your name"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <input
                type="email"
                name="email"
                placeholder="Your Email *"
                required
                className="w-full px-5 py-4 bg-primary/10 border border-secondary/20 rounded-xl focus:border-secondary focus:outline-none text-base-content placeholder:text-base-content/50 transition-all duration-300"
                aria-label="Your email"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full px-5 py-4 bg-primary/10 border border-secondary/20 rounded-xl focus:border-secondary focus:outline-none text-base-content placeholder:text-base-content/50 transition-all duration-300"
                aria-label="Subject"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <textarea
                name="message"
                placeholder="Your Message *"
                required
                rows={5}
                className="w-full px-5 py-4 md:mt-5 bg-primary/10 border border-secondary/20 rounded-xl focus:border-secondary focus:outline-none text-base-content placeholder:text-base-content/50 resize-none transition-all duration-300"
                aria-label="Your message"
              />
            </motion.div>

            {/* reCAPTCHA container with ref */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center md:justify-start"
            >
              <div className="md:bg-primary/10 md:border md:border-secondary/20 md:rounded-xl md:p-3 overflow-hidden">
                <div
                  id="recaptcha"
                  ref={recaptchaRef}
                  className="g-recaptcha"
                ></div>
              </div>
            </motion.div>

            <motion.div className="mx-auto" variants={itemVariants}>
              <button
                type="submit"
                className="w-56 px-6 py-4 bg-primary hover:animate-jello text-base-200 rounded-full text-xl font-bold border border-secondary/20 hover:border-secondary/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                aria-label="Send message"
                disabled={!recaptchaToken || isSending}
              >
                {isSending ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 border-2 border-t-2 border-t-secondary border-secondary/50 rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  "Get in touch"
                )}
              </button>
            </motion.div>

            {/* Status messages */}
            {isClient && isSent && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-500/10 border border-green-500/20 text-green-400 font-medium text-center p-3 rounded-xl"
              >
                Message sent successfully!
              </motion.div>
            )}

            {isClient && isError && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-500/10 border border-red-500/20 text-red-400 font-medium text-center p-3 rounded-xl"
              >
                {!recaptchaToken
                  ? "Please complete the reCAPTCHA verification."
                  : "Something went wrong. Please try again."}
              </motion.div>
            )}
          </motion.form>
        </div>
      </motion.div>
    </>
  );
};

export default ContactForm;
