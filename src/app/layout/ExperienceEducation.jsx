"use client";
import React from "react";
import { motion } from "framer-motion";

const ExperienceEducation = () => {
  const experiences = [
    {
      period: "2022 - 2023",
      role: "Front-end Developer Intern",
      company: "Sphinxly | Remote",
      description:
        "Collaborated with a team of interns to plan, develop, and deliver a client website using Easyweb CMS, React.js, TypeScript, and SCSS. Participated in various client projects, providing technical support and troubleshooting. Enhanced front-end performance and responsiveness through code optimization and testing.",
      technologies: ["Easyweb CMS", "React.js", "TypeScript", "SCSS"],
    },
  ];

  const education = [
    {
      period: "Sep 2024 - June 2026",
      program: "Front-End Developer",
      institution: "Chas Academy | Stockholm",
      description:
        "Currently pursuing Vocational Higher Education in Front-End Development at Chas Academy. This program provides comprehensive training in advanced JavaScript, React, and TypeScript, emphasizing mobile-first design and responsive web development. The coursework includes practical applications of React Native for mobile app development and TypeScript. I am gaining hands-on experience with modern web technologies, agile methodologies, and UX/UI principles to effectively create and optimize both web and mobile applications.",
    },
    {
      period: "2020 - 2023",
      program: "Web Developer in E-Commerce",
      institution: "Medieinstitutet | Stockholm",
      description:
        "Vocational higher education in web development with a specialization in e-commerce. The courses included front-end and back-end development, database technology, system development with frameworks, integration with third-party systems, development against e-commerce platforms, and work and project methodology.",
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
    <>
      {/* Experience Section */}
      <section className="py-12 lg:px-8 relative w-screen left-1/2 -translate-x-1/2 mt-12 pt-8 bg-primary/5 ">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={headingVariants}
          >
            EXPERIENCE
            <motion.span
              className="absolute -bottom-0 sm:-bottom-3  lg:-bottom-8  left-0 w-24 h-1 bg-secondary origin-left"
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
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="border-l-4 border-secondary/20 pl-8 hover:border-secondary transition-colors"
              >
                <span className="text-secondary tracking-wider">
                  {exp.period}
                </span>
                <h3 className="text-3xl tracking-[1px] font-bold text-base-content lg:text-4xl mt-2">
                  {exp.role}
                </h3>
                <h4 className="text-xl lg:text-2xl text-base-content/80 mt-1">
                  {exp.company}
                </h4>
                <p className="lg:text-lg mt-4 text-base-content/80">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 bg-primary text-secondary rounded-full border border-secondary/20 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-8 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="md:text-right"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={headingVariants}
          >
            EDUCATION
            <motion.span
              className="absolute -bottom-0 sm:-bottom-3 lg:-bottom-8 left-0 md:left-auto md:right-0 w-24 h-1 bg-secondary origin-left md:origin-right"
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
              <motion.div
                key={index}
                variants={itemVariants}
                className="border-l-4 pl-8 md:border-r-4 md:border-l-0 border-secondary/20 md:pr-8 md:text-right hover:border-secondary transition-colors"
              >
                <span className="text-secondary tracking-wider">
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ExperienceEducation;
