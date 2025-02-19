"use client";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectsAndSkills = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce solution built with React and Next.js, featuring dynamic product loading and cart functionality",
      tags: ["React", "Next.js", "Tailwind CSS", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "Real-time weather visualization app with location-based forecasts and interactive maps",
      tags: ["React", "OpenWeather API", "Chart.js", "Styled Components"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management tool with real-time updates and team functionality",
      tags: ["React", "Firebase", "Material-UI", "Redux"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];
  const skills = [
    {
      category: "Frontend",
      items: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "SASS",
      ],
    },
    {
      category: "Backend",
      items: ["RESTful APIs", "PHP", "MySQL"],
    },
    {
      category: "Tools & Methods",
      items: ["Agile Methodologies", "Git"],
    },
    {
      category: "Design",
      items: [
        "UI/UX Principles",
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Figma",
      ],
    },
  ];

  // Animation variants for headings
  const headingVariants = {
    hidden: {
      opacity: 0, // Start fully transparent
      y: 100, // Start positioned lower
    },
    visible: {
      opacity: 1, // Fade in
      y: 0, // Move to normal position
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1], // Custom easing curve
      },
    },
  };

  const underlineVariants = {
    hidden: {
      scaleX: 0, // Start with no width
    },
    visible: {
      scaleX: 1, // Expand to full width
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.2, // Slight delay after heading appears
      },
    },
  };

  // Animation variants for skill groups
  const containerVariants = {
    hidden: {}, // Empty object to allow staggerChildren to work
    visible: {
      transition: {
        staggerChildren: 0.1, // Stagger each child animation by 0.1s
      },
    },
  };

  const skillGroupVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.08, // Each child appears with a delay of 0.08s
      },
    },
  };

  const skillItemVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 10,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100, // Controls how stiff the spring is
        damping: 10, // Controls the bounce effect
      },
    },
  };

  return (
    <div className="w-full min-h-screen">
      {/* Projects Section */}
      <section className="py-16 lg:py-32 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={headingVariants}
          >
            SELECTED PROJECTS
            <motion.span
              className="absolute -bottom-0 sm:-bottom-3  lg:-bottom-8  left-0 w-24 h-1 bg-secondary origin-left"
              variants={underlineVariants}
            ></motion.span>
          </motion.h2>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="border-t border-secondary/20 pt-8 hover:border-secondary/50 transition-colors"
              >
                <div className="flex flex-col-reverse md:flex-row justify-between items-baseline">
                  <h3 className="text-[2rem] tracking-[2px] lg:text-4xl font-bold">
                    {project.title}
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      className="hover:text-secondary hover:animate-jello transition-colors"
                    >
                      <FaExternalLinkAlt size={24} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="hover:text-secondary hover:animate-jello transition-colors"
                    >
                      <FaGithub size={24} />
                    </a>
                  </div>
                </div>
                <p className="text-[1rem] lg:text-lg mt-4 text-base-content/80">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-2 bg-primary rounded-full border border-secondary/20 hover:border-secondary/50 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16  lg:py-32 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="md:text-right"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={headingVariants}
          >
            SKILLS & EXPERTISE
            <motion.span
              className="absolute -bottom-0 sm:-bottom-3  lg:-bottom-8 left-0 md:left-auto md:right-0 w-24 h-1 bg-secondary origin-left md:origin-right"
              variants={underlineVariants}
            ></motion.span>
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                variants={skillGroupVariants}
                className="space-y-6 border rounded-xl border-secondary/20 hover:border-secondary/50 transition-colors p-5"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                <h3 className="text-3xl tracking-[1px] font-bold text-base-content">
                  {skillGroup.category}
                </h3>
                <motion.div
                  className="flex flex-wrap gap-3"
                  variants={containerVariants}
                >
                  {skillGroup.items.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      variants={skillItemVariants}
                      className="px-4 py-2 bg-primary rounded-full border border-secondary/20 hover:border-secondary/50 transition-colors"
                      whileHover={{
                        scale: 1.1,
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        },
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsAndSkills;
