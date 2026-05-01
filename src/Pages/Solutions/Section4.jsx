import { Box, Container, Grid, Typography } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FactoryOutlinedIcon from "@mui/icons-material/FactoryOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const industries = [
  {
    title: "Healthcare",
    desc: "We enable healthcare organizations to improve patient outcomes, optimize operations, and enhance service delivery through data-driven insights and digital solutions.",
    icon: <FavoriteBorderOutlinedIcon sx={{ color: "#00D9FF", fontSize: 24 }} />,
  },
  {
    title: "Finance",
    desc: "We empower financial institutions with advanced analytics, risk management tools, and secure platforms to drive smarter financial decisions.",
    icon: <AccountBalanceWalletOutlinedIcon sx={{ color: "#00D9FF", fontSize: 24 }} />,
  },
  {
    title: "Retail & E-commerce",
    desc: "We help retailers understand customer behavior, optimize inventory, and enhance customer experience through intelligent data usage.",
    icon: <ShoppingCartOutlinedIcon sx={{ color: "#00D9FF", fontSize: 24 }} />,
  },
  {
    title: "Manufacturing",
    desc: "We improve operational efficiency and productivity through automation, predictive maintenance, and data-driven insights.",
    icon: <FactoryOutlinedIcon sx={{ color: "#00D9FF", fontSize: 24 }} />,
  },
  {
    title: "Logistics",
    desc: "We streamline supply chain operations with real-time tracking, analytics, and intelligent decision-making systems.",
    icon: <LocalShippingOutlinedIcon sx={{ color: "#00D9FF", fontSize: 24 }} />,
  },
];

export default function IndustryVerticalsSection() {
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
        {/* Title */}
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
          Industry Verticals
        </MotionTypography>

        {/* Grid */}
        <Grid container spacing={{ xs: 3, md: 3 }}>
          {industries.map((item, index) => (
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
                  minHeight: { xs: "auto", md: "260px" },
                  px: { xs: "24px", md: "32px" },
                  py: { xs: "24px", md: "32px" },
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s ease",
                }}
              >
                {/* Icon */}
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

                {/* Title */}
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

                {/* Description */}
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