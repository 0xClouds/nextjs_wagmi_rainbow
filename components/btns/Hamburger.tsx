'use client'
import { useState, useEffect, SetStateAction } from 'react'
enum ToggleState {
    Start = 'START',
    Open = 'OPEN',
    Close = 'CLOSE',
}

type Props = {
    setIsMenuOpen: (value: boolean) => void
    isMenuOpen: boolean
}

export const Hamburger = ({ setIsMenuOpen, isMenuOpen }: Props) => {
    const [isToggle, setIsToggle] = useState<ToggleState>(ToggleState.Start)

    const toggleHamburger = () => {
        if (isToggle === ToggleState.Start || isToggle === ToggleState.Close) {
            setIsToggle(ToggleState.Open)
            setIsMenuOpen(true)
            document.documentElement.style.overflow = 'hidden'
            document.body.style.overflow = 'hidden'
        } else if (isToggle === ToggleState.Open) {
            setIsToggle(ToggleState.Close)
            setIsMenuOpen(false)
            document.documentElement.style.overflow = 'auto'
            document.body.style.overflow = 'auto'
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
            className={`w-fit h-[28px]border-solid border-grey-50 flex flex-col justify-between p-2 rounded-md  ${
                isMenuOpen ? 'bg-[#121212] ' : 'bg white'
            }`}
        >
            <div
                className={`w-[20px] h-[2px] ${
                    isMenuOpen ? 'bg-white' : 'bg-black'
                } mb-[3px] rounded-lg ${animationClassTop}`}
            ></div>
            <div
                className={`w-[20px] h-[2px] ${
                    isMenuOpen ? 'bg-white' : 'bg-black'
                } mb-[3px] rounded-lg ${animationClassMiddle}`}
            ></div>
            <div
                className={`w-[20px] h-[2px] ${
                    isMenuOpen ? 'bg-white' : 'bg-black'
                }  rounded-lg ${animationClassBottom}`}
            ></div>
        </button>
    )
}
