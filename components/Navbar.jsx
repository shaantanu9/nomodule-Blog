//import {useState, useEffect,useRef} from 'react'
import React from "react";
import SearchBar from "./SearchBar";
//import Navbar from './components/Navbar'
import Link from "next/link";
const Navbar = (props) => {
  return (
    <>
      <header aria-label="Site Header" className="bg-white">
        <div className="mx-auto flex h-16 items-center gap-8 px-4 sm:px-6 lg:px-8">
          <Link className="block text-blog" href="/">
            <span className="sr-only">Home</span>
            <p className="text-2xl font-bold text-blog hover:text-blog/75 ">
              Shodkk
            </p>
          </Link>

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Site Nav" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="font-semibold text-gray-700 transition hover:text-blog/75"
                    href="/"
                  >
                    Careers
                  </Link>
                </li>

                <li>
                  <a
                    className="font-semibold text-gray-700 transition hover:text-blog/75"
                    href="/"
                  >
                    History
                  </a>
                </li>

                <li>
                  <a
                    className="font-semibold text-gray-700 transition hover:text-blog/75"
                    href="/"
                  >
                    Services
                  </a>
                </li>

                <li>
                  <a
                    className="font-semibold text-gray-700 transition hover:text-blog/75"
                    href="/"
                  >
                    Projects
                  </a>
                </li>

                <li>
                  <a
                    className="font-semibold text-gray-700 transition hover:text-blog/75"
                    href="/blog"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    className="font-semibold text-gray-700 transition hover:text-blog/75"
                    href="/about"
                  >
                    About
                  </a>
                </li>
              </ul>
            </nav>

            <SearchBar />

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                  className="block rounded-md bg-blog px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blog/75"
                  href="/"
                >
                  Login
                </a>

                <a
                  className="hidden rounded-md bg-red-100 px-5 py-2.5 text-sm font-medium text-blog transition hover:text-blog/75 sm:block"
                  href="/"
                >
                  Register
                </a>
              </div>

              <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-blog/75 md:hidden">
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default React.memo(Navbar);
