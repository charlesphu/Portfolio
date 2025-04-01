"use client";
import {
  GithubIconButton,
  LinkedInIconButton,
  EmailIconButton,
  Iconbar,
} from "./icons";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Box, Divider, Stack, Typography } from "@mui/material";

export default function Contact() {
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "yellow",
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
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem",
          }}
        >
          <Typography variant="h1">Contact Me</Typography>
          <Typography variant="body1" sx={{ padding: "1rem" }}>
            Feel free to reach out to me through any of the platforms below. I
            look forward to connecting with you!
          </Typography>
          <Stack direction="column" spacing={0} sx={{ marginBottom: "2rem" }}>
            <Typography variant="body2" sx={{ textDecoration: "underline" }}>
              <GithubIconButton url="https://github.com/charlesphu" />
              <a
                href="https://github.com/charlesphu"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "blue", textDecoration: "none" }}
              >
                github.com/charlesphu
              </a>
            </Typography>
            <Typography variant="body2" sx={{ textDecoration: "underline" }}>
              <LinkedInIconButton />
              <a
                href="https://www.linkedin.com/in/charles--phu-/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "blue", textDecoration: "none" }}
              >
                linkedin.com/in/charles--phu-
              </a>
            </Typography>
            <Typography sx={{ textDecoration: "underline" }}>
              <EmailIconButton />
              <a
                href="mailto:charlesphu18@gmail.com"
                rel="noopener noreferrer"
                style={{ color: "blue", textDecoration: "none" }}
              >
                charlesphu18@gmail.com
              </a>
            </Typography>
            <Typography>
              {" "}
              <LocalPhoneIcon />
              <a
                href="tel:+1510-458-1787"
                rel="noopener noreferrer"
                style={{ color: "blue", textDecoration: "none" }}
              >
                (+1) 510-458-1787
              </a>
            </Typography>
          </Stack>
          <Divider sx={{ width: "50%", margin: "2rem 0", bgcolor: "black" }} />
          <Iconbar />
        </Box>
      </Box>
    </Box>
  );
}
