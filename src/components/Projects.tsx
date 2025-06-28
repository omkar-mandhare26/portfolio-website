import projects from "@/data/projects";
import React from "react";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import { BsGithub } from "react-icons/bs";

const Projects = () => (
    <div className="my-4">
        <div className="text-2xl font-bold">Projects</div>
        <div>
            {projects.map((proj, idx) => (
                <div key={idx}>
                    <div className="py-4">
                        <div className="flex justify-between items-center">
                            <div className="text-lg font-semibold items-center">
                                {proj.title}
                            </div>
                            <div className="flex justify-end items-center">
                                {proj.githubLinks.map((link, idx) => (
                                    <div key={idx}>
                                        <a href={link} target="_blank">
                                            <Button variant={"ghost"}>
                                                <BsGithub className="block lg:hidden" />
                                                <span className="hidden lg:block">
                                                    Github
                                                </span>
                                                {proj.githubLinks.length > 1
                                                    ? idx === 0
                                                        ? "(Frontend)"
                                                        : "(Backend)"
                                                    : ""}
                                                <ExternalLink className="hidden lg:block" />
                                            </Button>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="text-justify text-sm text-zinc-600 dark:text-zinc-300">
                            {proj.description}
                        </div>
                        <div className="flex flex-wrap gap-2 justify-start mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                            {proj.technologies.map((tech, idx) => (
                                <div key={idx}>
                                    {tech}{" "}
                                    {idx !== proj.technologies.length - 1 && (
                                        <span>/ </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default Projects;
