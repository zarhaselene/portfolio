"use client";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectsAndSkills = () => {
  const projects = [
    {
      title: "FODMAP Recipe App",
      description:
        "A web application designed to help users find and manage low-FODMAP recipes and resources. It features advanced search, filtering options, and detailed food and recipe information to support dietary management.",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Context API"],
      liveUrl: "https://fodmap-recipe.netlify.app",
      githubUrl: "https://github.com/zarhaselene/fodmap-recipe",
    },
    {
      title: "Pokédex",
      description:
        "A Pokédex built with Next.js in a collaborative project. I developed the Favorites page, navigation bar, individual Pokémon detail page, and implemented the Context API to manage Pokémon data. The app allows users to explore Pokémon, bookmark favorites, and search by name or ID, featuring a responsive design and type-based browsing.",
      tags: ["Next.js", "Tailwind CSS", "PokeAPI", "Context API"],
      liveUrl: "https://chas-pokemon.netlify.app/",
      githubUrl: "https://github.com/zarhaselene/chas_pokemon",
    },
    {
      title: "Countdown",
      description:
        "A responsive countdown timer that ticks down every second. Includes hover states for interactive elements and a card flip animation for changing numbers.",
      tags: ["HTML5", "JavaScript", "CSS3", "CSS Grid", "Flexbox"],
      liveUrl: "https://zarhaselene-countdown.netlify.app/",
      githubUrl: "https://github.com/zarhaselene/countdown",
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
        "Framer Motion",
        // "TypeScript",
        // "React Native"
      ],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "RESTful APIs", "PHP", "MySQL"],
    },
    {
      category: "CMS & E-Commerce",
      items: ["WordPress", "WooCommerce", "Easyweb CMS"],
    },
    {
      category: "DevOps & Cloud",
      items: ["Docker", "AWS", "CI/CD"],
    },
    {
      category: "Tools & Workflow",
      items: ["Git", "Agile Methodologies"],
    },
    {
      category: "Design",
      items: [
        "UI/UX Principles",
        "WCAG",
        "Figma",
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Affinity Designer",
      ],
    },
  ];

  // Animation variants for headings
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

  // Animation variants for skill groups
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
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
        staggerChildren: 0.08,
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
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <div className="w-full min-h-screen">
      {/* Projects Section */}
      <section className="relative w-screen left-1/2 -translate-x-1/2  py-12 md:py-16 lg:py-32 bg-primary/5">
        <div className="max-w-7xl mx-auto px-[1rem] sm:px-[5rem] xl:px-[0]">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={headingVariants}
          >
            SELECTED PROJECTS
            <motion.span
              className="absolute -bottom-0 sm:-bottom-3  lg:-bottom-5  left-0 w-24 h-1 bg-secondary origin-left"
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
                  <div className="flex gap-4 mb-6">
                    <a
                      target="_blank"
                      href={project.liveUrl}
                      className="hover:text-secondary hover:animate-jello transition-colors"
                    >
                      <FaExternalLinkAlt size={24} />
                    </a>
                    <a
                      target="_blank"
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
                      className="px-4 py-2 bg-primary text-secondary rounded-full border border-secondary/20 hover:border-secondary/50 transition-colors"
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
      <section className=" py-12 md:py-16 lg:py-32 lg:px-8">
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
              className="absolute -bottom-0 sm:-bottom-3  lg:-bottom-5 left-0 md:left-auto md:right-0 w-24 h-1 bg-secondary origin-left md:origin-right"
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
                className="space-y-6 bg-primary/5 border rounded-xl border-secondary/20 hover:border-secondary/50 transition-colors p-5"
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
                      className="px-4 py-2 bg-primary text-secondary  rounded-full border border-secondary/20 hover:border-secondary/50 transition-colors"
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
