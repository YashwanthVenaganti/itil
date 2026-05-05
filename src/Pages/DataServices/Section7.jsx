import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

export default function CTASection() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#0A0E27",
        borderTop: "0.8px solid #FFFFFF14", // ✅ required
        fontFamily: "Jost, sans-serif",
      }}
    >
      <Box
        sx={{
          maxWidth: "1440px",
          mx: "auto",
          px: { xs: "20px", sm: "32px", md: "48px" },
          py: { xs: "80px", md: "120px" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* TITLE */}
        <MotionTypography
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          sx={{
            color: "#E7EAF3",
            fontWeight: 500,
            fontSize: {
              xs: "34px",
              sm: "44px",
              md: "58px",
              lg: "68px",
            },
            lineHeight: {
              xs: "42px",
              sm: "52px",
              md: "66px",
              lg: "76px",
            },
            letterSpacing: "-1.2px",
            maxWidth: "900px",
            mb: { xs: "28px", md: "36px" },
          }}
        >
          Unlock the Power of Your Data 
        </MotionTypography>

        {/* BUTTON */}
        <MotionButton
          onClick={() => navigate("/contact")}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -4 }}
          sx={{
            backgroundColor: "#11D7FF",
            color: "#000",
            height: "56px",
            px: "36px",
            borderRadius: 0,
            textTransform: "none",
            fontWeight: 500,
            fontSize: "16px",
            "&:hover": {
              backgroundColor: "#11D7FF",
            },
          }}
        >
          Get Started Today
        </MotionButton>
      </Box>
    </Box>
  );
}