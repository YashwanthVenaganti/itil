import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

export default function HeroSection() {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                width: "100%",
                minHeight: "100vh",
                backgroundColor: "#0A0E27",
                color: "#fff",
                fontFamily: "Jost, sans-serif",
                overflow: "hidden",
                position: "relative",
            }}
        >
            {/* RIGHT IMAGE / ICON */}
            <Box
                sx={{
                    position: "absolute",
                    top: { xs: "40px", md: "80px" },
                    right: { xs: "10px", md: "70px", lg: "90px" },
                    width: { xs: "60px", md: "70px" },
                    zIndex: 1,
                    pointerEvents: "none",
                    display: { xs: "none", lg: "flex" },
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Box
                    component="img"
                    src="/Images/Icon.svg"
                    alt="icon"
                    sx={{
                        width: "40%",
                        height: "auto",
                    }}
                />

                <Typography
                    sx={{
                        mt: "5px",
                        fontFamily: "Gilroy-Medium, sans-serif",
                        fontWeight: 400,
                        fontSize: "9.94px",
                        color: "#8D94B8",
                    }}
                >
                    A{" "}
                    <Box component="span" sx={{ fontWeight: 900 }}>
                        YAKA
                    </Box>{" "}
                    Brand
                </Typography>
            </Box>

            {/* CONTENT */}
            <Box
                sx={{
                    maxWidth: "1440px",
                    mx: "auto",
                    px: { xs: "20px", sm: "32px", md: "48px" },
                    pt: { xs: "130px", sm: "150px", md: "170px", lg: "190px" },
                    pb: { xs: "80px", md: "100px" },
                    position: "relative",
                    zIndex: 2,
                }}
            >
                <MotionBox
                    initial={{ opacity: 0, y: 45 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.75 }}
                    sx={{ maxWidth: "980px" }}
                >
                    {/* TITLE */}
                    <MotionTypography
                        initial={{ opacity: 0, y: 45 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        sx={{
                            fontWeight: 500,
                            fontSize: {
                                xs: "32px",
                                sm: "44px",
                                md: "58px",
                                lg: "72px",
                            },
                            lineHeight: {
                                xs: "48px",
                                sm: "64px",
                                md: "82px",
                                lg: "92px",
                            },
                            letterSpacing: {
                                xs: "-1px",
                                sm: "-1.4px",
                                md: "-1.8px",
                                lg: "-2.2px",
                            },
                            color: "#E7EAF3",
                        }}
                    >
                        Scale Without Limits
                    </MotionTypography>

                    {/* SUBTEXT */}
                    {/* <MotionTypography
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            sx={{
              mt: { xs: "22px", md: "28px" },
              fontWeight: 500,
              fontSize: { xs: "16px", md: "20px" },
              lineHeight: { xs: "30px", sm: "34px", md: "40px" },
              color: "#8D94B8",
              maxWidth: "600px",
            }}
          >
            We transform raw data into actionable insights that drive smarter
            decisions
          </MotionTypography> */}

                    {/* BUTTON */}
                    <MotionButton
                        onClick={() => navigate("/schedule-consultation")}
                        initial={{ opacity: 0, y: 22 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, delay: 0.45 }}
                        whileHover={{ y: -4 }}
                        sx={{
                            mt: { xs: "32px", md: "44px" },
                            width: { xs: "100%", sm: "250px" },
                            height: "64px",
                            backgroundColor: "#11D7FF",
                            color: "#000",
                            borderRadius: 0,
                            textTransform: "none",
                            fontWeight: 500,
                            fontSize: "17px",
                            "&:hover": {
                                backgroundColor: "#11D7FF",
                            },
                        }}
                    >
                        Get a consultation
                    </MotionButton>
                </MotionBox>
            </Box>
        </Box>
    );
}