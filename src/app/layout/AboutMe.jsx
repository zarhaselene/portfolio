"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutMe = () => {
  const headingVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const underlineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.08 },
    },
  };

  const techItemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  };

  const technologyItems = ["Next.js", "PHP", "Tailwind CSS", "SASS"];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      tabIndex="0"
      className="relative bg-primary/5 w-screen left-1/2 -translate-x-1/2 py-12 md:py-16 lg:py-20 focus-ring
"
    >
      <div className="max-w-7xl mx-auto px-[1rem] sm:px-[5rem] xl:px-[0] ">
        <motion.h2
          id="about-heading"
          className="relative uppercase"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headingVariants}
        >
          My Story
          <motion.span
            className="absolute -bottom-0 sm:-bottom-3 lg:-bottom-5 left-0 w-24 h-1 bg-secondary origin-left"
            variants={underlineVariants}
          ></motion.span>
        </motion.h2>

        <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16">
          {/* Photo column */}
          <motion.div
            className="md:col-span-4 lg:col-span-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative aspect-[3/4] w-full max-w-sm mx-auto overflow-hidden rounded-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="border rounded-lg border-secondary/20">
                  <Image
                    src="/assets/avatar.png"
                    alt="Zarha Buske - Fullstack Developer"
                    width={800}
                    height={800}
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content column */}
          <motion.div
            className="md:col-span-8 lg:col-span-7"
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="space-y-6" variants={contentVariants}>
              <motion.p
                className="text-lg lg:text-xl text-base-content/90 leading-relaxed"
                variants={contentVariants}
              >
                My path to development began with curiosity – customizing blog
                themes and exploring how design transforms with code. That spark
                grew into a passion during my first formal web development
                course, where I discovered I could combine my design knowledge
                with technical problem-solving.
              </motion.p>

              <motion.p
                className="text-lg lg:text-xl text-base-content/90 leading-relaxed"
                variants={contentVariants}
              >
                What drives me is creating applications that are both beautiful
                and accessible. I believe technology should work for everyone,
                and I bring this perspective into every project I develop.
              </motion.p>

              <motion.p
                className="text-lg lg:text-xl text-base-content/90 leading-relaxed"
                variants={contentVariants}
              >
                As a team member, I thrive in collaborative environments that
                value knowledge sharing. I enjoy contributing ideas, building on
                others' strengths, and finding creative solutions together.
              </motion.p>

              <motion.p
                className="text-lg lg:text-xl text-base-content/90 leading-relaxed"
                variants={contentVariants}
              >
                My expertise in React, Next.js, SASS, and PHP allows me to
                create responsive, scalable applications, while my background
                interest in design ensures they're visually cohesive and
                user-friendly.
              </motion.p>

              <motion.div className="pt-6" variants={contentVariants}>
                <h3 id="tech-heading" className="text-2xl font-semibold mb-4 tracking-[1px]">
                  Technologies I Love 
                </h3>
                <motion.div
                  className="flex flex-wrap gap-3"
                  variants={contentVariants}
                  aria-labelledby="tech-heading"
                  role="list"
                >
                  {technologyItems.map((tech, index) => (
                    <motion.span
                      key={index}
                      variants={techItemVariants}
                      className="px-4 py-2 bg-primary text-base-200 rounded-full border border-secondary/20 hover:border-secondary/50 transition-colors"
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 },
                      }}
                      role="listitem"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
