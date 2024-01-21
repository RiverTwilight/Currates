/** @type {import('tailwindcss').Config} */
export default {
	prefix: "cr-",
	content: ["dist/**/*.html", "src/**/*.jsx"],
	theme: {
		extend: {},
	},
	variants: {
		extend: {
			width: ["group-hover"], // add this line
		},
	},
	plugins: [],
};
