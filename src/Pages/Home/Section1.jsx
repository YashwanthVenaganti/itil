import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

export default function HeroSection() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#0A0E27",
        color: "#fff",
        fontFamily: "Jost, sans-serif",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          maxWidth: "1440px",
          margin: "0 auto",
          px: { xs: "20px", sm: "32px", md: "48px" },
          pt: { xs: "100px", sm: "120px", md: "140px" },
          pb: { xs: "70px", md: "100px" },
          position: "relative",
        }}
      >
        {/* HEADER LABEL */}
        <MotionBox
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            mb: { xs: "24px", md: "26px" },
          }}
        >
          <Typography
            sx={{
              color: "#08D9FF",
              fontWeight: 500,
              fontSize: { xs: "12px", md: "14px" },
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            Data Intelligence
          </Typography>
        </MotionBox>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", lg: "row" },
            gap: { xs: "40px", lg: "20px" },
            position: "relative",
          }}
        >
          {/* LEFT CONTENT */}
          <Box sx={{ maxWidth: "860px", zIndex: 2 }}>
            <MotionTypography
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              sx={{
                fontWeight: 500,
                fontSize: {
                  xs: "38px",
                  sm: "52px",
                  md: "64px",
                  lg: "72px",
                },
                lineHeight: {
                  xs: "46px",
                  sm: "58px",
                  md: "70px",
                  lg: "79px",
                },
                color: "#E7EAF3",
              }}
            >
              Transforming Data into Intelligent Business Outcomes
            </MotionTypography>

            <MotionTypography
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              sx={{
                mt: "28px",
                color: "#7A82A8",
                fontSize: "18px",
                lineHeight: "30px",
              }}
            >
              At litl, we enable organizations to harness the true power of data...
            </MotionTypography>

            <MotionBox sx={{ mt: "40px", display: "flex", gap: "16px" }}>
              <MotionButton
                endIcon={<ArrowForwardIcon />}
                sx={{
                  backgroundColor: "#11D7FF",
                  color: "#000",
                  height: "60px",
                }}
              >
                Schedule a Consultation
              </MotionButton>

              <MotionButton
                sx={{
                  border: "1px solid #11D7FF",
                  color: "#11D7FF",
                  height: "60px",
                }}
              >
                Speak to an Expert
              </MotionButton>
            </MotionBox>
          </Box>

          {/* RIGHT ICON */}
          <MotionBox
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            sx={{
              position: "relative",
              width: { xs: "100%", lg: "280px" },
              display: "flex",
              justifyContent: { xs: "center", lg: "flex-end" },
              alignItems: "flex-start",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: { xs: "10px", md: "-60px" },
                right: { xs: "10px", md: "40px" },
                width: { xs: "60px", md: "70px" },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                pointerEvents: "none",
              }}
            >
              {/* ICON */}
              <Box
                component="img"
                src="/Images/Icon.svg"
                alt="icon"
                sx={{
                  width: "100%",
                  height: "auto",
                }}
              />

              {/* TEXT BELOW ICON */}
              <Typography
                sx={{
                  mt: "6px",
                  fontFamily: "Gilroy-Medium, sans-serif",
                  fontWeight: 400,
                  fontSize: "9.94px",
                  lineHeight: "100%",
                  textAlign: "center",
                  color: "#8D94B8",
                }}
              >
                A YAKA Brands
              </Typography>
            </Box>
          </MotionBox>
        </Box>
      </Box>
    </Box>
  );
}