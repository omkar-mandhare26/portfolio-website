import Projects from "@/components/Projects";
import Socials from "@/components/Socials";
import Connect from "@/components/Connect";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Introduction from "@/components/Introduction";

const HomePage = () => {
    return (
        <div className="min-h-screen w-full transition-colors duration-300 bg-zinc-50 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100">
            <div className="w-1/2 m-auto min-h-screen">
                <Introduction />
                <Socials />
                <About />
                <Projects />
                <Skills />
                <Connect />
                <div className="flex flex-wrap justify-between text-sm py-8 text-zinc-600 dark:text-zinc-300">
                    <div>Omkar Mandhare</div>
                    <div>Built with Next.js</div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
