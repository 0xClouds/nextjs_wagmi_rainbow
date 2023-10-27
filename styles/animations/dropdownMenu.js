const dropdownKeyframes = {
    dropdownMenu: {
        '0%': {
            transform: 'translateY(-100%)',
        },
        '100%': {
            transform: 'translateY(100)',
        },
    },
}

const dropdownAnimations = {
    dropdownMenu: 'dropdownMenu 1s linear forwards',
}

module.exports = { dropdownKeyframes, dropdownAnimations }
