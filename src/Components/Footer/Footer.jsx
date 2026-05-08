import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const companyRoutes = {
  About: "/about",
  "Case Studies": "/case-studies",
  Legal: "/legal",
  "Reach Us": "/contact",
};

const socialLinks = [
  {
    icon: "/Images/linkedin.svg",
    link: "https://www.linkedin.com/pulse/iitil-hiring-global-vacancies-iitil--2f7kf/",
  },
  {
    icon: "/Images/x.svg",
    link: "https://x.com/@iitil58131",
  },
  {
    icon: "/Images/youtube.svg",
    link: "https://www.youtube.com/@Iitil-q9e",
  },
  {
    icon: "/Images/facebook.svg",
    link: "https://www.facebook.com/profile.php?id=61589067426703",
  },
  {
    icon: "/Images/instagram.svg",
    link: "https://www.instagram.com/accounts/login/?next=%2Fiitilcipl&source=omni_redirect",
  },
];

const solutions = [
  { label: "IT Services", path: "/it-services" },
  { label: "Data Services", path: "/data-services" },
  { label: "AI & ML", path: "/ai-ml" },
  { label: "Cloud Infrastructure", path: "/cloud-infrastructure" },
  { label: "Cybersecurity", path: "/cybersecurity" },
];

export default function Footer() {
  const navigate = useNavigate();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#141829",
        color: "#8D93B8",
        pt: { xs: 6, md: 8 },
        pb: { xs: 4, md: 5 },
        fontFamily: "Jost, sans-serif",
        paddingX: { xs: 1, md: 3 },
      }}
    >
      <Container maxWidth={false} sx={{ px: { xs: 3, md: 6 } }}>
        <Grid container spacing={4}>
          {/* LEFT */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              onClick={() => navigate("/")}
              sx={{
                cursor: "pointer",
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* LOGO IMAGE */}
              <Box
                component="img"
                src="/Images/Itil.svg" // 👉 replace with your image path
                alt="litl"
                sx={{
                  height: "36px",
                  width: "auto",
                  objectFit: "contain",
                  display: "block",
                  mb: "4px",
                  position: "relative",
                 

                }}
              />

              {/* SUB TEXT */}
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontSize: "11px", // 👈 smaller size
                  fontWeight: 600,  // 👈 bold
                  lineHeight: "14px",
                  fontFamily: "Jost, sans-serif",
                }}
              >
                A YAKA Brand by Crediple
              </Typography>
            </Box>

            <Typography sx={{ fontSize: "14px", mb: 3, mt: 1 }}>
              Transforming data into intelligent business outcomes through advanced analytics and technology solutions.
            </Typography>

            <Box sx={{ display: "flex", gap: 2 }}>
              {socialLinks.map((item, i) => (
                <IconButton
                  key={i}
                  component="a"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    border: "1px solid rgba(255,255,255,0.1)",
                    width: 36,
                    height: 36,
                    borderRadius: 0,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: "#00D9FF",
                      backgroundColor: "rgba(0,217,255,0.08)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={item.icon}
                    alt="social"
                    sx={{
                      width: "18px",
                      height: "18px",
                      objectFit: "contain",
                    }}
                  />
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* SOLUTIONS */}
          <Grid size={{ xs: 12, md: 3 }}>
            {solutions.map((item) => (
              <Typography
                key={item.label}
                onClick={() => navigate(item.path)}
                sx={{
                  fontSize: "14px",
                  mb: 1,
                  cursor: "pointer",
                  "&:hover": { color: "#00D9FF" },
                }}
              >
                {item.label}
              </Typography>
            ))}
          </Grid>

          {/* COMPANY */}
          <Grid size={{ xs: 12, md: 2.5 }}>
            {/* <Typography sx={{ color: "#00D9FF", mb: 2 }}>
              Company
            </Typography> */}

            {["About", "Case Studies", "Legal", "Reach Us"].map((item) => (
              <Typography
                key={item}
                onClick={() => navigate(companyRoutes[item])}
                sx={{
                  fontSize: "14px",
                  mb: 1,
                  cursor: "pointer",
                  "&:hover": { color: "#00D9FF" },
                }}
              >
                {item}
              </Typography>
            ))}
          </Grid>

          {/* CONTACT */}
          <Grid size={{ xs: 12, md: 2.5 }}>
            {/* <Typography sx={{ color: "#00D9FF", mb: 2 }}>
              Contact
            </Typography> */}

            <Box sx={{ display: "flex", gap: 1 }}>
              {/* <EmailOutlinedIcon sx={{ color: "#00D9FF" }} /> */}
              <Typography sx={{ fontSize: "14px" }}>hello@litl.com</Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
              {/* <LocationOnOutlinedIcon sx={{ color: "#00D9FF" }} /> */}
              <Typography sx={{ fontSize: "13px" }}>Sattva Knowledge City, Hi-Tec City,

                Hyderabad - 500081 Telangana,

                India
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* BOTTOM */}
        <Box
          sx={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            mt: 5,
            pt: 3,
          }}
        >
          <Typography sx={{ fontSize: "13px" }}>
            © 2026 Crediple India Private Limited  (CIPL). All rights reserved . Empowering Professionals Through Convergent
            Technology..
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}