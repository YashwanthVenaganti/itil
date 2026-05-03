import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const projects = [
  {
    title: "My Doctor Capsule",
    image: "/Images/Doctor.svg",
    desc: "A digital healthcare platform that simplifies access to consultations, health records, and patient care services.",
    points: [
      "Seamless connection with healthcare providers",
      "Technology-driven solutions",
      "Convenient & reliable care delivery",
      "Smooth integrated healthcare experience",
    ],
  },
  {
    title: "Loan Konnekt",
    image: "/Images/Loan.svg",
    desc: "A smart credit and lending facilitation platform connecting customers with the right lenders based on their financial profile.",
    points: [
      "Streamlined loan discovery",
      "Credit eligibility assessment",
      "Structured channel approach",
      "Transparency and speed focused",
    ],
  },
  {
    title: "Lawvix",
    image: "/Images/Larvix.svg",
    desc: "A technology enabled legal services platform offering accessible, reliable, and structured legal solutions.",
    points: [
      "Verified legal professionals",
      "Advisory & documentation services",
      "Digital legal processes",
      "Efficiency and accuracy guaranteed",
    ],
  },
  {
    title: "Property Care X",
    image: "/Images/Property.svg",
    desc: "An integrated property management and support platform designed to handle end-to-end property needs.",
    points: [
      "Maintenance & tenant management",
      "Documentation and compliance",
      "Hassle-free ownership",
      "Transparent and efficient control",
    ],
  },
];

export default function ProjectsSection() {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#0A0E27",
        color: "#E9ECF7",
        fontFamily: "Jost, sans-serif",
        px: { xs: "18px", sm: "28px", md: "48px" },
        py: { xs: "70px", md: "110px" },
        overflowX: "hidden",
        boxSizing: "border-box",
      }}
    >
      <Box sx={{ maxWidth: "1200px", mx: "auto", width: "100%" }}>
        <MotionTypography
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          sx={{
            color: "#00D9FF",
            fontSize: { xs: "11px", sm: "12px", md: "13px" },
            letterSpacing: { xs: "4px", md: "6px" },
            textTransform: "uppercase",
            mb: "22px",
          }}
        >
          Active Projects
        </MotionTypography>

        <MotionTypography
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          sx={{
            fontSize: { xs: "30px", sm: "40px", md: "46px", lg: "48px" },
            lineHeight: { xs: "38px", sm: "48px", md: "56px", lg: "58px" },
            fontWeight: 500,
            mb: "20px",
          }}
        >
          Current Project Portfolio
        </MotionTypography>

        <MotionTypography
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          sx={{
            color: "#7A82A8",
            fontSize: { xs: "14px", sm: "15px", md: "16px" },
            lineHeight: { xs: "24px", sm: "26px", md: "28px" },
            maxWidth: "760px",
            mb: { xs: "42px", md: "60px" },
          }}
        >
          Our dedicated teams are currently delivering innovative solutions
          across multiple high-impact projects, spanning healthcare, finance,
          legal tech, and property management domains.
        </MotionTypography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },
            gap: { xs: "26px", md: "30px" },
          }}
        >
          {projects.map((project, index) => (
            <MotionBox
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -6,
                boxShadow: "0 22px 55px rgba(0,217,255,0.08)",
                borderColor: "rgba(0,217,255,0.25)",
              }}
              sx={{
                bgcolor: "#0F1433",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "14px",
                p: { xs: "22px", sm: "26px", md: "30px" },
                minHeight: { xs: "auto", md: "405px" },
                transition: "all 0.3s ease",
                boxSizing: "border-box",
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src={project.image}
                alt={project.title}
                sx={{
                  width: { xs: "46px", sm: "52px", md: "58px" },
                  height: { xs: "46px", sm: "52px", md: "58px" },
                  objectFit: "contain",
                  display: "block",
                  mb: { xs: "16px", md: "18px" },
                }}
              />

              <Typography
                sx={{
                  fontSize: {
                    xs: "18px",
                    sm: "20px",
                    md: "22px",
                    lg: "24px",
                  },
                  lineHeight: {
                    xs: "26px",
                    sm: "28px",
                    md: "30px",
                    lg: "32px",
                  },
                  fontWeight: 500,
                  color: "#E9ECF7",
                  mb: "14px",
                }}
              >
                {project.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: {
                    xs: "14px",
                    sm: "15px",
                    md: "16px",
                    lg: "16.5px",
                  },
                  lineHeight: {
                    xs: "24px",
                    sm: "26px",
                    md: "28px",
                    lg: "29px",
                  },
                  fontWeight: 400,
                  color: "#AAB1D6",
                  maxWidth: "500px",
                  mb: "18px",
                }}
              >
                {project.desc}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: { xs: "10px", sm: "12px", md: "14px" },
                }}
              >
                {project.points.map((point) => (
                  <Box
                    key={point}
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#00D9FF",
                        fontSize: { xs: "14px", sm: "15px", md: "16px" },
                        lineHeight: "22px",
                        mt: "2px",
                        flexShrink: 0,
                      }}
                    >
                      ✓
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: {
                          xs: "13px",
                          sm: "14px",
                          md: "14.5px",
                          lg: "15px",
                        },
                        lineHeight: {
                          xs: "20px",
                          sm: "22px",
                          md: "24px",
                        },
                        color: "#8D94B8",
                      }}
                    >
                      {point}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </MotionBox>
          ))}
        </Box>
      </Box>
    </Box>
  );
}