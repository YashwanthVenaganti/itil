import { Box, Container, Grid, Typography } from "@mui/material";
import CloudQueueOutlinedIcon from "@mui/icons-material/CloudQueueOutlined";
import MemoryOutlinedIcon from "@mui/icons-material/MemoryOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const services = [
  {
    title: "Cloud Solutions",
    desc: "We enable businesses to migrate, manage, and optimize their operations on cloud platforms, ensuring scalability, security, and cost efficiency.",
    icon: <CloudQueueOutlinedIcon sx={{ color: "#00D9FF", fontSize: 24 }} />,
  },
  {
    title: "DevOps & Automation",
    desc: "Our DevOps practices streamline development and operations, enabling faster releases, improved collaboration, and higher system reliability.",
    icon: <MemoryOutlinedIcon sx={{ color: "#00D9FF", fontSize: 24 }} />,
  },
  {
    title: "Custom Software Development",
    desc: "We build tailored software solutions that align with specific business requirements, ensuring flexibility and scalability.",
    icon: <CodeOutlinedIcon sx={{ color: "#00D9FF", fontSize: 24 }} />,
  },
  {
    title: "API & Integration Services",
    desc: "We facilitate seamless integration between systems, ensuring smooth data flow and interoperability across platforms.",
    icon: <LinkOutlinedIcon sx={{ color: "#00D9FF", fontSize: 24 }} />,
  },
  {
    title: "Cybersecurity",
    desc: "Our cybersecurity solutions protect critical business data and systems from threats, ensuring compliance and operational continuity.",
    icon: <SecurityOutlinedIcon sx={{ color: "#00D9FF", fontSize: 24 }} />,
  },
];

export default function TechnologyServicesSection() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#0A0E27",
        py: { xs: "60px", md: "90px", lg: "110px" },
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          px: { xs: "20px", sm: "32px", md: "48px", lg: "80px" },
        }}
      >
        <MotionTypography
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
          sx={{
            fontFamily: "Jost, sans-serif",
            fontWeight: 500,
            fontSize: { xs: "34px", sm: "40px", md: "44px", lg: "48px" },
            lineHeight: { xs: "40px", sm: "44px", md: "46px", lg: "48px" },
            letterSpacing: { xs: "-0.8px", md: "-1px", lg: "-1.2px" },
            color: "#E8EAF2",
            mb: { xs: "32px", md: "40px", lg: "52px" },
          }}
        >
          Technology Services
        </MotionTypography>

        <Grid container spacing={{ xs: 3, md: 3 }}>
          {services.map((item, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <MotionBox
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  borderColor: "rgba(8, 217, 255, 0.35)",
                  boxShadow: "0px 22px 45px rgba(8, 217, 255, 0.12)",
                }}
                sx={{
                  backgroundColor: "#141829",
                  border: "1px solid rgba(255,255,255,0.05)",
                  minHeight: { xs: "auto", md: "254px" },
                  px: { xs: "24px", md: "32px" },
                  py: { xs: "24px", md: "32px" },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  transition: "all 0.3s ease",
                }}
              >
                <MotionBox
                  whileHover={{ rotate: 8, scale: 1.12 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    y: {
                      duration: 2.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.15,
                    },
                  }}
                  sx={{
                    width: "48px",
                    height: "48px",
                    backgroundColor: "#1D2442",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: "26px",
                  }}
                >
                  {item.icon}
                </MotionBox>

                <MotionTypography
                  whileHover={{ x: 4 }}
                  sx={{
                    fontFamily: "Jost, sans-serif",
                    fontWeight: 500,
                    fontSize: { xs: "18px", md: "20px" },
                    lineHeight: { xs: "26px", md: "30px" },
                    color: "#E8EAF2",
                    mb: "14px",
                    transition: "all 0.3s ease",
                  }}
                >
                  {item.title}
                </MotionTypography>

                <Typography
                  sx={{
                    fontFamily: "Jost, sans-serif",
                    fontWeight: 400,
                    fontSize: { xs: "15px", md: "16px" },
                    lineHeight: { xs: "26px", md: "28px" },
                    color: "#7A82A8",
                  }}
                >
                  {item.desc}
                </Typography>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}