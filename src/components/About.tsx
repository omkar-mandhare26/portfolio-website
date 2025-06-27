import React from "react";

const About = () => {
    return (
        <div className="my-4">
            <div className="text-2xl font-bold">About</div>
            <div className="text-zinc-600 dark:text-zinc-300 text-justify pt-2">
                {"I'm"} a full-stack developer from India with a passion for
                building fast, modern, and scalable web applications. My core
                tech stack includes{" "}
                <span className="font-semibold">
                    {" "}
                    Next.js, Node.js, MongoDB, and Tailwind CSS
                </span>
                . I enjoy turning ideas into real-world products with clean
                design and solid architecture. I love challenges, big goals, and
                constant growth.
                <br />
                Open to freelance and full-time opportunities — {"let's"}{" "}
                connect!
            </div>
        </div>
    );
};

export default About;
