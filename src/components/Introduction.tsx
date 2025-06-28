import React from "react";
import ThemeToggle from "./ThemeToggle";

const Introduction = () => {
    return (
        <>
            <div className="flex pt-20 justify-between">
                <div className="text-2xl font-extrabold">
                    Hey, {"I'm"} Omkar 👋
                </div>
                <div className="flex">
                    <ThemeToggle />
                </div>
            </div>
            <hr className="mt-4" />
            <div className="text-sm lg:text-md my-4 text-slate-900 dark:text-slate-100">
                Full-stack dev focused on building intuitive products. <br />
                Dreaming big, learning fast, and shipping often.
            </div>
        </>
    );
};

export default Introduction;
