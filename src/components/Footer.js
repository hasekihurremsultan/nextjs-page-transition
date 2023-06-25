"use client";

import {motion} from "framer-motion";
import {animation} from "~/Layout";
import {CgExternal} from "react-icons/cg";

const Footer = () => <motion.footer transition={{ duration: .45 }} {...animation} className="text-center pt-3 pb-6 px-1 text-gray-500 dark:text-gray-300 text-xs gap-1">
    &copy; {new Date().getFullYear()} AppName - All rights reserved. Project codes are hosted in
    <a
        href={"https://github.com/hasekihurremsultan/nextjs-page-transition/tree/main"}
        className="underline hover:text-slate-950 transition-colors inline-flex items-center dark:hover:text-blue-200 mt-1"
    >
        <CgExternal /> github
    </a>.
</motion.footer>

export default Footer;