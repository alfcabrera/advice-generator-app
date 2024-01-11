/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["**/*.{html, js}"],
    theme: {
        fontFamily: {
            sans: ["'Manrope'", "'sans-serif'"],
        },
        extend: {
            colors: {
                "light-cyan": "#cee3e9",
                "neon-green": "#52ffa8",
                "grayish-blue": "#4e5d73",
                "dark-grayish-blue": "#323a49",
                "dark-blue": "#1f2632",
            },
            boxShadow: {
                "neon-glow": "0 0 32px 0px rgba(0,0,0,1)",
            },
        },
    },
    plugins: [],
};
