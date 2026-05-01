import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const projects = [
  {
    title: "My Doctor Capsule",
    roles: [
      { name: "Frontend Developers (2)", tech: "REACT JS" },
      { name: "Backend Developers (2)", tech: "PYTHON" },
      { name: "iOS Developers (2)", tech: "IOS" },
      { name: "Android Developers (2)", tech: "ANDROID" },
      { name: "Manual Tester (1)", tech: "QA" },
    ],
  },
  {
    title: "Loan Konnekt",
    roles: [
      { name: "Backend Developers (2)", tech: "PYTHON" },
      { name: "Manual Tester (1)", tech: "QA" },
    ],
  },
  {
    title: "Lawvix",
    roles: [
      { name: "Frontend Developers (2)", tech: "REACT JS" },
      { name: "Backend Developers (2)", tech: "PYTHON" },
      { name: "iOS Developers (2)", tech: "IOS" },
      { name: "Android Developers (2)", tech: "ANDROID" },
      { name: "Manual Tester (1)", tech: "QA" },
    ],
  },
  {
    title: "Property Care X",
    roles: [
      { name: "Frontend Developers (2)", tech: "REACT JS" },
      { name: "Backend Developers (2)", tech: "PYTHON" },
      { name: "iOS Developers (2)", tech: "IOS" },
      { name: "Android Developers (2)", tech: "ANDROID" },
      { name: "Manual Tester (1)", tech: "QA" },
    ],
  },
];

export default function ProjectsSection() {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#0A0E27", // full section bg
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
            mb: "22px",
          }}
        >
          Active Projects
        </MotionTypography>

        <MotionTypography
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          sx={{
            fontSize: { xs: "32px", sm: "42px", md: "48px" },
            fontWeight: 500,
            mb: "20px",
          }}
        >
          Current Project Portfolio
        </MotionTypography>

        <MotionTypography
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          sx={{
            color: "#7A82A8",
            fontSize: "16px",
            maxWidth: "750px",
            mb: "50px",
          }}
        >
          Our dedicated teams are currently delivering innovative solutions across multiple high-impact projects, spanning healthcare, finance, legal tech, and property management domains.
        </MotionTypography>

        {/* GRID */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },
            gap: "30px",
          }}
        >
          {projects.map((project, index) => (
            <MotionBox
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -6,
                boxShadow: "0 20px 50px rgba(0,217,255,0.08)",
                borderColor: "rgba(0,217,255,0.3)",
              }}
              sx={{
                bgcolor: "#0F1433", // card bg
                border: "1px solid rgba(255,255,255,0.05)",
                p: { xs: "26px", md: "30px" },
                transition: "all 0.3s ease",
              }}
            >
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: 500,
                  mb: "22px",
                }}
              >
                {project.title}
              </Typography>

              {project.roles.map((role) => (
                <Box
                  key={role.name}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: "16px",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <Box
                      sx={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        bgcolor: "#00D9FF",
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: "#9AA3C0",
                      }}
                    >
                      {role.name}
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#00D9FF",
                      letterSpacing: "1px",
                    }}
                  >
                    {role.tech}
                  </Typography>
                </Box>
              ))}
            </MotionBox>
          ))}
        </Box>
      </Box>
    </Box>
  );
}