import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-4 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2 flex flex-col justify-center'>
          <p className='uppercase text-xl tracking-widest text-[#dd876c]'>About</p>
          <h2>Who I Am</h2>
          <p className='py-2 text-gray-600'>// Not your usual developer</p>
          <p className='py-2 text-gray-600'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className='py-2 text-gray-600'>Check out some of my latest projects.</p>
        </div>
        <div className='w-full h-auto shadow-xl shadow-gray-400 rounded-xl p-4 flex justify-center items-center hover:scale-105 eas-in duration-300'>
          <Image className='rounded-xl' src='/../public/assets/portfolio-crop-portrait.jpg' alt='Portrait picture of myself' width='660' height='1000'/>
        </div>
      </div>
    </div>
  )
}

export default About;