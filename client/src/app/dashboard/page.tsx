"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

const Dashboard = () => {
	const [artefacts, setArtefacts] = useState([1]);

	return (
		<div className="grid grid-cols-12">
			<header className="col-span-12">
				<h1 className="text-2xl font-medium bg-slate-100">Dashboard</h1>
			</header>

			{!artefacts.length ? (
				<div className="col-span-12 grid place-items-center h-screen bg-slate-200">
					<div className="text-center">
						<h1 className="text-xl font-bold mb-10">
							Create your first artefact.
						</h1>

						<Dialog>
							<DialogTrigger asChild>
								<Button>Create</Button>
							</DialogTrigger>
							<DialogContent>
								<DialogHeader>
									<DialogTitle>Create Item</DialogTitle>
								</DialogHeader>
								<div>[CONTENT HERE]</div>
								<Link href="/builder">Start building</Link>
							</DialogContent>
						</Dialog>
					</div>
				</div>
			) : (
				<>
					<div className="col-span-6 bg-slate-200">A</div>
					<div className="col-span-6 bg-slate-300">B</div>
				</>
			)}
		</div>
	);
};

export default Dashboard;
