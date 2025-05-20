"use client";

import { createContext, ReactNode, useState } from "react";
import clsx from "clsx";

import NavbarToggle from "./navbar-toggle";
import NavbarMenu from "./navbar-menu";
import NavbarMenuItem from "./navbar-menu-item";
import NavbarMenuLink from "./navbar-menu-link";

import "./navbar.scss";

interface INavbarContext {
	isMenuOpen: boolean;
	toggleMenu(): void;
}

export const NavbarContext = createContext<INavbarContext>(
	{} as INavbarContext
);

export default function Navbar(): ReactNode {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<NavbarContext.Provider value={{ isMenuOpen, toggleMenu }}>
			<nav className={clsx("navbar__wrapper", isMenuOpen && "open")}>
				<div className="navbar__container">
					<NavbarMenu>
						<NavbarMenuItem>
							<NavbarMenuLink href="/">Home</NavbarMenuLink>
						</NavbarMenuItem>
						<NavbarMenuItem>
							<NavbarMenuLink href="/work">Work</NavbarMenuLink>
						</NavbarMenuItem>
						<NavbarMenuItem>
							<NavbarMenuLink href="/contact">
								Contact
							</NavbarMenuLink>
						</NavbarMenuItem>
					</NavbarMenu>

					<NavbarToggle />
				</div>
			</nav>
		</NavbarContext.Provider>
	);
}
