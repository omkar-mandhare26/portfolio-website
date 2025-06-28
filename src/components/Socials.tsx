import React from "react";
import { Button } from "./ui/button";
import socials from "@/data/socialsData";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";

const Socials = () => {
    return (
        <div className="flex flex-wrap gap-2 my-4">
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
        </div>
    );
};

export default Socials;
