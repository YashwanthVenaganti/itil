import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const items = [
  {
    id: "1",
    title: "Data accuracy",
  },
  {
    id: "2",
    title: "Real-time insights ",
  },
  {
    id: "3",
    title: "Scalable data systems ",
  },
];

export default function WhyIITILSection() {
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
            mb: { xs: "40px", md: "60px" },
          }}
        >
          Why IITIL
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
            gap: { xs: "32px", md: "24px" },
            textAlign: "center",
          }}
        >
          {items.map((item, index) => (
            <MotionBox
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* NUMBER BOX */}
              <Box
                sx={{
                  width: "60px",
                  height: "60px",
                  border: "1px solid #00D9FF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: "18px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                    fontSize: "20px",
                    color: "#00D9FF",
                  }}
                >
                  {item.id}
                </Typography>
              </Box>

              {/* TITLE */}
              <Typography
                sx={{
                  fontFamily: "Jost, sans-serif",
                  fontWeight: 500,
                  fontSize: { xs: "18px", md: "20px" },
                  color: "#E8EAF2",
                  mb: "6px",
                }}
              >
                {item.title}
              </Typography>

              {/* DESC */}
             
            </MotionBox>
          ))}
        </Box>
      </Box>
    </Box>
  );
}