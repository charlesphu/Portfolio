import Box from "@mui/material/Box";
import { AppBar, Button, Divider, Stack, Typography } from "@mui/material";
export default function Intro() {
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "black",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <AppBar
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
        </AppBar>

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
            sx={{ color: "white", fontFamily: "Merriweather" }}
          >
            Charles Phu
          </Typography>
          <Typography variant="h2" sx={{ color: "white" }}>
            Software Engineer
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
