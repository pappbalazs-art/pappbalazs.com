import { ReactNode } from "react";

import "./link.scss";

export default function Link({
	href,
	className,
	children,
}: {
	href: string;
	className?: string;
	children: ReactNode;
}): ReactNode {
	return (
		<a href={href} className={className}>
			{children}
		</a>
	);
}
