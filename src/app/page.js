import React from "react";
import Intro from "./components/intro";
import AboutMe from "./components/aboutMe";
export default function Home() {
  return (
    <html style={{ height: "100%" }}>
      <body style={{ height: "100%", margin: 0 }}>
        <AboutMe />
      </body>
    </html>
  );
}
