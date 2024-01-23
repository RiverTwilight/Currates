/** @type {import('tailwindcss').Config} */
export default {
	prefix: "cr-",
	content: ["dist/**/*.html", "src/**/*.jsx"],
	theme: {
		extend: {
			colors: {
				themed: {
					primary: "#b2913c",
					DEFAULT: "#b2913c",
					dark: "#b2913c",
				},
			},
		},
	},
	variants: {
		extend: {
			width: ["group-hover"], // add this line
		},
	},

	plugins: [],
};
