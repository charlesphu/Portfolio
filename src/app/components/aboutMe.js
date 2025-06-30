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
  const fadeRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        fadeRef.current,
        { opacity: 0, x: -40 },
        {
          x: 0,
          opacity: 1,
          duration: 3,
          scrollTrigger: {
            trigger: fadeRef.current,
            start: "top bottom",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: fadeRef }
  );

  return (
    <div className="h-screen bg-[#CFD0DD] flex flex-col justify-center items-center">
      <Box width="80%" margin="auto">
        <Typography ref={fadeRef} variant="h2" paddingTop={4}>
          A Little Intro:
        </Typography>
        <Typography variant="h5" paddingTop={2} paddingBottom={4}>
          I graduated high school at 16 with the highest cumulative GPA and am
          on track to earn my bachelor’s degree from UCSC at 20—reflecting my
          discipline, enthusiasm, and relentless drive for self-improvement. I
          thrive on challenges and have an insatiable curiosity for
          learning—whether in technical skills, practical life skills, or health
          and fitness. I’d love the opportunity to apply my skills and
          contribute to your team. Looking forward to the possibility of working
          together!
        </Typography>
        <Typography variant="h2" paddingBottom={2}>
          Skills:
        </Typography>
        <Typography variant="h6">
          React, Next.js, JavaScript, Python, C++, SQL, Git, Supabase,
          Material-UI, Node.js, PostgreSQL, Firebase, Vercel, Docker,
          Agile/Scrum, CI/CD.
        </Typography>
        <ScrollingTechWindow />
      </Box>
    </div>
  );
}
