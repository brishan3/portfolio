import Image from "next/image";
import logoImage from "../public/assets/logo.png";
import logoDarkModeImage from "../public/assets/logo-dark-mode.png";
import classNames from "../utilities/classNames";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "./Link/Link";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

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
          ? "fixed w-full h-20 shadow-xl z-[100] px-4 md:px-6 bg-white dark:bg-gray-800 dark:text-gray-50"
          : "fixed w-full h-20 z-[100] px-4 md:px-6 text-gray-900 dark:text-gray-50"
      )}
    >
      <nav className="flex justify-between items-center w-full h-full">
        <Link href="/">
          <div className="cursor-pointer">
            <div className="dark:hidden">
              <Image
                className="h-[2rem] "
                src={logoImage}
                alt="Logo"
                width="100"
                height="47"
              />
            </div>

            <div className="hidden dark:block">
              <Image
                className="h-[2rem] "
                src={logoDarkModeImage}
                alt="Logo"
                width="100"
                height="47"
              />
            </div>
          </div>
        </Link>
        <div>
          <ul className="hidden md:flex uppercase tracking-wider">
            <li className="ml-10 underline-offset-8 decoration-2 decoration-solid decoration-salmon hover:underline">
              <Link href="/" className="text-inherit no-underline">
                Home
              </Link>
            </li>
            <li className="ml-10 underline-offset-8 decoration-2 decoration-solid decoration-salmon hover:underline">
              <Link href="/#about" className="text-inherit no-underline">
                About
              </Link>
            </li>
            <li className="ml-10 underline-offset-8 decoration-2 decoration-solid decoration-salmon hover:underline">
              <Link href="/#skills" className="text-inherit no-underline">
                Skills
              </Link>
            </li>
            <li className="ml-10 underline-offset-8 decoration-2 decoration-solid decoration-salmon hover:underline">
              <Link href="/#projects" className="text-inherit no-underline">
                Projects
              </Link>
            </li>
            <li className="ml-10 underline-offset-8 decoration-2 decoration-solid decoration-salmon hover:underline">
              <Link href="/#contact" className="text-inherit no-underline">
                Contact
              </Link>
            </li>
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
              ? "fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] min-h-screen bg-white dark:bg-gray-800 p-10 ease-in duration-500"
              : "fixed right-[-100%] w-[75%] top-0 p-10 min-h-screen ease-in duration-500"
          }
        >
          <div className="">
            <div className="flex w-full items-center justify-between">
              <div>
                <div className="cursor-pointer">
                  <div className="dark:hidden">
                    <Image
                      className="h-[2rem] "
                      src={logoImage}
                      alt="Logo"
                      width="100"
                      height="47"
                    />
                  </div>

                  <div className="hidden dark:block">
                    <Image
                      className="h-[2rem] "
                      src={logoDarkModeImage}
                      alt="Logo"
                      width="100"
                      height="47"
                    />
                  </div>
                </div>
              </div>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-900 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="py-4">
                Let&apos;s build something together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <nav>
              <ul className="uppercase flex flex-col gap-4">
                <li onClick={handleNav} className="">
                  <Link href="/" className="text-inherit no-underline">
                    Home
                  </Link>
                </li>
                <li onClick={handleNav} className="">
                  <Link href="/#about" className="text-inherit no-underline">
                    About
                  </Link>
                </li>
                <li onClick={handleNav} className="">
                  <Link href="/#skills" className="text-inherit no-underline">
                    Skills
                  </Link>
                </li>
                <li onClick={handleNav} className="">
                  <Link href="/#projects" className="text-inherit no-underline">
                    Projects
                  </Link>
                </li>
                <li onClick={handleNav} className="">
                  <Link href="/#contact" className="text-inherit no-underline">
                    Contact
                  </Link>
                </li>
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
                  href="mailto:brishan.king@gmail.com"
                  className="text-inherit"
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
