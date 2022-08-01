import Head from 'next/head';
import About from '../components/About';
import Contact from '../components/Contact';
import Main from '../components/Main';
import Projects from '../components/Projects';
import Skills from '../components/Skills';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Brishan King | Full-Stack Developer</title>
        <meta name="description" content="Let's build something together" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main/>

      <About/>

      <Skills/>

      <Projects/>

      <Contact/>
    </div>
  )
}
