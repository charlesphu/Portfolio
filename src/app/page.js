"use client";
import React from "react";
import Intro from "./components/intro";
import AboutMe from "./components/aboutMe";
import Contact from "./components/contact";
import Projects from "./components/projects";
import { Divider } from "@mui/material";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
// import {  } from "gsap/";
export default function Home() {
  const fadeRef = useRef(null);

  useGSAP(() => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: 4,
      ease: "power2.out",
      scrollTrigger: {
        trigger: fadeRef.current,
        start: "top 80%", // when top of section hits 80% of viewport
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    // <div className="h-screen bg-yellow-500"></div>
    <div className="h-full">
      <div className="hscreen bg-black"></div>
      <Intro />
      <Divider
        sx={{
          borderWidth: "1px",
        }}
      />
      <AboutMe ref={fadeRef} />
      <Divider
        sx={{
          borderWidth: "1px",
        }}
      />
      <Projects />
      <Divider
        sx={{
          borderWidth: "1px",
        }}
      />
      <Contact />
    </div>
  );
}
