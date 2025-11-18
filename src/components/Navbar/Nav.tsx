import React from 'react'
import { Link } from 'react-router-dom'
import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { FaSearch } from 'react-icons/fa'

const Navbar = () => {
    return (
        <div className="w-full fixed top-0 z-10" style={{ backgroundColor: '#EFEFEF' }}>
            <header className="flex w-full justify-between items-center h-16 px-8">
                {/* Logo on the left */}
                <Link to="/" className="logo text-xl font-bold select-none">
                    Rise
                    <span style={{ color: '#3652E1' }}>Blog</span>
                </Link>

                {/* Nav menu on the right */}
                <Menubar className="flex gap-x-8 bg-transparent border-0 shadow-none">
                    <MenubarMenu>
                        <Link to="/">
                            <MenubarTrigger>Home</MenubarTrigger>
                        </Link>
                        <Link to="Articles">
                            <MenubarTrigger>Articles</MenubarTrigger>
                        </Link>
                        <MenubarTrigger>About</MenubarTrigger>
                        <MenubarTrigger>Contact</MenubarTrigger>
                        <FaSearch className="w-5 h-5 text-gray-600 cursor-pointer" />
                    </MenubarMenu>
                </Menubar>
            </header>
        </div>
    )
}

export default Navbar
