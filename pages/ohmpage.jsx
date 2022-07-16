import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { RiRadioButtonFill } from 'react-icons/ri'
import heroImg from '../public/assets/projects/Ohmpage.JPG'

const ohmpage = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/50 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={heroImg}
          alt="Ohmpage website screenshot"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-4">
          <h2 className="py-2">Ohmpage</h2>
          <h3>React / MUI / Sass / MySQL</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-4 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2 className="pb-2">Overview</h2>
          <p>
            Inspired by <span className="font-bold">www.weboas.is</span> (which
            went offline in Feb 2022); a minimal, yet functional customizable
            homepage riddled with interesting links to web tools, forums,
            developer resources, etc. Having used{' '}
            <span className="font-bold">weboas.is</span> religiously on every
            browser and computer I've owned over the past 5 years as the default
            homepage, I found many cool, interesting and helpful websites via
            this hub! Now, I have filled that{' '}
            <span className="italic">rather large</span> void with{' '}
            <span className="font-bold">Ohmpage</span>. Sorted into categorical
            icons below the search bar, links are served in a dropdown list with
            pop-out labels offering brief descriptions. As well as being a
            link-hub, <span className="font-bold">Ohmpage</span> offers the user
            the choice to change their background, theme (light/dark) and
            search-engine, with preferences saved locally in browser storage.
          </p>
          <p className='mt-2'>
            Stop by, check out the Link Library!
          </p>
          <a
            className="button px-8 pt-2 pb-[0.55rem] mt-4 mr-8"
            href="https://ohmpage.herokuapp.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Demo
          </a>
          <a
            className="button px-8 pt-2 pb-[0.55rem] mt-4 mr-8"
            href="https://github.com/brishan3/ohmpage-client"
            target="_blank"
            rel="noreferrer noopener"
          >
            Client
          </a>
          <a
            className="button px-8 pt-2 pb-[0.55rem] mt-4 mr-8"
            href="https://github.com/brishan3/ohmpage-api"
            target="_blank"
            rel="noreferrer noopener"
          >
            API
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <ul className="grid grid-cols-3 md:grid-cols-1">
              <li className="text-gray-600 flex items-center py-2">
                <RiRadioButtonFill className="pr-1 flex-shrink-0" />
                React
              </li>
              <li className="text-gray-600 flex items-center py-2">
                <RiRadioButtonFill className="pr-1 flex-shrink-0" />
                MUI
              </li>
              <li className="text-gray-600 flex items-center py-2">
                <RiRadioButtonFill className="pr-1 flex-shrink-0" />
                Sass
              </li>
              <li className="text-gray-600 flex items-center py-2">
                <RiRadioButtonFill className="pr-1 flex-shrink-0" />
                Express
              </li>
              <li className="text-gray-600 flex items-center py-2">
                <RiRadioButtonFill className="pr-1 flex-shrink-0" />
                MySQL
              </li>
              <li className="text-gray-600 flex items-center py-2">
                <RiRadioButtonFill className="pr-1 flex-shrink-0" />
                Knex
              </li>
            </ul>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline underline-offset-4 cursor-pointer">
            &lt; Back
          </p>
        </Link>
      </div>
    </div>
  )
}

export default ohmpage
