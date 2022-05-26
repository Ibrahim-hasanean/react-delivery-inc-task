import React from "react";
import { IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";

const LayoutAppBar = ({ setOpenDrawer }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setOpenDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mail Delivery Service
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default LayoutAppBar;
