//const colors = require('tailwindcss/colors')
import colors from 'tailwindcss/colors'

export default {
    content: ["./*.{html,js}"],
    darkMode: 'class',
    theme: {
        colors: {
            //primary: colors["var(--link-color)"],

            primary: {
                darker: "var(--color-primary-darker)",
                dark: "var(--color-primary-dark)",
                light: "var(--color-primary-light)",
                lighter: "var(--color-primary-lighter)",
                lightest: "var(--color-primary-lightest)",
                DEFAULT: "var(--color-primary)",
            },
            secondary: {
                darker: "var(--color-secondary-darker)",
                dark: "var(--color-secondary-dark)",
                light: "var(--color-secondary-light)",
                lighter: "var(--color-secondary-lighter)",
                lightest: "var(--color-secondary-lightest)",
                DEFAULT: "var(--color-secondary)",
            },
            ...colors
        },
        extend: {},
    },
    plugins: [],
}
