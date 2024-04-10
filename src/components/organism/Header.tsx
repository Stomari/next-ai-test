"use client";

import { ColorModeContext } from "@/theme/CustomThemeProvider";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Switch,
  FormGroup,
  FormControlLabel,
  useTheme,
} from "@mui/material";
import { useContext } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export const Header = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <Box>
      <AppBar position="static" sx={{ height: "60px" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Next AI App
          </Typography>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={theme.palette.mode === "dark"}
                  onChange={colorMode.toggleColorMode}
                />
              }
              label={
                theme.palette.mode === "dark" ? (
                  <DarkModeIcon />
                ) : (
                  <LightModeIcon />
                )
              }
            />
          </FormGroup>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
