import Image from "next/image";

export default function Home() {
	return (
		<main className="grid grid-cols-12 px-11 py-5">
			<header className="col-span-12 h-11 pb-4 flex justify-between items-center font-medium">
				<div className="flex items-center">
					<h1 className="text-3xl font-extrabold">.Onbod</h1>
					<nav className="ml-12">
						<ul className="flex">
							<li className="mx-4">
								<a href="/about">About</a>
							</li>
							<li className="mx-4">
								<a href="/features">Features</a>
							</li>
							<li className="mx-4">
								<a href="/pricing">Pricing</a>
							</li>
							<li className="mx-4">
								<a href="/contact">Contact</a>
							</li>
							<li className="mx-4">
								<a href="/dashboard">Dash</a>
							</li>
						</ul>
					</nav>
				</div>

				<div className="UserEntry">
					<a href="/login" className="mx-4">
						Login
					</a>
					<a href="/sign-up" className="p-3 border border-slate-700 rounded-lg">
						Sign Up
					</a>
				</div>
			</header>

			<section className="plusjakartasans banner col-span-12 grid grid-cols-2 mb-5">
				<div className="grid place-items-center h-auto py-28 justify-center bg-slate-300">
					<div className="mb-11">
						<h2 className="text-7xl font-medium px-20 mb-5">
							Onbod. Makes it easy to bring your code alive
						</h2>
						<h3 className="text-xl font-medium px-20">
							A Portfolio Platform for Contractors and Freelancers to showcase
							clickable work.
						</h3>
					</div>

					<div className="w-full px-20">
						<a
							href="/sign-up"
							className="flex-1 text-xl px-8 py-3 bg-slate-800 rounded-full text-white text-center font-medium"
						>
							Start Showing Off
						</a>
					</div>
				</div>

				<div className="grid place-items-center h-auto flex-col justify-center bg-slate-200">
					[IMAGE: SOMETHING WITH GITHUB TO THIS PLATFORM]
				</div>
			</section>
		</main>
	);
}
