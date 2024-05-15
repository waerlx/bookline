"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            if (res.error) {
                setError("Invalid Credentials");
                return;
            }

            router.replace("dashboard");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl mb-4">Login</h1>
            <form className="block max-w-xs mx-auto " onSubmit={handleSubmit}>
                <input type="email" placeholder="email" value={email} onChange={ev => setEmail(ev.target.value)} />
                <input type="password" placeholder="password" value={password} onChange={ev => setPassword(ev.target.value)} />
                <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2 mb-2">
                    Error message
                </div>
                <button type="submit" className="">Login</button>

                <div className="mt-4 text-center text-gray-500">

                    or login with provider

                </div>
                <button className="flex gap-4 justify-center">
                    <Image src={'/google.png'} alt={""} width={32} height={32} />
                    Login with google
                </button>
                <Link className="text-sm text-right  text-gray-500 " href={"/register_page"}>
                    Don't have an account? <span className="underline">Register</span>
                </Link>

            </form>

        </section>
    )
}