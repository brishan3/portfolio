import React from 'react';
import Link from 'next/link';
import {AiOutlineMail} from 'react-icons/ai';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';


const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-4 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>Let's build something together</p>
          <h1 className='py-4 text-gray-700'>
            Hey, I'm <span className='text-[#dd876c]'>Brishan.</span>
          </h1>
          <h1 className='py-2 text-gray-700'>A Full-Stack Web Developer</h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
            I’m focused on building responsive front-end web applications while
            learning back-end technologies.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-150'>
              <Link href='https://www.linkedin.com/in/brishan-king/'>
                <FaLinkedinIn/>
              </Link>
            </div>
            <div className='rounded-full shadow-gray-400 shadow-lg'>
              <div className='rounded-full bg-[#ecf0f3] p-6 cursor-pointer hover:scale-110 ease-in duration-150'>
                <Link href='https://github.com/brishan3'>
                  <FaGithub/>
                </Link>
              </div>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:shadow-md ease-in duration-150'>
              <Link href='mailto:brishan.king@gmail.com'>
                <AiOutlineMail/>
              </Link>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:shadow-gray-300 ease-in duration-150'>
              <Link href='/#contact'>
                <BsFillPersonLinesFill/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main;