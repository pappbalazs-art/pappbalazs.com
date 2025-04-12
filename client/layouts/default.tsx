import { Head } from "./head";

import { AdminNavbar } from "@/components/admin-navbar";

export default function DefaultLayout({
	children,
	isCentered,
	isAdminNavbar,
	withoutNavbar,
}: {
	children: React.ReactNode;
	isCentered?: Boolean;
	isAdminNavbar?: Boolean;
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
			{!withoutNavbar && isAdminNavbar && <AdminNavbar />}
			<main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
				{children}
			</main>
		</div>
	);
}
