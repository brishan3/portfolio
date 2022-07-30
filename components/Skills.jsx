import React from 'react';
import SkillCard from './SkillCard';

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:min-h-[40vh] p-4'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#dd876c]'>Skills</p>
        <h2 className='py-4'>What I can do</h2>
        <div className='grid justify-center sm:px-0 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          <SkillCard name='HTML' imgSrc={'/../public/assets/skills/html.png'}/>
          <SkillCard name='CSS' imgSrc={'/../public/assets/skills/css.png'}/>
          <SkillCard name='JavaScript' imgSrc={'/../public/assets/skills/javascript.png'}/>
          <SkillCard name='React' imgSrc={'/../public/assets/skills/react.png'}/>
          <SkillCard name='Next.js' imgSrc={'/../public/assets/skills/nextjs.png'}/>
          <SkillCard name='Express' imgSrc={'/../public/assets/skills/express.png'}/>
          <SkillCard name='Sass' imgSrc={'/../public/assets/skills/sass.png'}/>
          <SkillCard name='Node' imgSrc={'/../public/assets/skills/node.png'}/>
          <SkillCard name='MySQL' imgSrc={'/../public/assets/skills/mysql.png'}/>
          <SkillCard name='Tailwind' imgSrc={'/../public/assets/skills/tailwind.png'}/>
          <SkillCard name='Github' imgSrc={'/../public/assets/skills/github.png'}/>
          <SkillCard name='Heroku' imgSrc={'/../public/assets/skills/heroku.png'}/>
        </div>
      </div>
    </div>
  )
}

export default Skills