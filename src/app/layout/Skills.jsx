"use client";
import { motion } from "framer-motion";

const Skills = () => {
  // Enhanced skills with grouping and descriptions
  const enhancedSkills = [
    {
      category: "Frontend Expertise",
      description:
        "I craft responsive, intuitive interfaces where clean code meets thoughtful design.",
      items: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Next.js",
        "Vue",
        "Tailwind CSS",
        "SASS",
        "Framer Motion",
      ],
    },
    {
      category: "Design",
      description:
        "My design background helps me build visually balanced UIs with accessibility at their core.",
      items: [
        "UI/UX Principles",
        "WCAG",
        "Figma",
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Affinity Designer",
      ],
    },
    {
      category: "Backend Knowledge",
      description:
        "From APIs to databases, I build solid foundations that support seamless user experiences.",
      items: ["Node.js", "Express", "RESTful APIs", "PHP", "MySQL"],
    },
    {
      category: "DevOps & Cloud",
      description:
        "I leverage modern deployment tools to create reliable, scalable application environments.",
      items: ["Docker", "AWS", "CI/CD"],
    },
    {
      category: "CMS & E-Commerce",
      description:
        "Custom solutions for content and commerce platforms that are flexible and user-friendly.",
      items: ["WordPress", "WooCommerce", "Easyweb CMS"],
    },
    {
      category: "Tools & Workflow",
      description:
        "I bring structure and efficiency to development with collaborative, agile approaches.",
      items: ["Git", "Agile Methodologies", "Jira", "Asana"],
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
    <section
      id="skills"
      aria-labelledby="skills-heading"
      tabIndex="0"
      className="relative w-screen left-1/2 -translate-x-1/2 py-12 md:py-16 lg:py-32 bg-primary/5 focus-ring"
    >
      <div className="max-w-7xl mx-auto px-[1rem] sm:px-[5rem] xl:px-[0]">
        <motion.h2
          id="skills-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headingVariants}
        >
          SKILLS & EXPERTISE
          <motion.span
            className="absolute -bottom-0 sm:-bottom-3 lg:-bottom-5 left-0 w-24 h-1 bg-secondary origin-left "
            variants={underlineVariants}
          ></motion.span>
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 auto-rows-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {enhancedSkills.map((skillGroup, index) => (
            <motion.div
              key={index}
              variants={skillGroupVariants}
              className="bg-primary/5 border rounded-xl border-secondary/20 hover:border-secondary/50 transition-colors p-5 h-fit"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              <h3
                id={`skill-category-${index}`}
                className="text-3xl tracking-[1px] font-bold text-base-content"
              >
                {skillGroup.category}
              </h3>

              <p className="text-base-content/80 text-sm mt-2 mb-4 leading-relaxed">
                {skillGroup.description}
              </p>

              <motion.ul
                className="flex flex-wrap gap-3"
                variants={containerVariants}
                aria-label={`${skillGroup.category} skills`}
              >
                {skillGroup.items.map((skill, skillIndex) => (
                  <motion.li
                    key={skillIndex}
                    variants={skillItemVariants}
                    className="px-4 py-2 bg-primary text-base-200 rounded-full border border-secondary/20 hover:border-secondary/50 transition-colors"
                  >
                    {skill}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
