import { Head } from "./head";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
	children,
	isCentered,
	withoutNavbar,
}: {
	children: React.ReactNode;
	isCentered?: Boolean;
	withoutNavbar?: Boolean;
}) {
	children = !isCentered ? (
		children
	) : (
		<section className="flex flex-col items-center justify-center gap-4 md:py-10">
			<div className="inline-block max-w-lg justify-center">
				{children}
			</div>
		</section>
	);

	return (
		<div className="relative flex flex-col h-screen">
			<Head />
			{!withoutNavbar && <Navbar />}
			<main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
				{children}
			</main>
		</div>
	);
}
