const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                Poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
                Bebas: ["Bebas Neue", ...defaultTheme.fontFamily.sans],
                Kanit: ["Kanit", ...defaultTheme.fontFamily.sans],
                Lora: ["Lora", ...defaultTheme.fontFamily.sans],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                default: '#1e1e2f',
                space_cadet: "#22223b",
                ultra_violet: "#4a4e69",
                rose_quartz: "#9a8c98",
                pale_dogwood: "#c9ada7",
                isabelline: "#f2e9e4",
            }
        },
    },
    plugins: [],
    darkMode: 'class'
};
