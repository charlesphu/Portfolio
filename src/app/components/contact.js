"use client";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
// import PhoneIcon from "@mui/icons-material/Phone";
import {
  Box,
  Button,
  Divider,
  Icon,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

export default function Contact() {
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "yellow",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: "4rem",
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Contact Me
          </Typography>
          <Typography>Email: charlesphu18@gmail.com</Typography>
          <Typography>Phone: (+1) 510-458-1787</Typography>
          <Divider sx={{ width: "50%", margin: "2rem 0" }} />
          <Stack direction="row" spacing={5} sx={{ justifyContent: "center" }}>
            <IconButton
              onClick={() =>
                window.open("https://github.com/charlesphu", "_blank")
              }
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/charles--phu-/",
                  "_blank"
                )
              }
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              onClick={() =>
                window.open("mailto:charlesphu18@gmail.com", "_blank")
              }
            >
              <EmailIcon />
            </IconButton>
            {/* <PhoneIcon></PhoneIcon> */}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
