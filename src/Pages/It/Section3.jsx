import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const offerings = [
  "Web & Mobile App Development",
  "Enterprise Software Solutions",
  "System Integration & APIs",
  "IT Infrastructure Setup",
  "IT Consulting",
];

export default function KeyOfferingsSection() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#0A0E27",
        borderTop: "0.8px solid #FFFFFF14",
        fontFamily: "Jost, sans-serif",
      }}
    >
      <Box
        sx={{
          maxWidth: "1440px",
          mx: "auto",
          px: { xs: "20px", sm: "32px", md: "48px" },
          py: { xs: "70px", md: "100px" },
        }}
      >
        {/* TITLE */}
        <MotionTypography
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          sx={{
            color: "#E7EAF3",
            fontWeight: 500,
            fontSize: { xs: "36px", md: "56px" },
            lineHeight: { xs: "44px", md: "64px" },
            letterSpacing: "-1px",
            mb: { xs: "32px", md: "48px" },
          }}
        >
          Key Offerings
        </MotionTypography>

        {/* GRID */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: { xs: "16px", md: "24px" },
          }}
        >
          {offerings.map((item, index) => (
            <MotionBox
              key={item}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              sx={{
                border: "0.8px solid #FFFFFF14",
                px: { xs: "18px", md: "22px" },
                py: { xs: "18px", md: "20px" },
                display: "flex",
                alignItems: "center",
                gap: "10px",
                minHeight: "72px",
              }}
            >
              {/* DOT */}
              <Box
                sx={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#00D9FF",
                  flexShrink: 0,
                }}
              />

              {/* TEXT (UPDATED) */}
              <Typography
                sx={{
                  fontFamily: "Inter, sans-serif", // ✅ required
                  fontWeight: 400,
                  fontSize: { xs: "16px", md: "18px" }, // ✅ responsive
                  lineHeight: { xs: "26px", md: "28px" }, // ✅ required
                  letterSpacing: "0px",
                  color: "#E8EAF2",
                }}
              >
                {item}
              </Typography>
            </MotionBox>
          ))}
        </Box>
      </Box>
    </Box>
  );
}