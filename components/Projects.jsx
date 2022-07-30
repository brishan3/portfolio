import React from 'react';
import ProjectItem from './ProjectItem';
import ohmpageImg from '../public/assets/projects/Ohmpage.JPG';
import inStockImg from '../public/assets/projects/InStock.JPG';
import brainFlixImg from '../public/assets/projects/Brainflix.JPG';
import bandsiteImg from '../public/assets/projects/Bandsite.JPG';
import coffeeShopImg from '../public/assets/projects/CoffeeShop.JPG';
import travelSiteImg from '../public/assets/projects/TravelSite.JPG';

const Projects = () => {
  return (
    <section id='projects' className="w-full">
      <div className="max-w-[1240px] mx-auto px-4 py-16">
        <p className="text-xl tracking-widest uppercase text-[#dd876c]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Ohmpage"
            background={ohmpageImg}
            projectUrl="/ohmpage"
            techStack="React, JavaScript, Express, MUI, Sass"
          />
          <ProjectItem
            title="InStock"
            background={inStockImg}
            projectUrl="/instock"
            techStack="React, JavaScript, Express, Sass"
          />
          <ProjectItem
            title="BrainFlix"
            background={brainFlixImg}
            projectUrl="/brainflix"
            techStack="React, JavaScript, Express, Sass"
          />
          <ProjectItem
            title="Bandsite"
            background={bandsiteImg}
            projectUrl="/bandsite"
            techStack="HTML, JavaScript, Sass"
          />
          <ProjectItem
            title="Coffee Shop"
            background={coffeeShopImg}
            projectUrl="/coffeeshop"
            techStack="HTML, Sass, VS-Code"
          />
          <ProjectItem
            title="Travel Site"
            background={travelSiteImg}
            projectUrl="/travelsite"
            techStack="HTML, CSS, VS-Code"
          />
        </div>
      </div>
    </section>
  )
}

export default Projects;
