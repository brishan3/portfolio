import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import Link from 'next/link';
import {AiOutlineMail} from 'react-icons/ai';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {HiOutlineChevronDoubleUp} from 'react-icons/hi';
import contactImg from '../public/assets/contact.jpg';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ob16xxm', 'template_m6wi14g', form.current, 'OI_uKRDl4DiNtsVnx')
      .then((result) => {
          console.log(result.text);
          console.log('Message sent successfully');
          form.current.reset();
      }, (error) => {
          console.log(error.text);
          console.log('Error sending message');
      });
  };

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
                <p className='py-4'>I am available for freelance or full-time positions. Contact me and let's talk.</p>
              </div>
              <div>
                <p className='uppercase pt-10'>Connect With Me</p>
                <div className='flex items-center justify-around py-4'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-150'>
                    <Link href='https://www.linkedin.com/in/brishan-king/'>
                      <FaLinkedinIn/>
                    </Link>
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-150'>
                    <Link href='https://github.com/brishan3'>
                      <FaGithub/>
                    </Link>
                </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-150'>
                    <Link href='mailto:brishan.king@gmail.com'>
                      <AiOutlineMail/>
                    </Link>
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-150'>
                    <Link href='/#contact'>
                      <BsFillPersonLinesFill/>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form ref={form} onSubmit={sendEmail}>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2' htmlFor="user_name" >Name</label>
                    <input className='border-2 rounded-lg p-3 flex border-grey-300' id='user_name' name='user_name' type='text' required/>
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2' htmlFor="user_phone" >Phone Number</label>
                    <input className='border-2 rounded-lg p-3 flex border-grey-300' id='user_phone' name='user_phone' type='text'/>
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2' htmlFor="user_email" >Email</label>
                  <input className='border-2 rounded-lg p-3 flex border-grey-300' id='user_email' name='user_email' type='email' required/>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2' htmlFor="user_subject" >Subject</label>
                  <input className='border-2 rounded-lg p-3 flex border-grey-300' id='user_subject' name='user_subject' type='text' required/>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2' htmlFor="user_message" >Message</label>
                  <textarea className='border-2 rounded-lg p-3 flex border-grey-300' rows='10' id='user_message' name='user_message' type='text' required/>
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