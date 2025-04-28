"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Script from "next/script";

const ContactForm = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaReady, setRecaptchaReady] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const widgetIdRef = useRef(null);

  useEffect(() => {
    setIsClient(true);

    const checkRecaptchaReady = () => {
      if (typeof window.grecaptcha !== "undefined" && recaptchaSiteKey) {
        window.grecaptcha.ready(() => {
          widgetIdRef.current = window.grecaptcha.render(
            "recaptcha-container",
            {
              sitekey: recaptchaSiteKey,
              size: "invisible",
              callback: (token) => {},
            }
          );
          setRecaptchaReady(true);
        });
      } else {
        setTimeout(checkRecaptchaReady, 500);
      }
    };

    checkRecaptchaReady();
  }, [recaptchaSiteKey]);

  const executeRecaptcha = async () => {
    return new Promise((resolve, reject) => {
      if (
        typeof window.grecaptcha === "undefined" ||
        widgetIdRef.current === null
      ) {
        reject("reCAPTCHA not loaded");
        return;
      }

      window.grecaptcha
        .execute(widgetIdRef.current)
        .then(resolve)
        .catch(reject);
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!recaptchaReady) {
      console.error("reCAPTCHA is not ready yet");
      return;
    }

    setIsSubmitting(true);

    try {
      const token = await executeRecaptcha();
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

      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      console.log(result.text);
      setIsSent(true);
      setIsError(false);
      form.current.reset();

      setTimeout(() => setIsSent(false), 5000);
    } catch (error) {
      console.error("Error:", error);
      setIsError(true);
      setTimeout(() => setIsError(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
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
    visible: { opacity: 1, transition: { duration: 0.8, delay: 0.3 } },
  };

  return (
    <>
      {/* reCAPTCHA v2 Script */}
      <Script
        src="https://www.google.com/recaptcha/api.js"
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
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-xl"></div>

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

            <motion.div variants={itemVariants}>
              <button
                type="submit"
                className="w-56 px-6 py-4 bg-primary hover:animate-jello text-base-200 rounded-full text-xl font-bold border border-secondary/20 hover:border-secondary/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send message"
                disabled={!recaptchaReady || isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  "Get in touch"
                )}
              </button>
            </motion.div>
            <div
              id="recaptcha-container"
              className="absolute -z-10 hidden"
            ></div>

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
                Something went wrong. Please try again.
              </motion.div>
            )}

            {/* reCAPTCHA badge notice */}
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
