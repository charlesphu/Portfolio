"use client";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Chip,
  Box,
} from "@mui/material";
import WebIcon from "@mui/icons-material/Public";
import CodeIcon from "@mui/icons-material/Code";
import { GithubIconButton, WebsiteIconButton } from "./icons";

export function CardComponent({
  name,
  description,
  skills,
  websiteURL,
  sourceURL,
}) {
  return (
    <Card
      sx={{
        maxWidth: 400,
        backgroundColor: "grey",
        color: "#fff",
        borderRadius: 3,
        p: 2,
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image="/path-to-your-image.jpg"
        alt="Preview"
        sx={{ borderRadius: 2 }}
      />
      <CardContent>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body2" gutterBottom>
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
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
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
    </Card>
  );
}
