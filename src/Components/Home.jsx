import { Link } from "react-router-dom";
import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import flower from "./images/moon.png";

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  // handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onclick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component={"div"}
        sx={{ flexGrow: 1, my: 2 }}
      >
        <HomeIcon />
        React Project
      </Typography>
      <Divider />

      <ul className="mobile-navigation">
        <li>
          <Link to={"/arrow"}>Arrow</Link>
        </li>
        <li>
          <Link to={"/array"}>ArrayMethod</Link>
        </li>
        <li>
          <Link to={"/cards"}>Cards</Link>
        </li>
        <li>
          <Link to={"/employee"}>Employee</Link>
        </li>
        <li>
          <Link to={"/mode"}>Mode</Link>
        </li>
        <li>
          <Link to={"/muiCards"}>MUICards</Link>
        </li>
      </ul>
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component={"div"}
              sx={{ flexGrow: 1 }}
            >
              <HomeIcon />
              React Project
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <Link to={"/arrow"}>Arrow</Link>
                </li>
                <li>
                  <Link to={"/array"}>ArrayMethod</Link>
                </li>
                <li>
                  <Link to={"/cards"}>Cards</Link>
                </li>
                <li>
                  <Link to={"/employee"}>Employee</Link>
                </li>
                <li>
                  <Link to={"/mode"}>Mode</Link>
                </li>
                <li>
                  <Link to={"/muiCards"}>MUICards</Link>
                </li>
                <li>
                  <Link to={"/tableMUI"}>TableMUI</Link>
                </li>
                <li>
                  <Link to={"/tableeffect"}>TablesEffect</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: "200px" },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <div
          style={{
            backgroundImage: `url(${flower})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "245vh",
          }}
        >
          <Box sx={{ p: 38 }}>
            <h1
              style={{
                color: "white",
                fontSize: "50px",
                fontFamily: "cursive",
                textAlign: "center",
              }}
            >
              Home Page
            </h1>
          </Box>
        </div>
      </Box>
    </>
  );
}
