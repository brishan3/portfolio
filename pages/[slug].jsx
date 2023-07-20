import Head from "next/head";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "../components/Link/Link";

export default function Project({ projectData }) {
  const { title, bodyParagraphs, links, techStack, featuredImage, meta } =
    projectData;

  return (
    <>
      <Head>
        <title>{`Brishan King | ${meta.title}`}</title>
        <meta name="description" content={meta.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="w-full overflow-hidden min-h-screen pt-20">
          <div className="relative">
            <div className="w-screen max-w-7xl mx-auto aspect-video group">
              <div className="absolute top-0 left-0 w-screen h-full bg-black/[50%] backdrop-blur-[4px] group-hover:backdrop-blur-0 group-hover:bg-black/[0%] transition-[backdrop-filter,background-color] duration-300 z-10" />
              <div className="w-screen max-w-7xl mx-auto aspect-video relative">

                <Image
                  className="absolute z-1 object-top"
                  layout="fill"
                  objectFit="cover"

                  src={featuredImage.url}
                  alt="Coffee Shop website screenshot"
                />
              <div className="absolute top-[50%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-4 md:px-6 group-hover:translate-y-[100%] group-hover:mix-blend-luminosity group-hover:text-gray-600 transition-[transform,color,mix-blend-mode] duration-300">
                <h1 className="py-2 text-6xl sm:text-7xl md:text-8xl font-bold tracking-wider -ml-1">{title}</h1>
                <h3 className="font-mono">
                  {techStack.map((tech, i) => (
                    <span key={i}>
                      {tech} {i < techStack.length - 1 && <span>/ </span>}
                    </span>
                  ))}
                </h3>
              </div>
            </div>
            </div>
          </div>

          <div className="max-w-[1240px] mx-auto p-4 md:px-6 flex flex-col md:flex-row gap-8 pt-8">
            <div className="col-span-4">
              <p className="mb-2 font-mono">Project</p>
              <h2 className="">Overview</h2>
              {bodyParagraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
              {links.length > 0 && (
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
              )}
            </div>
            <div className=" shadow-xl shadow-gray-400 dark:shadow-gray-900 rounded-xl p-6 md:py-4 md:px-0 h-fit w-fit mx-auto md:w-min min-w-[12rem]">
              <div className="md:flex items-center flex-col">
                <p className="font-semibold mb-2 tracking-wider text-xl pt-2">
                  Tech Stack:
                </p>
                <ul className="flex flex-wrap md:flex-col justify-between pl-8 md:pr-0 mx-auto w-fit gap-x-8 md:gap-x-0">
                  {techStack.map((tech, i) => (
                    <li
                      key={i}
                      className="flex gap-2 items-center min-w-[8rem] xs:max-w-[12rem] w-full md:justify-start py-2 flex-shrink-0"
                    >
                      <RiRadioButtonFill className="flex-shrink-0" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="max-w-[1240px] mx-auto py-6 px-4 md:px-6">
            <Link href="/#projects" className="no-underline">
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

  const projectData = projects.find(
    (project) => project.slug === context.params.slug
  );

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

  const paths = projects.map(({ slug }) => `/${slug}`);

  return {
    paths,
    fallback: "blocking",
  };
}
