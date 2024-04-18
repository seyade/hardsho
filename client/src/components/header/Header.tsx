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
			<div className="flex justify-between">
				<h1 className="text-3xl font-extrabold mb-5 md:mb-0">
					<Link href={"/"}>Onbod.</Link>
				</h1>

				<button onClick={toggleMenu} className="md:hidden">
					{isOpen ? (
						<RxCross2 className="text-3xl lg:hidden" />
					) : (
						<RiMenu3Fill className="text-3xl lg:hidden" />
					)}
				</button>
			</div>

			{isOpen && (
				<div className={`md:flex items-center`}>
					<nav className="md:ml-12">
						<ul className="lg:flex">
							<li className="mb-3 md:mx-4 md:mb-0">
								<a href="/about">About</a>
							</li>
							<li className="mb-3 md:mx-4 md:mb-0">
								<a href="/features">Features</a>
							</li>
							<li className="mb-3 md:mx-4 md:mb-0">
								<a href="/pricing">Pricing</a>
							</li>
							<li className="mb-3 md:mx-4 md:mb-0">
								<a href="/contact">Contact</a>
							</li>
							<li className="mb-3 md:mx-4 md:mb-0">
								<a href="/dashboard">Dash</a>
							</li>
						</ul>
					</nav>
				</div>
			)}

			<div className={`md:flex items-center hidden`}>
				<nav className="md:ml-12">
					<ul className="md:flex">
						<li className="mb-3 md:mx-4 md:mb-0">
							<a href="/about">About</a>
						</li>
						<li className="mb-3 md:mx-4 md:mb-0">
							<a href="/features">Features</a>
						</li>
						<li className="mb-3 md:mx-4 md:mb-0">
							<a href="/pricing">Pricing</a>
						</li>
						<li className="mb-3 md:mx-4 md:mb-0">
							<a href="/contact">Contact</a>
						</li>
						<li className="mb-3 md:mx-4 md:mb-0">
							<a href="/dashboard">Dash</a>
						</li>
					</ul>
				</nav>
			</div>

			<div className="UserEntry mt-4 md:mt-0">
				<a
					href="/login"
					className="md:mx-4 px-5 py-2 rounded-full text-white text-center font-medium bg-purple-950 hover:bg-purple-900 transition-all ease-in-out duration-300"
				>
					Login
				</a>
			</div>
		</header>
	);
};

export default Header;
