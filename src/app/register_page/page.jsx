"use client";
import Image from "next/image"

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are necessary.");
      return;
    }

    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError("User already exists.");
        return;
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // function handleFormSubmit(ev) {
  //   ev.preventDefault();
  //   fetch('/api/register', {
  //     method: 'POST',
  //     body: JSON.stringify({ email, password }),
  //     headers: { 'Content-Type': 'application/json' },
  //   });
  // }
  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Register</h1>
      <form className="block max-w-xs mx-auto " onSubmit={handleSubmit}>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Full Name"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="email" />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password" />

        {error && (
          <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
            {error}
          </div>
        )}

        <button type="submit" className="">Register</button>

        <div className="mt-4 text-center text-gray-500">

          or login with provider

        </div>
        <button className="flex gap-4 justify-center">
          <Image src={'/google.png    '} alt={""} width={32} height={32} />
          Login with google
        </button>
        <Link className="text-sm mt-3 text-right" href={"/login_page"}>
          Already have an account? <span className="underline">Login</span>
        </Link>

      </form>

    </section>
  )
}