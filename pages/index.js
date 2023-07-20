import Head from 'next/head';
import About from '../components/About';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';


export default function Home({projects}) {
  return (
    <>
      <Head>
        <title>Brishan King | Full-Stack Developer</title>
        <meta name="description" content="Let's build something together" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>

        <Hero/>

        <About/>

        <Skills/>

        <Projects projects={projects}/>

        <Contact/>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const projectsRaw = require("../data/projects.json");

  const projects = projectsRaw.map(({title, featuredImage, techStack, slug}) => ({
    title,
    featuredImage,
    techStack,
    slug
  }))

  console.log(projects)

  return {
    props: {
      projects,
    },
  };
}