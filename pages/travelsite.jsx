import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";
import heroImg from "../public/assets/projects/TravelSite.JPG";

const travelsite = () => {
  return (
    <>
      <Head>
        <title>Brishan King | Travel Site</title>
        <meta
          name="description"
          content="A promotional website for a fictional travel agency, built using HTML and CSS"
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
              alt="Travel Site website screenshot"
            />
            <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-4">
              <h2 className="py-2">Travel Site</h2>
              <h3>React / Sass / Express</h3>
            </div>
          </div>

          <div className="max-w-[1240px] mx-auto p-4 grid md:grid-cols-5 gap-8 pt-8">
            <div className="col-span-4">
              <p>Project</p>
              <h2 className="pb-2">Overview</h2>
              <p>
                <span className="font-bold">Travel Site</span> is a static,
                multi-page travel agency website built using HTML and CSS;
                displaying various destinations to travel.
              </p>
              <p className="mt-2">
                * The code for this project is not available to view as it is
                the intellectual property of BrainStation.
              </p>
              {/* <div className='flex flex-wrap justify-center md:justify-start gap-4'>
                <button className='px-8 py-2 mt-4'>Demo</button>
                <button className='px-8 py-2 mt-4'>Code</button>
              </div> */}
            </div>
            <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 dark:shadow-gray-900 rounded-xl lg:p-4 md:py-4 md:px-0 h-fit">
              <div className="p-4 md:flex justify-center flex-wrap">
                <p className="text-center font-bold pb-2">Technologies:</p>
                <ul className="grid grid-cols-3 md:grid-cols-1">
                  <li className=" flex items-center justify-center md:justify-start py-2">
                    <RiRadioButtonFill className="pr-1 flex-shrink-0" />
                    HTML
                  </li>
                  <li className=" flex items-center justify-center md:justify-start py-2">
                    <RiRadioButtonFill className="pr-1 flex-shrink-0" />
                    CSS
                  </li>
                  <li className=" flex items-center justify-center md:justify-start py-2">
                    <RiRadioButtonFill className="pr-1 flex-shrink-0" />
                    VS Code
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

export default travelsite;
