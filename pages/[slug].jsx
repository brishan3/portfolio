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
          <div className="relative shadow-inner bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-900">
            <div className="w-screen max-w-7xl mx-auto aspect-video group">
              <div className="absolute top-0 left-0 w-screen h-full bg-gray-900/[50%] backdrop-blur-[4px] group-hover:backdrop-blur-0 group-hover:bg-black/[0%] transition-[backdrop-filter,background-color] duration-300 z-10" />
              <div className="w-screen max-w-7xl mx-auto aspect-video relative">

                <Image
                  className="absolute z-1 object-top"
                  layout="fill"
                  objectFit="cover"
                  priority="true"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAH6AqADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDIoooqjUKKKKACiiigAooooAWiiigAooooAKKKKACiiigAooooAWikooAKWkooAKKKKACiiigAooooAKSlpKACiiigBKKKKBCUUUUAJRRRQAlJS0lACUUUUAJSUtJQAlJS0lIBKSlpKBCUUUUAJSUtJQAlJS0lACUUUUgEooooASiiigAooooAKKKKAFooooAWiiigQUtJS0ALRRRQAtFFFAC0UUUALRRRTAKWkooAWiiigAooooAuUUlFMsWiiigAooooAKKKKAClpKKAFooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApKWkoAKKKSgAooooEJRRRQAlFFJQAUlLSUAJRRRQAlJS0lACUlLSUgEpKWkoEJSUtJQAUlLSUAJSUtJSASiikoAKSlpKACiikoAWikpaACiiigBaKKKAClpKWgQUtJS0ALRRRQAtFFFAC0UUUALRRRTAKKKKAFooooAKKKKALdFFFMsKKKKAFopKKAFooooAKKKKAClpKKAFopKKAFooooAKKKKACiiigAooooAKKKKACiiigAoopKACiiigApKKKACkpaSgQUUUlABSUtJQAlFFFACUlLSUAJRRSUAFJS0lIBKSlpKBCUlLSUAJRRSUAFJRSUgCkpaSgApKKKACkoooAKKKKAFopKWgApaSigBaWkooELS0lFAC0tJS0ALRSUtAC0UlLQAUtJS0wCiiigApaSigBaKSloAt0UlFMsWiiigAooooAKKKKAClpKKAFopKWgAooooAKKKKAFopKKAFopKWgAooooAKKKKACiikoAKKKKACkpaSgAooooEJRRRQAUlFFACUUUUAJSUtJQAUlFFACUlLSUAJRRSUhBSUUlABSUtJQAlJS0lACUlLSUAFJRRSASiikoAKKKKACikpaACiiigBaKSloELRSUtAC0UlLQAtLSUUALS0lFAC0tJRQAtFFFMBaKSloAKKKKACiiigC3RRRTLCiiigAooooAKWkooAWikooAWiiigAooooAWikooAWiiigAooooAKKKKACiiigAooooAKSiigQUUUUAFJRRQAUUUlABSUtJQAUlLSUAFJRRQAlJS0lABSUUUCEpKWkpAJSUtJQAlJS0lABSUUlABSUUlABSUtJSASiikoAKKKKACiiigApaSigBaKKKBC0tJRQAtLSUUALS0lLQAtFJS0ALRSUtAC0UlLQAUUUUwFopKWgAooooAtUUUUywooooAKKKKAFopKKAFopKWgAooooAWikooAWiiigAooooAKWkooAWikooAKKKKACiiigQUUUUAFJRRQAUUUlABRRSUAFFFJQAUUUlABSUtJQAlFFJQIKSlpKAEpKWkpAJRRSUAFJRSUAFJRSUAFJRRQAlJS0lIBKKKSgAooooAKKKSgBaWkooAWlptLQIWlpKKAFpaSloAWikpaAFopKWgBaKSloAWikpaAClpKKYC0UUUAFFFFAFqiiimWFFFFABRRRQAtFJRQAtFJS0AFLSUUALRSUUALRSUUALRRRQAUUUUAFFFFAgooooAKKKKACiiigAopKKACiikoAKKKKACkoooAKSikoAKSlpKBBSUUUAJSUtJQAlFFJSAKSikoAKSikoAKSikoAKSikoAKSiikAlFFJQAUUUlAC0UlFAhaKSloAWikpaAFpabS0ALS0lLQAtFJS0ALS0lFAC0UUUALRSUtAC0UlFAC0UUUwCiiigC1RSUUyxaKSigBaKSloAKWkooAWikooAWikpaAClpKKAFopKKBC0UlLQAUUUUALRSUUALRSUUALSUUUAFFFJQAtJRRQAUUUUAFJRRQAUlFFABSUUlAgoopKACkoooASkpaSgApKKSkAUlFJQAUlFJQAUlFJQAUlFIaACkopKQBRSUUAFFJRQIKWkopALRSUUALS0lFMB1LTaWgBaWm0tADqKSloAWlptLQAtLSUUALRRRQAtFJS0wCiiigAooooAs0UUUywpaSigBaKSigBaKSigQtFFFAC0UlFAC0UlLQAtFJRQAtFJRQAtFJS0AFFFFABRRRQAUUUUAFFFJQAtFJRQAUUUlABRRSUCFpKKKACkopKACkpaSgApKKKAEoopKACkopKQBSUUlABSUUlABSUUlAgpppabQAUlLTaQBRRSUAFFFFAgooooAKKKKAFopKWgYtLTaWgB1FJS0ALS02loAdS02loAWlptLQAtFJS0ALRSUtMAooooAWikooAs0UlFMoWikooAWikooAWlpKKAFopKKAFpaSigBaKSigBaKSigBaWkooAWikooAWikooAWiiigAopKKAFopKKACiiigQUUlFABRRSUALSUUlABRRSUAFFFJQAUlFJQAUlLSUgEoopKACm0tJQISkpaSgBKQ0GkNABSUGkoAKSikpAFFFJQIWkoooEFFFFABRRRQAtFJRQAtLSUUDHUtNpaAHUUlLQMWlptLQA6ikooAdRSUUALS0lFAC0UlFAC0UUUwLFFJRTKFopKKAHUUlFAC0UlFAC0UlFADqKSigBaKSloAWikooAWikpaAClpKKAFopKKAFopKKBC0UlFAC0lFFABRRSUALSUUUAFFJRQAUUUlABRSUUAFJRRQAlFFJQIKSikoAKSikpAFJS02gApKDSGgANNNKaaaACkoNJQIKKSikIKKKKACiiigAooooAKKKKACiiigApaSigBaWm0tAx1LTc0tADqKSigB1LTaWgBaWkooAWikpaYC0UlFAC0UlFAFiikzRTLFopKKAHUU2loAWikooAWlptLQAtFJRQAtLSUUALRSUUALS02loAWikooELRSUUALRRRQAUUUlAC0UlFAC0UlFABRRSUALSUUlAC0lFFAgpKKKACkopKACkoooAKSikpAFJRSUAFNNLSGgBDSGg0hoADTTQaSgQUlFFIQUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAC0tNpaAFpaSigY6lptLQA6ikooAdRSUUALRSUtAC0UlFMCeikopli0UlFADqKbS0ALRSUUAOopKKAFopKKAHUUlFAhaKSloAWikooAWikooAdRSUUALRSUUALRSUUALSUUUAFFJRQAtJRRQIKKKSgAoopKACiikoAKSiigApKKSgApKKSkAUlFJQAUhoNIaBCGkNBpDQAhpKWkoEFFFFIAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBaKSigB1LTaWgB2aKSigB1FJRTGOoptLmgBaKSigCeikopli0UlFAC0tNpaAFopKKAFpabS0CFopKKAHUUlFAC0tNpaAFopKKAFpaSigBaKSigBaKSigBaKSigQtFJRQAtFJRQAUUUlAC0lFFABSUUUAFJRRQAUlFJQAUlLSUhBSUUlABTTS000ABpDQaaaAA0lFJQIKKKKQBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFLSUUALS0lFADqKSimAtLTaWgBaKSigCajNJmjNM0HZopuaM0AOozSZooAdRTaWgQtLTaWgBaWm0UAOopKKAFpaSigBaKSigB1FJRQAtFJRQIWiiigBaKSigAoopKAFopKKAFopKKACikooAKKKSgAoopKBBRSUUAFJRSUgCkopDQAGmmg0hpiA000ppKQCUUUUgCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApaSigBaKSloAKWkopiFozSUUATZopuaWmai0ZpM0ZoAXNLmm5ozQA7NFJmigQ6lptFADqKSigB1FJRQAtLTaWgBaKSloELRSUUALS02loAWikooAWikooAWikooAWikooAKKSigBaSiigQUUlFABSUUlIBaSikoAKSikoAKQ0GkNMQhpDQaSkAUlFFABRRRSAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKWkooAWikooAkopKKo0FzRSUtAC0UlFAhaWm0tAC0tNpaAHUU2loAdRSUUALS0lFAhaWkooAWikpaAFopKKAFopKKAFopKKAFooooAKKKSgQtFJRQAUUlFIAoopKACiikoAKSikoEFIaKQ0ABpDRSUxCUUUlIYUUUUgCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAH0UlFMoWikopjFooooAKWkooAWlptLQAtLTaWgB1FJRQA6ikooEOopKKAFpaSigBaKSigBaWkopALRSUUCFopKKAFopKKACiikoAWkoooAKSiigQUlFJQAUlFJQAUlFJTEFJRRSASiiikMKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAHUUlFMYtFJRQMWikpaAClpKKAFopKWmAUtJRQMdRSUUCHUUlLQAtFJS0ALRSUtABS0lFIBaKKKBC0UlFABRRRQAUUUlAC0UlFABRRSUCCiikoAKSiigBKSlpKYhKKKSkAUlFFIYUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAC0UUUDCiiigAooooAKWkopgLRSUtAwpaSigBaWkopgLS0lFADqKSloAWikopALS0lFAhaKSigBaKKKACiiigAopKKAFpKKKBBRSUUAFFFJQAUlFJQIKSiigBKKKSgYUUUUgCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAFopKWgAooooGFFFFABRRRQAtFFFMYUtJRQAtLSUtAC0UlLQAUtJS0AFLSUUCFopKWgAooooAKKKKACiiigApKKKBBRSUUAFJS0lABSUUlAgpKKKACkoopDCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApaKKACiiigYUUUUAFFFFAC0UUUDCiiimAtFFFAC0UUUALRRRQAtFJS0CCiiigBaKSigBaSlpKACiiigAoopKBBRRSUAFJS0lABSUUUCEooooASiiikMKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAWiiigYUUUUAFFFFABRRRQAUUUtAwooooAKKKKYC0UUUALRRRQAtFFFABS0lLQAUUUUCCiiigAooooAKKKKAEooooAKSlpKBBSUUUAJSUtJQIKSlpKQwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAWiiigYUUUUgCiiigYUUtFACUtFFMAooooGFLRRQAUtJS0wCiiloEFFFFABS0lLQAUUUUAFFFFABRRRQIKSlooASiiigBKKWkoASiiigQlJS0lABSUtJSAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAFopaKRQUUUUAFFFFABRRRQMKKKWmAlLRRQAUUUtABRRS0AJS0UUAFLSUtMQUUUUgCiiimAUUUtACUUUUAFFFFAhKKWkoAKSlpKAEopaSgQlJS0lIApKWkoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAHUUUUiwooooAKKKWgBKKWigAooopjCiiloEFFFLQAUUUUAFFLRQAUUUUCCilooASloooAKKKKACkpaKAEopaSgApKWkoAKSlooEJSUtJQAlJS0UCEpKWkoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAHUtFFI0CiiigAooooAKKKWmAlLRRQAUUtFABRRRQIKWiigAoopaAEpaKKACiiigAooooEFFFFABRRRQAUlLRQAlFFFACUUUUAJSUtFAhKSlpKAEpKWkoEFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAD6KWikaCUUtFACUtFFABRRS0wEpaKKACiiloASloooEFFFLQAUUUUAFFFFABRS0UAJRS0UAJRS0UCEooooAKKKKAEooooAKSlpKAEopaSgQlJS0lACUlOpKBCUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRS0UAFFFFAD6KKKRoFFFLQAlLRRQAUUUUwCloooAKKKKACilooEFFFFABRRS0AFFFFABRRRQAUUUUAFFFFABRRRQISiiigApKWkoAKSlooASkpaSgBKKWkoEJSUtJQAlFFFAgooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApaSloAKKKKACiiigCSiiikaBRRRQAUUUtACUtFFMAooooAWiiigAooooAKKKWgQUUUUAFFFFABRRS0AJRS0lABRRRQAUUUUCCkpaSgApKWigBKKKKAEooooASkpaSgBKSlpKBCUUtJQIKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAWiiigAooooAKKKKAJKKKKRoFFFLQAUUUUAFFFFMApaKKACiiigAooooAKWiigQUUUUAFFFLQAUUUUAFFFFACUUtJQAUUUUAFJS0UCEooooASiiigBKKKKAEpKWkoASkpaKBCUlLSUCCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKWkpaACiiigAooooAKKKKBElFFFI1FooooAKKKKACiiimAtFFFABRRRQAUUUtABRRRQIKKKKAClpKWgAooooAKKKKACkpaSgAooooAKKKKBCUUUUAJRRRQAlFFFACUlLSUAJRRRQISkpaSgQUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABS0lLQAUUUUAFFFFABRRRQI//9k="
                  src={featuredImage.url}
                  alt={featuredImage.alt}
                />
              <div className="absolute bottom-[1rem]  max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-4 md:px-6 group-hover:opacity-0 group-hover:text-gray-600 transition-[opacity,color,mix-blend-mode] duration-300">
                <h1 className="pt-2 text-5xl sm:text-6xl md:text-6xl font-semibold tracking-wider -ml-1 max-w-[40%]">{title}</h1>
                <h3 className="font-mono pr-2">
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

          <div className="max-w-[1240px] mx-auto p-4 md:px-6 flex flex-col md:flex-row md:justify-between gap-8 pt-8">
            <div className="col-span-4">
              <p className="mb-2 font-mono">Project</p>
              <h2 className="">Overview</h2>
              {bodyParagraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
              {links.length > 0 && (
                <div className="flex flex-wrap justify-center md:justify-start gap-x-4">
                  {links.map((link, i) => (
                    <Link
                      key={i}
                      className="button px-8 pt-2 pb-[0.55rem] mt-4 min-w-[8rem] text-center w-full sm:max-w-[48%] md:max-w-[10rem]"
                      href={link.url}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className=" shadow-xl shadow-gray-400 dark:shadow-gray-900 rounded-xl p-6 md:py-4 md:px-0 h-fit w-fit mx-auto md:mx-0 md:w-min min-w-[12rem]">
              <div className="md:flex items-center flex-col">
                <p className="font-semibold mb-2 tracking-wider text-xl pt-2">
                  Tech Stack:
                </p>
                <ul className="flex flex-wrap md:flex-col justify-between pl-7 md:pr-0 mx-auto w-fit gap-x-8 md:gap-x-0">
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
