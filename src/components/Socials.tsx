"use client";

import socials from "@/data/socialsData";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";

const Socials = () => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                filter: "blur(10px)",
            }}
            animate={{
                opacity: 1,
                filter: "blur(0px)",
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="flex flex-wrap gap-2 my-4"
        >
            <div>
                <a
                    href="/Omkar_Mandhare_Resume.pdf"
                    className="inline-flex items-center"
                    download
                >
                    <Button className="cursor-pointer">Download Resume</Button>
                </a>
            </div>
            <div className="flex flex-wrap gap-2 justify-start items-center">
                {socials.map((social) => (
                    <Tooltip key={social.label}>
                        <TooltipTrigger asChild>
                            <a
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button
                                    variant="ghost"
                                    className="p-0 flex items-center justify-center"
                                    size={"icon"}
                                >
                                    {social.icon}
                                </Button>
                            </a>
                        </TooltipTrigger>
                        <TooltipContent>{social.label}</TooltipContent>
                    </Tooltip>
                ))}
            </div>
        </motion.div>
    );
};

export default Socials;
