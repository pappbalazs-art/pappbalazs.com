import { ReactNode } from "react";
import { Link } from "../link";

import "./navbar-menu-link.scss";

export default function NavbarMenuLink({
	href,
	children,
}: {
	href: string;
	children: string;
}): ReactNode {
	return (
		<Link className="navbar__menu__link" href={href}>
			{children}
		</Link>
	);
}
