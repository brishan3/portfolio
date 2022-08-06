import React from 'react';
import Link from 'next/link';
import {AiOutlineMail} from 'react-icons/ai';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Wave from 'react-wavify'


const Main = () => {
  return (
    <section className='w-full h-screen text-center'>
      
      <div className='max-w-[1240px] w-full h-full mx-auto p-4 flex justify-center items-center relative z-10'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>Let&apos;s build something together</p>
          <h1 className='py-4 text-gray-700'>
            Hey, I&apos;m <span className='text-[#dd876c]'>Brishan.</span>
          </h1>
          <h1 className='py-2 text-gray-700'>A Full-Stack Web Developer</h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
            I&apos;m focused on building responsive front-end web applications while
            learning back-end technologies.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <div className='rounded-full shadow-gray-400 shadow-lg relative'>
              <Link href='https://www.linkedin.com/in/brishan-king/'>
                <div className='rounded-full bg-[#ecf0f3] p-6 cursor-pointer hover:scale-110 ease-in duration-150'>
                  <FaLinkedinIn/>
                </div>
              </Link>
            </div>
            <div className='rounded-full shadow-gray-400 shadow-lg'>
              <Link href='https://github.com/brishan3'>
                <div className='rounded-full bg-[#ecf0f3] p-6 cursor-pointer hover:scale-110 ease-in duration-150'>
                  <FaGithub/>
                </div>
              </Link>
            </div>
            <div className='rounded-full shadow-gray-400 shadow-lg'>
              <Link href='mailto:brishan.king@gmail.com'>
                <div className='rounded-full bg-[#ecf0f3] p-6 cursor-pointer hover:scale-110 ease-in duration-150'>
                  <AiOutlineMail/>
                </div>
              </Link>
            </div>
            <div className='rounded-full shadow-gray-400 shadow-lg'>
              <Link href='/#contact'>
                <div className='rounded-full bg-[#ecf0f3] p-6 cursor-pointer hover:scale-110 ease-in duration-150'>
                  <BsFillPersonLinesFill/>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Wave className='relative h-[40%] bottom-[16%] z-0'  fill='url(#gradient)'
        paused={false}
        options={{
          height: 23,
          amplitude: 25,
          speed: 0.1,
          points: 3
        }}
      >
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="10%"  stopColor="#dd876c" />
            <stop offset="85%" stopColor="#ecf0f3" />
          </linearGradient>
        </defs>
      </Wave>
    </section>
  )
}

export default Main;