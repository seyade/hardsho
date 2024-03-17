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
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const Dashboard = () => {
	const [artefacts, setArtefacts] = useState([1, 2, 3, 4]);

	return (
		<div className="grid grid-cols-12 gap-2 p-6">
			<header className="col-span-12">
				<h1 className="text-2xl font-medium mb-6">Dashboard</h1>
			</header>

			<div className="mb-6">
				<Link
					href="/builder"
					className="whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
				>
					Create a showcase
				</Link>
			</div>

			{!artefacts.length ? (
				<div className="col-span-12 grid place-items-center bg-slate-200">
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
				<div className="col-span-12 grid grid-cols-4 gap-2">
					{artefacts.map((art, index) => {
						return (
							<Card className="w-64" key={art}>
								<CardHeader>
									<CardTitle>Card Title {art}</CardTitle>
								</CardHeader>
								<CardContent>[PROJECT THUMBNAIL]</CardContent>
								<CardFooter>
									<Button>Details</Button>
								</CardFooter>
							</Card>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default Dashboard;
