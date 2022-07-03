import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {RiRadioButtonFill} from 'react-icons/ri';
import heroImg from '../public/assets/projects/Ohmpage.JPG';

const ohmpage = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/50 z-10'/>
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={heroImg} alt='Ohmpage website screenshot'/>
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-4'>
          <h2 className='py-2'>Ohmpage</h2>
          <h3>React / MUI / Sass / MySQL</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-4 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2 className='pb-2'>Overview</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum vestibulum tortor et congue. Pellentesque sagittis orci at velit ultrices, vitae maximus massa feugiat. Morbi nec arcu eu risus fermentum suscipit. Integer eleifend id sem vel vestibulum. Maecenas sodales lacinia sem, non tincidunt enim volutpat in. Donec eget commodo ex. Aliquam erat volutpat. Nunc fermentum consequat dolor sed auctor. Morbi vel quam sodales, fermentum orci id, iaculis arcu. Nunc a facilisis mauris, eu blandit nulla. Aenean egestas interdum leo, commodo sodales sapien egestas a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan lacinia aliquam.
          </p>
          <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          <button className='px-8 py-2 mt-4'>Code</button>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <ul className='grid grid-cols-3 md:grid-cols-1'>
              <li className='text-gray-600 flex items-center py-2'><RiRadioButtonFill className='pr-1'/>React</li>
              <li className='text-gray-600 flex items-center py-2'><RiRadioButtonFill className='pr-1'/>MUI</li>
              <li className='text-gray-600 flex items-center py-2'><RiRadioButtonFill className='pr-1'/>Sass</li>
              <li className='text-gray-600 flex items-center py-2'><RiRadioButtonFill className='pr-1'/>Express</li>
              <li className='text-gray-600 flex items-center py-2'><RiRadioButtonFill className='pr-1'/>MySQL</li>
              <li className='text-gray-600 flex items-center py-2'><RiRadioButtonFill className='pr-1'/>Knex</li>
            </ul>
          </div>
        </div>
        <Link href="/#projects">
          <p className='underline underline-offset-4 cursor-pointer'>&lt; Back</p>
        </Link>
      </div>
    </div>
  )
}

export default ohmpage;