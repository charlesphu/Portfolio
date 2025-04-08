"use client";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Chip,
  Box,
  Divider,
} from "@mui/material";
import { GithubIconButton } from "./icons";
import LanguageIcon from "@mui/icons-material/Language";

export function CardComponent({
  name,
  description,
  skills,
  websiteURL,
  sourceURL,
  image,
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
        maxWidth: "650px",
        // overflow: "auto",
        overflowY: "visible",
      }}
    >
      <Card
        sx={{
          backgroundColor: "#95A3B3",
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          // overflow: "auto",
          borderRadius: "14px",
          boxShadow: "10px",
          "&:hover": {
            backgroundColor: "#5E6F82",
            position: "relative",
            // outline: "20px solid rgba(202, 17, 17, 0.1)",
            boxShadow: "0px 6px 25px rgb(50, 52, 72)",
          },
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
            image={image}
            alt="Preview"
            sx={{
              maxWidth: "640px",
              maxHeight: "480px",
              height: "auto",
              objectFit: "cover",
              borderRadius: "6px", // Adds rounded edges
            }}
          />
        </Box>
        <Box sx={{ width: "100%" }}>
          <CardContent>
            <Typography
              variant="h3"
              fontWeight="bold"
              gutterBottom
              sx={{ color: "#3B3D54" }}
            >
              {name}
            </Typography>
            <Divider
              sx={{
                width: "100%",
                borderWidth: "1px",
                marginBottom: "15px",
              }}
            />
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                color: "#F5F5F5",
                wordWrap: "break-word",
                overflowWrap: "break-word",
              }}
            >
              {description}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
              {skills.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  sx={{ bgcolor: "#3B3D54", color: "#F5F5F5" }}
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
              {websiteURL && (
                <Button
                  variant="contained"
                  startIcon={<LanguageIcon />}
                  onClick={() => window.open(websiteURL, "_blank")}
                  sx={{ bgcolor: "#3B3D54", borderRadius: 3, color: "#F5F5F5" }}
                >
                  {websiteURL}
                </Button>
              )}
              {sourceURL && <GithubIconButton url={sourceURL} />}
            </Box>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
}
