import Head from "next/head";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "../components/Link/Link";

export default function Project ({ projectData }) {
  const {
    title,
    bodyParagraphs,
    links,
    techStack,
    featuredImage,
    meta
  } = projectData;

  return (
    <>
      <Head>
        <title>{`Brishan King | ${meta.title}`}</title>
        <meta
          name="description"
          content={meta.description}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="w-full overflow-hidden min-h-screen">
          <div className="w-screen h-[30vh] lg:h-[40vh] relative">
            <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/50 z-10" />
            <Image
              className="absolute z-1"
              layout="fill"
              objectFit="cover"
              src={featuredImage.url}
              alt="Coffee Shop website screenshot"
            />
            <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-4">
              <h2 className="py-2">{title}</h2>
              <h3>{techStack.map((tech, i) => <span key={i}>{tech} {i < techStack.length - 1 && <span>/ </span>}</span>)}</h3>
            </div>
          </div>

          <div className="max-w-[1240px] mx-auto p-4 grid md:grid-cols-5 gap-8 pt-8">
            <div className="col-span-4">
              <p>Project</p>
              <h2 className="pb-2">Overview</h2>
              {bodyParagraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
              {links.length > 0 &&
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  {links.map((link, i) => (
                    <Link
                      key={i}
                      className="button px-8 pt-2 pb-[0.55rem] mt-4"
                      href={link.url}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              }
            </div>
            <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 dark:shadow-gray-900 rounded-xl lg:p-4 md:py-4 md:px-0 h-fit">
              <div className="p-4 md:flex justify-center flex-wrap">
                <p className="text-center font-bold pb-2">Technologies:</p>
                <ul className="grid grid-cols-3 md:grid-cols-1">
                  {techStack.map((tech, i) => (
                    <li key={i} className=" flex items-center justify-center md:justify-start py-2">
                      <RiRadioButtonFill className="pr-1 flex-shrink-0" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Link href="/#projects">
              <p className="underline underline-offset-4 cursor-pointer">
                &lt; Back
              </p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps(context) {
  const projects = require("../data/projects.json");

  const projectData = projects.find( project => project.slug === context.params.slug)

  const notFound = !projectData;

  return {
    props: {
      projectData,
    },
    notFound,
  };
}

export async function getStaticPaths() {
  const projects = require("../data/projects.json");

  const paths = projects.map(({slug}) => `/${slug}`)

  return {
    paths,
    fallback: 'blocking',
  };
}