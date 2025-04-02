import React from "react";
import Intro from "./components/intro";
import AboutMe from "./components/aboutMe";
import Contact from "./components/contact";
import Projects from "./components/projects";
import { Divider } from "@mui/material";
export default function Home() {
  return (
    <html style={{ height: "100%" }}>
      <body style={{ height: "100%", margin: 0 }}>
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
      </body>
    </html>
  );
}
