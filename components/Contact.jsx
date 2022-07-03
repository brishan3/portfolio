import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {AiOutlineMail} from 'react-icons/ai';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {HiOutlineChevronDoubleUp} from 'react-icons/hi';
import contactImg from '../public/assets/contact.jpg';

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-4 py-16 w-full'>
        <p className='text-xl tracking-widest uppercase text-[#dd876c]'>
          Contact
        </p>
        <h2 className='py-4'>Get in Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full'>
              <div className='overflow-hidden rounded-xl hover:scale-105 ease-in duration-150'>
                <Image src={contactImg} alt='Person typing on laptop'/>
              </div>
              <div>
                <h2 className='py-2'>Brishan King</h2>
                <p>Full-Stack Developer</p>
                <p className='py-4'>I am available form freelance or full-time positions. Contact me and let's talk.</p>
              </div>
              <div>
                <p className='uppercase pt-10'>Connect With Me</p>
                <div className='flex items-center justify-around py-4'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-150'>
                    <FaLinkedinIn/>
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-150'>
                    <FaGithub/>
                </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-150'>
                    <AiOutlineMail/>
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-150'>
                    <BsFillPersonLinesFill/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form action="">
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2' htmlFor="name" >Name</label>
                    <input className='border-2 rounded-lg p-3 flex border-grey-300' id='name' type='text'/>
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2' htmlFor="phoneNumber" >Phone Number</label>
                    <input className='border-2 rounded-lg p-3 flex border-grey-300' id='phoneNumber' type='text'/>
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2' htmlFor="email" >Email</label>
                  <input className='border-2 rounded-lg p-3 flex border-grey-300' id='email' type='email'/>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2' htmlFor="subject" >Subject</label>
                  <input className='border-2 rounded-lg p-3 flex border-grey-300' id='subject' type='text'/>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2' htmlFor="message" >Message</label>
                  <textarea className='border-2 rounded-lg p-3 flex border-grey-300' rows='10' id='message' type='text'/>
                </div>
                <button className='w-full p-4 text-gray-100'>Send Message</button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-150'>
              <HiOutlineChevronDoubleUp className='m-auto text-[#dd876c]' size={30}/>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact;