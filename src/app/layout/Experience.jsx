'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
	const experiences = [
		{
			period: 'May 2026 - Present',
			role: 'Frontend Developer',
			company: 'The Generation | Stockholm',
			description:
				"After starting as an intern at The Generation, I now work as a Frontend Developer, building and maintaining WordPress websites based on the agency's proprietary G-theme. I work with PHP, Sass, JavaScript, and WordPress to create responsive layouts, customize functionality, and turn design concepts into user-friendly web experiences. My role includes working on live client projects, building new components and page layouts, making design and functionality adjustments, preparing websites for delivery and launch, and supporting existing client websites through troubleshooting, updates, and improvements.",
			technologies: ['WordPress', 'G-Theme', 'PHP', 'SCSS', 'JavaScript'],
		},
		{
			period: 'Nov 2025 - May 2026',
			role: 'Frontend Developer Intern',
			company: 'The Generation | Stockholm',
			description:
				"During my internship at The Generation, I worked on developing WordPress websites based on the agency's proprietary G-theme. I gained hands-on experience with PHP, Sass, JavaScript, and WordPress by developing and customizing layouts, functionality, and components for real client projects. I was involved in different parts of the development process, from implementing design details to testing and making adjustments under guidance from the development team.",
			technologies: ['WordPress', 'G-Theme', 'PHP', 'SCSS', 'JavaScript'],
		},
		{
			period: 'Oct 2022 - May 2023',
			role: 'Web Developer Intern',
			company: 'Sphinxly | Remote',
			description:
				'Collaborated with a team of interns to plan, develop, and deliver a client website using Easyweb CMS, React.js, TypeScript, and SCSS. Participated in various client projects, providing technical support and troubleshooting. Enhanced frontend performance and responsiveness through code optimization and testing.',
			technologies: ['Easyweb CMS', 'PHP', 'React.js', 'TypeScript', 'SCSS'],
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
				ease: 'easeOut',
			},
		},
	};

	return (
		<section
			id="experience"
			aria-labelledby="experience-heading"
			tabIndex="0"
			className="relative w-screen left-1/2 -translate-x-1/2 py-12 md:py-16 lg:py-32 focus-ring"
		>
			<div className="max-w-7xl mx-auto  px-[1rem] sm:px-[5rem] xl:px-[0]">
				<motion.h2
					id="experience-heading"
					className="text-6xl"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-100px' }}
					variants={headingVariants}
				>
					EXPERIENCE
					<motion.span
						className="absolute -bottom-0 sm:-bottom-3  lg:-bottom-5  left-0 w-24 h-1 bg-secondary origin-left"
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
						<motion.article
							key={index}
							variants={itemVariants}
							className="border-l-4 border-secondary/20 pl-8 hover:border-secondary transition-colors focus-ring"
							aria-labelledby={`experience-role-${index}`}
							tabIndex={0}
						>
							<span className="text-secondary tracking-wider font-bold">
								{exp.period}
							</span>
							<h3
								id={`experience-role-${index}`}
								className="text-3xl tracking-[1px] font-bold text-base-content lg:text-4xl mt-2"
							>
								{exp.role}
							</h3>
							<h4 className="text-xl lg:text-2xl text-base-content/80 mt-1">
								{exp.company}
							</h4>
							<p className="lg:text-lg mt-4 text-base-content/80">
								{exp.description}
							</p>
							<div
								role="list"
								aria-label={`Technologies used at ${exp.company}`}
								className="flex flex-wrap gap-3 mt-4"
							>
								{exp.technologies.map((tech, techIndex) => (
									<span
										key={techIndex}
										className="px-4 py-2 bg-primary text-base-200 rounded-full border border-secondary/20 text-sm"
										role="listitem"
									>
										{tech}
									</span>
								))}
							</div>
						</motion.article>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default Experience;
