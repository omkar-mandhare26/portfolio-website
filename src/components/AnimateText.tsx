import { motion, useAnimate, stagger } from "motion/react";
import { Fragment, useEffect } from "react";

type propsTypes = {
    text: string;
    classNames?: string;
};

const AnimateText = (props: propsTypes) => {
    const [scope, animate] = useAnimate();

    const startAnimating = () => {
        animate(
            "span",
            { opacity: 1, filter: "blur(0px)", y: 0 },
            { duration: 0.3, ease: "easeInOut", delay: stagger(0.03) }
        );
    };

    useEffect(() => {
        startAnimating();
    });

    return (
        <div ref={scope}>
            {props.text.split(" ").map((word, idx) => (
                <Fragment key={word + idx}>
                    <motion.span
                        className={`${props.classNames} opacity-0 blur-[10px] inline-block text-slate-900 dark:text-slate-100`}
                    >
                        {word} &nbsp;
                    </motion.span>
                    {word.endsWith(".") && <br />}
                </Fragment>
            ))}
        </div>
    );
};

export default AnimateText;
