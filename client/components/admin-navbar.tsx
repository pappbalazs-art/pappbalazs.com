import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/providers/auth-provider";

import {
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
	Navbar as NavbarUINavbar,
} from "@heroui/navbar";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";

export function AdminNavbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const router = useRouter();
	const { isAuthenticated } = useAuth();

	const handleSignOut = () => {
		signOut(auth)
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;

				// TO-DO: Adding a toast with the error message.
			})
			.finally(() => {
				router.push("/admin");
			});
	};

	return (
		<NavbarUINavbar isBordered onMenuOpenChange={setIsMenuOpen}>
			<NavbarContent className="hidden sm:flex gap-4" justify="end">
				<NavbarItem>
					<Link color="foreground" href="#">
						Beállítások
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Button
						as={Link}
						color="danger"
						variant="flat"
						href="#"
						onPress={(e) => handleSignOut()}
					>
						Kijelentkezés
					</Button>
				</NavbarItem>
			</NavbarContent>

			<NavbarMenuToggle
				className="sm:hidden"
				aria-label={isMenuOpen ? "Menü bezárása" : "Menü kinyitása"}
			/>
			<NavbarMenu>
				<NavbarMenuItem>
					<Link
						className="w-full"
						color="foreground"
						size="lg"
						href="#"
					>
						Beállítások
					</Link>
					<Link
						className="w-full"
						color="danger"
						size="lg"
						href="#"
						onPress={(e) => handleSignOut()}
					>
						Kijelentkezés
					</Link>
				</NavbarMenuItem>
			</NavbarMenu>
		</NavbarUINavbar>
	);
}
