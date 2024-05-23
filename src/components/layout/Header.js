"use client";

import Link from "next/link";
import Search from "./Search";
import React from 'react';
import dynamic from 'next/dynamic';
import { Button } from "antd";
import { signOut, useSession } from "next-auth/react"; // Импортируем необходимые модули

const SearchComponent = dynamic(() => import('@/components/layout/Search'), { ssr: false });

export default function Header() {
  const { data: session, status } = useSession(); // Используем useSession для получения текущей сессии4
  const user = session?.user;
  let userName = user?.name || user?.email;
  if (userName && userName.includes(' ')) {
    userName = userName.split(' ')[0];
  }


  return (
    <header className="flex items-center justify-between">
      <nav className="flex gap-8 text-gray-500 font-semibold">
        <Link className="text-primary font-semibold text-2xl" href="/">BookLine</Link>
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/about">About</Link>
        <Link href="">Contact</Link>
      </nav>
      <SearchComponent />
      <nav className="flex items-center gap-4 text-gray-500 font-semibold">
        {status === 'authenticated' ? (
          <>
          <Link href="/profile" className="text-primary font-semibold">
              {userName}
            </Link>
          <Button onClick={() => signOut()} className=" bg-primary rounded-full text-white px-8 pb-2 text-base hover:bg-red-400">Logout</Button>
          </>
          
        ) : (
          <Link href="/login_page" className="bg-primary rounded-full text-white px-8 py-2">Login</Link>
        )}
      </nav>
    </header>
  );
}
