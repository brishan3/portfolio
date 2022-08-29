import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {RiRadioButtonFill} from 'react-icons/ri';
import heroImg from '../public/assets/projects/InStock.JPG';

const instock = () => {
  return (
    <>
      <Head>
        <title>Brishan King | InStock</title>
        <meta name="description" content="A modern, full-stack inventory tracking application built using React and Express" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
          <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/50 z-10'/>
          <Image className='absolute z-1' layout='fill' objectFit='cover' src={heroImg} alt='InStock website screenshot'/>
          <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-4'>
            <h2 className='py-2'>InStock</h2>
            <h3>React / JavaScript / Sass / Express / Node</h3>
          </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-4 grid md:grid-cols-5 gap-8 pt-8'>
          <div className='col-span-4'>
            <p>Project</p>
            <h2 className='pb-2'>Overview</h2>
            <p>
              <span className='font-bold'>InStock</span> is a responsive inventory management application that allows users to keep track of inventories spread across multiple warehouses. Users can add, edit, delete both warehouses and inventory items. The app itself was built with React and SASS on the frontend and Node and Express on the backend.
            </p>
            <div className='flex flex-wrap justify-center md:justify-start gap-4'>
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
          <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl lg:p-4 md:py-4 md:px-0 h-fit'>
            <div className='p-4 md:flex justify-center flex-wrap'>
              <p className='text-center font-bold pb-2'>Technologies:</p>
              <ul className='grid grid-cols-3 md:grid-cols-1'>
                <li className='text-gray-600 flex items-center justify-center md:justify-start py-2'><RiRadioButtonFill className='pr-1 flex-shrink-0'/>React</li>
                <li className='text-gray-600 flex items-center justify-center md:justify-start py-2'><RiRadioButtonFill className='pr-1 flex-shrink-0'/>JavaScript</li>
                <li className='text-gray-600 flex items-center justify-center md:justify-start py-2'><RiRadioButtonFill className='pr-1 flex-shrink-0'/>Sass</li>
                <li className='text-gray-600 flex items-center justify-center md:justify-start py-2'><RiRadioButtonFill className='pr-1 flex-shrink-0'/>Express</li>
                <li className='text-gray-600 flex items-center justify-center md:justify-start py-2'><RiRadioButtonFill className='pr-1 flex-shrink-0'/>Node</li>
              </ul>
            </div>
          </div>
          <Link href="/#projects">
            <p className='underline underline-offset-4 cursor-pointer'>&lt; Back</p>
          </Link>
        </div>
      </section>
    </>
  )
}

export default instock;