import { Box, Stack, Typography } from "@mui/material";
import { CardComponent } from "./card";
export default function Projects() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#CFD0DD",
        display: "flex",
        flexDirection: "column",
        color: "black",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h1"
        sx={{ padding: "2rem", letterSpacing: "-0.02em" }}
      >
        Projects - Experience
      </Typography>
      <Stack sx={{ width: "100%", alignItems: "center" }}>
        <Stack
          direction={{ xs: "column", sm: "row", width: "90%" }}
          spacing={15}
          padding={5}
        >
          <CardComponent
            name="Speedfill"
            description=" AI-powered job application assistant that analyzes resumes and generates tailored cover letters based on job descriptions. Built with Next.js, Material UI, Google Gemini AI, and Supabase, SpeedFill streamlines the application process to help job seekers save time and increase their chances of landing interviews"
            websiteURL="https://speed-fill.vercel.app/"
            sourceURL="https://github.com/charlesphu/SpeedFill"
            skills={["React", "Next.js", "Javascript", "Supabase", "Gemini"]}
            image="./SpeedfillHomePage.png"
          />
          <CardComponent
            name="Solar Strife"
            description="Team-based strategic PVP sci-fi game featuring fully armed spacecraft with gyroscopic movement 
 with custom-modeled planes, ships, bases, and turrets with fully functional ship and player combat system "
            websiteURL="roblox.com/games/8715055706/Solar-Strife "
            skills={["ROBLOX", "Lua / Luau", "Scripting", "Modeling"]}
            image="./solarStrifeFighting.gif"
            // image="./SolarStrife.webp"
          />
        </Stack>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={15} padding={5}>
          <CardComponent
            name="AI form detector"
            description="Trained an AI model to validate squat, bench, and deadlift form by using Yolov8 achieving 85% accuracy in classification"
            skills={["Yolo v8", "Transfer Learning", "Computer Vision"]}
            image="./formDetector.png"
          />
          <CardComponent
            name="M.A.N.G.O"
            description="Metrics and Analytics for Net Gain Optimization
            Track, analyze, and visualize key property metrics with an interactive dashboard designed for both rental property investors and homeowners. Monitor rental income, mortgage payments, insurance, maintenance, utilities, and home value through dynamic, customizable graphs. A net profitability tracker calculates monthly and yearly returns, helping users optimize cash flow and ROI"
            sourceURL="https://github.com/charlesphu/M.A.N.G.O/tree/main "
            skills={["React", "Next.js", "Firebase"]}
            image="./mangoDashboard.png"
          />
        </Stack>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={15} padding={5}>
          <CardComponent
            name="Multithreaded HTTP Server"
            description="Designed and implemented a high-performance multithreaded HTTP server, enabling concurrent client request handling with robust multithreaded thread safety"
            // sourceURL="https://github.com/charlesphu/ "
            skills={["C", "Regex"]}
            image="./multithreadedServer.jpg"
          />
        </Stack>
      </Stack>
    </Box>
  );
}
