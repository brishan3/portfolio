import React from 'react';
import SkillCard from './SkillCard';

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-4'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#dd876c]'>Skills</p>
        <h2 className='py-4'>What I can do</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <SkillCard name='HTML' imgSrc={'/../public/assets/skills/html.png'}/>
          <SkillCard name='CSS' imgSrc={'/../public/assets/skills/css.png'}/>
          <SkillCard name='JavaScript' imgSrc={'/../public/assets/skills/javascript.png'}/>
          <SkillCard name='React' imgSrc={'/../public/assets/skills/react.png'}/>
          <SkillCard name='Sass' imgSrc={'/../public/assets/skills/sass.png'}/>
          <SkillCard name='Node' imgSrc={'/../public/assets/skills/node.png'}/>
          <SkillCard name='Tailwind' imgSrc={'/../public/assets/skills/tailwind.png'}/>
          <SkillCard name='Github' imgSrc={'/../public/assets/skills/github.png'}/>
        </div>
      </div>
    </div>
  )
}

export default Skills