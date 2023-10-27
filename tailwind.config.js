/** @type {import('tailwindcss').Config} */
const {
    hamburgerKeyframes,
    hamburgerAnimations,
} = require('./styles/animations/hamburgerMenu')
const {
    dropdownKeyframes,
    dropdownAnimations,
} = require('./styles/animations/dropdownMenu')

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                mullish: ['Mulish', 'sans-serif'],
            },
            keyframes: {
                ...hamburgerKeyframes,
                ...dropdownKeyframes,
            },
            animation: {
                ...hamburgerAnimations,
                ...dropdownAnimations,
            },
        },
    },
    plugins: [],
}
