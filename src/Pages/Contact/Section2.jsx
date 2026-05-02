import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionButton = motion(Button);

const cardSx = {
  backgroundColor: "#141829",
  border: "1px solid rgba(255,255,255,0.06)",
};

const iconBoxSx = {
  width: "52px",
  height: "52px",
  backgroundColor: "#1D2442",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  mb: "28px",
};

const titleSx = {
  fontFamily: "Jost, sans-serif",
  fontWeight: 500,
  fontSize: { xs: "28px", md: "30px" },
  lineHeight: { xs: "34px", md: "36px" },
  letterSpacing: "-0.6px",
  color: "#E8EAF2",
};

const bodySx = {
  fontFamily: "Jost, sans-serif",
  fontWeight: 400,
  fontSize: { xs: "15px", md: "16px" },
  lineHeight: { xs: "26px", md: "28px" },
  color: "#7A82A8",
};

const linkSx = {
  mt: "26px",
  display: "inline-flex",
  alignItems: "center",
  gap: "10px",
  fontFamily: "Jost, sans-serif",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "20px",
  color: "#00D9FF",
  cursor: "pointer",
};

const fieldSx = {
  "& .MuiInputLabel-root": {
    color: "#7A82A8",
    fontFamily: "Jost, sans-serif",
    fontWeight: 400,
    fontSize: "15px",
    position: "static",
    transform: "none",
    mb: "10px",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#7A82A8",
  },
  "& .MuiOutlinedInput-root": {
    fontFamily: "Jost, sans-serif",
    fontSize: "16px",
    color: "#E8EAF2",
    backgroundColor: "#1F2850",
    borderRadius: 0,
    "& fieldset": {
      border: "none",
    },
    "&:hover fieldset": {
      border: "none",
    },
    "&.Mui-focused fieldset": {
      border: "none",
    },
    "& input::placeholder, & textarea::placeholder": {
      color: "#7A82A8",
      opacity: 1,
    },
  },
};

