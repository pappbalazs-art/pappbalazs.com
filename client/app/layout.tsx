import "@/styles/normalize.scss";
import "@/styles/globals.scss";
import type { Metadata, Viewport } from "next";

import "./layout.scss";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
	title: "Papp Balázs",
	description: "I am a Director of Photography based in Budapest, Hungary.",
	creator: "Papp Balázs",
	authors: { name: "Papp Balázs" },
	publisher: "Papp Balázs",
	keywords:
		"cinematography, photography, film, films, photo, photos, portraits, wedding",
	robots: {
		index: true,
		follow: true,
	},
	alternates: {
		canonical: "https://pappbalazs.com",
	},
	openGraph: {
		title: "Papp Balázs",
		description:
			"I am a Director of Photography based in Budapest, Hungary.",
		emails: ["hello@pappbalazs.com"],
		phoneNumbers: ["+36705527728"],
		siteName: "Papp Balázs",
		locale: "hu_HU",
		url: "https://pappbalazs.com",
	},
	other: {
		language: "english",
	},
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	minimumScale: 1,
	maximumScale: 1,
	userScalable: false,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<Navbar />

				<main className="wrapper">{children}</main>

				<Footer />
			</body>
		</html>
	);
}
