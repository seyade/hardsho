"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { motion, useScroll, useTransform } from "framer-motion";

import Header from "@/components/header/Header";

import Placeholder1 from "../../public/assets/placeholder_1.png";
import Placeholder2 from "../../public/assets/placeholder_2.png";
import Placeholder3 from "../../public/assets/placeholder_3.png";
import Placeholder4 from "../../public/assets/placeholder_4.png";

const Home = () => {
	const containerRef = useRef(null);

	const { scrollXProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end start"],
	});
	const y1 = useTransform(scrollXProgress, [0, 1], ["0%", "100%"]);
	const y2 = useTransform(scrollXProgress, [0, 1], ["0%", "200%"]);

	return (
		<div className="plusjakartasans grid grid-cols-12 px-11 py-5">
			<Header />
			<section className="banner col-span-12 grid grid-cols-2 my-36 text-white">
				<div className="grid place-items-center h-auto py-28 justify-center">
					<div className=" mb-20">
						<h2 className="spacegrotesk text-6xl mb-20 pr-20">
							Showcase how your code is living
						</h2>

						<h3 className="text-xl font-medium pr-20">
							Onbod is a platform that allows web developers & web designers to
							easily manage, showcase and share interactive UI components of
							their past projects along with their code.
						</h3>
					</div>

					<div className="w-full pr-20">
						<a
							href="/sign-up"
							className="flex-1 text-xl px-8 py-3 bg-slate-800 rounded-full text-white text-center font-medium"
						>
							Get Started
						</a>
					</div>
				</div>

				<div className="relative bg-orange-950" ref={containerRef}>
					<motion.div
						className="absolute top-0 left-0 z-10 w-40"
						style={{
							y: y1,
							backgroundColor: "brown",
							backgroundImage: `url(/assets/placeholder_1.png)`,
							backgroundSize: "contain",
							backgroundRepeat: "no-repeat",
							backgroundPosition: "top",
							height: 200,
						}}
					>
						{/* <Image src={Placeholder2} alt="Placehoder 2" /> */}
					</motion.div>
					{/* <Image
						src={Placeholder1}
						alt="Placehoder 1"
						className="absolute left-40"
					/>

					<motion.div style={{ y: y1, backgroundColor: "brown" }}>
						<Image src={Placeholder2} alt="Placehoder 2" />
					</motion.div>

					<motion.div style={{ y: y2, backgroundColor: "teal" }}>
						<Image src={Placeholder3} alt="Placehoder 3" />
					</motion.div> */}
				</div>
			</section>

			<section className="col-span-12 mb-36 text-white">
				<h2 className="spacegrotesk mb-24 text-5xl text-center font-light">
					Revolutionize your portfolio
				</h2>

				<div className="flex items-center">
					<Image src={Placeholder4} alt="Placeholder 4" />

					<p className="text-3xl ml-32 pr-40">
						Unleash the power of your past projects with Onbod. Turn your lines
						of code into dynamic, captivating experiences. It&apos;s your chance
						to showcase your skills like never before.
					</p>
				</div>
			</section>

			<section className="col-span-12 mb-36 text-white h-[650px]">
				<h2 className="spacegrotesk mb-24 text-5xl text-center font-light">
					Bring your code to life
				</h2>

				<div className="relative grid grid-cols-5">
					<p className="flex-1 col-span-3 text-3xl pr-40">
						Don&apos;t let your hard work go unnoticed. Turn your previous
						projects into interactive showcases that grab attention and leave a
						lasting impression.
					</p>

					<div className="flex-1 col-span-2">
						<Image
							src={Placeholder1}
							alt="Placehoder 1"
							className="absolute right-24"
						/>
						<Image
							src={Placeholder3}
							alt="Placehoder 2"
							className="absolute top-11"
						/>
					</div>
				</div>
			</section>

			<section className="relative col-span-12 mb-36 text-white h-[650px]">
				<h2 className="spacegrotesk mb-24 text-5xl text-center font-light">
					Attract clients, impress employers
				</h2>

				<div className="relative flex">
					<div className="relative flex-1">
						<Image
							src={Placeholder1}
							alt="Placehoder 1"
							className="absolute top-0 left-0"
						/>
						<Image
							src={Placeholder3}
							alt="Placehoder 2"
							className="absolute top-0 right-12"
						/>
					</div>

					<p className="flex-1 text-3xl pr-20 mt-36">
						Not only showcases your coding prowess but use it as a magnet for
						potential clients and employers seeking top talent. Open doors to
						new opportunities.
					</p>
				</div>
			</section>

			<footer className="col-span-12 flex justify-between items-center">
				<p className="flex-1 text-white">
					&copy; 2024 Onbod. All rights reserved.{" "}
				</p>

				<nav className="flex-1 flex justify-evenly text-white text-right">
					<Link href="/privacy-policy">Privacy Policy</Link>
					<Link href="/t-and-c">Terms &amp; Conditions</Link>
					<Link href="/cookie-policy">Cookie Policy</Link>
				</nav>
			</footer>
		</div>
	);
};

export default Home;
