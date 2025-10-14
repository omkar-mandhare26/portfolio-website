"use client";

import { motion } from "motion/react";
import Projects from "./Projects";
import Connect from "./Connect";
import Skills from "./Skills";
import Footer from "./Footer";
import About from "./About";

const StaggerCompPage = () => {
    const componentArray = [
        { comp: <About /> },
        { comp: <Projects /> },
        { comp: <Skills /> },
        { comp: <Connect /> },
        { comp: <Footer /> },
    ];

    const listVariants = {
        animate: {
            transition: {
                staggerChildren: 0.07,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        initial: {
            opacity: 0,
            y: -10,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
            },
        },
    };

    return (
        <>
            <motion.ul
                variants={listVariants}
                initial="initial"
                animate="animate"
            >
                {componentArray.map((val, idx) => (
                    <motion.li variants={itemVariants} key={idx}>
                        {val.comp}
                    </motion.li>
                ))}
            </motion.ul>
        </>
    );
};

export default StaggerCompPage;
