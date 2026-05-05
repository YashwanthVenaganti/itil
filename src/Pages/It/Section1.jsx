import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#0A0E27",
        color: "#fff",
        fontFamily: "Jost, sans-serif",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Box
        sx={{
          maxWidth: "1440px",
          mx: "auto",
          px: { xs: "20px", sm: "32px", md: "48px" },
          pt: { xs: "130px", sm: "150px", md: "170px", lg: "190px" },
          pb: { xs: "80px", md: "100px" },
        }}
      >
        <MotionBox
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          sx={{
            maxWidth: "980px",
          }}
        >
          <MotionTypography
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            sx={{
              fontFamily: "Jost, sans-serif",
              fontWeight: 500,
              fontSize: {
                xs: "42px",
                sm: "56px",
                md: "72px",
                lg: "86px",
              },
              lineHeight: {
                xs: "48px",
                sm: "64px",
                md: "82px",
                lg: "92px",
              },
              letterSpacing: {
                xs: "-1px",
                sm: "-1.4px",
                md: "-1.8px",
                lg: "-2.2px",
              },
              color: "#E7EAF3",
              maxWidth: "980px",
            }}
          >
            Build Powerful, Scalable
            <br />
            Digital Systems
          </MotionTypography>

          <MotionTypography
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            sx={{
              mt: { xs: "22px", md: "28px" },
              fontFamily: "Jost, sans-serif",
              fontWeight: 500,
              fontSize: { xs: "22px", sm: "26px", md: "30px" },
              lineHeight: { xs: "30px", sm: "34px", md: "40px" },
              color: "#8D94B8",
              maxWidth: "600px",
            }}
          >
            End-to-end IT solutions designed to transform your business
            operations.
          </MotionTypography>

          <MotionButton
            onClick={() => navigate("/schedule-consultation")}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.45 }}
            whileHover={{ y: -4 }}
            sx={{
              mt: { xs: "32px", md: "44px" },
              width: { xs: "100%", sm: "250px" },
              height: "64px",
              backgroundColor: "#11D7FF",
              color: "#000",
              borderRadius: 0,
              textTransform: "none",
              fontFamily: "Jost, sans-serif",
              fontWeight: 500,
              fontSize: "17px",
              "&:hover": {
                backgroundColor: "#11D7FF",
              },
            }}
          >
            Get a Consultation
          </MotionButton>
        </MotionBox>
      </Box>
    </Box>
  );
}