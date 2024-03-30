"use client";

import { useQuery } from "@apollo/client";
import { GET_ONE_PROJECT } from "@/graphql/queries";
import Project from "@/components/project/Project";

const Details = ({ id }: { id: string }) => {
	const { data, error, loading } = useQuery(GET_ONE_PROJECT, {
		variables: { projectId: "11" },
	});

	if (loading) return <h1>Loading...!</h1>;
	if (error) return <h1>{error.message}</h1>;

	console.log("ONE PROJECT:::", data);

	return (
		<div className="p-4">
			<Project {...data.project} />
		</div>
	);
};

export default Details;
