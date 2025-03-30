import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import IconButton from "@mui/material/IconButton";
import LanguageIcon from "@mui/icons-material/Language";

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
