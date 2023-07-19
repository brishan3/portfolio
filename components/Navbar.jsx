import Image from "next/image";

import logoImage from "../public/assets/logo.png";
import logoDarkModeImage from "../public/assets/logo-dark-mode.png";
import classNames from "../utilities/classNames";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "./Link/Link";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navTransparent, setNavTransparent] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (
      [
        "/ohmpage",
        "/instock",
        "/brainflix",
        "/bandsite",
        "/coffeeshop",
        "/travelsite",
      ].includes(router.asPath)
    ) {
      setNavTransparent(true);
    } else {
      setNavTransparent(false);
    }
  });

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY > 1) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <header
      className={classNames(
        "transition-all",
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] px-4 bg-white dark:bg-gray-800 dark:text-gray-50"
          : "fixed w-full h-20 z-[100] px-4 text-gray-900 dark:text-gray-50",
        !navTransparent && "bg-white dark:bg-gray-800 dark:text-gray-50"
      )}
    >
      <nav className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <div className="cursor-pointer">
            <div className="dark:hidden">

              <Image
                className="h-[2rem] "
                src={logoImage}
                alt="Logo"
                width="105"
                height="40"
              />
            </div>

            <div className="hidden dark:block">
            <Image
                className="h-[2rem] "
                src={logoDarkModeImage}
                alt="Logo"
                width="105"
                height="40"
              />
            </div>
          </div>
        </Link>
        <div>
          <ul className="hidden md:flex">
            <Link href="/" className="text-inherit no-underline">
              <li className="ml-10 text-sm uppercase underline-offset-8 decoration-2 decoration-solid decoration-salmon hover:underline">
                Home
              </li>
            </Link>
            <Link href="/#about" className="text-inherit no-underline">
              <li className="ml-10 text-sm uppercase underline-offset-8 decoration-2 decoration-solid decoration-salmon hover:underline">
                About
              </li>
            </Link>
            <Link href="/#skills" className="text-inherit no-underline">
              <li className="ml-10 text-sm uppercase underline-offset-8 decoration-2 decoration-solid decoration-salmon hover:underline">
                Skills
              </li>
            </Link>
            <Link href="/#projects" className="text-inherit no-underline">
              <li className="ml-10 text-sm uppercase underline-offset-8 decoration-2 decoration-solid decoration-salmon hover:underline">
                Projects
              </li>
            </Link>
            <Link href="/#contact" className="text-inherit no-underline">
              <li className="ml-10 text-sm uppercase underline-offset-8 decoration-2 decoration-solid decoration-salmon hover:underline">
                Contact
              </li>
            </Link>
          </ul>
          <div
            onClick={handleNav}
            className="md:hidden hover:scale-110 duration-300 cursor-pointer"
          >
            <AiOutlineMenu size="25" />
          </div>
        </div>
      </nav>
      <div
        className={
          nav
            ? "md:hidden transition-background fixed left-0 top-0 w-full h-screen bg-black/60 ease-in duration-500"
            : "md:hidden z-[-1] transition-background fixed left-[100%] top-0 w-full h-screen bg-black/0 ease-in duration-500"
        }
      >
        <div
          className={
            nav
              ? "fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white dark:bg-gray-800 p-10 ease-in duration-500"
              : "fixed right-[-100%] w-[75%] top-0 p-10 h-screen ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image src={logoImage} alt="Logo" width="87" height="35" />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-900 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] sm:w-[90%] py-4">
                Let&apos;s build something together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <nav>
              <ul className="uppercase">
                <Link href="/" className="text-inherit no-underline">
                  <li onClick={handleNav} className="py-4 text-sm">
                    Home
                  </li>
                </Link>
                <Link href="/#about" className="text-inherit no-underline">
                  <li onClick={handleNav} className="py-4 text-sm">
                    About
                  </li>
                </Link>
                <Link href="/#skills" className="text-inherit no-underline">
                  <li onClick={handleNav} className="py-4 text-sm">
                    Skills
                  </li>
                </Link>
                <Link href="/#projects" className="text-inherit no-underline">
                  <li onClick={handleNav} className="py-4 text-sm">
                    Projects
                  </li>
                </Link>
                <Link href="/#contact" className="text-inherit no-underline">
                  <li onClick={handleNav} className="py-4 text-sm">
                    Contact
                  </li>
                </Link>
              </ul>
            </nav>
            <div className="pt-[10vh]">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let&apos;s Connect
              </p>
              <div className="flex gap-6 flex-wrap items-center justify-center my-4 w-fit">
                <Link
                  href="https://www.linkedin.com/in/brishan-king/"
                  className="text-inherit"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-900 p-3 cursor-pointer hover:scale-110 ease-in-out duration-200">
                    <FaLinkedinIn />
                  </div>
                </Link>
                <Link
                  href="https://github.com/brishan3"
                  className="text-inherit"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-900 p-3 cursor-pointer hover:scale-110 ease-in-out duration-200">
                    <FaGithub />
                  </div>
                </Link>
                <Link
                  href="mailto:brishan.king@gmail.com" className="text-inherit"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-900 p-3 cursor-pointer hover:scale-110 ease-in-out duration-200">
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href="/#contact" className="text-inherit">
                  <div
                    onClick={handleNav}
                    className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-900 p-3 cursor-pointer hover:scale-110 ease-in-out duration-200"
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
