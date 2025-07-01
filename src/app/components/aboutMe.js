"use client";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollingTechWindow from "./scrolling";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

export default function AboutMe() {
  const introRef = useRef(null);
  const introDescRef = useRef(null);
  const skillsRef = useRef(null);
  const skillsDescRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(introRef.current, {
        x: -75,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
          trigger: introRef.current,
          start: "top bottom",
          toggleActions: "play reset restart reset",
        },
      });
    },
    { scope: introRef }
  );

  useGSAP(
    () => {
      gsap.from(introDescRef.current, {
        x: 100,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
          trigger: introDescRef.current,
          start: "top bottom",
          toggleActions: "play reset restart reset",
        },
      });
    },
    { scope: introDescRef }
  );

  useGSAP(
    () => {
      gsap.from(skillsRef.current, {
        x: -75,
        opacity: 0,
        duration: 3,
        delay: 0.25,
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top bottom",
          toggleActions: "play reset restart reset",
        },
      });
    },
    { scope: skillsRef }
  );

  useGSAP(
    () => {
      gsap.from(skillsDescRef.current, {
        x: 100,
        opacity: 0,
        duration: 3,
        delay: 0.25,
        scrollTrigger: {
          trigger: skillsDescRef.current,
          start: "top bottom",
          toggleActions: "play reset restart reset",
        },
      });
    },
    { scope: skillsDescRef }
  );

  return (
    <div className="h-screen bg-[#CFD0DD] flex flex-col justify-center items-center">
      <div className="w-[80%] m-auto">
        <p ref={introRef} className="py-4 text-5xl">
          A Little Intro:
        </p>
        <p ref={introDescRef} className="text-xl">
          I graduated high school at 16 with the highest cumulative GPA and am
          on track to earn my bachelor’s degree from UCSC at 20—reflecting my
          discipline, enthusiasm, and relentless drive for self-improvement. I
          thrive on challenges and have an insatiable curiosity for
          learning—whether in technical skills, practical life skills, or health
          and fitness. I’d love the opportunity to apply my skills and
          contribute to your team. Looking forward to the possibility of working
          together!
        </p>
        <p ref={skillsRef} className="py-4 text-5xl">
          Skills:
        </p>
        <p ref={skillsDescRef} className="text-xl">
          React, Next.js, JavaScript, Python, C++, SQL, Git, Supabase,
          Material-UI, Node.js, PostgreSQL, Firebase, Vercel, Docker,
          Agile/Scrum, CI/CD.
        </p>
        <ScrollingTechWindow />
      </div>
    </div>
  );
}
