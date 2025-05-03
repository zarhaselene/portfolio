"use client";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { projects } from "@/data/projects";

const Projects = () => {
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

  // Helper function to render clickable or disabled links
  const renderLink = (url, icon, ariaLabel) => {
    const baseClassName = "transition-colors focus-ring";

    if (url && url.trim() !== "") {
      return (
        <a
          target="_blank"
          href={url}
          className={`${baseClassName} hover:text-secondary hover:animate-jello`}
          aria-label={ariaLabel}
          rel="noreferrer"
        >
          {icon}
        </a>
      );
    } else {
      return (
        <span
          className={`${baseClassName} text-base-content/40 cursor-not-allowed`}
          aria-label={`${ariaLabel} (not available)`}
        >
          {icon}
        </span>
      );
    }
  };

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      tabIndex="0"
      className="relative w-screen left-1/2 -translate-x-1/2 py-12 md:py-16 lg:py-32 focus-ring"
    >
      <div className="max-w-7xl mx-auto px-[1rem] sm:px-[5rem] xl:px-[0]">
        <motion.h2
          id="projects-heading"
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
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="border-t border-secondary/20 pt-8 hover:border-secondary/50 transition-colors focus-ring group"
              aria-labelledby={`project-${index}-title`}
              tabIndex="0"
            >
              <div className="flex flex-col-reverse md:flex-row justify-between items-baseline">
                <Link
                  href={`/projects/${project.slug}`}
                  className="hover:text-secondary transition-colors"
                >
                  <h3
                    className="text-[2rem] tracking-[2px] lg:text-4xl font-bold group-hover:text-secondary transition-colors"
                    id={`project-${index}-title`}
                  >
                    {project.title}
                  </h3>
                </Link>
                <div
                  className="flex gap-4 mb-6"
                  role="group"
                  aria-label={`Links for ${project.title}`}
                >
                  {renderLink(
                    project.liveUrl,
                    <FaExternalLinkAlt size={24} />,
                    `Visit live site for ${project.title}`
                  )}
                  {renderLink(
                    project.githubUrl,
                    <FaGithub size={24} />,
                    `View source code for ${project.title} on GitHub`
                  )}
                </div>
              </div>
              <p className="text-[1rem] lg:text-lg mt-4 text-base-content/80">
                {project.description}
              </p>
              <div className="flex flex-col md:flex-row justify-between md:items-center">
                <ul className="flex flex-wrap gap-3 mt-6">
                  {project.tags.map((tag, tagIndex) => (
                    <li
                      key={tagIndex}
                      className="px-4 py-2 bg-primary text-base-200 rounded-full border border-secondary/20 hover:border-secondary/50 transition-colors"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/projects/${project.slug}`}
                  className="mt-6 inline-flex items-center text-base hover:text-secondary transition-colors"
                >
                  View Case Study
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
