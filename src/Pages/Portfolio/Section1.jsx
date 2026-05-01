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
        {/* TOP LABEL */}
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
          <Box
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "#08D9FF",
            }}
          />
          <Typography
            sx={{
              color: "#08D9FF",
              fontSize: "13px",
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            Full-Stack Technology Services
          </Typography>
        </MotionBox>

        <Box>
          {/* MAIN HEADING */}
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
                lg: "80px",
              },
              color: "#E7EAF3",
              maxWidth: "1000px",
            }}
          >
            Delivering Scalable IT Solutions
            <br />
            Across India & Global Markets
          </MotionTypography>

          {/* PARAGRAPH 1 */}
          <MotionTypography
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.35 }}
            sx={{
              mt: { xs: "28px", md: "34px" },
              maxWidth: "820px",
              fontSize: { xs: "16px", md: "18px" },
              lineHeight: "30px",
              color: "#7A82A8",
            }}
          >
            litl is a full-stack technology services brand delivering scalable IT
            services, enterprise applications, CRM systems, SaaS products,
            automation and data intelligence solutions for businesses across
            India and global markets.
          </MotionTypography>

          {/* PARAGRAPH 2 */}
          <MotionTypography
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.5 }}
            sx={{
              mt: { xs: "20px", md: "24px" },
              maxWidth: "860px",
              fontSize: { xs: "15px", md: "17px" },
              lineHeight: "28px",
              color: "#7A82A8",
            }}
          >
            IITIL is designed to build a complete digital ecosystem covering
            infrastructure, applications, CRM systems, SaaS platforms,
            automation, cybersecurity, and data services under one scalable
            operating model.
          </MotionTypography>

          {/* BUTTONS */}
          <MotionBox
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.65 }}
            sx={{
              mt: { xs: "32px", md: "42px" },
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <MotionButton
              whileHover={{
                scale: 1.04,
                y: -3,
                boxShadow: "0px 14px 35px rgba(17, 215, 255, 0.35)",
              }}
              endIcon={<ArrowForwardIcon />}
              sx={{
                minWidth: { xs: "100%", sm: "260px" },
                height: "60px",
                backgroundColor: "#11D7FF",
                color: "#000",
                fontSize: "16px",
                fontWeight: 500,
                borderRadius: 0,
                textTransform: "none",
              }}
            >
              Schedule a Consultation
            </MotionButton>

            <MotionButton
              whileHover={{
                scale: 1.04,
                y: -3,
                backgroundColor: "rgba(17, 215, 255, 0.08)",
              }}
              sx={{
                minWidth: { xs: "100%", sm: "200px" },
                height: "60px",
                border: "1px solid #11D7FF",
                color: "#11D7FF",
                fontSize: "16px",
                fontWeight: 500,
                borderRadius: 0,
                textTransform: "none",
              }}
            >
              View Services
            </MotionButton>
          </MotionBox>
        </Box>
      </Box>
    </Box>
  );
}