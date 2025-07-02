"use client";
import React, { useEffect } from "react";
import Intro from "./components/intro";
import AboutMe from "./components/aboutMe";
import Contact from "./components/contact";
import Projects from "./components/projects";
import { Divider } from "@mui/material";
import { Gradient } from "whatamesh";

// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  }, []);
  return (
    // <div className="h-screen bg-yellow-500"></div>
    <div>
      <canvas
        id="gradient-canvas"
        data-transition-in
        className="fixed top-0 left-0 w-full h-full -z-10"
        // className="-z-10 flex"
      ></canvas>
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
    </div>
  );
}
