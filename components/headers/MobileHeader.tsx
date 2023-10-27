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
        <div className="h-20 border-solid border-b border-gray-100 flex justify-between items-center">
            <div className="w-32 relative">
                <Image
                    src=""
                    width={488}
                    height={128}
                    alt="Matter logo"
                    className="object-contain"
                    priority={true}
                ></Image>
            </div>
            <div className="mr-4">
                <Hamburger setIsMenuOpen={setIsMenuOpen}></Hamburger>
            </div>
            <DropdownMenu isMenuOpen={isMenuOpen}></DropdownMenu>
        </div>
    )
}

const DropdownMenu = ({ isMenuOpen }: DropdownProp) => {
    return (
        <div
            className={`w-screen h-screen  absolute top-20 bg-red-600 ${
                isMenuOpen ? 'block animate-dropdownMenu' : 'hidden'
            }`}
        >
            <ConnectButton></ConnectButton>
        </div>
    )
}
