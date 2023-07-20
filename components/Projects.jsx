import React from 'react';
import ProjectItem from './ProjectItem';

const Projects = ({ projects }) => {
  return (
    <section id='project-showcase' className="w-full px-4 md:px-6">
      <div className="max-w-[1240px] mx-auto py-16 mt-[10vh]">
        <p id='projects' className="text-xl tracking-widest uppercase text-salmon mb-2 font-mono">
          Projects
        </p>
        <h2 className="pb-4">What I&apos;ve Built</h2>
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
