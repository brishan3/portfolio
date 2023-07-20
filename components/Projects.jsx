import React from 'react';
import ProjectItem from './ProjectItem';

const Projects = ({ projects }) => {
  return (
    <section id='projects' className="w-full px-4 md:px-6">
      <div className="max-w-[1240px] mx-auto py-16 mt-[10vh]">
        <p className="text-xl tracking-widest uppercase text-salmon">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map(({ title, featuredImage, techStack, slug}, i) => (
            <ProjectItem
              key={i}
              title={title}
              featuredImage={featuredImage.url}
              projectUrl={`/${slug}`}
              techStack={techStack}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects;
