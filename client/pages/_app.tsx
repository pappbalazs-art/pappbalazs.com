import type { AppProps } from "next/app";

import { HeroUIProvider } from "@heroui/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";

import { fontSans } from "@/config/fonts";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();

	return (
		<HeroUIProvider navigate={router.push}>
			<NextThemesProvider>
				<Component {...pageProps} />
			</NextThemesProvider>
		</HeroUIProvider>
	);
}

export const fonts = {
	sans: fontSans.style.fontFamily,
};
