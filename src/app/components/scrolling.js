"use client";

import { Box, Paper } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import { Icon } from "@iconify/react";

const technologies = [
  { name: "Supabase", icon: "simple-icons:supabase" },
  { name: "HTML", icon: "vscode-icons:file-type-html" },
  { name: "JavaScript", icon: "logos:javascript" },
  { name: "Python", icon: "logos:python" },
  { name: "Next.js", icon: "logos:nextjs" },
  { name: "React", icon: "logos:react" },
  { name: "Node.js", icon: "logos:nodejs" },
  { name: "Firebase", icon: "logos:firebase" },
  { name: "Pytorch", icon: "logos:pytorch" },
  { name: "C/C++", icon: "logos:c" },
  { name: "PostgreSQL", icon: "logos:postgresql" },
];

export default function ScrollingTechWindow() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isDragging) {
      const interval = setInterval(() => {
        setScrollPosition((prev) => (prev + 1) % (technologies.length * 100));
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isDragging]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setScrollStart(scrollPosition);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    let newScrollPosition = scrollStart - deltaX;
    const maxScroll = technologies.length * 100;
    if (newScrollPosition < 0) {
      newScrollPosition += maxScroll;
    } else if (newScrollPosition >= maxScroll) {
      newScrollPosition -= maxScroll;
    }
    setScrollPosition(newScrollPosition);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <Box
      ref={containerRef}
      sx={{
        overflow: "hidden",
        width: "100%",
        height: "100px",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        position: "relative",
        whiteSpace: "nowrap",
        cursor: isDragging ? "grabbing" : "grab",
        userSelect: "none", // Prevents text selection
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          transform: `translateX(-${
            scrollPosition % (technologies.length * 120)
          }px)`,
          transition: isDragging ? "none" : "transform 0.1s linear",
        }}
      >
        {[...technologies, ...technologies].map((tech, index) => (
          <Paper
            key={index}
            sx={{
              padding: "10px 20px",
              fontSize: "1.2rem",
              fontWeight: "bold",
              backgroundColor: "#95A3B3",
              color: "#3B3D54",
              boxShadow: 3,
              userSelect: "none", // Prevents text selection
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Icon icon={tech.icon} width={40} height={40} />
            {tech.name}
          </Paper>
        ))}
      </Box>
    </Box>
  );
}
