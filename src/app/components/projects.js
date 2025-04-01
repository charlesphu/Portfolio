import { Box, Card, Grid, Stack, Typography } from "@mui/material";
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
      <Stack sx={{ width: "100%", alignItems: "center" }}>
        <Stack
          direction={{ xs: "column", sm: "row", width: "90%" }}
          spacing={15}
          padding={5}
        >
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
