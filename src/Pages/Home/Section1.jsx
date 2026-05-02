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
          maxWidth: "1280px", // 🔽 reduced
          margin: "0 auto",
          px: { xs: "20px", sm: "28px", md: "40px" },
          pt: { xs: "90px", sm: "110px", md: "120px" },
          pb: { xs: "60px", md: "80px" },
          position: "relative",
        }}
      >
        {/* HEADER LABEL */}
        <MotionBox
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          sx={{ mb: "18px" }}
        >
          <Typography
            sx={{
              color: "#08D9FF",
              fontSize: "12px",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Data Intelligence
          </Typography>
        </MotionBox>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            justifyContent: "space-between",
          }}
        >
          {/* LEFT CONTENT */}
          <Box sx={{ maxWidth: "720px", zIndex: 2 }}>
            {/* HEADING */}
            <MotionTypography
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              sx={{
                fontWeight: 500,
                fontSize: {
                  xs: "30px",
                  sm: "38px",
                  md: "46px",
                  lg: "54px", // 🔽 reduced from 72
                },
                lineHeight: {
                  xs: "38px",
                  sm: "46px",
                  md: "54px",
                  lg: "62px",
                },
                color: "#E7EAF3",
              }}
            >
              Transforming Data into Intelligent Business Outcomes
            </MotionTypography>

            {/* PARAGRAPH 1 */}
            <MotionTypography
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              sx={{
                mt: "18px",
                fontSize: "15px", // 🔽 reduced from 18
                lineHeight: "26px",
                color: "#7A82A8",
              }}
            >
              At Iitil, we enable organizations to harness the true power of data
              through advanced analytics, intelligent technologies and scalable
              digital architectures.
            </MotionTypography>

            {/* PARAGRAPH 2 */}
            <MotionTypography
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              sx={{
                mt: "14px",
                fontSize: "15px",
                lineHeight: "26px",
                color: "#7A82A8",
              }}
            >
              Businesses that effectively utilize data outperform their competition.
              Iitil acts as a strategic partner by combining deep technical expertise
              with domain understanding.
            </MotionTypography>

            {/* BUTTONS */}
            <MotionBox
              sx={{
                mt: "26px",
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              <MotionButton
                endIcon={<ArrowForwardIcon />}
                sx={{
                  backgroundColor: "#11D7FF",
                  color: "#000",
                  height: "46px", // 🔽 reduced from 60
                  fontSize: "13.5px",
                  px: "18px",
                  textTransform: "none",
                  fontWeight: 500,
                  "&:hover": {
                    backgroundColor: "#11D7FF",
                  },
                }}
              >
                Schedule a Consultation
              </MotionButton>

              <MotionButton
                sx={{
                  border: "1px solid #11D7FF",
                  color: "#11D7FF",
                  height: "46px",
                  fontSize: "13.5px",
                  px: "18px",
                  textTransform: "none",
                  fontWeight: 500,
                  "&:hover": {
                    backgroundColor: "rgba(17,215,255,0.08)",
                  },
                }}
              >
                Speak to an Expert
              </MotionButton>
            </MotionBox>
          </Box>

          {/* RIGHT ICON */}
          <Box
              sx={{
                position: "relative",
                width: { xs: 0, lg: "280px" },
                display: { xs: "none", lg: "flex" }, // ✅ hide on mobile
                justifyContent: "flex-end",
                alignItems: "flex-start",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: { md: "-60px" },
                  right: { md: "40px" },
                  width: { md: "70px" },
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

                {/* TEXT */}
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
            </Box>
        </Box>
      </Box>
    </Box>
  );
}