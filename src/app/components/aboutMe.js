import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import ScrollingTechWindow from "./scrolling";
export default function AboutMe() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#CFD0DD",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box width="80%" margin="auto">
        <Typography variant="h2" paddingTop={4}>
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
    </Box>
  );
}
