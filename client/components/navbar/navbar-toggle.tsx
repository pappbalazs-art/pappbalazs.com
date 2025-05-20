import { ReactNode, useContext } from "react";
import { NavbarContext } from "./navbar";

import "./navbar-toggle.scss";

export default function NavbarToggle(): ReactNode {
	const { toggleMenu } = useContext(NavbarContext);

	const getLineClassName = (index: number): string => {
		switch (index) {
			case 0:
				return "navbar__toggle__line--top";
			case 1:
				return "navbar__toggle__line--middle";
			case 2:
				return "navbar__toggle__line--bottom";
		}

		// Return nothing if the function gets invalid index.
		return "";
	};

	return (
		<button className="navbar__toggle" onClick={toggleMenu}>
			{/* Create 3 span elements for the 3 lines of the burger menu. */}
			{[...Array(3)].map((e: number, index: number) => (
				<span className={getLineClassName(index)} key={index}></span>
			))}
		</button>
	);
}
