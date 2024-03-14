import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ApolloWrapper from "./ApolloWrapper";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Hardsho App",
	description: "A showcase platform for web developers",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ApolloWrapper>{children}</ApolloWrapper>
			</body>
		</html>
	);
}
