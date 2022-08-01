import Image from 'next/image';
import React from 'react';
import aboutImage from '../public/assets/portfolio-crop-portrait.jpg';

const About = () => {
  return (
    <section id='about' className='w-full mb-[10vh] md:min-h-[60vh] p-4 py-16'>
      <div className='max-w-[1240px] m-auto lg:grid grid-cols-3 gap-8'>
        <div className='col-span-2 flex flex-col justify-center'>
          <p className='uppercase text-xl tracking-widest text-[#dd876c]'>About</p>
          <h2>Who I Am</h2>
          <p className='py-2 text-gray-600'>// Web Developer</p>
          <p className='py-2 text-gray-600'>
            As a kid, the 2D/3D graphics that captivated my consciousness morphed from something chunky and sharp, into a realm of uncanny-likeness - fit with dynamic lighting, real-time physics, weather systems, etc...
          </p>
          <p className='py-2 text-gray-600'>
            I became enamoured with the endless possibilities of programming coupled with the ever expanding limits of computing power that seemingly trickles down to each of us. This infatuation sparked my imagination like nothing else: it is why I am here today, currently pursuing a career in Software Development.
          </p>
          <p className='py-2 text-gray-600'>
            I always had a sneaking suspicion I would be drawn back into the world of 1&apos;s and 0&apos;s that make our tech tick. I am passionate about solving real world problems or just exercising creativity in a virtual landscape. I am always looking for new opportunities, please feel free to reach out and connect!
          </p>
          <p className='py-2 text-gray-600'>Also, feel free to check out some of my latest projects!</p>
        </div>
        <div className='flex justify-center items-center'>
          <div className='w-fit h-fit shadow-xl shadow-gray-400 rounded-xl p-4 flex justify-center items-center'>
            <Image className='rounded-xl' src={aboutImage} alt='Portrait picture of myself' width='660' height='1000'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;