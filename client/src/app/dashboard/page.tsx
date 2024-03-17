"use client";

import Link from "next/link";
import { FaListUl } from "react-icons/fa";

const Dashboard = () => {
	return (
		<div className="flex flex-col w-full h-screen p-1">
			<header className="p-2">
				<h1 className="text-2xl font-medium mb-6">Dashboard</h1>
			</header>

			<div className="flex items-center justify-between mb-6 p-2">
				<Link
					href="/builder"
					className="whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
				>
					Create a showcase
				</Link>

				<Link href="/projects" className="flex items-center hover:underline">
					<FaListUl /> <span className="ml-2">Show all projects</span>
				</Link>
			</div>

			<div className="flex w-full h-full gap-1">
				<div className="flex-1 bg-zinc-100 p-4 rounded-sm">
					<h3>Project 1</h3>
				</div>

				<div className="flex-1 grid grid-cols-2 gap-1">
					<div className="col-span-1 p-4 rounded-sm bg-zinc-200">
						<h3>Featured Project 1</h3>
					</div>
					<div className="col-span-1 p-4 rounded-sm bg-zinc-300">
						<h3>Featured Project 2</h3>
					</div>
					<div className="col-span-2 p-4 rounded-sm bg-zinc-800">5</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
