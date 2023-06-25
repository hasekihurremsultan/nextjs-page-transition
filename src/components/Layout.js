"use client";

import {motion} from "framer-motion";

export const animation = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 30 },
}

const Layout = ({ title }) => <motion.div transition={{ duration: .45 }} {...animation} className="flex flex-col gap-2 text-center max-w-4xl py-4 mx-auto">
    <h1 className="font-bold text-3xl tracking-tighter text-slate-900 dark:text-slate-200 pb-4">{title}</h1>
    <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base py-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda at autem commodi corporis
        dignissimos dolorem et ex harum illum ipsa, ipsum nobis numquam praesentium sequi sunt tempora tempore totam.
    </p>
    <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base py-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda at autem commodi corporis
        dignissimos dolorem et ex harum illum ipsa, ipsum nobis numquam praesentium sequi sunt tempora tempore totam.
    </p>
</motion.div>

export default Layout;