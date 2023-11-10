'use client'
import Image from 'next/image'
import { useState } from 'react'
import { Hamburger } from '../btns/Hamburger'
import { ConnectButton } from '@rainbow-me/rainbowkit'

type DropdownProp = {
    isMenuOpen: boolean
}

export const MobileHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className="w-full flex flex-col hidde">
            <div
                className={` h-20 border-solid border-b flex justify-between items-center px-2 ${
                    isMenuOpen ? 'bg-[#121212] border-black' : 'bg-white'
                }`}
            >
                <div className="w-24 relative ">
                    <Image
                        src="/logo"
                        width={342}
                        height={132}
                        alt="UPLOAD LOGO HERE"
                        className="object-contain"
                        priority={true}
                    ></Image>
                </div>
                <div className="mr-4 flex items-center gap-3">
                    <ConnectButton label="login"></ConnectButton>
                    <span
                        className={`material-symbols-outlined ${
                            isMenuOpen ? 'text-white' : 'text-black'
                        }`}
                    >
                        search
                    </span>
                    <Hamburger
                        setIsMenuOpen={setIsMenuOpen}
                        isMenuOpen={isMenuOpen}
                    ></Hamburger>
                </div>
            </div>

            <div className="w-full">
                <DropdownMenu isMenuOpen={isMenuOpen}></DropdownMenu>
            </div>
        </div>
    )
}

const DropdownMenu = ({ isMenuOpen }: DropdownProp) => {
    return (
        <div
            className={`w-full h-screen bg-[#252525] text-white flex flex-col overflow-hidden ${
                isMenuOpen
                    ? 'animate-dropdownMenuIn'
                    : 'animate-dropdownMenuOut hidden'
            } `}
        >
            <ul className="text-lg mt-4 my-2 w-full px-2">
                <li className="py-4">
                    <div className="flex justify-between items-center">
                        <button>Projects</button>
                        <span className="material-symbols-outlined">
                            chevron_right
                        </span>
                    </div>
                </li>
                <li className="py-4">
                    <div className="flex justify-between items-center ">
                        <button>Explore</button>
                        <span className="material-symbols-outlined">
                            chevron_right
                        </span>
                    </div>
                </li>
                <li className="py-4">
                    <div className="flex justify-between items-center ">
                        <button>Resources</button>
                        <span className="material-symbols-outlined">
                            chevron_right
                        </span>
                    </div>
                </li>
            </ul>
        </div>
    )
}
