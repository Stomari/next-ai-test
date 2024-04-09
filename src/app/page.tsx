import { Box, TextField } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100% - 60px)",
      }}
    >
      <Box sx={{ flexGrow: 1 }}></Box>
      <Box sx={{ padding: "64px" }}>
        <TextField
          id="filled-multiline-static"
          label="Message to Next AI"
          multiline
          maxRows={5}
          variant="standard"
          fullWidth
        />
      </Box>
    </Box>
  );
}
