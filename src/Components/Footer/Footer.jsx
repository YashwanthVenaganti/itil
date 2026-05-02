import { useNavigate } from "react-router-dom";
import { Box, Container, Grid, Typography, IconButton, Link } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const routes = {
  "Data Intelligence": "/solutions",
  "AI & Machine Learning": "/solutions",
  "Cloud Services": "/solutions",
  Cybersecurity: "/solutions",
  "About Us": "/about",
  "Case Studies": "/case-studies",
  Careers: "/careers",
  Contact: "/contact",
};

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
      }}
    >
      <Container maxWidth={false} sx={{ px: { xs: 3, sm: 5, md: 6 } }}>
        <Grid container spacing={{ xs: 5, md: 4 }}>
          {/* Left */}
          <Grid size={{ xs: 12, sm: 6, md: 3.5 }}>
            <Typography
              onClick={() => navigate("/")}
              sx={{
                color: "#FFFFFF",
                fontSize: "34px",
                fontWeight: 400,
                lineHeight: 1,
                mb: 3,
                cursor: "pointer",
              }}
            >
              litl
            </Typography>

            <Typography
              sx={{
                maxWidth: "260px",
                color: "#8D93B8",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "1.5",
                mb: 3,
              }}
            >
              Transforming data into intelligent business outcomes through advanced
              analytics and technology solutions.
            </Typography>

            <Box sx={{ display: "flex", gap: 2 }}>
              {[<LinkedInIcon />, <TwitterIcon />, <MailOutlineOutlinedIcon />].map((icon, index) => (
                <IconButton
                  key={index}
                  sx={{
                    width: 40,
                    height: 40,
                    border: "0.8px solid #FFFFFF14",
                    borderRadius: 0,
                    color: "#00D9FF",
                    "&:hover": {
                      borderColor: "#00D9FF",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  {icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Solutions */}
          <Grid size={{ xs: 12, sm: 6, md: 2.5 }}>
            <Typography
              sx={{
                color: "#00D9FF",
                fontSize: "24px",
                fontWeight: 600,
                mb: 3,
                textTransform: "uppercase",
              }}
            >
              Solutions
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {["Data Intelligence", "AI & Machine Learning", "Cloud Services", "Cybersecurity"].map(
                (item) => (
                  <Typography
                    key={item}
                    onClick={() => navigate(routes[item])}
                    sx={{
                      fontSize: "16px",
                      color: "#8D93B8",
                      cursor: "pointer",
                      "&:hover": {
                        color: "#00D9FF",
                      },
                    }}
                  >
                    {item}
                  </Typography>
                )
              )}
            </Box>
          </Grid>

          {/* Company */}
          <Grid size={{ xs: 12, sm: 6, md: 2.5 }}>
            <Typography
              sx={{
                color: "#00D9FF",
                fontSize: "24px",
                fontWeight: 600,
                mb: 3,
                textTransform: "uppercase",
              }}
            >
              Company
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {["About Us", "Case Studies", "Careers", "Contact"].map((item) => (
                <Typography
                  key={item}
                  onClick={() => navigate(routes[item])}
                  sx={{
                    fontSize: "16px",
                    color: "#8D93B8",
                    cursor: "pointer",
                    "&:hover": {
                      color: "#00D9FF",
                    },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Contact */}
          <Grid size={{ xs: 12, sm: 6, md: 3.5 }}>
            <Typography
              sx={{
                color: "#00D9FF",
                fontSize: "24px",
                fontWeight: 600,
                mb: 3,
                textTransform: "uppercase",
              }}
            >
              Contact
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                <EmailOutlinedIcon sx={{ color: "#00D9FF", fontSize: 20, mt: "2px" }} />
                <Typography sx={{ fontSize: "16px", color: "#8D93B8" }}>
                  contact@litl.com
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                <LocationOnOutlinedIcon sx={{ color: "#00D9FF", fontSize: 20, mt: "2px" }} />
                <Typography
                  sx={{
                    color: "#8D94B8",
                    fontSize: "14px",
                    lineHeight: "24px",
                    mb: "10px",
                  }}
                >
                  Sattva Knowledge City, Raidurg, Hitec City
                  <br />
                  Hyderabad - 500 081, Telangana, India
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Divider */}
        <Box
          sx={{
            borderTop: "0.8px solid #FFFFFF14",
            mt: { xs: 5, md: 6 },
            pt: { xs: 3, md: 4 },
          }}
        >
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid size={{ xs: 12, md: "auto" }}>
              <Typography sx={{ fontSize: "15px", color: "#8D93B8" }}>
                © 2026 litl. All rights reserved.
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, md: "auto" }}>
              <Box
                sx={{
                  display: "flex",
                  gap: { xs: 3, md: 4 },
                  flexWrap: "wrap",
                  justifyContent: { xs: "flex-start", md: "flex-end" },
                }}
              >
                <Link
                  href="#"
                  underline="none"
                  sx={{ fontSize: "15px", color: "#8D93B8" }}
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  underline="none"
                  sx={{ fontSize: "15px", color: "#8D93B8" }}
                >
                  Terms of Service
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}