import type { Metadata } from "next";
import { Inter, Inconsolata } from "next/font/google";
import ApolloWrapper from "./ApolloWrapper";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const inconsolata = Inconsolata({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600"],
	variable: "--font-inconsolota",
});

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
			<body className={`${inter.className} ${inconsolata.variable}`}>
				<ApolloWrapper>{children}</ApolloWrapper>
			</body>
		</html>
	);
}
