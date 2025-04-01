"use client";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import IconButton from "@mui/material/IconButton";
import LanguageIcon from "@mui/icons-material/Language";
import { Stack } from "@mui/material";

export function GithubIconButton({ url }) {
  return (
    <IconButton
      onClick={() => window.open(url, "_blank")}
      sx={{ color: "black" }}
    >
      <GitHubIcon />
    </IconButton>
  );
}
export function WebsiteIconButton({ url }) {
  return (
    <IconButton
      onClick={() => window.open(url, "_blank")}
      sx={{ color: "black" }}
    >
      <LanguageIcon />
    </IconButton>
  );
}
export function LinkedInIconButton() {
  return (
    <IconButton
      onClick={() =>
        window.open("https://www.linkedin.com/in/charles--phu-/", "_blank")
      }
      sx={{ color: "black" }}
    >
      <LinkedInIcon />
    </IconButton>
  );
}
export function EmailIconButton() {
  return (
    <IconButton
      onClick={() => window.open("mailto:charlesphu18@gmail.com", "_blank")}
      sx={{ color: "black" }}
    >
      <EmailIcon />
    </IconButton>
  );
}

export function Iconbar() {
  return (
    <Stack direction="row" spacing={3} sx={{ justifyContent: "center" }}>
      <GithubIconButton url="https://github.com/charlesphu" />
      <LinkedInIconButton />
      <EmailIconButton />
    </Stack>
  );
}
