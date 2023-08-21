import React from 'react';
import Link from "./Link/Link";
import {AiOutlineMail} from 'react-icons/ai';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Wave from 'react-wavify'


const Hero = () => {
  return (
    <section id="hero" className='w-full text-center -mb-[10rem]'>
      <div className='max-w-[1240px] w-full h-full min-h-[80vh] mx-auto p-4 md:px-6 flex justify-center items-center pt-36 relative z-10'>
        <div>
          <p className='uppercase text-sm tracking-widest mb-3 font-mono'><span className='text-salmon relative bottom-[1px]'>&#60;</span> My source code <span className='text-salmon relative bottom-[1px]'>&#47;&#62;</span></p>
          <h1 className='mb-4 text-gray-700 dark:text-gray-100'>
            Hi, I&apos;m <span className='text-salmon'>Brishan!</span>
          </h1>
          <h1 className='mb-6 text-gray-700 dark:text-gray-100'>A Full<span className='text-salmon'>-</span>Stack Software Engineer<span className='text-salmon'>.</span></h1>
          <p className='max-w-lg mx-auto'>
            I am a passionate lifetime learner, always looking for new technologies to experiment with and understand better.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <div className='rounded-full shadow-gray-400 dark:shadow-gray-900 shadow-lg relative'>
              <Link href='https://www.linkedin.com/in/brishan-king/' className='text-inherit'>
                <div className='rounded-full bg-white dark:bg-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-150'>
                  <FaLinkedinIn/>
                </div>
              </Link>
            </div>
            <div className='rounded-full shadow-gray-400 dark:shadow-gray-900 shadow-lg'>
              <Link href='https://github.com/brishan3' className='text-inherit'>
                <div className='rounded-full bg-white dark:bg-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-150'>
                  <FaGithub/>
                </div>
              </Link>
            </div>
            <div className='rounded-full shadow-gray-400 dark:shadow-gray-900 shadow-lg'>
              <Link href='mailto:brishan.king@gmail.com' className='text-inherit'>
                <div className='rounded-full bg-white dark:bg-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-150'>
                  <AiOutlineMail/>
                </div>
              </Link>
            </div>
            <div className='rounded-full shadow-gray-400 dark:shadow-gray-900 shadow-lg'>
              <Link href='/#contact' className='text-inherit'>
                <div className='rounded-full bg-white dark:bg-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-150'>
                  <BsFillPersonLinesFill/>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Wave className='relative h-[20rem] z-0'  fill='url(#gradient)'
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
            <stop offset="5%"  stopColor="#dd876c" stopOpacity={50}/>
            {/* <stop offset="10%" stopColor="#dd876c" stopOpacity={10} />
            <stop offset="40%" stopColor="#dd876c" stopOpacity={5} /> */}
            <stop offset="85%" stopColor="#ecf0f3" stopOpacity={0} />
          </linearGradient>
        </defs>
      </Wave>
    </section>
  )
}

export default Hero;