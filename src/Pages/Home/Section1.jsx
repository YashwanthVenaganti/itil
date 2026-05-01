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
        <MotionBox
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
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
              fontFamily: "Jost, sans-serif",
              fontWeight: 500,
              fontSize: { xs: "12px", md: "14px" },
              letterSpacing: "4px",
              textTransform: "uppercase",
              lineHeight: 1,
            }}
          >
            Data Intelligence
          </Typography>
        </MotionBox>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexDirection: { xs: "column", lg: "row" },
            gap: { xs: "40px", lg: "20px" },
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: { xs: "100%", lg: "860px" },
              position: "relative",
              zIndex: 2,
            }}
          >
            <Box sx={{ position: "relative", display: "inline-block", width: "100%" }}>
              <MotionTypography
                initial={{ opacity: 0, y: 45 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
                sx={{
                  fontFamily: "Jost, sans-serif",
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
                    lg: "79.2px",
                  },
                  color: "#E7EAF3",
                  maxWidth: "930px",
                  letterSpacing: "0px",
                }}
              >
                Transforming Data into Intelligent Business Outcomes
              </MotionTypography>

              <MotionBox
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.75 }}
                sx={{
                  position: "absolute",
                  left: { xs: "0px", sm: "0px", md: "0px" },
                  top: {
                    xs: "129px",
                    sm: "173px",
                    md: "210px",
                    lg: "228px",
                  },
                  width: {
                    xs: "175px",
                    sm: "220px",
                    md: "250px",
                    lg: "268px",
                  },
                  height: {
                    xs: "8px",
                    sm: "10px",
                    md: "12px",
                    lg: "14px",
                  },
                  backgroundColor: "#00D9FF26",
                  zIndex: -1,
                  transformOrigin: "left",
                }}
              />
            </Box>

            <MotionTypography
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: "easeOut", delay: 0.35 }}
              sx={{
                mt: { xs: "28px", md: "34px" },
                maxWidth: "820px",
                fontFamily: "Jost, sans-serif",
                fontWeight: 400,
                fontSize: { xs: "16px", sm: "18px", md: "20px" },
                lineHeight: { xs: "28px", sm: "30px", md: "32.5px" },
                color: "#7A82A8",
              }}
            >
              At litl, we enable organizations to harness the true power of data
              through advanced analytics, intelligent technologies and scalable
              digital architectures. Our solutions are designed to convert
              complex data into meaningful insights, empowering leadership teams
              to make faster, smarter and more impactful decisions.
            </MotionTypography>

            <MotionTypography
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: "easeOut", delay: 0.5 }}
              sx={{
                mt: { xs: "22px", md: "26px" },
                maxWidth: "860px",
                fontFamily: "Jost, sans-serif",
                fontWeight: 400,
                fontSize: { xs: "16px", sm: "18px", md: "20px" },
                lineHeight: { xs: "28px", sm: "30px", md: "32.5px" },
                color: "#7A82A8",
              }}
            >
              In today&apos;s data driven economy, businesses that effectively
              utilize data outperform their competition. litl acts as a strategic
              partner in this transformation journey by combining deep technical
              expertise with domain understanding. From data engineering to
              AI-driven automation, we provide end-to-end capabilities that drive
              measurable business outcomes.
            </MotionTypography>

            <MotionBox
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: "easeOut", delay: 0.65 }}
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
                whileTap={{ scale: 0.97 }}
                endIcon={<ArrowForwardIcon />}
                sx={{
                  minWidth: { xs: "100%", sm: "258px" },
                  height: "60px",
                  px: "28px",
                  backgroundColor: "#11D7FF",
                  color: "#000",
                  fontFamily: "Jost, sans-serif",
                  fontWeight: 500,
                  fontSize: "16px",
                  borderRadius: 0,
                  textTransform: "none",
                  transition: "all 0.3s ease",
                  "& .MuiButton-endIcon": {
                    transition: "transform 0.3s ease",
                  },
                  "&:hover": {
                    backgroundColor: "#11D7FF",
                    "& .MuiButton-endIcon": {
                      transform: "translateX(6px)",
                    },
                  },
                }}
              >
                Schedule a Consultation
              </MotionButton>

              <MotionButton
                whileHover={{
                  scale: 1.04,
                  y: -3,
                  backgroundColor: "rgba(17, 215, 255, 0.08)",
                  boxShadow: "0px 14px 35px rgba(17, 215, 255, 0.18)",
                }}
                whileTap={{ scale: 0.97 }}
                sx={{
                  minWidth: { xs: "100%", sm: "180px" },
                  height: "60px",
                  px: "28px",
                  border: "1px solid #11D7FF",
                  color: "#11D7FF",
                  fontFamily: "Jost, sans-serif",
                  fontWeight: 500,
                  fontSize: "16px",
                  borderRadius: 0,
                  textTransform: "none",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: "#11D7FF",
                    backgroundColor: "rgba(17, 215, 255, 0.08)",
                  },
                }}
              >
                Request a Demo
              </MotionButton>
            </MotionBox>
          </Box>

          <MotionBox
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.45 }}
            sx={{
              position: "relative",
              width: { xs: "100%", lg: "280px" },
              minHeight: { xs: "180px", lg: "260px" },
              display: "flex",
              justifyContent: { xs: "center", lg: "flex-end" },
              alignItems: { xs: "center", lg: "flex-start" },
              pt: { xs: "10px", lg: "70px" },
              pr: { lg: "12px" },
            }}
          >
            <MotionBox
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              sx={{
                position: "absolute",
                top: { xs: "0px", lg: "0px" },
                right: { xs: "calc(50% - 21.5px)", lg: "20px" },
                width: "43px",
                height: "48.5123px",
              }}
            >
              <Box
                component="img"
                src="/Images/Icon.svg" // 👉 replace with your image
                alt="about"
                sx={{
                  position: "absolute",
                  top: { xs: "20px", md: "-110px" },
                  right: { xs: "20px", md: "60px" },
                  width: { xs: "0px", md: "150px" },
                  height: "auto",
                  objectFit: "contain",
                  zIndex: 1,
                  pointerEvents: "none",
                }}
              />
            </MotionBox>

            {/* <MotionBox
              whileHover={{ scale: 1.08, rotate: 8 }}
              animate={{
                boxShadow: [
                  "0px 0px 0px rgba(8, 217, 255, 0)",
                  "0px 0px 35px rgba(8, 217, 255, 0.35)",
                  "0px 0px 0px rgba(8, 217, 255, 0)",
                ],
              }}
              transition={{
                boxShadow: {
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              sx={{
                width: { xs: "140px", sm: "150px", md: "170px" },
                height: { xs: "140px", sm: "150px", md: "170px" },
                borderRadius: "50%",
                border: "2px solid #08D9FF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: { xs: "30px", lg: "20px" },
                cursor: "pointer",
              }}
            >
              <MotionBox
                animate={{ scale: [1, 1.12, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                sx={{
                  width: { xs: "72px", md: "82px" },
                  height: { xs: "72px", md: "82px" },
                  borderRadius: "50%",
                  border: "2px solid #08D9FF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MotionBox
                  animate={{ scale: [1, 0.8, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  sx={{
                    width: { xs: "28px", md: "32px" },
                    height: { xs: "28px", md: "32px" },
                    borderRadius: "50%",
                    backgroundColor: "#08D9FF",
                  }}
                />
              </MotionBox>
            </MotionBox> */}
          </MotionBox>
        </Box>
      </Box>
    </Box>
  );
}