import { ReactElement, ReactNode } from "react";

import "./navbar-menu-item.scss";

export default function NavbarMenuItem({
	children,
}: {
	children: ReactElement;
}): ReactNode {
	return <li className="navbar__menu__item">{children}</li>;
}