export default function ContactSection() {
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
        <Grid container spacing={{ xs: 3, md: 3 }}>
          {/* Top Left */}
          <Grid size={{ xs: 12, md: 6 }}>
            <MotionBox
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{
                y: -6,
                borderColor: "rgba(0,217,255,0.3)",
                boxShadow: "0px 22px 45px rgba(0,217,255,0.12)",
              }}
              sx={{
                ...cardSx,
                minHeight: { xs: "auto", md: "260px" },
                px: { xs: "24px", md: "36px" },
                py: { xs: "26px", md: "32px" },
                transition: "all 0.3s ease",
              }}
            >
              <MotionBox
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.12, rotate: 8 }}
                sx={iconBoxSx}
              >
                <CalendarTodayOutlinedIcon sx={{ color: "#00D9FF", fontSize: 24 }} />
              </MotionBox>

              <Typography sx={{ ...titleSx, mb: "14px" }}>
                Schedule a Consultation
              </Typography>

              <Typography sx={{ ...bodySx, maxWidth: "510px" }}>
                Book a meeting with our experts to discuss your specific requirements
                and explore potential solutions.
              </Typography>

              <MotionBox whileHover={{ x: 6 }} sx={linkSx}>
                <Typography
                  component="span"
                  sx={{
                    fontFamily: "Jost, sans-serif",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "20px",
                    color: "#00D9FF",
                  }}
                >
                  Book Now
                </Typography>
                <ArrowForwardIcon sx={{ fontSize: 18, color: "#00D9FF" }} />
              </MotionBox>
            </MotionBox>
          </Grid>

          {/* Top Right */}
          <Grid size={{ xs: 12, md: 6 }}>
            <MotionBox
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
              whileHover={{
                y: -6,
                borderColor: "rgba(0,217,255,0.3)",
                boxShadow: "0px 22px 45px rgba(0,217,255,0.12)",
              }}
              sx={{
                ...cardSx,
                minHeight: { xs: "auto", md: "260px" },
                px: { xs: "24px", md: "36px" },
                py: { xs: "26px", md: "32px" },
                transition: "all 0.3s ease",
              }}
            >
              <MotionBox
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
                whileHover={{ scale: 1.12, rotate: 8 }}
                sx={iconBoxSx}
              >
                <GroupsOutlinedIcon sx={{ color: "#00D9FF", fontSize: 24 }} />
              </MotionBox>

              <Typography sx={{ ...titleSx, mb: "14px" }}>
                Speak to an Expert
              </Typography>

              <Typography sx={{ ...bodySx, maxWidth: "510px" }}>
                Connect directly with our technical specialists to get answers to your
                technical questions.
              </Typography>

              <MotionBox whileHover={{ x: 6 }} sx={linkSx}>
                <Typography
                  component="span"
                  sx={{
                    fontFamily: "Jost, sans-serif",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "20px",
                    color: "#00D9FF",
                  }}
                >
                  Contact Expert
                </Typography>
                <ArrowForwardIcon sx={{ fontSize: 18, color: "#00D9FF" }} />
              </MotionBox>
            </MotionBox>
          </Grid>

          {/* Bottom Left Form */}
          <Grid size={{ xs: 12, md: 6 }}>
            <MotionBox
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              whileHover={{
                borderColor: "rgba(0,217,255,0.24)",
                boxShadow: "0px 22px 45px rgba(0,217,255,0.1)",
              }}
              sx={{
                ...cardSx,
                px: { xs: "24px", md: "36px" },
                py: { xs: "28px", md: "38px" },
                transition: "all 0.3s ease",
              }}
            >
              <Typography
                sx={{
                  ...titleSx,
                  fontSize: { xs: "34px", md: "32px" },
                  lineHeight: { xs: "40px", md: "36px" },
                  mb: "34px",
                }}
              >
                Send us a message
              </Typography>

              <Box component="form">
                <TextField
                  fullWidth
                  label="Full Name"
                  placeholder="John Doe"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  sx={{ ...fieldSx, mb: "22px" }}
                />

                <TextField
                  fullWidth
                  label="Email Address"
                  placeholder="john@company.com"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  sx={{ ...fieldSx, mb: "22px" }}
                />

                <TextField
                  fullWidth
                  label="Company"
                  placeholder="Your Company"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  sx={{ ...fieldSx, mb: "22px" }}
                />

                <TextField
                  fullWidth
                  multiline
                  rows={5}
                  label="Message"
                  placeholder="Tell us about your project..."
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  sx={{
                    ...fieldSx,
                    mb: "28px",
                    "& .MuiOutlinedInput-root": {
                      ...fieldSx["& .MuiOutlinedInput-root"],
                      alignItems: "flex-start",
                    },
                  }}
                />

                <MotionButton
                  fullWidth
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0px 14px 30px rgba(25,200,232,0.28)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    height: "56px",
                    backgroundColor: "#19C8E8",
                    color: "#000",
                    borderRadius: 0,
                    textTransform: "none",
                    fontFamily: "Jost, sans-serif",
                    fontWeight: 500,
                    fontSize: "18px",
                    lineHeight: "20px",
                    "&:hover": {
                      backgroundColor: "#19C8E8",
                    },
                  }}
                >
                  Send Message
                </MotionButton>
              </Box>
            </MotionBox>
          </Grid>

          {/* Bottom Right */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Grid container spacing={{ xs: 3, md: 3 }}>
              <Grid size={{ xs: 12 }}>
                <MotionBox
                  initial={{ opacity: 0, x: 35 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.65, ease: "easeOut" }}
                  whileHover={{
                    borderColor: "rgba(0,217,255,0.24)",
                    boxShadow: "0px 22px 45px rgba(0,217,255,0.1)",
                  }}
                  sx={{
                    ...cardSx,
                    px: { xs: "24px", md: "32px" },
                    py: { xs: "28px", md: "34px" },
                    transition: "all 0.3s ease",
                  }}
                >
                  <Typography sx={{ ...titleSx, mb: "28px" }}>
                    Get in Touch
                  </Typography>

                  <Box sx={{ display: "flex", flexDirection: "column", gap: "26px" }}>
                    <MotionBox
                      whileHover={{ x: 6 }}
                      sx={{ display: "flex", alignItems: "flex-start", gap: "14px" }}
                    >
                      <MotionBox
                        whileHover={{ scale: 1.12, rotate: 8 }}
                        sx={{
                          width: "40px",
                          height: "40px",
                          backgroundColor: "#1D2442",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <MailOutlineOutlinedIcon sx={{ color: "#00D9FF", fontSize: 20 }} />
                      </MotionBox>

                      <Box>
                        <Typography
                          sx={{
                            fontFamily: "Jost, sans-serif",
                            fontWeight: 400,
                            fontSize: "15px",
                            lineHeight: "20px",
                            color: "#7A82A8",
                            mb: "6px",
                          }}
                        >
                          Email
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "Jost, sans-serif",
                            fontWeight: 400,
                            fontSize: "18px",
                            lineHeight: "28px",
                            color: "#E8EAF2",
                          }}
                        >
                          hello@itil.com
                        </Typography>
                      </Box>
                    </MotionBox>

                    <MotionBox
                      whileHover={{ x: 6 }}
                      sx={{ display: "flex", alignItems: "flex-start", gap: "14px" }}
                    >
                      <MotionBox
                        whileHover={{ scale: 1.12, rotate: 8 }}
                        sx={{
                          width: "40px",
                          height: "40px",
                          backgroundColor: "#1D2442",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <LocalPhoneOutlinedIcon sx={{ color: "#00D9FF", fontSize: 20 }} />
                      </MotionBox>

                      <Box>
                        <Typography
                          sx={{
                            fontFamily: "Jost, sans-serif",
                            fontWeight: 400,
                            fontSize: "15px",
                            lineHeight: "20px",
                            color: "#7A82A8",
                            mb: "6px",
                          }}
                        >
                          Phone
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "Jost, sans-serif",
                            fontWeight: 400,
                            fontSize: "18px",
                            lineHeight: "28px",
                            color: "#E8EAF2",
                          }}
                        >
                          +1 (555) 123-4567
                        </Typography>
                      </Box>
                    </MotionBox>

                    <MotionBox
                      whileHover={{ x: 6 }}
                      sx={{ display: "flex", alignItems: "flex-start", gap: "14px" }}
                    >
                      <MotionBox
                        whileHover={{ scale: 1.12, rotate: 8 }}
                        sx={{
                          width: "40px",
                          height: "40px",
                          backgroundColor: "#1D2442",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <LocationOnOutlinedIcon sx={{ color: "#00D9FF", fontSize: 20 }} />
                      </MotionBox>

                      <Box>
                        <Typography
                          sx={{
                            fontFamily: "Jost, sans-serif",
                            fontWeight: 400,
                            fontSize: "15px",
                            lineHeight: "20px",
                            color: "#7A82A8",
                            mb: "6px",
                          }}
                        >
                          Address
                        </Typography>
                        <Typography
                          sx={{
                            color: "#E8EAF2",
                            fontSize: "14px",
                            lineHeight: "24px",
                            mb: "10px",
                          }}
                        >
                          Sattva Knowledge City, Raidurg, Hitec City
                          <br />
                          Hyderabad - 500 081, Telangana, India
                        </Typography>
                      </Box>
                    </MotionBox>
                  </Box>
                </MotionBox>
              </Grid>

              <Grid size={{ xs: 12 }}>
                <MotionBox
                  initial={{ opacity: 0, x: 35 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
                  whileHover={{
                    borderColor: "rgba(0,217,255,0.24)",
                    boxShadow: "0px 22px 45px rgba(0,217,255,0.1)",
                  }}
                  sx={{
                    ...cardSx,
                    px: { xs: "24px", md: "32px" },
                    py: { xs: "28px", md: "30px" },
                    transition: "all 0.3s ease",
                  }}
                >
                  <Typography sx={{ ...titleSx, mb: "16px" }}>
                    Office Hours
                  </Typography>

                  <Typography sx={{ ...bodySx, mb: "4px" }}>
                    Monday - Friday: 9:00 AM - 6:00 PM (PST)
                  </Typography>

                  <Typography sx={bodySx}>
                    Saturday - Sunday: Closed
                  </Typography>
                </MotionBox>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}