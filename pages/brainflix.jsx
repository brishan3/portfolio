import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";
import heroImg from "../public/assets/projects/Brainflix.JPG";

const brainflix = () => {
  return (
    <>
      <Head>
        <title>Brishan King | BrainFlix</title>
        <meta
          name="description"
          content="A responsive, full-stack web application resembling YouTube built using React and Express"
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
              alt="BrainFlix website screenshot"
            />
            <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-4">
              <h2 className="py-2">BrainFlix</h2>
              <h3>React / Sass / Express / Node</h3>
            </div>
          </div>

          <div className="max-w-[1240px] mx-auto p-4 grid md:grid-cols-5 gap-8 pt-8">
            <div className="col-span-4">
              <p>Project</p>
              <h2 className="pb-2">Overview</h2>
              <p>
                <span className="font-bold">BrainFlix</span> is a fully
                responsive YouTube clone; showcasing dynamically filtered Next
                Video suggestions, page routing done with react-router and the
                ability to upload a mock-video to a self-built Node.js backend
                which served as the REST API for the application.
              </p>
              <p className="mt-2">
                This was the first React specific application built during the
                BrainStation Web Development Program - 2022; this also includes
                the first application for which we built our own backend API.
              </p>
              <p className="mt-2">
                * The code for this project is not available to view as it is
                the intellectual property of BrainStation.
              </p>
              {/* <div className='flex flex-wrap justify-center md:justify-start gap-4'>
                <button className='px-8 py-2 mt-4'>Demo</button>
                <a
                  className="button px-8 pt-2 pb-[0.55rem] mt-4"
                  href="https://github.com/brishan3/brainflix-project"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Client
                </a>
                <a
                  className="button px-8 pt-2 pb-[0.55rem] mt-4"
                  href="https://github.com/brishan3/brainflix-project-api"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  API
                </a>
              </div> */}
            </div>
            <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 dark:shadow-gray-900 rounded-xl lg:p-4 md:py-4 md:px-0 h-fit">
              <div className="p-4 md:flex justify-center flex-wrap">
                <p className="text-center font-bold pb-2">Technologies:</p>
                <ul className="grid grid-cols-3 md:grid-cols-1">
                  <li className=" flex items-center justify-center md:justify-start py-2">
                    <RiRadioButtonFill className="pr-1 flex-shrink-0" />
                    React
                  </li>
                  <li className=" flex items-center justify-center md:justify-start py-2">
                    <RiRadioButtonFill className="pr-1 flex-shrink-0" />
                    Sass
                  </li>
                  <li className=" flex items-center justify-center md:justify-start py-2">
                    <RiRadioButtonFill className="pr-1 flex-shrink-0" />
                    Express
                  </li>
                  <li className=" flex items-center justify-center md:justify-start py-2">
                    <RiRadioButtonFill className="pr-1 flex-shrink-0" />
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

export default brainflix;
