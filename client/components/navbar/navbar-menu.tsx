import { ReactNode } from "react";

import "./navbar-menu.scss";

export default function NavbarMenu({
	children,
}: {
	children: ReactNode;
}): ReactNode {
	return <ul className="navbar__menu__container">{children}</ul>;
}
