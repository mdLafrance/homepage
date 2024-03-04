const defaultTheme = require("tailwindcss/defaultTheme")

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

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
                Fredoka: ["Fredoka", ...defaultTheme.fontFamily.sans],
                Apercu: ['var(--font-apercu)', ...defaultTheme.fontFamily.sans],
                NeueMachina: ['var(--font-neuemachina)', ...defaultTheme.fontFamily.sans],
                Grandway: ['Grandway']
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
                isabelline: "#f5ebdf",

                dark: "22223b",
                light: "#F8F8F8",
                grey: {
                    "DEFAULT":  "#222222",
                    "light": "#e9e9e9",
                    "med": "#3E3E3E"
                }

            }
        },
    },
    plugins: [addVariablesForColors],
    darkMode: 'class'
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
