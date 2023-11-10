const dropdownKeyframes = {
    dropdownMenuIn: {
        '0%': {
            transform: 'translateX(100%)',
        },
        '100%': {
            transform: 'translateX(0%)',
        },
    },
    dropdownMenuOut: {
        '0%': {
            transform: 'translateX(0%)',
            opacity: '1',
        },
        '100%': {
            transform: 'translateX(100%)',
            opacity: '0',
        },
    },
}

const dropdownAnimations = {
    dropdownMenuIn: 'dropdownMenuIn 0.2s ease-in forwards',
    dropdownMenuOut: 'dropdownMenuOut 0.2s ease-out forwards',
}

module.exports = { dropdownKeyframes, dropdownAnimations }
