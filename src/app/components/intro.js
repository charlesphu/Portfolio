"use client";
import { useEffect, useRef } from "react";
import { Iconbar } from "./icons";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, SplitText);

export default function Intro() {
  const nameRef = useRef(null);
  const descRef = useRef(null);
  const barRef = useRef(null);
  const imgRef = useRef(null);

  useGSAP(() => {
    gsap.from(imgRef.current, {
      opacity: 0,
      duration: 2,
    });
  });
  useGSAP(
    () => {
      const split = new SplitText(nameRef.current, { type: "chars" });

      const tl = gsap.timeline();

      tl.from(split.chars, {
        duration: 1.5,
        y: 60,
        opacity: 0,
        stagger: 0.05,
        ease: "back.out(1.7)",
      })
        .from(
          descRef.current,
          {
            duration: 1.5,
            y: 60,
            opacity: 0,
            stagger: 0.05,
            ease: "back.out(1.7)",
          },
          ">-1"
        )
        .to(
          barRef.current,
          {
            width: "50%",
            duration: 2,
            ease: "power2.out",
          },
          ">-1"
        );

      return () => split.revert();
    },
    { scope: nameRef }
  );

  return (
    <div className="h-screen bg-clear flex flex-col justify-center items-center">
      <img
        src="/profilePic.jpg"
        className="rounded-full py-4 w-40"
        ref={imgRef}
      ></img>
      <h1 ref={nameRef} className="text-5xl font-serif text-[#543A14]">
        Charles Phu
      </h1>
      <h2 ref={descRef} className="text-3xl text-[#543A14]">
        Sytems Engineer <a href="https://www.supermicro.com/en/" target="_blank" className="text-blue-600 font-semibold underline underline-offset-7">@Supermicro</a>
      </h2>

      <div
        ref={barRef}
        className="h-1 bg-clear mt-2 origin-left w-0 my-4 mt-6"
      />
      {/* <Divider
        sx={{
          bg: "#F0BB78",
          width: "50%",
          margin: "2rem 0",
        }}
      /> */}
      <Iconbar />
    </div>
  );
}

// this was an appbar before
{
  /* <AppBar
          position="static"
          sx={{
            height: "10%",
            minHeight: "75px",
            bgcolor: "white",
            justifyContent: "center",
            }}
            >
            <Stack
            direction="row"
            spacing={10}
            sx={{ justifyContent: "center", height: "100%" }}
            >
            <Button
            variant="text"
            sx={{ height: "100%", display: "flex", alignItems: "center" }}
            >
            Home
            </Button>
            <Divider orientation="vertical" flexItem />
            <Button
            variant="text"
            sx={{ height: "100%", display: "flex", alignItems: "center" }}
            >
            About Me
            </Button>
            <Divider orientation="vertical" flexItem />
            <Button
            variant="text"
            sx={{ height: "100%", display: "flex", alignItems: "center" }}
            >
            Contact
            </Button>
            </Stack>
            </AppBar> */
}
