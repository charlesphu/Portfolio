"use client";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Chip,
  Box,
  Stack,
} from "@mui/material";
import { GithubIconButton, WebsiteIconButton } from "./icons";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import IconButton from "@mui/material/IconButton";
import LanguageIcon from "@mui/icons-material/Language";
import { Lan } from "@mui/icons-material";

export function CardComponent({
  name,
  description,
  skills,
  websiteURL,
  sourceURL,
}) {
  const handleNext = () => {
    // setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    // setCurrentImageIndex(
    //   (prevIndex) => (prevIndex - 1 + images.length) % images.length
    // );
  };
  return (
    <Box
      sx={{
        width: "100%",
        maxHeight: "600px",
        overflow: "auto",
      }}
    >
      <Card
        sx={{
          backgroundColor: "grey",
          display: "flex",
          flexDirection: "column",
          padding: "15px",
          overflow: "auto",
          borderRadius: "10px", // Adds rounded edges
        }}
      >
        <Box
          sx={{
            maxHeight: "70%",
            alignContent: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CardMedia
            component="img"
            image="/SpeedfillHomePage.png"
            alt="Preview"
            sx={{
              maxWidth: "640px",
              maxHeight: "480px",
              height: "auto",
              objectFit: "cover",
              borderRadius: "4px", // Adds rounded edges
            }}
          />
        </Box>
        <Box>
          <CardContent>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              {name}
            </Typography>
            <Typography variant="h6" gutterBottom>
              {description}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
              {skills.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  sx={{ bgcolor: "#333", color: "#fff" }}
                />
              ))}
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 3,
                width: "100%", // Ensures proper spacing
              }}
            >
              <Button variant="contained" startIcon={<LanguageIcon />}>
                {websiteURL}
              </Button>
              <GithubIconButton url={sourceURL} />
            </Box>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
}

// <Box
//   sx={{
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     flexDirection: "column",
//     maxHeight: "33vh",
//     width: "80%",
//     bgcolor: "black",
//     margin: "10px",
//     color: "#fff",
//   }}
// >
//   <Card
//     sx={{
//       backgroundColor: "grey",
//       width: "100%",
//       height: "100%",
//       display: "flex",
//       flexDirection: "column",
//       color: "#fff",
//       margin: "2vh",
//     }}
//   >
//     <Box
//       sx={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         position: "relative",
//         maxHeight: "50%",
//       }}
//     >
//       <Stack
//         direction="row"
//         sx={{
//           alignItems: "center",
//           justifyContent: "center",
//           width: "100%",
//           height: "auto",
//         }}
//       >
//         <IconButton
//           onClick={handlePrev}
//           sx={{
//             backgroundColor: "rgba(0,0,0,0.5)",
//             color: "white",
//             left: "0%",
//           }}
//         >
//           <ArrowBackIosIcon />
//         </IconButton>

//         <CardMedia
//           component="img"
//           image="/SpeedfillHomePage.png"
//           alt="Preview"
//           sx={{
//             maxHeight: "300px",
//             width: "auto",
//             maxWidth: "80%",
//             objectFit: "contain",
//             flexShrink: 0,
//           }}
//         />

//         <IconButton
//           onClick={handleNext}
//           sx={{
//             backgroundColor: "rgba(0,0,0,0.5)",
//             color: "white",
//           }}
//         >
//           <ArrowForwardIosIcon />
//         </IconButton>
//       </Stack>
//     </Box>
//     <CardContent>
//       <Typography variant="h3" fontWeight="bold" gutterBottom>
//         {name}
//       </Typography>
//       <Typography variant="h6" gutterBottom>
//         {description}
//       </Typography>
//       <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
//         {skills.map((tech) => (
//           <Chip
//             key={tech}
//             label={tech}
//             sx={{ bgcolor: "#333", color: "#fff" }}
//           />
//         ))}
//       </Box>
//       <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
//         <Typography>
//           <WebsiteIconButton url={websiteURL} />
//           <a href={websiteURL} target="_blank" rel="noopener noreferrer">
//             Website
//           </a>
//         </Typography>
//         <Typography>
//           <GithubIconButton url={sourceURL} />
//           <a href={sourceURL} target="_blank" rel="noopener noreferrer">
//             Source
//           </a>
//         </Typography>
//       </Box>
//     </CardContent>
//   </Card>
// </Box>
