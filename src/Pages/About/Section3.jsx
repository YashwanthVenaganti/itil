import { Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

export default function VisionMissionSection() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#0A0E27",
        py: { xs: "60px", md: "100px" },
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          px: { xs: "20px", sm: "32px", md: "48px", lg: "80px" },
        }}
      >
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {/* VISION */}
          <Grid size={{ xs: 12, md: 6 }}>
            <MotionBox
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0px 24px 50px rgba(8, 217, 255, 0.14)",
                borderColor: "rgba(8, 217, 255, 0.35)",
              }}
              sx={{
                backgroundColor: "#141829",
                border: "1px solid rgba(255,255,255,0.06)",
                px: { xs: "24px", md: "40px" },
                py: { xs: "30px", md: "40px" },
                minHeight: "320px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                transition: "all 0.3s ease",
              }}
            >
              <MotionBox
                whileHover={{ rotate: 8, scale: 1.12 }}
                animate={{ y: [0, -6, 0] }}
                transition={{
                  y: {
                    duration: 2.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                sx={{
                  width: "56px",
                  height: "56px",
                  backgroundColor: "#1A2340",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: "28px",
                }}
              >
                <Typography sx={{ color: "#00D9FF" }}>V</Typography>
              </MotionBox>

              <MotionTypography
                initial={{ opacity: 0, x: -25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                sx={{
                  fontFamily: "Jost, sans-serif",
                  fontWeight: 500,
                  fontSize: "32px",
                  lineHeight: "36px",
                  color: "#E8EAF2",
                  mb: "18px",
                }}
              >
                Vision
              </MotionTypography>

              <MotionTypography
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                sx={{
                  fontFamily: "Jost, sans-serif",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "29.25px",
                  color: "#7A82A8",
                  maxWidth: "520px",
                }}
              >
                To become a globally recognized leader in data intelligence and
                technology solutions, enabling organizations to make intelligent
                decisions and achieve sustainable growth through innovation.
              </MotionTypography>
            </MotionBox>
          </Grid>

          {/* MISSION */}
          <Grid size={{ xs: 12, md: 6 }}>
            <MotionBox
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0px 24px 50px rgba(8, 217, 255, 0.14)",
                borderColor: "rgba(8, 217, 255, 0.35)",
              }}
              sx={{
                backgroundColor: "#141829",
                border: "1px solid rgba(255,255,255,0.06)",
                px: { xs: "24px", md: "40px" },
                py: { xs: "30px", md: "40px" },
                minHeight: "320px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                transition: "all 0.3s ease",
              }}
            >
              <MotionBox
                whileHover={{ rotate: -8, scale: 1.12 }}
                animate={{ y: [0, -6, 0] }}
                transition={{
                  y: {
                    duration: 2.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.3,
                  },
                }}
                sx={{
                  width: "56px",
                  height: "56px",
                  backgroundColor: "#1A2340",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: "28px",
                }}
              >
                <Typography sx={{ color: "#00D9FF" }}>M</Typography>
              </MotionBox>

              <MotionTypography
                initial={{ opacity: 0, x: -25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                sx={{
                  fontFamily: "Jost, sans-serif",
                  fontWeight: 500,
                  fontSize: "32px",
                  lineHeight: "36px",
                  color: "#E8EAF2",
                  mb: "18px",
                }}
              >
                Mission
              </MotionTypography>

              <MotionTypography
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                sx={{
                  fontFamily: "Jost, sans-serif",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "29.25px",
                  color: "#7A82A8",
                  maxWidth: "520px",
                }}
              >
                To deliver reliable, scalable and intelligent solutions that
                empower businesses to leverage data for strategic advantage,
                operational efficiency and continuous innovation.
              </MotionTypography>
            </MotionBox>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}