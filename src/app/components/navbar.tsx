"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaUser, FaBell } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="p-8 m-4">
      <nav className="p-6 fixed top-0 left-0 w-full shadow-md z-10 bg-white">
        <div className="container mx-auto flex items-center justify-between">
          <div>
            <Link href="/" className="flex items-center space-x-4">
              <Image
                src="/logo.png"
                alt="Company Logo"
                width={180}
                height={50}
              />
            </Link>
          </div>
          <ul className="hidden md:flex space-x-10">
            <li>
              <Link
                href="/products"
                className="font-bold text-lg text-zinc-900 hover:text-blue-600 transition"
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="font-bold text-lg text-zinc-900 hover:text-blue-600 transition"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="font-bold text-lg text-zinc-900 hover:text-blue-600 transition"
              >
                Insights
              </Link>
            </li>
            <li>
              <Link
                href="/store"
                className="font-bold text-lg text-zinc-900 hover:text-blue-600 transition"
              >
                Stores
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="font-bold text-lg text-zinc-900 hover:text-blue-600 transition"
              >
                How it Works
              </Link>
            </li>
          </ul>
          <div className="flex items-center space-x-6">
            <div className="relative">
              <Link href="/notifications">
                <FaBell className="p-1 text-4xl text-gray-800 border-2 border-gray-800 rounded-full hover:bg-gray-800 hover:text-white transition" />
              </Link>
            </div>
            <div className="relative">
              <Link href="/signin">
                <FaUser className="p-1 text-4xl text-gray-800 border-2 border-gray-800 rounded-full hover:bg-gray-800 hover:text-white transition" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
