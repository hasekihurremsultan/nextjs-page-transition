"use client";

import {motion} from "framer-motion";
import {animation} from "~/Layout";
import Link from "next/link";
import {CgExternal} from "react-icons/cg";

const Footer = () => <motion.footer {...animation} className="text-center pt-3 pb-6 px-1 text-gray-400 dark:text-gray-400 text-xs flex justify-center gap-1">
    &copy; {new Date().getFullYear()} AppName - All rights reserved. Project codes are hosted in
    <Link
        href="https://nextjs-simple-page-transition.vercel.app/"
        className="underline hover:text-slate-800 transition-colors inline-flex items-center dark:hover:text-blue-200"
    >
        <CgExternal /> github
    </Link>.
</motion.footer>

export default Footer;