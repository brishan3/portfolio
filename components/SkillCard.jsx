import React from 'react';
import Image from 'next/image';

const SkillCard = ({name, imgSrc}) => {
  return (
    <article className="shadow-xl shadow-gray-400 rounded-xl dark:shadow-gray-900">
      <div className="p-6 rounded-xl  hover:scale-105 ease-in duration-150 w-[91vw] sm:w-[100%]">
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
          <div className="m-auto">
            <Image
              src={imgSrc}
              alt="HTML"
              width="64px"
              height="64px"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3>{name}</h3>
          </div>
        </div>
      </div>
    </article>
  )
}

export default SkillCard;
