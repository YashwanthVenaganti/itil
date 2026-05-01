import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const items = [
  {
    title: "Business Leadership",
    desc: "Business Director and team for all verticals (Product and Services of IT and Data)",
  },
  {
    title: "Project Management",
    desc: "Project Director (Mr. Jhonny) and team for the projects",
  },
  {
    title: "Service Delivery",
    desc: "Services Director and team for all services verticals",
  },
];

export default function OrganizationSection() {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#0F1433", // section bg
        color: "#E9ECF7",
        fontFamily: "Jost, sans-serif",
        px: { xs: "18px", sm: "28px", md: "48px" },
        py: { xs: "70px", md: "120px" },
        overflowX: "hidden",
      }}
    >
      <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
        {/* TOP */}
        <MotionTypography
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          sx={{
            color: "#00D9FF",
            fontSize: "13px",
            letterSpacing: "6px",
            textTransform: "uppercase",
            mb: "20px",
          }}
        >
          Organization Structure
        </MotionTypography>

        <MotionTypography
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          sx={{
            fontSize: { xs: "32px", sm: "42px", md: "48px" },
            fontWeight: 500,
            mb: "18px",
          }}
        >
          Leadership & Teams
        </MotionTypography>

        <MotionTypography
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          sx={{
            color: "#7A82A8",
            fontSize: "16px",
            maxWidth: "720px",
            mb: "50px",
          }}
        >
          Our organizational structure is designed to ensure efficient delivery across all service verticals and project engagements.
        </MotionTypography>

        {/* CARDS */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(3, 1fr)",
            },
            gap: "26px",
          }}
        >
          {items.map((item, index) => (
            <MotionBox
              key={item.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -6,
                boxShadow: "0 18px 45px rgba(0,217,255,0.08)",
              }}
              sx={{
                bgcolor: "#0A0E27", // card bg
                borderTop: "0.8px solid #1A1F47",
                p: { xs: "26px", md: "30px" },
                transition: "all 0.3s ease",
                minHeight: "180px",
              }}
            >
              {/* ICON */}
              <Box
                sx={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  border: "1px solid rgba(0,217,255,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: "18px",
                }}
              >
                <Box
                  sx={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    bgcolor: "#00D9FF",
                  }}
                />
              </Box>

              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: 500,
                  mb: "10px",
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#8A93B2",
                  lineHeight: "22px",
                }}
              >
                {item.desc}
              </Typography>
            </MotionBox>
          ))}
        </Box>
      </Box>
    </Box>
  );
}