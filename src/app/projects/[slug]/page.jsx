"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { getProjectBySlug } from "@/data/projects";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="mb-8">The project you're looking for doesn't exist.</p>
          <Link
            href="/#projects"
            className="px-6 py-3 bg-secondary text-white rounded-full hover:bg-secondary/80 transition-colors"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Helper function to render links conditionally
  const renderLink = (url, icon, text, className = "") => {
    if (url && url.trim() !== "") {
      return (
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className={`inline-flex items-center hover:text-secondary transition-colors ${className}`}
        >
          {icon} {text}
        </a>
      );
    } else {
      return (
        <span
          className={`inline-flex items-center text-base-content/50 ${className}`}
        >
          {icon} {text} <span className="ml-1 text-xs">(coming soon)</span>
        </span>
      );
    }
  };

  return (
    <section className="py-16 md:py-24 px-4 max-w-7xl mx-auto">
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <Link
          href="/#projects"
          className="inline-flex items-center text-base mb-8 hover:text-secondary transition-colors"
        >
          <FaArrowLeft className="mr-2" /> Back to Projects
        </Link>

        <div className="mb-8 pb-8 border-b border-secondary/20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-4 mb-6">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-primary text-base-200 rounded-full border border-secondary/20"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-6">
            {renderLink(
              project.liveUrl,
              <FaExternalLinkAlt className="mr-2" />,
              "Live Site"
            )}
            {renderLink(
              project.githubUrl,
              <FaGithub className="mr-2" />,
              "Source Code"
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <motion.div className="mb-12" variants={staggerChildren}>
              <motion.h2 className="text-2xl font-bold mb-4" variants={fadeIn}>
                Project Overview
              </motion.h2>
              <motion.p className="text-lg mb-8" variants={fadeIn}>
                {project.description}
              </motion.p>

              {project.imagePath && (
                <motion.div
                  className="aspect-video bg-gray-200 rounded-lg mb-12 overflow-hidden"
                  variants={fadeIn}
                >
                  <img
                    src={project.imagePath}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "/placeholder-project.jpg";
                    }}
                  />
                </motion.div>
              )}

              <motion.h2 className="text-2xl font-bold mb-4" variants={fadeIn}>
                The Challenge
              </motion.h2>
              <motion.p className="text-lg mb-8" variants={fadeIn}>
                {project.challenge}
              </motion.p>

              <motion.h2 className="text-2xl font-bold mb-4" variants={fadeIn}>
                The Solution
              </motion.h2>
              <motion.p className="text-lg mb-8" variants={fadeIn}>
                {project.solution}
              </motion.p>

              <motion.h2 className="text-2xl font-bold mb-4" variants={fadeIn}>
                Process & Approach
              </motion.h2>
              <motion.ul
                className="list-disc pl-6 mb-8 space-y-2"
                variants={staggerChildren}
              >
                {project.process.map((step, index) => (
                  <motion.li key={index} className="text-lg" variants={fadeIn}>
                    {step}
                  </motion.li>
                ))}
              </motion.ul>

              <motion.h2 className="text-2xl font-bold mb-4" variants={fadeIn}>
                Results & Impact
              </motion.h2>
              <motion.p className="text-lg" variants={fadeIn}>
                {project.results}
              </motion.p>
            </motion.div>
          </div>

          <div className="md:col-span-1">
            <motion.aside
              className="sticky top-24 bg-primary/5 p-6 rounded-lg border border-secondary/10"
              variants={fadeIn}
            >
              <h3 className="text-xl font-bold mb-4 tracking-[1px]">
                Project Details
              </h3>

              <div className="mb-6">
                <h4 className="text-sm uppercase tracking-wider text-base-content/60 mb-2">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-primary/10 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm uppercase tracking-wider text-base-content/60 mb-2">
                  Links
                </h4>
                <div className="flex flex-col space-y-2">
                  {renderLink(
                    project.liveUrl,
                    <FaExternalLinkAlt className="mr-2" />,
                    "Live Demo"
                  )}
                  {renderLink(
                    project.githubUrl,
                    <FaGithub className="mr-2" />,
                    "GitHub Repository"
                  )}
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
