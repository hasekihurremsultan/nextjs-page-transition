"use client";

import {motion} from "framer-motion";
import {animation} from "~/Layout";

const Footer = () => <motion.footer {...animation} className="text-center pt-3 pb-6 text-gray-400 dark:text-gray-400 text-xs">
    &copy; {new Date().getFullYear()} AppName - All rights reserved.
</motion.footer>

export default Footer;