import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectItem = ({title, featuredImage, projectUrl, techStack}) => {
  return (
    <article className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 dark:shadow-gray-900 rounded-xl p-4 group hover:bg-salmon duration-300">
      <Image
        className="rounded-xl group-hover:opacity-10 opacity-100 duration-300 w-full h-auto"
        src={featuredImage}
        width={640}
        height={480}
        alt="/"
      />
      <div className="opacity-0 group-hover:opacity-100 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] duration-300">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{techStack.map((tech, i) => <span>{tech} {i < techStack.length - 1 && <span>| </span>}</span>)}</p>
        <Link href={projectUrl} className="no-underline">
          <p className="text-center py-4 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </article>
  )
}

export default ProjectItem;
