"use client"

import Link from "next/link";
import Search from "./Search";
import React from 'react';
import dynamic from 'next/dynamic';
const SearchComponent = dynamic(() => import('@/components/layout/Search'), { ssr: false });
export default function Header() {

  return (
    <header className="flex items-center justify-between" >
      <nav className="flex gap-8 text-gray-500 font-semibold">
        <Link className="text-primary font-semibold text-2xl" href="/">BookLine</Link>

        <Link href="/">Home</Link>
        <Link href="">Menu</Link>
        <Link href="">About</Link>
        <Link href="">Contact</Link>


      </nav>
      <SearchComponent />
      <nav className="flex items-center gap-4 text-gray-500 font-semibold">
        {/* <Link href={"/register"}>Login</Link> */}
        <Link href="/login_page" className="bg-primary rounded-full text-white px-8 py-2">Login</Link>

      </nav>
    </header>
  );
}