"use client";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Chip,
  Box,
  IconButton,
  Stack,
} from "@mui/material";
import { GithubIconButton, WebsiteIconButton } from "./icons";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

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
        bgcolor: "black",
        width: "80%",
        maxHeight: "33vh",
      }}
    >
      <Card
        sx={{
          backgroundColor: "grey",
          width: "100%",
          height: "100%",
        }}
      >
        <Box
          sx={{
            maxHeight: "30%",
            alignContent: "center",
          }}
        >
          <CardMedia
            component="img"
            image="/SpeedfillHomePage.png"
            alt="Preview"
            sx={{
              width: "100%", // Ensures the image scales to its container
              maxWidth: "1000px", // Optional: Limits the max width
              height: "auto", // Maintains aspect ratio
              objectFit: "cover", // Optional: Ensures it fills the container if needed
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
              sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}
            >
              <Typography>
                <WebsiteIconButton url={websiteURL} />
                <a href={websiteURL} target="_blank" rel="noopener noreferrer">
                  Website
                </a>
              </Typography>
              <Typography>
                <GithubIconButton url={sourceURL} />
                <a href={sourceURL} target="_blank" rel="noopener noreferrer">
                  Source
                </a>
              </Typography>
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
