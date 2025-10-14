import StaggerCompPage from "@/components/StaggerCompPage";
import Introduction from "@/components/Introduction";
import Socials from "@/components/Socials";

const HomePage = () => {
    return (
        <div className="min-h-screen w-full transition-colors duration-300 bg-zinc-50 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100">
            <div className="w-3/4 lg:w-1/2 m-auto min-h-screen">
                <Introduction />
                <Socials />
                <StaggerCompPage />
            </div>
        </div>
    );
};

export default HomePage;
