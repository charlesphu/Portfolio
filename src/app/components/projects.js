import { Box, Typography } from "@mui/material";
import { CardComponent } from "./card";
export default function Projects() {
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "purple",
          display: "flex",
          flexDirection: "column",
          color: "black",
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "2rem",
          }}
        >
          <Typography variant="h1">Projects</Typography>
          <CardComponent
            name="Speedfill"
            description="asdjfkla;sdfjkla;sdjkfa;lsfjklasdfjlksad;"
            websiteURL="https://speed-fill.vercel.app/"
            sourceURL="https://github.com/charlesphu/SpeedFill"
            skills={["React", "Next.js", "Tailwind CSS"]}
          />
        </Box>
      </Box>
    </Box>
  );
}
