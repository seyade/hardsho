import Link from "next/link";

const Header = () => {
	return (
		<header className="h-11 text-center pb-4 md:flex justify-between items-center text-white font-medium">
			<h1 className="text-3xl font-extrabold mb-5 md:mb-0">
				<Link href={"/"}>Onbod.</Link>
			</h1>

			<div className="md:flex items-center">
				<nav className="md:ml-12">
					<ul className="lg:flex">
						<li className="md:mx-4">
							<a href="/about">About</a>
						</li>
						<li className="md:mx-4">
							<a href="/features">Features</a>
						</li>
						<li className="md:mx-4">
							<a href="/pricing">Pricing</a>
						</li>
						<li className="md:mx-4">
							<a href="/contact">Contact</a>
						</li>
						<li className="md:mx-4">
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
