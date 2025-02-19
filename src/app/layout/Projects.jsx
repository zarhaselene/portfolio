"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const ProjectsAndSkills = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce solution built with React and Next.js, featuring dynamic product loading and cart functionality",
      tags: ["React", "Next.js", "Tailwind CSS", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      color: "from-pink-500",
    },
    {
      title: "Weather Dashboard",
      description:
        "Real-time weather visualization app with location-based forecasts and interactive maps",
      tags: ["React", "OpenWeather API", "Chart.js", "Styled Components"],
      liveUrl: "#",
      githubUrl: "#",
      color: "from-purple-500",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management tool with real-time updates and team functionality",
      tags: ["React", "Firebase", "Material-UI", "Redux"],
      liveUrl: "#",
      githubUrl: "#",
      color: "from-blue-500",
    },
  ];

  const skills = [
    {
      category: "Frontend",
      items: [
        "React",
        "Vue.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "GSAP",
      ],
      icon: "🎨",
    },
    {
      category: "Backend Integration",
      items: ["RESTful APIs", "GraphQL", "Firebase", "AWS Amplify"],
      icon: "⚡",
    },
    {
      category: "Tools & Methods",
      items: ["Git", "Webpack", "Jest", "Cypress", "Agile"],
      icon: "🛠",
    },
    {
      category: "Design",
      items: ["Figma", "Adobe XD", "Responsive Design", "UI/UX Principles"],
      icon: "✨",
    },
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="w-full min-h-screen">
      {/* Projects Section */}
      <section className="px-4 py-16">
        <div className="max-w-[1300px] mx-auto">
          <h2 className="text-7xl font-bold mb-16 relative">
            SELECTED PROJECTS
            <span className="absolute -bottom-2 left-0 w-24 h-1 bg-secondary"></span>
          </h2>

          <div className="relative">
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full shadow-custom hover:text-secondary transition-colors"
              >
                <FiChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full shadow-custom hover:text-secondary transition-colors"
              >
                <FiChevronRight size={24} />
              </button>
            </div>

            <div className="overflow-hidden">
              <motion.div
                className="flex transition-all duration-500 ease-out"
                animate={{ x: `-${activeSlide * 100}%` }}
              >
                {projects.map((project, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <motion.div
                      className={`p-8 rounded-xl bg-gradient-to-br ${project.color} to-transparent shadow-custom`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="flex justify-between items-start mb-6">
                        <h3 className="text-4xl font-bold">{project.title}</h3>
                        <div className="flex gap-4">
                          <a
                            href={project.liveUrl}
                            className="text-base-content hover:text-base-content transition-colors"
                          >
                            <FaExternalLinkAlt size={24} />
                          </a>
                          <a
                            href={project.githubUrl}
                            className="text-base-content hover:text-base-content transition-colors"
                          >
                            <FaGithub size={24} />
                          </a>
                        </div>
                      </div>

                      <p className="text-xl text-base-content mb-8">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-3">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-4 py-2 text-sm bg-primary bg-opacity-50 rounded-full text-base-content backdrop-blur-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <a
            href="https://www.github.com/zarhaselene"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-primary text-base-content rounded-lg text-lg font-semibold shadow-custom hover:bg-base-200 transition"
          >
            <FaGithub size={24} /> See more projects at my GitHub
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-4 py-16 ">
        <div className="max-w-[1300px] mx-auto">
          <h2 className="text-7xl font-bold mb-16 relative">
            SKILLS & EXPERTISE
            <span className="absolute -bottom-2 left-0 w-24 h-1 bg-secondary"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl shadow-custom hover:border-secondary transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl">{skillGroup.icon}</span>
                  <h3 className="text-2xl font-bold">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                      className="px-4 py-2 bg-black rounded-full text-base-content"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsAndSkills;
