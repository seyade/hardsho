"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

import Header from "@/components/header/Header";

import Placeholder1 from "../../public/assets/placeholder_1.png";
import Placeholder2 from "../../public/assets/placeholder_2.png";
import Placeholder3 from "../../public/assets/placeholder_3.png";
import Placeholder4 from "../../public/assets/placeholder_4.png";

const Home = () => {
	const containerRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end start"],
	});
	const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
	const md = useTransform(scrollYProgress, [0, 1], [-50, 300]);
	const lg = useTransform(scrollYProgress, [0, 1], [150, 550]);
	const xlg = useTransform(scrollYProgress, [0, 1], [-150, 100]);

	return (
		<div ref={containerRef} className="plusjakartasans px-11 py-5">
			<Header />
			<section className="banner flex mb-2 lg:my-36 text-white">
				<div className="flex-1 h-auto md:pt-28 lg:pt-0 lg:py-28 justify-center">
					<div className="mb-10 md:mb-20">
						<h2 className="spacegrotesk text-center md:text-left text-6xl mb-6 md:mb-20 md:pr-20">
							Showcase how your code is living
						</h2>

						<div className="w-full md:pr-20 md:hidden mb-8">
							<a
								href="/sign-up"
								className="flex flex-1 w-full justify-center md:inline-flex text-xl px-8 py-3 rounded-full text-white text-center font-medium bg-purple-950 hover:bg-purple-900 transition-all ease-in-out duration-300"
							>
								Get Started
							</a>
						</div>

						<h3 className="text-xl font-medium md:pr-20">
							Onbod is a platform that allows web developers & web designers to
							easily manage, showcase and share interactive UI components of
							their past projects along with their code.
						</h3>
					</div>

					<div className="w-full md:pr-20">
						<a
							href="/sign-up"
							className="hidden flex-1 justify-center md:inline-flex text-xl px-8 py-3 rounded-full text-white text-center font-medium bg-purple-950 hover:bg-purple-900 transition-all ease-in-out duration-300"
						>
							Get Started
						</a>
					</div>
				</div>

				<div className="relative flex-1 hidden md:flex justify-center mt-11 w-full">
					<motion.div style={{ y: 0 }} className="absolute bg-teal-600">
						<Image src={Placeholder1} alt="Placehoder 1" placeholder="blur" />
					</motion.div>

					<motion.div
						style={{ y: lg }}
						className="absolute bg-orange-600 left-0"
					>
						<Image src={Placeholder2} alt="Placehoder 2" placeholder="blur" />
					</motion.div>

					<motion.div
						style={{ y: md }}
						className="absolute bg-orange-400 right-0"
					>
						<Image src={Placeholder3} alt="Placehoder 3" placeholder="blur" />
					</motion.div>
				</div>
			</section>

			<section className="mb-7 md:my-36 text-white">
				<h2 className="spacegrotesk mb-8 md:mb-24 text-4xl md:text-5xl text-center font-bold md:font-light">
					Revolutionize your portfolio
				</h2>

				<div className="flex items-center gap-3">
					<div className="flex-1 hidden md:block">
						<Image src={Placeholder4} alt="Placeholder 4" />
					</div>

					<p className="flex-1 text-xl md:text-3xl">
						Unleash the power of your past projects with Onbod. Turn your lines
						of code into dynamic, captivating experiences. It&apos;s your chance
						to showcase your skills like never before.
					</p>
				</div>
			</section>

			<section className="mb-7 md:my-36 text-white lg:h-[650px]">
				<h2 className="spacegrotesk mb-8 md:mb-24 text-4xl md:text-5xl text-center font-bold md:font-light">
					Bring your code to life
				</h2>

				<div className="flex">
					<p className="flex-1 text-xl md:text-3xl md:pr-40">
						Don&apos;t let your hard work go unnoticed. Turn your previous
						projects into interactive showcases that grab attention and leave a
						lasting impression.
					</p>

					<div className="relative flex-1 hidden md:block">
						<motion.div className="absolute right-24" style={{ y: sm }}>
							<Image src={Placeholder1} alt="Placehoder 1" />
						</motion.div>
						<motion.div className="absolute top-11" style={{ y: xlg }}>
							<Image src={Placeholder3} alt="Placehoder 2" />
						</motion.div>
					</div>
				</div>
			</section>

			<section className="mb-7 lg:my-36 text-white lg:h-[650px]">
				<h2 className="spacegrotesk mb-8 md:mb-24 text-4xl md:text-5xl text-center font-bold md:font-light">
					Attract clients, impress employers
				</h2>

				<div className="flex gap-4">
					<div className="relative flex-1 hidden md:block">
						<Image
							src={Placeholder1}
							alt="Placehoder 1"
							className="absolute top-0 left-0"
						/>

						<motion.div className="absolute top-0 right-12" style={{ y: xlg }}>
							<Image src={Placeholder3} alt="Placehoder 2" />
						</motion.div>
					</div>

					<p className="flex-1 text-xl md:text-3xl md:pr-20 md:mt-36">
						Not only showcases your coding prowess but use it as a magnet for
						potential clients and employers seeking top talent. Open doors to
						new opportunities.
					</p>
				</div>
			</section>

			<footer className="md:flex grid justify-between items-center border-t md:border-0 pt-5">
				<p className="flex-1 order-last md:order-none text-center text-white">
					&copy; 2024 Onbod. All rights reserved.
				</p>

				<nav className="mb-5 md:mb-0 flex-1 flex-col md:flex-row items-center md:flex justify-evenly text-white text-center md:text-right">
					<Link href="/privacy-policy" className="block md:inline-block">
						Privacy Policy
					</Link>
					<Link href="/t-and-c" className="block md:inline-block">
						Terms &amp; Conditions
					</Link>
					<Link href="/cookie-policy" className="block md:inline-block">
						Cookie Policy
					</Link>
				</nav>
			</footer>
		</div>
	);
};

export default Home;
