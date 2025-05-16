"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Script from "next/script";

const ContactForm = () => {
  const form = useRef(null);
  const recaptchaRef = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [recaptchaWidgetId, setRecaptchaWidgetId] = useState(null);

  useEffect(() => {
    setIsClient(true);
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

    window.onRecaptchaLoad = () => {
      if (typeof window.grecaptcha !== "undefined" && recaptchaRef.current) {
        try {
          const widgetId = window.grecaptcha.render(recaptchaRef.current, {
            sitekey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
            size: "invisible",
            callback: onRecaptchaSuccess,
            "expired-callback": onRecaptchaExpired,
          });
          setRecaptchaWidgetId(widgetId);
        } catch (error) {
          console.error("reCAPTCHA rendering error:", error);
        }
      }
    };

    return () => {
      delete window.onRecaptchaLoad;
    };
  }, []);

  const onRecaptchaSuccess = (token) => {
    setIsVerifying(false); // Done verifying
    submitEmail(token);
  };

  const onRecaptchaExpired = () => {
    setIsVerifying(false);
    console.warn("reCAPTCHA expired. Please try again.");
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (window.grecaptcha && recaptchaWidgetId !== null) {
      setIsVerifying(true); // Start verifying
      window.grecaptcha.execute(recaptchaWidgetId);
    }
  };

  const submitEmail = (token) => {
    if (!form.current) return;

    setIsSending(true);

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

    const templateParams = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      title: formData.get("subject"),
      message: formData.get("message"),
      time: formattedTime,
      "g-recaptcha-response": token,
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
          form.current?.reset();
          if (window.grecaptcha && recaptchaWidgetId !== null) {
            window.grecaptcha.reset(recaptchaWidgetId);
          }
          setTimeout(() => setIsSent(false), 5000);
        },
        (error) => {
          console.error(error.text);
          setIsError(true);
          setTimeout(() => setIsError(false), 5000);
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, delay: 0.3 },
    },
  };

  return (
    <>
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
            {/* Form Fields */}
            <motion.div variants={itemVariants}>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name *"
                required
                className="w-full px-5 py-4 bg-primary/10 border border-secondary/20 rounded-xl focus:border-secondary focus:outline-none text-base-content placeholder:text-base-content/50 transition-all duration-300"
                aria-label="Your name"
                autoComplete="name"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email *"
                required
                className="w-full px-5 py-4 bg-primary/10 border border-secondary/20 rounded-xl focus:border-secondary focus:outline-none text-base-content placeholder:text-base-content/50 transition-all duration-300"
                aria-label="Your email"
                autoComplete="email"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
                className="w-full px-5 py-4 bg-primary/10 border border-secondary/20 rounded-xl focus:border-secondary focus:outline-none text-base-content placeholder:text-base-content/50 transition-all duration-300"
                aria-label="Subject"
                autoComplete="off"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <textarea
                name="message"
                id="message"
                placeholder="Your Message *"
                required
                rows={5}
                className="w-full px-5 py-4 md:mt-5 bg-primary/10 border border-secondary/20 rounded-xl focus:border-secondary focus:outline-none text-base-content placeholder:text-base-content/50 resize-none transition-all duration-300"
                aria-label="Your message"
                autoComplete="off"
              />
            </motion.div>

            {/* Invisible reCAPTCHA */}
            <div style={{ display: "none" }}>
              <div id="recaptcha" ref={recaptchaRef} />
            </div>

            <motion.div className="mx-auto" variants={itemVariants}>
              <button
                type="submit"
                className="w-56 px-6 py-4 bg-primary hover:animate-jello text-base-200 rounded-full text-xl font-bold border border-secondary/20 hover:border-secondary/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                aria-label="Send message"
                disabled={isSending || isVerifying}
              >
                {isVerifying ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 border-2 border-t-2 border-t-secondary border-secondary/50 rounded-full animate-spin"></div>
                    <span>Verifying...</span>
                  </div>
                ) : isSending ? (
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
                aria-live="polite"
                role="status"
              >
                Message sent successfully!
              </motion.div>
            )}

            {isClient && isError && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-500/10 border border-red-500/20 text-red-400 font-medium text-center p-3 rounded-xl"
                aria-live="assertive"
                role="alert"
              >
                Something went wrong. Please try again.
              </motion.div>
            )}
            <motion.div
              variants={itemVariants}
              className="text-xs text-base-content/60 text-center md:text-left"
            >
              This site is protected by reCAPTCHA and the Google
              <a
                href="https://policies.google.com/privacy"
                className="text-secondary hover:text-secondary/80 mx-1"
              >
                Privacy Policy
              </a>
              and
              <a
                href="https://policies.google.com/terms"
                className="text-secondary hover:text-secondary/80 mx-1"
              >
                Terms of Service
              </a>
              apply.
            </motion.div>
          </motion.form>
        </div>
      </motion.div>
    </>
  );
};

export default ContactForm;
