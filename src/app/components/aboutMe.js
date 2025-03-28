import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
export default function AboutMe() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "green",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box>
        <Typography variant="h1" justifyContent="left" paddingTop={4}>
          About Me
        </Typography>
        <Typography variant="h5" padding={4}>
          I graduated high school at 16 with the highest cumulative GPA and am
          on track to earn my bachelor’s degree from UCSC at 20—reflecting my
          discipline, enthusiasm, and relentless drive for self-improvement. I
          thrive on challenges and have an insatiable curiosity for
          learning—whether in technical skills, practical life skills, or health
          and fitness. I’d love the opportunity to apply my skills and
          contribute to your team. Looking forward to the possibility of working
          together!
        </Typography>
      </Box>
    </Box>
  );
}
