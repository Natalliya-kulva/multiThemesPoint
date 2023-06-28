//const colors = require('tailwindcss/colors')
import colors from 'tailwindcss/colors'

export default {
    content: ["./*.{html,js}"],
    darkMode: 'class',
    theme: {
        colors: {
            //primary: colors["var(--link-color)"],

            primary: {
                "extra-dark": "var(--color-primary-extra-dark)",
                dark: "var(--color-primary-dark)",
                light: "var(--color-primary-light)",
                "extra-light": "var(--color-primary-extra-light)",
                "ultra-light": "var(--color-primary-ultra-light)",
                DEFAULT: "var(--color-primary)",
            },
            secondary: {
                "extra-dark": "var(--color-secondary-extra-dark)",
                dark: "var(--color-secondary-dark)",
                light: "var(--color-secondary-light)",
                "extra-light": "var(--color-secondary-extra-light)",
                "ultra-light": "var(--color-secondary-ultra-light)",
                DEFAULT: "var(--color-secondary)",
            },
            ...colors
        },
        extend: {},
    },
    plugins: [],
}
