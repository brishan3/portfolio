import Image from 'next/image';
import React from 'react';
import aboutImage from '../public/assets/sunset-lake-midjourney-optimized.webp';

const About = () => {
  return (
    <section id='about' className='w-full mb-[10vh] md:min-h-[60vh] p-4 md:px-6 py-16'>
      <div className='max-w-[1240px] m-auto lg:grid grid-cols-3 gap-8 mt-[12vh] relative z-10'>
        <div className='col-span-2 flex flex-col justify-center mb-8 lg:mb-0'>
          <p className='uppercase text-xl tracking-widest text-salmon font-mono mb-2'>About</p>
          <h2>Who I Am</h2>
          <p className='font-mono'>// The Full Stack</p>
          <p>
            Growing up, the 2D/3D graphics that captivated my consciousness morphed from something chunky and pixelated, into a realm of almost uncanny-likeness - fitted with dynamic lighting, real-time physics, weather systems, and the list goes on.
          </p>
          <p>
            I became absolutely enamoured with the endless possibilities of programming coupled with the ever expanding potentials of computing power that trickles down to each of us. This infatuation sparked my imagination like nothing else: it&apos;s why I leapt into three years of Computing Science at SFU followed by a Web Development bootcamp at BrainStation, and it&apos;s why I am here today, pursuing a career in Software/Web Development.
          </p>
          <p>
            I always had a sneaking suspicion I would be drawn into the world of 1&apos;s and 0&apos;s that make our tech tick. I am passionate about solving real world problems and exercising creativity in a virtual landscape. I am always looking for new opportunities, please feel free to reach out and connect!
          </p>
          <p>Also, if you have some free time check out some of my latest <a href="#projects">projects</a> below!</p>
        </div>
        <div className='flex justify-center items-center'>
          <div className='w-fit h-fit shadow-xl ml-0 lg:ml-4 shadow-gray-400 dark:shadow-gray-900 rounded-xl p-4 flex justify-center items-center'>
            <Image className='rounded-xl' src={aboutImage} alt='Portrait picture of myself' width='660' height='1000'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;