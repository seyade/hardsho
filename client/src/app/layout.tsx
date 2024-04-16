import type { Metadata } from "next";
import {
	Inter,
	Inconsolata,
	Plus_Jakarta_Sans,
	Open_Sans,
	Space_Grotesk,
} from "next/font/google";
import ApolloWrapper from "./ApolloWrapper";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const inconsolata = Inconsolata({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600"],
	variable: "--font-inconsolota",
});

const spacegrotesk = Space_Grotesk({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	variable: "--font-spacegrotesk",
});

const plusjakartasans = Plus_Jakarta_Sans({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800"],
	variable: "--font-plusjakartasans",
});

const opensans = Open_Sans({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800"],
	variable: "--font-opensans",
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
			<body
				className={`${inter.className} ${inconsolata.variable} ${plusjakartasans.variable} ${opensans.variable} ${spacegrotesk.variable}`}
			>
				<div className="h-full bg-gradient-to-b from-[#00042d] via-[#170e00] to-[#04001e]">
					<main className="m-auto w-full lg:max-w-[1440px] text-white ">
						<ApolloWrapper>{children}</ApolloWrapper>
					</main>
				</div>
			</body>
		</html>
	);
}
