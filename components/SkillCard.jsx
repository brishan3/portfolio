import React from 'react';
import Image from 'next/image';

const SkillCard = ({name, imgSrc}) => {
  return (
    <article className="shadow-xl shadow-gray-400 rounded-xl dark:shadow-gray-900">
      <div className="py-6 px-8 rounded-xl hover:scale-105 ease-in duration-150 w-[91vw] sm:w-[100%]">
        <div className="grid grid-cols-2 gap-5 justify-center items-center">
          <div className="mx-auto">
            <Image
              src={imgSrc}
              alt="HTML"
              width="60px"
              height="60px"
            />
          </div>
          <div className="flex flex-col items-center">
            <div className="max-w-[8rem] flex-grow w-full lg:w-fit">
              <h3>{name}</h3>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default SkillCard;
