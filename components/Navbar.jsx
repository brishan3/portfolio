import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import React, {useState, useEffect} from 'react';
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');
  const router = useRouter();

  useEffect(() => {
    if(
      router.asPath === '/ohmpage' ||
      router.asPath === '/instock' ||
      router.asPath === '/brainflix' ||
      router.asPath === '/bandsite' ||
      router.asPath === '/coffeeshop' ||
      router.asPath === '/travelsite'
    ) {
      setNavBg('transparent');
      setLinkColor('#ecf0f3');
    } else {
      setNavBg('#ecf0f3');
      setLinkColor('#1f2937');
    }
  });

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY > 90) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <header
      style={{background:`${navBg}`}}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] px-4'
          : 'fixed w-full h-20 z-[100] px-4'
        }
      >
      <nav className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
          <Image
            className='cursor-pointer'
            src='/../public/assets/logo.png'
            alt='Logo'
            width='125'
            height='50'
          />
        </Link>
        <div>
          <ul
            style={{color: `${linkColor}`}}
            className='hidden md:flex'
          >
            <Link href='/'>
              <li className='ml-10 text-sm uppercase underline-offset-8 decoration-2 decoration-solid decoration-[#dd876c] hover:underline'>
                Home
              </li>
            </Link>
            <Link href='/#about'>
              <li className='ml-10 text-sm uppercase underline-offset-8 decoration-2 decoration-solid decoration-[#dd876c] hover:underline'>
                About
              </li>
            </Link>
            <Link href='/#skills'>
              <li className='ml-10 text-sm uppercase underline-offset-8 decoration-2 decoration-solid decoration-[#dd876c] hover:underline'>
                Skills
              </li>
            </Link>
            <Link href='/#projects'>
              <li className='ml-10 text-sm uppercase underline-offset-8 decoration-2 decoration-solid decoration-[#dd876c] hover:underline'>
                Projects
              </li>
            </Link>
            <Link href='/#contact'>
              <li className='ml-10 text-sm uppercase underline-offset-8 decoration-2 decoration-solid decoration-[#dd876c] hover:underline'>
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className='md:hidden hover:scale-110 duration-300 cursor-pointer'>
            <AiOutlineMenu style={{color: `${linkColor}`}} size='25'/>
          </div>
        </div>
      </nav>
      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={
                nav
                  ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                  : 'fixed left-[-100%] top-0 p-10 h-screen ease-in duration-500'}>
          <div>
            <div className='flex w-full items-center justify-between'>
              <Image src='/../public/assets/logo.png' alt='Logo' width='87' height='35'/>
              <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                <AiOutlineClose/>
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>Let's build something together</p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <nav>
              <ul className='uppercase'>
                <Link href='/'>
                  <li onClick={handleNav} className='py-4 text-sm'>Home</li>
                </Link>
                <Link href='/#about'>
                  <li onClick={handleNav} className='py-4 text-sm'>About</li>
                </Link>
                <Link href='/#skills'>
                  <li onClick={handleNav} className='py-4 text-sm'>Skills</li>
                </Link>
                <Link href='/#projects'>
                  <li onClick={handleNav} className='py-4 text-sm'>Projects</li>
                </Link>
                <Link href='/#contact'>
                  <li onClick={handleNav} className='py-4 text-sm'>Contact</li>
                </Link>
              </ul>
            </nav>
            <div className='pt-[10vh]'>
              <p className='uppercase tracking-widest text-[#5651e5]'>Let's Connect</p>
              <div className='flex gap-6 flex-wrap items-center justify-center my-4 w-fit'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:shadow-gray-300 ease-in duration-300'>
                  <Link href='https://www.linkedin.com/in/brishan-king/'>
                    <FaLinkedinIn/>
                  </Link>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:shadow-gray-300 ease-in duration-300'>
                  <Link href='https://github.com/brishan3'>
                    <FaGithub/>
                  </Link>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:shadow-gray-300 ease-in duration-300'>
                  <Link href='mailto:brishan.king@gmail.com'>
                    <AiOutlineMail/>
                  </Link>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:shadow-gray-300 ease-in duration-300'>
                  <Link href='/#contact'>
                    <BsFillPersonLinesFill/>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar;
