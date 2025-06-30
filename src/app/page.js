"use client";
import React from "react";
import Intro from "./components/intro";
import AboutMe from "./components/aboutMe";
import Contact from "./components/contact";
import Projects from "./components/projects";
import { Divider } from "@mui/material";
import { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const fadeRef = useRef(null);
  return (
    // <div className="h-screen bg-yellow-500"></div>
    <div className="h-full">
      <Intro />
      <Divider
        sx={{
          borderWidth: "1px",
        }}
      />
      <AboutMe />
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
