import React from "react";
import Intro from "./components/intro";
import AboutMe from "./components/aboutMe";
import Contact from "./components/contact";
import Projects from "./components/projects";
export default function Home() {
  return (
    <html style={{ height: "100%" }}>
      <body style={{ height: "100%", margin: 0 }}>
        {/* <Intro /> */}
        <AboutMe />
        {/* <Projects />
        <Contact /> */}
      </body>
    </html>
  );
}
