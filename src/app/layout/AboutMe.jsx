'use client';
import { motion } from 'framer-motion';

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

	const itemVariants = {
		hidden: { opacity: 0, x: 20 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { type: 'spring', stiffness: 100, damping: 10 },
		},
	};

	// Ny data för högerspalten: Din filosofi/ditt arbetssätt
	const approachItems = [
		{
			title: 'Design Meets Code',
			description:
				'Bridging the gap between aesthetic vision and scalable technical implementation.',
			icon: (
				<svg
					className="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={1.5}
						d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
					/>
				</svg>
			),
		},
		{
			title: 'Inclusive by Default',
			description:
				'Building accessible (WCAG) experiences that ensure technology works for everyone.',
			icon: (
				<svg
					className="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={1.5}
						d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
					/>
				</svg>
			),
		},
		{
			title: 'Collaborative Growth',
			description:
				'Thriving in agile environments, sharing knowledge, and building on team strengths.',
			icon: (
				<svg
					className="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={1.5}
						d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
					/>
				</svg>
			),
		},
	];

	return (
		<section
			id="about"
			aria-labelledby="about-heading"
			tabIndex="0"
			className="relative bg-primary/5 w-screen left-1/2 -translate-x-1/2 py-12 md:py-16 lg:py-20 focus-ring"
		>
			<div className="max-w-7xl mx-auto px-[1rem] sm:px-[5rem] xl:px-[0]">
				<motion.h2
					id="about-heading"
					className="relative text-6xl"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-100px' }}
					variants={headingVariants}
				>
					My Story
					<motion.span
						className="absolute -bottom-2 sm:-bottom-3 lg:-bottom-4 left-0 w-24 h-1 bg-secondary origin-left"
						variants={underlineVariants}
					></motion.span>
				</motion.h2>

				<div className="mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
					{/* VÄNSTER SPALT: Berättelsen / Tidslinjen */}
					<motion.div
						className="lg:col-span-7 relative"
						variants={contentVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
					>
						<div className="absolute left-[7px] top-2 bottom-0 w-[2px] bg-secondary/30"></div>

						<div className="space-y-12">
							<motion.div
								className="relative pl-10 md:pl-12"
								variants={contentVariants}
							>
								<div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-secondary shadow-[0_0_0_4px_var(--fallback-b1,oklch(var(--b1)))]"></div>
								<h3 className="text-secondary text-lg font-bold uppercase tracking-widest mb-3">
									The Spark
								</h3>
								<p className="text-lg lg:text-xl text-base-content/90 leading-relaxed">
									My path to development began with curiosity – customizing blog
									themes and exploring how design transforms with code. That
									spark grew into a passion during my first web development
									course, where I discovered I could combine my design knowledge
									with technical problem-solving.
								</p>
							</motion.div>

							<motion.div
								className="relative pl-10 md:pl-12"
								variants={contentVariants}
							>
								<div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-secondary shadow-[0_0_0_4px_var(--fallback-b1,oklch(var(--b1)))]"></div>
								<h3 className="text-secondary text-lg font-bold uppercase tracking-widest mb-3">
									The Mission
								</h3>
								<p className="text-lg lg:text-xl text-base-content/90 leading-relaxed">
									What drives me is creating applications that are both
									beautiful and accessible. I believe technology should work for
									everyone, and I bring this perspective into every project I
									develop.
								</p>
							</motion.div>

							<motion.div
								className="relative pl-10 md:pl-12"
								variants={contentVariants}
							>
								<div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-secondary shadow-[0_0_0_4px_var(--fallback-b1,oklch(var(--b1)))]"></div>
								<h3 className="text-secondary text-lg font-bold uppercase tracking-widest mb-3">
									Collaboration
								</h3>
								<p className="text-lg lg:text-xl text-base-content/90 leading-relaxed">
									As a team member, I thrive in collaborative environments that
									value knowledge sharing. I enjoy contributing ideas, building
									on others' strengths, and finding creative solutions together.
								</p>
							</motion.div>
						</div>
					</motion.div>

					<motion.div
						className="lg:col-span-5"
						variants={contentVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
					>
						<div className="bg-base-200/50 p-8 md:p-10 rounded-2xl border border-secondary/10 h-fit shadow-lg shadow-base-300/10">
							<h3 className="text-2xl font-semibold mb-8 tracking-[1px] uppercase text-base-content">
								My Approach
							</h3>

							<div className="space-y-8">
								{approachItems.map((item, index) => (
									<motion.div
										key={index}
										variants={itemVariants}
										className="flex gap-4"
									>
										<div className="flex-shrink-0 mt-1 text-secondary">
											{item.icon}
										</div>
										<div>
											<h4 className="text-base-content tracking-[2px] font-bold mb-1 text-xl">
												{item.title}
											</h4>
											<p className="text-base-content/70 text-sm leading-relaxed">
												{item.description}
											</p>
										</div>
									</motion.div>
								))}
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
