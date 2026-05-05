import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const useCases = [
  "Financial analytics",
  "Customer insights ",
  "Business forecasting ",
];

export default function UseCasesSection() {
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
            mb: { xs: "36px", md: "48px" },
          }}
        >
          Use Cases
        </MotionTypography>

        {/* CARDS */}
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
          {useCases.map((item, index) => (
            <MotionBox
              key={item}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              sx={{
                backgroundColor: "#00D9FF0D",
                border: "0.8px solid #00D9FF",
                px: { xs: "20px", md: "28px" },
                py: { xs: "28px", md: "36px" },
                display: "flex",
                alignItems: "center",
                gap: "12px",
                minHeight: "120px",
              }}
            >
              {/* BLUE DISC */}
              <Box
                sx={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#00D9FF",
                  flexShrink: 0,
                }}
              />

              {/* TEXT */}
              <Typography
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: { xs: "16px", md: "18px" },
                  lineHeight: { xs: "24px", md: "28px" },
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