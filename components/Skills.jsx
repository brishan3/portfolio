import React from 'react';
import SkillCard from './SkillCard';
import htmlLogo from '../public/assets/skills/html.png';
import cssLogo from '../public/assets/skills/css.png';
import javaScriptLogo from '../public/assets/skills/javascript.png';
import reactLogo from '../public/assets/skills/react.png';
import nextLogo from '../public/assets/skills/nextjs.png';
import expressLogo from '../public/assets/skills/express.png';
import sassLogo from '../public/assets/skills/sass.png';
import nodeLogo from '../public/assets/skills/node.png';
import mySqlLogo from '../public/assets/skills/mysql.png';
import tailwindLogo from '../public/assets/skills/tailwind.png';
import githubLogo from '../public/assets/skills/git.png';
import herokuLogo from '../public/assets/skills/heroku.png';
import vercelLogo from '../public/assets/skills/vercel.png';
import wordPressLogo from '../public/assets/skills/wordpress.png';
import algoliaLogo from '../public/assets/skills/algolia.png';
import mongoDbLogo from '../public/assets/skills/mongodb.png';
import jestLogo from '../public/assets/skills/jest.png';
import elementorLogo from '../public/assets/skills/elementor.png';
import storybookLogo from '../public/assets/skills/storybook.png';
import payloadCMSLogo from '../public/assets/skills/payloadCMS.png';


const Skills = () => {
  return (
    <section id='skills' className='w-full lg:min-h-[40vh] p-4 md:px-6'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full mt-[5vh]'>
        <p className='text-xl tracking-widest uppercase text-salmon'>Skills</p>
        <h2 className='py-4'>What I can do</h2>
        <div className='grid justify-center sm:px-0 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          <SkillCard name='HTML' imgSrc={htmlLogo}/>
          <SkillCard name='CSS' imgSrc={cssLogo}/>
          <SkillCard name='JavaScript' imgSrc={javaScriptLogo}/>
          <SkillCard name='React' imgSrc={reactLogo}/>
          <SkillCard name='Next.js' imgSrc={nextLogo}/>
          <SkillCard name='Vercel' imgSrc={vercelLogo}/>
          <SkillCard name='PayloadCMS' imgSrc={payloadCMSLogo}/>
          <SkillCard name='WordPress' imgSrc={wordPressLogo}/>
          <SkillCard name='Elementor' imgSrc={elementorLogo}/>
          <SkillCard name='Algolia' imgSrc={algoliaLogo}/>
          <SkillCard name='Jest' imgSrc={jestLogo}/>
          <SkillCard name='Storybook' imgSrc={storybookLogo}/>
          <SkillCard name='Sass' imgSrc={sassLogo}/>
          <SkillCard name='Tailwind' imgSrc={tailwindLogo}/>
          <SkillCard name='Node' imgSrc={nodeLogo}/>
          <SkillCard name='Express' imgSrc={expressLogo}/>
          <SkillCard name='MongoDB' imgSrc={mongoDbLogo}/>
          <SkillCard name='MySQL' imgSrc={mySqlLogo}/>
          <SkillCard name='Git' imgSrc={githubLogo}/>
          <SkillCard name='Heroku' imgSrc={herokuLogo}/>
        </div>
      </div>
    </section>
  )
}

export default Skills