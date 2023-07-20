import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import Link from "next/link";
import Swal from "sweetalert2";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import contactImg from "../public/assets/amp.webp";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ob16xxm",
        "template_m6wi14g",
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent successfully");
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Message Sent Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Message Failed to Send",
            showConfirmButton: false,
            timer: 1500,
          });
          console.log("Error sending message");
        }
      );
  };

  return (
    <section id="contact-me" className="w-full lg:h-full px-4 md:px-6">
      <div className="max-w-[1240px] mx-auto py-16 w-full mt-[10vh]">
        <p id="contact" className="text-xl tracking-widest uppercase text-salmon font-mono mb-2">
          Contact
        </p>
        <h2 className="pb-4">Get in Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <article className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 dark:shadow-gray-900 rounded-xl p-4">
            <div className="lg:p-4 h-full flex flex-col justify-between">
              <div className="overflow-hidden rounded-xl w-fit lg:h-full lg:flex lg:items-center">
                <Image
                  className="object-fit"
                  src={contactImg}
                  alt="Waveform, drawn by Brishan King"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAH6AqADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDIoooqjUKKKKACiiigAooooAWiiigAooooAKKKKACiiigAooooAWikooAKWkooAKKKKACiiigAooooAKSlpKACiiigBKKKKBCUUUUAJRRRQAlJS0lACUUUUAJSUtJQAlJS0lIBKSlpKBCUUUUAJSUtJQAlJS0lACUUUUgEooooASiiigAooooAKKKKAFooooAWiiigQUtJS0ALRRRQAtFFFAC0UUUALRRRTAKWkooAWiiigAooooAuUUlFMsWiiigAooooAKKKKAClpKKAFooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApKWkoAKKKSgAooooEJRRRQAlFFJQAUlLSUAJRRRQAlJS0lACUlLSUgEpKWkoEJSUtJQAUlLSUAJSUtJSASiikoAKSlpKACiikoAWikpaACiiigBaKKKAClpKWgQUtJS0ALRRRQAtFFFAC0UUUALRRRTAKKKKAFooooAKKKKALdFFFMsKKKKAFopKKAFooooAKKKKAClpKKAFopKKAFooooAKKKKACiiigAooooAKKKKACiiigAoopKACiiigApKKKACkpaSgQUUUlABSUtJQAlFFFACUlLSUAJRRSUAFJS0lIBKSlpKBCUlLSUAJRRSUAFJRSUgCkpaSgApKKKACkoooAKKKKAFopKWgApaSigBaWkooELS0lFAC0tJS0ALRSUtAC0UlLQAUtJS0wCiiigApaSigBaKSloAt0UlFMsWiiigAooooAKKKKAClpKKAFopKWgAooooAKKKKAFopKKAFopKWgAooooAKKKKACiikoAKKKKACkpaSgAooooEJRRRQAUlFFACUUUUAJSUtJQAUlFFACUlLSUAJRRSUhBSUUlABSUtJQAlJS0lACUlLSUAFJRRSASiikoAKKKKACikpaACiiigBaKSloELRSUtAC0UlLQAtLSUUALS0lFAC0tJRQAtFFFMBaKSloAKKKKACiiigC3RRRTLCiiigAooooAKWkooAWikooAWiiigAooooAWikooAWiiigAooooAKKKKACiiigAooooAKSiigQUUUUAFJRRQAUUUlABSUtJQAUlLSUAFJRRQAlJS0lABSUUUCEpKWkpAJSUtJQAlJS0lABSUUlABSUUlABSUtJSASiikoAKKKKACiiigApaSigBaKKKBC0tJRQAtLSUUALS0lLQAtFJS0ALRSUtAC0UlLQAUUUUwFopKWgAooooAtUUUUywooooAKKKKAFopKKAFopKWgAooooAWikooAWiiigAooooAKWkooAWikooAKKKKACiiigQUUUUAFJRRQAUUUlABRRSUAFFFJQAUUUlABSUtJQAlFFJQIKSlpKAEpKWkpAJRRSUAFJRSUAFJRSUAFJRRQAlJS0lIBKKKSgAooooAKKKSgBaWkooAWlptLQIWlpKKAFpaSloAWikpaAFopKWgBaKSloAWikpaAClpKKYC0UUUAFFFFAFqiiimWFFFFABRRRQAtFJRQAtFJS0AFLSUUALRSUUALRSUUALRRRQAUUUUAFFFFAgooooAKKKKACiiigAopKKACiikoAKKKKACkoooAKSikoAKSlpKBBSUUUAJSUtJQAlFFJSAKSikoAKSikoAKSikoAKSikoAKSiikAlFFJQAUUUlAC0UlFAhaKSloAWikpaAFpabS0ALS0lLQAtFJS0ALS0lFAC0UUUALRSUtAC0UlFAC0UUUwCiiigC1RSUUyxaKSigBaKSloAKWkooAWikooAWikpaAClpKKAFopKKBC0UlLQAUUUUALRSUUALRSUUALSUUUAFFFJQAtJRRQAUUUUAFJRRQAUlFFABSUUlAgoopKACkoooASkpaSgApKKSkAUlFJQAUlFJQAUlFJQAUlFIaACkopKQBRSUUAFFJRQIKWkopALRSUUALS0lFMB1LTaWgBaWm0tADqKSloAWlptLQAtLSUUALRRRQAtFJS0wCiiigAooooAs0UUUywpaSigBaKSigBaKSigQtFFFAC0UlFAC0UlLQAtFJRQAtFJRQAtFJS0AFFFFABRRRQAUUUUAFFFJQAtFJRQAUUUlABRRSUCFpKKKACkopKACkpaSgApKKKAEoopKACkopKQBSUUlABSUUlABSUUlAgpppabQAUlLTaQBRRSUAFFFFAgooooAKKKKAFopKWgYtLTaWgB1FJS0ALS02loAdS02loAWlptLQAtFJS0ALRSUtMAooooAWikooAs0UlFMoWikooAWikooAWlpKKAFopKKAFpaSigBaKSigBaKSigBaWkooAWikooAWikooAWiiigAopKKAFopKKACiiigQUUlFABRRSUALSUUlABRRSUAFFFJQAUlFJQAUlLSUgEoopKACm0tJQISkpaSgBKQ0GkNABSUGkoAKSikpAFFFJQIWkoooEFFFFABRRRQAtFJRQAtLSUUDHUtNpaAHUUlLQMWlptLQA6ikooAdRSUUALS0lFAC0UlFAC0UUUwLFFJRTKFopKKAHUUlFAC0UlFAC0UlFADqKSigBaKSloAWikooAWikpaAClpKKAFopKKAFopKKBC0UlFAC0lFFABRRSUALSUUUAFFJRQAUUUlABRSUUAFJRRQAlFFJQIKSikoAKSikpAFJS02gApKDSGgANNNKaaaACkoNJQIKKSikIKKKKACiiigAooooAKKKKACiiigApaSigBaWm0tAx1LTc0tADqKSigB1LTaWgBaWkooAWikpaYC0UlFAC0UlFAFiikzRTLFopKKAHUU2loAWikooAWlptLQAtFJRQAtLSUUALRSUUALS02loAWikooELRSUUALRRRQAUUUlAC0UlFAC0UlFABRRSUALSUUlAC0lFFAgpKKKACkopKACkoooAKSikpAFJRSUAFNNLSGgBDSGg0hoADTTQaSgQUlFFIQUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAC0tNpaAFpaSigY6lptLQA6ikooAdRSUUALRSUtAC0UlFMCeikopli0UlFADqKbS0ALRSUUAOopKKAFopKKAHUUlFAhaKSloAWikooAWikooAdRSUUALRSUUALRSUUALSUUUAFFJRQAtJRRQIKKKSgAoopKACiikoAKSiigApKKSgApKKSkAUlFJQAUhoNIaBCGkNBpDQAhpKWkoEFFFFIAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBaKSigB1LTaWgB2aKSigB1FJRTGOoptLmgBaKSigCeikopli0UlFAC0tNpaAFopKKAFpabS0CFopKKAHUUlFAC0tNpaAFopKKAFpaSigBaKSigBaKSigBaKSigQtFJRQAtFJRQAUUUlAC0lFFABSUUUAFJRRQAUlFJQAUlLSUhBSUUlABTTS000ABpDQaaaAA0lFJQIKKKKQBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFLSUUALS0lFADqKSimAtLTaWgBaKSigCajNJmjNM0HZopuaM0AOozSZooAdRTaWgQtLTaWgBaWm0UAOopKKAFpaSigBaKSigB1FJRQAtFJRQIWiiigBaKSigAoopKAFopKKAFopKKACikooAKKKSgAoopKBBRSUUAFJRSUgCkopDQAGmmg0hpiA000ppKQCUUUUgCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApaSigBaKSloAKWkopiFozSUUATZopuaWmai0ZpM0ZoAXNLmm5ozQA7NFJmigQ6lptFADqKSigB1FJRQAtLTaWgBaKSloELRSUUALS02loAWikooAWikooAWikooAWikooAKKSigBaSiigQUUlFABSUUlIBaSikoAKSikoAKQ0GkNMQhpDQaSkAUlFFABRRRSAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKWkooAWikooAkopKKo0FzRSUtAC0UlFAhaWm0tAC0tNpaAHUU2loAdRSUUALS0lFAhaWkooAWikpaAFopKKAFopKKAFopKKAFooooAKKKSgQtFJRQAUUlFIAoopKACiikoAKSikoEFIaKQ0ABpDRSUxCUUUlIYUUUUgCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAH0UlFMoWikopjFooooAKWkooAWlptLQAtLTaWgB1FJRQA6ikooEOopKKAFpaSigBaKSigBaWkopALRSUUCFopKKAFopKKACiikoAWkoooAKSiigQUlFJQAUlFJQAUlFJTEFJRRSASiiikMKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAHUUlFMYtFJRQMWikpaAClpKKAFopKWmAUtJRQMdRSUUCHUUlLQAtFJS0ALRSUtABS0lFIBaKKKBC0UlFABRRRQAUUUlAC0UlFABRRSUCCiikoAKSiigBKSlpKYhKKKSkAUlFFIYUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAC0UUUDCiiigAooooAKWkopgLRSUtAwpaSigBaWkopgLS0lFADqKSloAWikopALS0lFAhaKSigBaKKKACiiigAopKKAFpKKKBBRSUUAFFFJQAUlFJQIKSiigBKKKSgYUUUUgCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAFopKWgAooooGFFFFABRRRQAtFFFMYUtJRQAtLSUtAC0UlLQAUtJS0AFLSUUCFopKWgAooooAKKKKACiiigApKKKBBRSUUAFJS0lABSUUlAgpKKKACkoopDCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApaKKACiiigYUUUUAFFFFAC0UUUDCiiimAtFFFAC0UUUALRRRQAtFJS0CCiiigBaKSigBaSlpKACiiigAoopKBBRRSUAFJS0lABSUUUCEooooASiiikMKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAWiiigYUUUUAFFFFABRRRQAUUUtAwooooAKKKKYC0UUUALRRRQAtFFFABS0lLQAUUUUCCiiigAooooAKKKKAEooooAKSlpKBBSUUUAJSUtJQIKSlpKQwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAWiiigYUUUUgCiiigYUUtFACUtFFMAooooGFLRRQAUtJS0wCiiloEFFFFABS0lLQAUUUUAFFFFABRRRQIKSlooASiiigBKKWkoASiiigQlJS0lABSUtJSAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAFopaKRQUUUUAFFFFABRRRQMKKKWmAlLRRQAUUUtABRRS0AJS0UUAFLSUtMQUUUUgCiiimAUUUtACUUUUAFFFFAhKKWkoAKSlpKAEopaSgQlJS0lIApKWkoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAHUUUUiwooooAKKKWgBKKWigAooopjCiiloEFFFLQAUUUUAFFLRQAUUUUCCilooASloooAKKKKACkpaKAEopaSgApKWkoAKSlooEJSUtJQAlJS0UCEpKWkoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAHUtFFI0CiiigAooooAKKKWmAlLRRQAUUtFABRRRQIKWiigAoopaAEpaKKACiiigAooooEFFFFABRRRQAUlLRQAlFFFACUUUUAJSUtFAhKSlpKAEpKWkoEFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAD6KWikaCUUtFACUtFFABRRS0wEpaKKACiiloASloooEFFFLQAUUUUAFFFFABRS0UAJRS0UAJRS0UCEooooAKKKKAEooooAKSlpKAEopaSgQlJS0lACUlOpKBCUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRS0UAFFFFAD6KKKRoFFFLQAlLRRQAUUUUwCloooAKKKKACilooEFFFFABRRS0AFFFFABRRRQAUUUUAFFFFABRRRQISiiigApKWkoAKSlooASkpaSgBKKWkoEJSUtJQAlFFFAgooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApaSloAKKKKACiiigCSiiikaBRRRQAUUUtACUtFFMAooooAWiiigAooooAKKKWgQUUUUAFFFFABRRS0AJRS0lABRRRQAUUUUCCkpaSgApKWigBKKKKAEooooASkpaSgBKSlpKBCUUtJQIKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAWiiigAooooAKKKKAJKKKKRoFFFLQAUUUUAFFFFMApaKKACiiigAooooAKWiigQUUUUAFFFLQAUUUUAFFFFACUUtJQAUUUUAFJS0UCEooooASiiigBKKKKAEpKWkoASkpaKBCUlLSUCCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKWkpaACiiigAooooAKKKKBElFFFI1FooooAKKKKACiiimAtFFFABRRRQAUUUtABRRRQIKKKKAClpKWgAooooAKKKKACkpaSgAooooAKKKKBCUUUUAJRRRQAlFFFACUlLSUAJRRRQISkpaSgQUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABS0lLQAUUUUAFFFFABRRRQI//9k="

                />
              </div>
              <div>
                <div>
                  <h2>Brishan King</h2>
                  <p className="font-mono">Full-Stack Developer</p>
                  <p>
                    I am available for freelance or full-time positions. Contact
                    me and let&apos;s talk.
                  </p>
                </div>
                <div>
                  <p className="uppercase pt-10 text-center">Connect With Me</p>
                  <div className="flex items-center justify-around py-4">
                    <div className="rounded-full shadow-gray-400 dark:shadow-gray-900 shadow-lg">
                      <Link
                        href="https://www.linkedin.com/in/brishan-king/"
                        className="text-inherit"
                      >
                        <div className="rounded-full bg-white dark:bg-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-150">
                          <FaLinkedinIn />
                        </div>
                      </Link>
                    </div>
                    <div className="rounded-full shadow-gray-400 dark:shadow-gray-900 shadow-lg">
                      <Link
                        href="https://github.com/brishan3"
                        className="text-inherit"
                      >
                        <div className="rounded-full bg-white dark:bg-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-150">
                          <FaGithub />
                        </div>
                      </Link>
                    </div>
                    <div className="rounded-full shadow-gray-400 dark:shadow-gray-900 shadow-lg">
                      <Link
                        href="mailto:brishan.king@gmail.com"
                        className="text-inherit"
                      >
                        <div className="rounded-full bg-white dark:bg-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-150">
                          <AiOutlineMail />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 dark:shadow-gray-900 rounded-xl lg:p-4">
            <div className="p-4">
              <form ref={form} onSubmit={sendEmail}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label
                      className="uppercase text-sm py-2"
                      htmlFor="user_name"
                    >
                      Name
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 border-gray-300 focus:outline-salmon dark:text-gray-900"
                      id="user_name"
                      name="user_name"
                      type="text"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      className="uppercase text-sm py-2"
                      htmlFor="user_phone"
                    >
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 border-gray-300 focus:outline-salmon dark:text-gray-900"
                      id="user_phone"
                      name="user_phone"
                      type="tel"
                      placeholder="xxx-xxx-xxxx"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label
                    className="uppercase text-sm py-2"
                    htmlFor="user_email"
                  >
                    Email
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 border-gray-300 focus:outline-salmon dark:text-gray-900"
                    id="user_email"
                    name="user_email"
                    type="email"
                    placeholder="johndoe@gmail.com"
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label
                    className="uppercase text-sm py-2"
                    htmlFor="user_subject"
                  >
                    Subject
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 border-gray-300 focus:outline-salmon dark:text-gray-900"
                    id="user_subject"
                    name="user_subject"
                    type="text"
                    placeholder="Looking to build a website"
                    required
                  />
                </div>
                <div className="flex flex-col py-2 pb-6">
                  <label
                    className="uppercase text-sm py-2"
                    htmlFor="user_message"
                  >
                    Message
                  </label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300 resize-y focus:outline-salmon dark:text-gray-900"
                    rows="10"
                    id="user_message"
                    name="user_message"
                    type="text"
                    placeholder="Insert details here..."
                    required
                  />
                </div>
                <button className="w-full p-4 text-gray-100 hover:scale-[102%] active:scale-[99%] transition-all">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-900 p-4 cursor-pointer hover:scale-110 ease-in duration-150">
              <HiOutlineChevronDoubleUp
                className="m-auto text-salmon"
                size={30}
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
