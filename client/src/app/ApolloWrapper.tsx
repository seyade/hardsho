"use client";

import React from "react";
import { ApolloLink, HttpLink } from "@apollo/client";
import {
	ApolloNextAppProvider,
	NextSSRApolloClient,
	NextSSRInMemoryCache,
	SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";

function makeClient() {
	const httpLink = new HttpLink({
		uri: "http://localhost:4000/graphql",
		fetchOptions: { cache: "no-store" },
	});

	return new NextSSRApolloClient({
		link:
			typeof window === "undefined"
				? ApolloLink.from([
						new SSRMultipartLink({ stripDefer: true }),
						httpLink,
				  ])
				: httpLink,
		cache: new NextSSRInMemoryCache(),
	});
}

const ApolloWrapper = ({ children }: React.PropsWithChildren) => {
	return (
		<ApolloNextAppProvider makeClient={makeClient}>
			{children}
		</ApolloNextAppProvider>
	);
};

export default ApolloWrapper;
