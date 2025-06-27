import skills from "@/data/skills";
import React from "react";
import { Button } from "./ui/button";

const Skills = () => {
    return (
        <div className="my-4">
            <div className="text-2xl font-bold">Skills</div>
            <div className="flex flex-wrap gap-2 justify-center mt-2">
                {skills.map((val, idx) => (
                    <div key={idx}>
                        <Button variant={"outline"} className="cursor-text">
                            {" "}
                            {val}
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
