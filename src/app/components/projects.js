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
          />
          <CardComponent
            name="Speedfill"
            description="asdjfkla;sdfjkla;sdjkfa;lsfjklasdfjlksad;"
            websiteURL="https://speed-fill.vercel.app/"
            sourceURL="https://github.com/charlesphu/SpeedFill"
            skills={["React", "Next.js", "Javascript", "Supabase", "Gemini"]}
          />
        </Stack>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={15} padding={5}>
          <CardComponent
            name="Speedfill"
            description="asdjfkla;sdfjkla;sdjkfa;lsfjklasdfjlksad;"
            websiteURL="https://speed-fill.vercel.app/"
            sourceURL="https://github.com/charlesphu/SpeedFill"
            skills={["React", "Next.js", "Javascript", "Supabase", "Gemini"]}
          />
          <CardComponent
            name="Speedfill"
            description="asdjfkla;sdfjkla;sdjkfa;lsfjklasdfjlksad;"
            websiteURL="https://speed-fill.vercel.app/"
            sourceURL="https://github.com/charlesphu/SpeedFill"
            skills={["React", "Next.js", "Javascript", "Supabase", "Gemini"]}
          />
        </Stack>
      </Stack>
    </Box>
  );
}
