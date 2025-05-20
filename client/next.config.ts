import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactStrictMode: true,
	output: "export",
	sassOptions: {
		implementation: "sass",
	},
};

export default nextConfig;
