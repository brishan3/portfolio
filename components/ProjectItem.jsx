import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectItem = ({title, featuredImage, projectUrl, techStack}) => {
  return (
    <article className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 dark:shadow-gray-900 rounded-xl p-4 group hover:bg-salmon duration-300">
      <Image
        className="rounded-xl group-hover:opacity-10 opacity-100 duration-300 w-full h-auto object-top"
        src={featuredImage.url}
        width={640}
        height={360}
        objectFit='cover'
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAH6AqADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDIoooqjUKKKKACiiigAooooAWiiigAooooAKKKKACiiigAooooAWikooAKWkooAKKKKACiiigAooooAKSlpKACiiigBKKKKBCUUUUAJRRRQAlJS0lACUUUUAJSUtJQAlJS0lIBKSlpKBCUUUUAJSUtJQAlJS0lACUUUUgEooooASiiigAooooAKKKKAFooooAWiiigQUtJS0ALRRRQAtFFFAC0UUUALRRRTAKWkooAWiiigAooooAuUUlFMsWiiigAooooAKKKKAClpKKAFooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApKWkoAKKKSgAooooEJRRRQAlFFJQAUlLSUAJRRRQAlJS0lACUlLSUgEpKWkoEJSUtJQAUlLSUAJSUtJSASiikoAKSlpKACiikoAWikpaACiiigBaKKKAClpKWgQUtJS0ALRRRQAtFFFAC0UUUALRRRTAKKKKAFooooAKKKKALdFFFMsKKKKAFopKKAFooooAKKKKAClpKKAFopKKAFooooAKKKKACiiigAooooAKKKKACiiigAoopKACiiigApKKKACkpaSgQUUUlABSUtJQAlFFFACUlLSUAJRRSUAFJS0lIBKSlpKBCUlLSUAJRRSUAFJRSUgCkpaSgApKKKACkoooAKKKKAFopKWgApaSigBaWkooELS0lFAC0tJS0ALRSUtAC0UlLQAUtJS0wCiiigApaSigBaKSloAt0UlFMsWiiigAooooAKKKKAClpKKAFopKWgAooooAKKKKAFopKKAFopKWgAooooAKKKKACiikoAKKKKACkpaSgAooooEJRRRQAUlFFACUUUUAJSUtJQAUlFFACUlLSUAJRRSUhBSUUlABSUtJQAlJS0lACUlLSUAFJRRSASiikoAKKKKACikpaACiiigBaKSloELRSUtAC0UlLQAtLSUUALS0lFAC0tJRQAtFFFMBaKSloAKKKKACiiigC3RRRTLCiiigAooooAKWkooAWikooAWiiigAooooAWikooAWiiigAooooAKKKKACiiigAooooAKSiigQUUUUAFJRRQAUUUlABSUtJQAUlLSUAFJRRQAlJS0lABSUUUCEpKWkpAJSUtJQAlJS0lABSUUlABSUUlABSUtJSASiikoAKKKKACiiigApaSigBaKKKBC0tJRQAtLSUUALS0lLQAtFJS0ALRSUtAC0UlLQAUUUUwFopKWgAooooAtUUUUywooooAKKKKAFopKKAFopKWgAooooAWikooAWiiigAooooAKWkooAWikooAKKKKACiiigQUUUUAFJRRQAUUUlABRRSUAFFFJQAUUUlABSUtJQAlFFJQIKSlpKAEpKWkpAJRRSUAFJRSUAFJRSUAFJRRQAlJS0lIBKKKSgAooooAKKKSgBaWkooAWlptLQIWlpKKAFpaSloAWikpaAFopKWgBaKSloAWikpaAClpKKYC0UUUAFFFFAFqiiimWFFFFABRRRQAtFJRQAtFJS0AFLSUUALRSUUALRSUUALRRRQAUUUUAFFFFAgooooAKKKKACiiigAopKKACiikoAKKKKACkoooAKSikoAKSlpKBBSUUUAJSUtJQAlFFJSAKSikoAKSikoAKSikoAKSikoAKSiikAlFFJQAUUUlAC0UlFAhaKSloAWikpaAFpabS0ALS0lLQAtFJS0ALS0lFAC0UUUALRSUtAC0UlFAC0UUUwCiiigC1RSUUyxaKSigBaKSloAKWkooAWikooAWikpaAClpKKAFopKKBC0UlLQAUUUUALRSUUALRSUUALSUUUAFFFJQAtJRRQAUUUUAFJRRQAUlFFABSUUlAgoopKACkoooASkpaSgApKKSkAUlFJQAUlFJQAUlFJQAUlFIaACkopKQBRSUUAFFJRQIKWkopALRSUUALS0lFMB1LTaWgBaWm0tADqKSloAWlptLQAtLSUUALRRRQAtFJS0wCiiigAooooAs0UUUywpaSigBaKSigBaKSigQtFFFAC0UlFAC0UlLQAtFJRQAtFJRQAtFJS0AFFFFABRRRQAUUUUAFFFJQAtFJRQAUUUlABRRSUCFpKKKACkopKACkpaSgApKKKAEoopKACkopKQBSUUlABSUUlABSUUlAgpppabQAUlLTaQBRRSUAFFFFAgooooAKKKKAFopKWgYtLTaWgB1FJS0ALS02loAdS02loAWlptLQAtFJS0ALRSUtMAooooAWikooAs0UlFMoWikooAWikooAWlpKKAFopKKAFpaSigBaKSigBaKSigBaWkooAWikooAWikooAWiiigAopKKAFopKKACiiigQUUlFABRRSUALSUUlABRRSUAFFFJQAUlFJQAUlLSUgEoopKACm0tJQISkpaSgBKQ0GkNABSUGkoAKSikpAFFFJQIWkoooEFFFFABRRRQAtFJRQAtLSUUDHUtNpaAHUUlLQMWlptLQA6ikooAdRSUUALS0lFAC0UlFAC0UUUwLFFJRTKFopKKAHUUlFAC0UlFAC0UlFADqKSigBaKSloAWikooAWikpaAClpKKAFopKKAFopKKBC0UlFAC0lFFABRRSUALSUUUAFFJRQAUUUlABRSUUAFJRRQAlFFJQIKSikoAKSikpAFJS02gApKDSGgANNNKaaaACkoNJQIKKSikIKKKKACiiigAooooAKKKKACiiigApaSigBaWm0tAx1LTc0tADqKSigB1LTaWgBaWkooAWikpaYC0UlFAC0UlFAFiikzRTLFopKKAHUU2loAWikooAWlptLQAtFJRQAtLSUUALRSUUALS02loAWikooELRSUUALRRRQAUUUlAC0UlFAC0UlFABRRSUALSUUlAC0lFFAgpKKKACkopKACkoooAKSikpAFJRSUAFNNLSGgBDSGg0hoADTTQaSgQUlFFIQUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAC0tNpaAFpaSigY6lptLQA6ikooAdRSUUALRSUtAC0UlFMCeikopli0UlFADqKbS0ALRSUUAOopKKAFopKKAHUUlFAhaKSloAWikooAWikooAdRSUUALRSUUALRSUUALSUUUAFFJRQAtJRRQIKKKSgAoopKACiikoAKSiigApKKSgApKKSkAUlFJQAUhoNIaBCGkNBpDQAhpKWkoEFFFFIAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBaKSigB1LTaWgB2aKSigB1FJRTGOoptLmgBaKSigCeikopli0UlFAC0tNpaAFopKKAFpabS0CFopKKAHUUlFAC0tNpaAFopKKAFpaSigBaKSigBaKSigBaKSigQtFJRQAtFJRQAUUUlAC0lFFABSUUUAFJRRQAUlFJQAUlLSUhBSUUlABTTS000ABpDQaaaAA0lFJQIKKKKQBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFLSUUALS0lFADqKSimAtLTaWgBaKSigCajNJmjNM0HZopuaM0AOozSZooAdRTaWgQtLTaWgBaWm0UAOopKKAFpaSigBaKSigB1FJRQAtFJRQIWiiigBaKSigAoopKAFopKKAFopKKACikooAKKKSgAoopKBBRSUUAFJRSUgCkopDQAGmmg0hpiA000ppKQCUUUUgCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApaSigBaKSloAKWkopiFozSUUATZopuaWmai0ZpM0ZoAXNLmm5ozQA7NFJmigQ6lptFADqKSigB1FJRQAtLTaWgBaKSloELRSUUALS02loAWikooAWikooAWikooAWikooAKKSigBaSiigQUUlFABSUUlIBaSikoAKSikoAKQ0GkNMQhpDQaSkAUlFFABRRRSAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKWkooAWikooAkopKKo0FzRSUtAC0UlFAhaWm0tAC0tNpaAHUU2loAdRSUUALS0lFAhaWkooAWikpaAFopKKAFopKKAFopKKAFooooAKKKSgQtFJRQAUUlFIAoopKACiikoAKSikoEFIaKQ0ABpDRSUxCUUUlIYUUUUgCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAH0UlFMoWikopjFooooAKWkooAWlptLQAtLTaWgB1FJRQA6ikooEOopKKAFpaSigBaKSigBaWkopALRSUUCFopKKAFopKKACiikoAWkoooAKSiigQUlFJQAUlFJQAUlFJTEFJRRSASiiikMKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAHUUlFMYtFJRQMWikpaAClpKKAFopKWmAUtJRQMdRSUUCHUUlLQAtFJS0ALRSUtABS0lFIBaKKKBC0UlFABRRRQAUUUlAC0UlFABRRSUCCiikoAKSiigBKSlpKYhKKKSkAUlFFIYUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAC0UUUDCiiigAooooAKWkopgLRSUtAwpaSigBaWkopgLS0lFADqKSloAWikopALS0lFAhaKSigBaKKKACiiigAopKKAFpKKKBBRSUUAFFFJQAUlFJQIKSiigBKKKSgYUUUUgCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAFopKWgAooooGFFFFABRRRQAtFFFMYUtJRQAtLSUtAC0UlLQAUtJS0AFLSUUCFopKWgAooooAKKKKACiiigApKKKBBRSUUAFJS0lABSUUlAgpKKKACkoopDCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApaKKACiiigYUUUUAFFFFAC0UUUDCiiimAtFFFAC0UUUALRRRQAtFJS0CCiiigBaKSigBaSlpKACiiigAoopKBBRRSUAFJS0lABSUUUCEooooASiiikMKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAWiiigYUUUUAFFFFABRRRQAUUUtAwooooAKKKKYC0UUUALRRRQAtFFFABS0lLQAUUUUCCiiigAooooAKKKKAEooooAKSlpKBBSUUUAJSUtJQIKSlpKQwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAWiiigYUUUUgCiiigYUUtFACUtFFMAooooGFLRRQAUtJS0wCiiloEFFFFABS0lLQAUUUUAFFFFABRRRQIKSlooASiiigBKKWkoASiiigQlJS0lABSUtJSAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAFopaKRQUUUUAFFFFABRRRQMKKKWmAlLRRQAUUUtABRRS0AJS0UUAFLSUtMQUUUUgCiiimAUUUtACUUUUAFFFFAhKKWkoAKSlpKAEopaSgQlJS0lIApKWkoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAHUUUUiwooooAKKKWgBKKWigAooopjCiiloEFFFLQAUUUUAFFLRQAUUUUCCilooASloooAKKKKACkpaKAEopaSgApKWkoAKSlooEJSUtJQAlJS0UCEpKWkoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAHUtFFI0CiiigAooooAKKKWmAlLRRQAUUtFABRRRQIKWiigAoopaAEpaKKACiiigAooooEFFFFABRRRQAUlLRQAlFFFACUUUUAJSUtFAhKSlpKAEpKWkoEFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAD6KWikaCUUtFACUtFFABRRS0wEpaKKACiiloASloooEFFFLQAUUUUAFFFFABRS0UAJRS0UAJRS0UCEooooAKKKKAEooooAKSlpKAEopaSgQlJS0lACUlOpKBCUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRS0UAFFFFAD6KKKRoFFFLQAlLRRQAUUUUwCloooAKKKKACilooEFFFFABRRS0AFFFFABRRRQAUUUUAFFFFABRRRQISiiigApKWkoAKSlooASkpaSgBKKWkoEJSUtJQAlFFFAgooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApaSloAKKKKACiiigCSiiikaBRRRQAUUUtACUtFFMAooooAWiiigAooooAKKKWgQUUUUAFFFFABRRS0AJRS0lABRRRQAUUUUCCkpaSgApKWigBKKKKAEooooASkpaSgBKSlpKBCUUtJQIKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAWiiigAooooAKKKKAJKKKKRoFFFLQAUUUUAFFFFMApaKKACiiigAooooAKWiigQUUUUAFFFLQAUUUUAFFFFACUUtJQAUUUUAFJS0UCEooooASiiigBKKKKAEpKWkoASkpaKBCUlLSUCCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKWkpaACiiigAooooAKKKKBElFFFI1FooooAKKKKACiiimAtFFFABRRRQAUUUtABRRRQIKKKKAClpKWgAooooAKKKKACkpaSgAooooAKKKKBCUUUUAJRRRQAlFFFACUlLSUAJRRRQISkpaSgQUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABS0lLQAUUUUAFFFFABRRRQI//9k="
        alt={featuredImage.alt}
      />
      <div className="opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-sm absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] duration-300 w-full p-4">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="text-white text-center px-4">{techStack.map((tech, i) => <span key={i}>{tech} {i < techStack.length - 1 && <span>| </span>}</span>)}</p>
        <Link href={projectUrl} className="no-underline text-center py-4 px-6 rounded-lg bg-white text-gray-700 font-bold text-lg block mx-auto w-fit">
            More Info
        </Link>
      </div>
    </article>
  )
}

export default ProjectItem;
