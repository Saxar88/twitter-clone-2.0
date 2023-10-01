import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				twitter: "#1d9bf0",
				twitterSecondaryDark: "#202327",
				twitterSecondaryLight: "#536471",
				twitterTextDark: "#e7e9ea",
				twitterTextLight: "#0f1419",
				twitterTextSecondary: "#71767b",
				twitterBg: "#e6ecf0",
			},
		},
	},
	plugins: [],
};
export default config;
