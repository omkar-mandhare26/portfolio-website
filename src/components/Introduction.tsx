"use client";

import ThemeToggle from "./ThemeToggle";
import { motion } from "motion/react";
import AnimateText from "./AnimateText";

const Introduction = () => {
    return (
        <>
            <div className="flex pt-20 justify-between">
                <AnimateText
                    text="Hey, I'm Omkar Mandhare👋"
                    classNames="text-2xl font-extrabold"
                />
                <div className="flex">
                    <motion.span
                        initial={{
                            opacity: 0,
                            y: -10,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            delay: 0.2,
                            type: "spring",
                            stiffness: 200,
                            mass: 2,
                        }}
                    >
                        <ThemeToggle />
                    </motion.span>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{
                    opacity: 1,
                    filter: "blur(0px)",
                }}
                transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                }}
                className="my-2 border-[0.5px] border-zinc-600 dark:border-zinc-300"
            />
            <AnimateText
                text={
                    "AI/ML developer focused on building practical AI-powered solutions. Dreaming big, learning fast, and shipping often."
                }
                classNames="text-sm lg:text-md"
            />
        </>
    );
};

export default Introduction;
