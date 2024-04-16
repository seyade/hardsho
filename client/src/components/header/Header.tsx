import { useState } from "react";
import Link from "next/link";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header className="md:h-11 pb-7 md:pb-4 mb-10 md:mb-0 text-center md:flex justify-between items-center text-white font-medium border-b md:border-none">
			<div className="flex justify-between items-center mb-5 md:mb-0">
				<h1 className="text-3xl font-extrabold">
					<Link href={"/"}>Onbod.</Link>
				</h1>

				<button onClick={toggleMenu} className="md:hidden">
					{!isOpen ? (
						<RiMenu3Fill className="text-4xl" />
					) : (
						<RxCross2 className="text-4xl" />
					)}
				</button>
			</div>

			{isOpen && (
				<>
					<div className="md:flex items-center">
						<nav className="md:ml-12">
							<ul className="lg:flex text-2xl md:text-base">
								<li className="mb-5 md:mx-4 md:mb-0">
									<a href="/about">About</a>
								</li>
								<li className="mb-5 md:mx-4 md:mb-0">
									<a href="/features">Features</a>
								</li>
								<li className="mb-5 md:mx-4 md:mb-0">
									<a href="/pricing">Pricing</a>
								</li>
								<li className="mb-5 md:mx-4 md:mb-0">
									<a href="/contact">Contact</a>
								</li>
								<li className="mb-5 md:mx-4 md:mb-0">
									<a href="/dashboard">Dash</a>
								</li>
							</ul>
						</nav>
					</div>

					<div className="UserEntry mt-4 md:mt-0">
						<a
							href="/login"
							className="flex justify-center md:inline-block md:mx-4 px-5 py-2 rounded-full text-white text-center font-medium bg-purple-950 hover:bg-purple-900 transition-all ease-in-out duration-300"
						>
							Login
						</a>
					</div>
				</>
			)}
		</header>
	);
};

export default Header;
