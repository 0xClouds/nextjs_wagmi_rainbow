const hamburgerKeyframes = {
    rotateHamTop: {
        '0%': { transform: 'rotate(0deg) translate(0, 0)' },
        '100%': { transform: 'rotate(45deg) translate(4px, 3px)' },
    },
    rotateHamMiddle: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(500%)' },
    },
    rotateHamBottom: {
        '0%': { transform: 'rotate(0deg) translate(0, 0)' },
        '100%': { transform: 'rotate(-45deg) translate(3.7px, -3.5px)' },
    },
    rotateHamTopExit: {
        '0%': { transform: 'rotate(45deg) translate(5px, 5px)' },
        '100%': { transform: 'rotate(0deg) translate(0, 0)' },
    },
    rotateHamMiddleExit: {
        '0%': { transform: 'translateX(200%)' },
        '100%': { transform: 'translateX(0)' },
    },
    rotateHamBottomExit: {
        '0%': { transform: 'rotate(-45deg) translate(5px, -5px)' },
        '100%': { transform: 'rotate(0deg) translate(0, 0)' },
    },
}

const hamburgerAnimations = {
    rotateHamTop: 'rotateHamTop 0.3s linear forwards',
    rotateHamBottom: 'rotateHamBottom 0.3s linear forwards',
    rotateHamMiddle: 'rotateHamMiddle 0.3s linear forwards',
    rotateHamTopExit: 'rotateHamTopExit 0.3s forwards',
    rotateHamMiddleExit: 'rotateHamMiddleExit 0.3s forwards',
    rotateHamBottomExit: 'rotateHamBottomExit 0.3s forwards',
}

module.exports = { hamburgerKeyframes, hamburgerAnimations }
