import { Box, Card, Typography } from "@mui/material";
import { CardComponent } from "./card";
export default function Projects() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "purple",
        display: "flex",
        flexDirection: "column",
        color: "black",
        alignItems: "center",
      }}
    >
      <Typography variant="h1" sx={{ padding: "2rem" }}>
        Projects
      </Typography>
      <CardComponent
        name="Speedfill"
        description="asdjfkla;sdfjkla;sdjkfa;lsfjklasdfjlksad;"
        websiteURL="https://speed-fill.vercel.app/"
        sourceURL="https://github.com/charlesphu/SpeedFill"
        skills={["React", "Next.js", "Javascript", "Supabase", "Gemini"]}
      />
      {/* <CardComponent
        name="Speedfill"
        description="asdjfkla;sdfjkla;sdjkfa;lsfjklasdfjlksad;"
        websiteURL="https://speed-fill.vercel.app/"
        sourceURL="https://github.com/charlesphu/SpeedFill"
        skills={["React", "Next.js", "Javascript", "Supabase", "Gemini"]}
      /> */}
    </Box>
  );
}
