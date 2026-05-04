import {
    Box,
    Grid,
    Typography,
    TextField,
    MenuItem,
    Button,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const fieldStyles = {
    "& .MuiInputBase-root": {
        backgroundColor: "#1B2242",
        color: "#E8EAF2",
        fontSize: "14px",
    },
    "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
    },
    "& input::placeholder": {
        color: "#7A82A8",
        opacity: 1,
    },
};

export default function ContactFormSection() {
    return (
        <Box
            sx={{
                width: "100%",
                backgroundColor: "#0A0E27",
                py: { xs: "60px", md: "90px" },
            }}
        >
            {/* TOP BORDER */}
            <Box
                sx={{
                    width: "100%",
                      borderTop: "1px solid rgba(255,255,255,0.2)",
                    mb: { xs: "40px", md: "60px" },
                }}
            />

            <Box
                sx={{
                    maxWidth: "1440px",
                    mx: "auto",
                    px: { xs: "20px", sm: "32px", md: "48px" },
                }}
            >
                <Grid container spacing={4}>
                    {/* LEFT FORM */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <MotionBox
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            sx={{
                                backgroundColor: "#141829",
                                p: { xs: "24px", md: "32px" },
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "#E8EAF2",
                                    fontSize: "22px",
                                    fontWeight: 500,
                                    mb: "20px",
                                }}
                            >
                                Send us a message
                            </Typography>

                            {/* INPUTS */}
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                                <TextField
                                    placeholder="John Doe"
                                    fullWidth
                                    sx={fieldStyles}
                                />
                                <TextField
                                    placeholder="john@company.com"
                                    fullWidth
                                    sx={fieldStyles}
                                />
                                <TextField
                                    placeholder="john@company.com"
                                    fullWidth
                                    sx={fieldStyles}
                                />
                                <TextField
                                    placeholder="Your Company"
                                    fullWidth
                                    sx={fieldStyles}
                                />
                                <TextField
                                    placeholder="john@company.com"
                                    fullWidth
                                    sx={fieldStyles}
                                />
                                <TextField
                                    placeholder="Your Company"
                                    fullWidth
                                    sx={fieldStyles}
                                />

                                {/* SELECT */}
                                <TextField
                                    select
                                    defaultValue=""
                                    fullWidth
                                    sx={fieldStyles}
                                >
                                    <MenuItem value="" disabled>
                                        Select your Service
                                    </MenuItem>
                                    <MenuItem value="ai">AI & ML</MenuItem>
                                    <MenuItem value="cloud">Cloud</MenuItem>
                                    <MenuItem value="data">Data</MenuItem>
                                </TextField>
                            </Box>

                            {/* BUTTON */}
                            <Button
                                endIcon={<ArrowForwardIcon />}
                                sx={{
                                    mt: "20px",
                                    width: "100%",
                                    height: "48px",
                                    backgroundColor: "#11D7FF",
                                    color: "#000",
                                    textTransform: "none",
                                    fontWeight: 500,
                                    "&:hover": {
                                        backgroundColor: "#11D7FF",
                                    },
                                }}
                            >
                                Send message
                            </Button>
                        </MotionBox>
                    </Grid>

                    {/* RIGHT THANK YOU CARD */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <MotionBox
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            sx={{
                                backgroundColor: "#141829",
                                minHeight: { xs: "220px", md: "280px" }, // ✅ reduced height
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "center",
                                p: "30px",
                            }}
                        >
                            <Box>
                                <Typography
                                    sx={{
                                        color: "#E8EAF2",
                                        fontSize: "22px",
                                        fontWeight: 500,
                                        mb: "10px",
                                    }}
                                >
                                    Thank you!
                                </Typography>

                                <Typography
                                    sx={{
                                        color: "#7A82A8",
                                        fontSize: "14px",
                                        lineHeight: "22px",
                                    }}
                                >
                                    We have received your details !
                                    <br />
                                    We will get back to you
                                </Typography>
                            </Box>
                        </MotionBox>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}