import Box from "@mui/material/Box";
import { AppBar, Button, Divider, Stack, Typography } from "@mui/material";
import { Iconbar } from "./icons";
export default function Intro() {
  return (
    <div className="h-screen bg-[#CFD0DD] flex flex-col justify-center items-center">
      <Typography
        variant="h1"
        sx={{ color: "#543A14", fontFamily: "Merriweather" }}
      >
        Charles Phu
      </Typography>
      <Typography variant="h2" sx={{ color: "#543A14" }}>
        Software Engineer
      </Typography>
      <Divider
        sx={{
          bg: "#F0BB78",
          width: "50%",
          margin: "2rem 0",
        }}
      />
      <Iconbar />
    </div>
  );
}

// this was an appbar before
{
  /* <AppBar
          position="static"
          sx={{
            height: "10%",
            minHeight: "75px",
            bgcolor: "white",
            justifyContent: "center",
            }}
            >
            <Stack
            direction="row"
            spacing={10}
            sx={{ justifyContent: "center", height: "100%" }}
            >
            <Button
            variant="text"
            sx={{ height: "100%", display: "flex", alignItems: "center" }}
            >
            Home
            </Button>
            <Divider orientation="vertical" flexItem />
            <Button
            variant="text"
            sx={{ height: "100%", display: "flex", alignItems: "center" }}
            >
            About Me
            </Button>
            <Divider orientation="vertical" flexItem />
            <Button
            variant="text"
            sx={{ height: "100%", display: "flex", alignItems: "center" }}
            >
            Contact
            </Button>
            </Stack>
            </AppBar> */
}
