"use client";
import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  const education = [
    {
      period: "Sep 2024 - June 2026",
      program: "Frontend Developer",
      institution: "Chas Academy | Stockholm",
      description:
        "Currently pursuing Vocational Higher Education in Frontend Development at Chas Academy. This program provides comprehensive training in advanced JavaScript, React, and TypeScript, emphasizing mobile-first design and responsive web development. The coursework includes practical applications of React Native for mobile app development and TypeScript. I am gaining hands-on experience with modern web technologies, agile methodologies, and UX/UI principles to effectively create and optimize both web and mobile applications.",
    },
    {
      period: "2020 - 2023",
      program: "Web Developer in E-Commerce",
      institution: "Medieinstitutet | Stockholm",
      description:
        "Vocational higher education in web development with a specialization in e-commerce. The courses included frontend and back-end development, database technology, system development with frameworks, integration with third-party systems, development against e-commerce platforms, and work and project methodology.",
    },
    {
      period: "2013 - 2016",
      program: "Aesthetics and Media",
      institution: "Fredrika Bremergymnasiet | Haninge",
      description:
        "Completed upper secondary education in Aesthetics and Media with a focus on photography and graphic design. Gained hands-on experience with Adobe Photoshop, Illustrator, and InDesign. Developed strong skills in visual communication and design principles, effectively conveying messages through text, color, and design. Gained proficiency in both digital and print media, building a solid foundation in creative design",
    },
  ];
  // Animation variants
  const headingVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const underlineVariants = {
    hidden: {
      scaleX: 0,
    },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.2,
      },
    },
  };

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      tabIndex="0"
      className="py-12 md:py-16 lg:py-32 relative w-screen left-1/2 -translate-x-1/2 bg-primary/5 focus-ring"
    >
      <div className="max-w-7xl mx-auto px-[1rem] sm:px-[5rem] xl:px-[0]">
        <motion.h2
          id="education-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headingVariants}
        >
          EDUCATION
          <motion.span
            className="absolute -bottom-0 sm:-bottom-3 lg:-bottom-5 left-0 w-24 h-1 bg-secondary origin-left"
            variants={underlineVariants}
          ></motion.span>
        </motion.h2>

        <motion.div
          className="space-y-16"
          variants={timelineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {education.map((edu, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              tabIndex={0}
              className="border-l-4 pl-8 border-secondary/20 hover:border-secondary transition-colors focus-ring"
            >
              <span className="text-secondary tracking-wider font-bold">
                {edu.period}
              </span>
              <h3 className="text-3xl tracking-[1px] font-bold text-base-content lg:text-4xl mt-2">
                {edu.program}
              </h3>
              <h4 className="text-xl lg:text-2xl text-base-content/80 mt-1">
                {edu.institution}
              </h4>
              <p className="lg:text-lg mt-4 text-base-content/80">
                {edu.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
