"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Shapes } from "@/components/Shapes";
import { splitLetters } from "@/components/CustomText";

const About = () => {
  const component = useRef(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      // create as many GSAP animations and/or ScrollTriggers here as you want...
      gsap
        .timeline()
        .fromTo(
          ".name-animation",
          { x: -100, opacity: 0, rotate: -10 },
          {
            x: 0,
            opacity: 1,
            rotate: 0,

            ease: "elastic.out(1,0.3)",
            duration: 1,
            transformOrigin: "left top",
            stagger: { each: 0.1, from: "random" },
          }
        )
        .fromTo(
          ".job-title",
          {
            y: 20,
            opacity: 0,
            scale: 1.2,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scale: 1,
            ease: "elastic.out(1,0.3)",
          }
        );
    }, component);
    return () => ctx.revert(); // cleanup!
  }, []);

  return (
    <div ref={component} className="w-full h-max bg-main ">
      {/* hero */}
      <div className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center  text-white  relative  z-50">
        <Shapes />
        <div className="col-start-1 lg:row-start-1 lg:px-32 px-12 flex flex-col items-center justify-center md:mt-0 -mt-20">
          <h1 className="text-[clamp(3rem,20vmin,30rem)] font-extrabold tracking-tighter leading-none relative ">
            {splitLetters("Mahdi", "first")}
            <span className="absolute -top-8 -left-3 text-white text-[20px] tracking-widest text-animated-glow">
              {splitLetters("I' m", "first")}
            </span>
            <br />
            <span className="text-purple-500 ">
              {splitLetters("Fallah", "last")}
            </span>
          </h1>

          <h2
            className="block bg-gradient-to-tr from-purple-500 via-red-500 to-blue-100 font-bold 
        bg-clip-text text-transparent opacity-100 text-md md:text-2xl job-title text-center"
          >
            web developer & software engineer
          </h2>
        </div>
      </div>
      {/* info about developer */}
      <div className="w-full min-h-screen   text-white  relative z-50 pt-16 ">
        <div className="grid gap-x-6 md:grid-cols-[2fr,1fr]">
          <div className="lg:px-32 px-12">
            <h1 className="text-[clamp(3rem,20vmin,7rem)] font-extrabold tracking-tighter leading-none relative  cols-start-1 ">
              INFO
            </h1>

            <article className="max-w-xl py-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quibusdam labore similique sunt adipisci deserunt repellendus
              ducimus dicta minima magnam nisi sit explicabo, voluptates
              doloribus? Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Quasi ex neque eum rerum perspiciatis molestiae nostrum!
              Suscipit officia atque, consequuntur unde fuga ullam sapiente?
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
