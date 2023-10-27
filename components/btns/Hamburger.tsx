'use client'
import { useState, useEffect, SetStateAction } from 'react'
enum ToggleState {
    Start = 'START',
    Open = 'OPEN',
    Close = 'CLOSE',
}

type Props = {
    setIsMenuOpen: (value: boolean) => void
}

export const Hamburger: React.FC<Props> = ({ setIsMenuOpen }) => {
    const [isToggle, setIsToggle] = useState<ToggleState>(ToggleState.Start)

    const toggleHamburger = () => {
        if (isToggle === ToggleState.Start || isToggle === ToggleState.Close) {
            setIsToggle(ToggleState.Open)
            setIsMenuOpen(true)
        } else if (isToggle === ToggleState.Open) {
            setIsToggle(ToggleState.Close)
            setIsMenuOpen(false)
        }
    }

    const animationClassTop =
        isToggle === ToggleState.Start
            ? ''
            : isToggle === ToggleState.Open
            ? 'animate-rotateHamTop'
            : isToggle === ToggleState.Close
            ? 'animate-rotateHamTopExit'
            : ''

    const animationClassMiddle =
        isToggle === ToggleState.Start
            ? ''
            : isToggle === ToggleState.Open
            ? 'animate-rotateHamMiddle'
            : isToggle === ToggleState.Close
            ? 'animate-rotateHamMiddleExit'
            : ''

    const animationClassBottom =
        isToggle === ToggleState.Start
            ? ''
            : isToggle === ToggleState.Open
            ? 'animate-rotateHamBottom'
            : isToggle === ToggleState.Close
            ? 'animate-rotateHamMiddleBottom'
            : ''

    return (
        <button
            onClick={toggleHamburger}
            className="w-fit bg-white border-solid border-grey-50 flex flex-col justify-between p-2 rounded-md shadow-md overflow-hidden"
        >
            <div
                className={`w-[30px] h-[3px] bg-black mb-1 rounded-lg ${animationClassTop}`}
            ></div>
            <div
                className={`w-[30px] h-[3px] bg-black mb-1 rounded-lg ${animationClassMiddle}`}
            ></div>
            <div
                className={`w-[30px] h-[3px] bg-black mb-1 rounded-lg ${animationClassBottom}`}
            ></div>
        </button>
    )
}
