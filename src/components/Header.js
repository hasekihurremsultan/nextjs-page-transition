"use client";

import Link from "next/link";
import {motion} from "framer-motion";
import {usePathname} from "next/navigation";
import {animation} from "~/Layout";

const Header = () => {

    const path = usePathname();

    const links = [
        { label: "Homepage", to: "/" },
        { label: "About Us", to: "/about-us" },
        { label: "Contact Us", to: "/contact-us" },
        { label: "FAQs", to: "/faqs" },
    ]

    return <motion.ul transition={{ duration: .45 }} {...animation} className="flex justify-center flex-wrap">
        {links.map(({label, to}) => (
            <li key={to} className="px-2 md:px-4">
                <Link href={to} className="relative text-blue-700 dark:text-blue-50 hover:underline decoration-blue-500 text-xs sm:text-sm md:text-base">
                    {path === to && (
                        <motion.span
                            className="absolute top-full left-0 block h-px bg-blue-950 w-full dark:bg-blue-50"
                            transition={{ ease: "linear" }}
                            layoutId="underline"
                        />
                    )}
                    {label}
                </Link>
            </li>
        ))}
    </motion.ul>
}

export default Header;