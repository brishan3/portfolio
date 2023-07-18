import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";
import heroImg from "../public/assets/projects/InStock.JPG";

const instock = () => {
  return (
    <>
      <Head>
        <title>Brishan King | InStock</title>
        <meta
          name="description"
          content="A modern, full-stack inventory tracking application built using React and Express"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="w-full overflow-hidden min-h-screen">
          <div className="w-screen h-[30vh] lg:h-[40vh] relative">
            <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/50 z-10" />
            <Image
              className="absolute z-1"
              layout="fill"
              objectFit="cover"
              src={heroImg}
              alt="InStock website screenshot"
            />
            <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-4">
              <h2 className="py-2">InStock</h2>
              <h3>React / JavaScript / Sass / Express / Node</h3>
            </div>
          </div>

          <div className="max-w-[1240px] mx-auto p-4 flex flex-col gap-8 pt-8">
            <div className="col-span-4">
              <p>Project</p>
              <h2 className="pb-2">Overview</h2>
              <p>
                <span className="font-bold">InStock</span> is a fully responsive
                inventory management application that allows users to keep track
                of inventories spread across multiple warehouses. Users can add,
                edit, delete both warehouses and inventory items. The app itself
                was built with React and SASS on the frontend and Node and
                Express on the backend.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <a
                  className="button px-8 pt-2 pb-[0.55rem] mt-4"
                  href="https://github.com/brishan3/instock"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Client
                </a>
                <a
                  className="button px-8 pt-2 pb-[0.55rem] mt-4"
                  href="https://github.com/brishan3/instock-api"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  API
                </a>
              </div>
            </div>
            <div className="shadow-xl bg-gray-800 shadow-gray-400 dark:shadow-gray-900 rounded-xl p-4 h-fit min-w-[10rem] flex-shrink-0">
              <div className="">
                <p className="font-bold pb-2">Technologies:</p>
                <ul className="grid grid-cols-3 md:grid-cols-1 gap-2">
                  <li className="flex gap-2 items-center md:justify-start py-2">
                    <RiRadioButtonFill className="pr-1 mt-[1px] flex-shrink-0" />
                    React
                  </li>
                  <li className="flex gap-2 items-center md:justify-start py-2">
                    <RiRadioButtonFill className="pr-1 mt-[1px] flex-shrink-0" />
                    JavaScript
                  </li>
                  <li className="flex gap-2 items-center md:justify-start py-2">
                    <RiRadioButtonFill className="pr-1 mt-[1px] flex-shrink-0" />
                    Sass
                  </li>
                  <li className="flex gap-2 items-center md:justify-start py-2">
                    <RiRadioButtonFill className="pr-1 mt-[1px] flex-shrink-0" />
                    Express
                  </li>
                  <li className="flex gap-2 items-center md:justify-start py-2">
                    <RiRadioButtonFill className="pr-1 mt-[1px] flex-shrink-0" />
                    Node
                  </li>
                </ul>
              </div>
            </div>
            <Link href="/#projects">
              <p className="underline underline-offset-4 cursor-pointer">
                &lt; Back
              </p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default instock;
