import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const navItems = [
  "Home",
  "About",
  "Solutions",
  "Portfolio",        // ✅ added
  "Case Studies",
  "Contact"
];

const routes = {
  Home: "/",
  About: "/about",
  Solutions: "/solutions",
  Portfolio: "/portfolio",   // ✅ added
  "Case Studies": "/case-studies",
  Contact: "/contact",
};

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <>
      {/* FIXED HEADER */}
      <Box
        sx={{
          width: "100%",
          height: { xs: "70px", md: "70px" },
          backgroundColor: "#0A0E27",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 2, sm: 3, md: 5 },
          boxSizing: "border-box",

          position: "fixed",   // ✅ sticky/fixed
          top: 0,
          left: 0,
          zIndex: 1200,
        }}
      >
        {/* Left Logo */}
        <Box
          onClick={() => navigate("/")}
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            flexShrink: 0,
          }}
        >
          {/* Image */}
          <Box
            component="img"
            src="/Images/Button.svg"
            alt="Iitil"
            sx={{
              height: "36px",
              width: "auto",
              display: "block",
            }}
          />

          {/* Text */}
          <Typography
            sx={{
              color: "#E8EAF2",
              fontFamily: "Jost, sans-serif",
              fontWeight: 500,
              fontSize: "30px",
              lineHeight: "36px",
              letterSpacing: "-0.4px",
              userSelect: "none",
              ml: "-6px", // 👈 adjust this (-4px to -10px) based on how close you want
            }}
          >
            IItIL
          </Typography>
        </Box>

        {/* Desktop Right Section */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: "40px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "30px",
              alignItems: "center",
            }}
          >
            {navItems.map((item) => (
              <Typography
                key={item}
                onClick={() => navigate(routes[item])}
                sx={{
                  color:
                    location.pathname === routes[item] ? "#00e5ff" : "#b0b0b0",
                  fontSize: "14px",
                  fontWeight: 400,
                  cursor: "pointer",
                  transition: "0.3s",
                  whiteSpace: "nowrap",
                  "&:hover": {
                    color: "#00e5ff",
                  },
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>

          <Button
            onClick={() => navigate("/contact")}
            sx={{
              backgroundColor: "#00e5ff",
              color: "#000",
              textTransform: "none",
              fontSize: "14px",
              fontWeight: 500,
              padding: "10px 22px",
              borderRadius: "0px",
              minWidth: "140px",
              height: "35px",
              "&:hover": {
                backgroundColor: "#00c8e0",
              },
            }}
          >
            Get in Touch
          </Button>
        </Box>

        {/* Mobile Hamburger */}
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            display: { xs: "flex", md: "none" },
            color: "#fff",
          }}
        >
          <MenuIcon />
        </IconButton>
      </Box>

      {/* SPACER (prevents content hiding under fixed header) */}
      <Box sx={{ height: "70px" }} />

      {/* Mobile Drawer */}
      <Drawer
        anchor="top"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            height: "50vh",
            width: "100%",
            backgroundColor: "#000",
            color: "#fff",
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={handleDrawerToggle} sx={{ color: "#fff" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List sx={{ px: 1, pt: 1 }}>
          {navItems.map((item) => (
            <ListItemButton
              key={item}
              onClick={() => {
                navigate(routes[item]);
                handleDrawerToggle();
              }}
              sx={{
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <ListItemText
                primary={item}
                primaryTypographyProps={{
                  fontSize: "15px",
                  color:
                    location.pathname === routes[item]
                      ? "#00e5ff"
                      : "#b0b0b0",
                }}
              />
            </ListItemButton>
          ))}
        </List>

        <Box sx={{ p: 2.5, mt: 1 }}>
          <Button
            fullWidth
            onClick={() => {
              navigate("/contact");
              handleDrawerToggle();
            }}
            sx={{
              backgroundColor: "#00e5ff",
              color: "#000",
              textTransform: "none",
              fontSize: "14px",
              fontWeight: 500,
              height: "46px",
              borderRadius: "0px",
              "&:hover": {
                backgroundColor: "#00c8e0",
              },
            }}
          >
            Get in Touch
          </Button>
        </Box>
      </Drawer>
    </>
  );
}