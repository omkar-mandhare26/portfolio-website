"use client";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { useEffect, useRef, useState } from "react";
import { FiMessageSquare } from "react-icons/fi";
import axios, { AxiosError } from "axios";
import socials from "@/data/socialsData";
import { Textarea } from "./ui/textarea";
import { Terminal } from "lucide-react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

const Connect = () => {
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);
    const [formAlert, setFormAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [isFormError, setIsFormError] = useState(false);

    useEffect(() => {
        if ("scrollRestoration" in history) {
            history.scrollRestoration = "manual";
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const name = nameRef.current?.value;
        const email = emailRef.current?.value;
        const message = messageRef.current?.value;

        if (!name || !email || !message) {
            setIsFormError(true);
            setFormAlert(true);
            setAlertMessage("Invalid fields");
            return;
        } else {
            setIsFormError(false);
            setFormAlert(false);
            setAlertMessage("");
        }

        try {
            const res = await axios.post("/api/v1/connect", {
                name,
                email,
                message,
            });
            const data = res.data;
            setAlertMessage(data.message);
            setFormAlert(true);
            setIsFormError(false);
        } catch (err) {
            setFormAlert(true);
            setIsFormError(true);
            if (err instanceof Error || err instanceof AxiosError) {
                setAlertMessage(err.message);
            } else setAlertMessage("Unknown Error");
        }
    };

    return (
        <div className="my-4">
            <div className="flex flex-col lg:flex-row justify-center gap-2 h-auto">
                <div className="flex-1 bg-white dark:bg-zinc-800 rounded">
                    <div className="w-9/10 mx-auto pb-4">
                        <div className="text-2xl font-bold my-4">
                            Connect with me
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            {socials.map((social, idx) => (
                                <a
                                    href={social.href}
                                    target="_blank"
                                    key={idx}
                                    className="flex justify-start items-center gap-4 bg-zinc-100 dark:bg-zinc-700 rounded px-4 py-2 hover:bg-zinc-300 dark:hover:bg-zinc-900 transition-all duration-200 hover:px-6"
                                >
                                    <div className="text-2xl">
                                        {social.icon}
                                    </div>
                                    <div>
                                        <div>{social.label}</div>
                                        <div className="text-xs lg:text-sm text-zinc-600 dark:text-zinc-300">
                                            {social.username}
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex-1 bg-white dark:bg-zinc-800 rounded">
                    <div className="w-9/10 mx-auto pb-4">
                        <div className="text-2xl font-bold my-4">
                            Send a message
                        </div>
                        <div>
                            <form onSubmit={handleSubmit} noValidate>
                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        type="text"
                                        id="name"
                                        placeholder="Omkar Mandhare..."
                                        ref={nameRef}
                                    />
                                </div>
                                <div className="grid w-full items-center gap-3 mt-4">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        type="email"
                                        id="email"
                                        placeholder="omkarmandhare26@gmail.com"
                                        ref={emailRef}
                                    />
                                </div>
                                <div className="grid w-full gap-3 my-4">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea
                                        placeholder="Type your message here."
                                        id="message"
                                        ref={messageRef}
                                    />
                                </div>

                                <Button className="w-full" type="submit">
                                    Send message <FiMessageSquare />
                                </Button>
                            </form>
                            {formAlert && (
                                <Alert
                                    variant={
                                        isFormError ? "destructive" : "default"
                                    }
                                    className="mt-4"
                                >
                                    <Terminal />
                                    <AlertTitle>
                                        {isFormError
                                            ? "Error Submitting form"
                                            : "Success"}
                                    </AlertTitle>
                                    <AlertDescription>
                                        {alertMessage}
                                    </AlertDescription>
                                </Alert>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Connect;
