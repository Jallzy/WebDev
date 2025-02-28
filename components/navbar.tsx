"use client"

import Link from "next/link"
import Image from "next/image"
import { Agbalumo } from "next/font/google"
import { useState } from "react"

import { AuthButton } from "./auth-button"

const agbalumo = Agbalumo({
    weight: "400",
    subsets: ["latin"],
})

export default function Navbar() {
    // variable for check is burder menu button pressed or not
    const [isNavActive, setIsNavActive] = useState(false)

    // links to display in navbar using .map()
    const navItems = [
        { url: "/", title: "Home" },
        { url: "/petting-zoo", title: "Petting Zoo" },
        { url: "/cafe?menuCategory=", title: "Café" },
        { url: "/kids-play-park", title: "Kids Play Park" },
    ]

    return (
        <nav className="fixed z-10 flex min-h-[70px] w-full flex-wrap items-center justify-between border-b border-[#c0c0c0] bg-white/95 px-12 md:px-24">
            <Link
                href="/"
                className={`flex h-[70px] items-center text-[28px] font-bold text-transparent ${agbalumo.className} bg-gradient-to-tr from-emerald-600 via-green-400 to-emerald-500 bg-clip-text`}
            >
                <Image width={50} height={50} alt="Logo" src={"/logo.png"} />
            </Link>
            <ul
                className={
                    // changing styles, depends on isNavActive == true or == false
                    "font-medium " +
                    (isNavActive
                        ? "order-3 flex h-full w-full flex-col items-center md:order-last md:h-auto md:w-auto md:flex-row"
                        : "order-2 hidden h-0 w-full flex-col items-center md:order-3 md:flex md:h-auto md:w-auto md:flex-row")
                }
            >
                {/* displaying all nav elements which are stored in var */}
                {navItems.map((item) => (
                    <li
                        key={item.title}
                        className="mr-0 mb-2.5 md:mr-5 md:mb-0 md:last:mr-0"
                    >
                        <Link
                            href={item.url}
                            className="after:bg-primary hover:text-primary relative text-[16px] text-[#0a0a0a] transition duration-100 ease-linear after:absolute after:-bottom-0.5 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:transition-all after:duration-100 after:ease-linear after:content-[''] hover:after:w-4"
                        >
                            {item.title}
                        </Link>
                    </li>
                ))}

                {/* Login button */}
                <AuthButton />
            </ul>
            {/* Burger menu button */}
            <button
                type="button"
                className="flex h-5 w-8 cursor-pointer flex-col justify-between bg-transparent md:hidden"
                onClick={() => {
                    setIsNavActive(!isNavActive)
                    console.log(isNavActive)
                }}
            >
                <span
                    className={
                        isNavActive
                            ? "h-1 w-8 rounded-sm bg-green-500"
                            : "h-1 w-8 rounded-sm bg-black"
                    }
                ></span>
                <span
                    className={
                        isNavActive
                            ? "h-1 w-8 rounded-sm bg-green-500"
                            : "h-1 w-8 rounded-sm bg-black"
                    }
                ></span>
                <span
                    className={
                        isNavActive
                            ? "h-1 w-8 rounded-sm bg-green-500"
                            : "h-1 w-8 rounded-sm bg-black"
                    }
                ></span>
            </button>
        </nav>
    )
}
