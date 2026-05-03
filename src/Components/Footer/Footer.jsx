import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Link,
} from "@mui/material";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook"; // ✅ added
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

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
      <Container maxWidth={false} sx={{ px: { xs: 3, md: 6 } }}>
        <Grid container spacing={4}>
          {/* LEFT */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography
              onClick={() => navigate("/")}
              sx={{
                color: "#fff",
                fontSize: "30px",
                mb: 2,
                cursor: "pointer",
              }}
            >
              litl
            </Typography>

            <Typography sx={{ fontSize: "14px", mb: 3 }}>
              Transforming data into intelligent business outcomes.
            </Typography>

            {/* SOCIAL ICONS */}
            <Box sx={{ display: "flex", gap: 2 }}>
              {[
                <LinkedInIcon />,
                <TwitterIcon />,
                <FacebookIcon />, // ✅ added
                <MailOutlineOutlinedIcon />
              ].map((icon, i) => (
                <IconButton
                  key={i}
                  sx={{
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#00D9FF",
                    width: 36,
                    height: 36,
                    "&:hover": {
                      borderColor: "#00D9FF",
                    },
                  }}
                >
                  {icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* SOLUTIONS */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography sx={{ color: "#00D9FF", mb: 2 }}>
              Solutions
            </Typography>

            {[
              "Data Intelligence",
              "AI & ML",
              "Cloud",
              "Cybersecurity",
            ].map((item) => (
              <Typography
                key={item}
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

          {/* COMPANY */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography sx={{ color: "#00D9FF", mb: 2 }}>
              Company
            </Typography>

            {["About", "Case Studies", "Careers", "Contact"].map(
              (item) => (
                <Typography
                  key={item}
                  onClick={() => navigate(`/${item.toLowerCase()}`)}
                  sx={{
                    fontSize: "14px",
                    mb: 1,
                    cursor: "pointer",
                    "&:hover": { color: "#00D9FF" },
                  }}
                >
                  {item}
                </Typography>
              )
            )}
          </Grid>

          {/* CONTACT */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography sx={{ color: "#00D9FF", mb: 2 }}>
              Contact
            </Typography>

            <Box sx={{ display: "flex", gap: 1 }}>
              <EmailOutlinedIcon sx={{ color: "#00D9FF" }} />
              <Typography sx={{ fontSize: "14px" }}>
                hello@litl.com
              </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
              <LocationOnOutlinedIcon sx={{ color: "#00D9FF" }} />
              <Typography sx={{ fontSize: "13px" }}>
                Hyderabad, India
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
            © 2026 Crediple. All rights reserved . Empowering Professionals Through Convergent Technology..
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}