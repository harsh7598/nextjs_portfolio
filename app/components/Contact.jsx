"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
const Contact = () => {
  const [result, setResult] = useState("");
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("");

    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "bca251c3-e0f7-4209-9963-237d42bc536e");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        event.target.reset();
      } else {
        setResult("Failed to send message. Please try again.");
        console.error("Form submission error:", data);
      }
    } catch (error) {
      setResult("An error occurred. Please try again later.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClassName = `flex-1 p-3 outline-none border-[0.5px] rounded-md transition-colors duration-200
    ${
      theme === "dark"
        ? "bg-[#7A7A7A]/30 border-white/90 focus:border-white"
        : "bg-white border-gray-400 focus:border-black"
    }`;

  const buttonClassName = `py-3 px-8 w-max flex items-center justify-between gap-2 text-white rounded-full mx-auto transition-all duration-300
    ${
      theme === "dark"
        ? "bg-transparent border-[0.5px] border-white hover:bg-[#7A7A7A]"
        : "bg-black hover:bg-black/80"
    } ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className={`w-full px-6 sm:px-[10%] md:px-[12%] py-16 scroll-mt-20 
        ${
          theme === "dark"
            ? ""
            : "bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto]"
        }`}
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-3 text-lg font-Ovo"
      >
        Connect With Me
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-4xl md:text-5xl font-Ovo mb-4"
      >
        Get in touch
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mb-12 font-Ovo text-lg"
      >
        I'd love to hear from you! If you have any questions, comments, or
        feedback, please use the form below.
      </motion.p>
      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto space-y-6"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            type="text"
            placeholder="Enter your name"
            required
            className={inputClassName}
            name="name"
            disabled={isSubmitting}
          />
          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            type="email"
            placeholder="Enter your email"
            required
            className={inputClassName}
            name="email"
            disabled={isSubmitting}
          />
        </div>
        <motion.textarea
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          rows="6"
          placeholder="Enter your message"
          required
          className={`${inputClassName} w-full`}
          name="message"
          disabled={isSubmitting}
        />
        <motion.button
          whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
          transition={{ duration: 0.3 }}
          type="submit"
          disabled={isSubmitting}
          className={buttonClassName}
        >
          {isSubmitting ? "Sending..." : "Submit now"}{" "}
          <Image
            src={assets.right_arrow_white}
            alt="Submit"
            className={`w-4 transition-transform duration-300 ${
              isSubmitting ? "animate-pulse" : ""
            }`}
          />
        </motion.button>
        {result && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-center mt-4 ${
              result.includes("success") ? "text-green-500" : "text-red-500"
            }`}
          >
            {result}
          </motion.p>
        )}
      </motion.form>
    </motion.div>
  );
};

export default Contact;
