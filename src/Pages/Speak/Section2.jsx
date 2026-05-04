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
    fontSize: "13px",
    minHeight: "40px",
  },
  "& .MuiOutlinedInput-input": {
    py: "10px",
  },
  "& .MuiSelect-select": {
    py: "10px",
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
        py: { xs: "45px", md: "65px" },
      }}
    >
      <Box
        sx={{
          width: "100%",
          borderTop: "1px solid rgba(255,255,255,0.2)",
          mb: { xs: "32px", md: "44px" },
        }}
      />

      {/* KEEP container full width */}
      <Box
        sx={{
          maxWidth: "1440px",
          mx: "auto",
          px: { xs: "20px", sm: "32px", md: "48px" },
        }}
      >
        {/* REDUCE ONLY GRID WIDTH HERE */}
        <Grid
          container
          spacing={20}
          alignItems="stretch"
          sx={{
            maxWidth: "1200px",   // 👈 control grid width here
            mx: "auto",          // center it
          }}
        >
          {/* LEFT IMAGE */}
          <Grid size={{xs:12,md:6}} sx={{ display: "flex" }}>
            <MotionBox
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              sx={{
                backgroundColor: "#141829",
                width: "100%",
                height: { xs: "300px", md: "520px" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src="/Images/contact.svg"
                alt="contact"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </MotionBox>
          </Grid>

          {/* RIGHT FORM */}
          <Grid size={{xs:12,md:6}} sx={{ display: "flex" }}>
            <MotionBox
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              sx={{
                backgroundColor: "#141829",
                p: { xs: "22px", md: "26px" },
                width: "100%",
                height: { xs: "auto", md: "520px" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                boxSizing: "border-box",
              }}
            >
              <Typography
                sx={{
                  color: "#E8EAF2",
                  fontSize: "21px",
                  fontWeight: 500,
                  mb: "16px",
                }}
              >
                Send us a message
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: "11px" }}>
                <TextField placeholder="First Name" fullWidth sx={fieldStyles} />
                <TextField placeholder="Last Name" fullWidth sx={fieldStyles} />
                <TextField placeholder="Email Address" fullWidth sx={fieldStyles} />
                <TextField placeholder="Company Name" fullWidth sx={fieldStyles} />
                <TextField placeholder="Business Email" fullWidth sx={fieldStyles} />
                <TextField placeholder="Designation" fullWidth sx={fieldStyles} />

                <TextField select defaultValue="" fullWidth sx={fieldStyles}>
                  <MenuItem value="" disabled>
                    Select your Service
                  </MenuItem>
                  <MenuItem value="ai">AI & ML</MenuItem>
                  <MenuItem value="cloud">Cloud</MenuItem>
                  <MenuItem value="data">Data</MenuItem>
                </TextField>
              </Box>

              <Button
                endIcon={<ArrowForwardIcon />}
                sx={{
                  mt: "16px",
                  width: "100%",
                  height: "44px",
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
        </Grid>
      </Box>
    </Box>
  );
}