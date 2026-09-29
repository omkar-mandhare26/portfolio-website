import React from "react";

const About = () => {
    return (
        <div className="my-4">
            <div className="text-2xl font-bold">About</div>
            <div className="text-zinc-600 dark:text-zinc-300 text-justify pt-2">
                {"I'm"} an AI/ML developer from India with a passion for
                building intelligent, practical, and data-driven applications. My core
                tech stack includes{" "}
                <span className="font-semibold">
                    {" "}
                    Python, Machine Learning, Generative AI, LLMs, and Scikit-learn
                </span>
                . I enjoy turning data and AI concepts into real-world solutions with clean implementation and reliable architecture. I love challenges, big goals, and constantly learning new technologies.
                <br />
                Open to freelance and full-time opportunities — {"let's"}{" "}
                connect!
            </div>
        </div>
    );
};

export default About;