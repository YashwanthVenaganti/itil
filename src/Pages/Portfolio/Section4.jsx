import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const services = [
  {
    title: "Managed IT Services",
    desc: "Comprehensive IT infrastructure support and management",
    points: [
      "Remote IT Support",
      "IT Helpdesk Services",
      "Infrastructure Monitoring",
      "Server & Network Management",
      "Cloud & Email Management",
      "IT AMC Services",
      "Endpoint Support Services",
    ],
  },
  {
    title: "Application Development",
    desc: "Custom applications tailored to business needs",
    points: [
      "Web Applications",
      "Mobile Apps (Android/iOS/Hybrid)",
      "Desktop Applications",
      "Enterprise Applications",
      "API Development & Integration",
      "Portal Development",
      "ERP & HRMS Systems",
      "Billing & Accounting Applications",
    ],
  },
  {
    title: "CRM Development & Lifecycle",
    desc: "End-to-end CRM solutions from development to maintenance",
    points: [
      "Custom CRM Systems",
      "Sales & Support CRM",
      "Lead Management CRM",
      "Channel Partner CRM",
      "CRM Integration & Customisation",
      "Workflow & Dashboard Customisation",
      "Third-party Integrations",
      "CRM Maintenance & Support",
    ],
  },
  {
    title: "SaaS Development & Services",
    desc: "Scalable SaaS platforms and product engineering",
    points: [
      "Multi-tenant SaaS Platforms",
      "Subscription-based Software",
      "Industry-specific SaaS Solutions",
      "SaaS Architecture & Engineering",
      "Microservices Architecture",
      "Payment & Subscription Integration",
      "SaaS Operations & Management",
      "Performance Monitoring",
    ],
  },
  {
    title: "Application Support & Optimisation",
    desc: "Ongoing maintenance and performance improvements",
    points: [
      "Application Maintenance",
      "Performance Optimisation",
      "UI/UX Improvements",
      "Bug Fixing & Enhancements",
      "Database Optimisation",
      "Security Hardening",
      "Scalability Improvements",
      "Cloud Migration",
    ],
  },
  {
    title: "Data Services",
    desc: "Comprehensive data management and intelligence",
    points: [
      "Data Entry & Processing",
      "Data Cleansing & Validation",
      "Data Migration Services",
      "CRM Data Management",
      "MIS Reporting",
      "Business Dashboards",
      "Data Structuring & Enrichment",
    ],
  },
  {
    title: "Cybersecurity Services",
    desc: "Protecting your digital assets and infrastructure",
    points: [
      "Endpoint Security",
      "Firewall Management",
      "Security Audits",
      "Backup & Disaster Recovery",
      "Access Control Management",
      "Data Protection Services",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    desc: "Modern cloud infrastructure and deployment",
    points: [
      "Cloud Deployment & Migration",
      "Server Management",
      "Virtual Infrastructure Setup",
      "Backup Infrastructure",
      "Storage Management",
      "Cloud Monitoring",
    ],
  },
  {
    title: "Automation & Digital Transformation",
    desc: "Streamline operations with intelligent automation",
    points: [
      "Workflow Automation",
      "CRM Automation",
      "Business Process Automation",
      "Reporting Automation",
      "System Integration Services",
      "Digital Transformation Consulting",
    ],
  },
];

export default function ServicesSection() {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#0A0E27",
        color: "#E9ECF7",
        fontFamily: "Jost, sans-serif",
        py: { xs: "70px", md: "120px" },
        overflowX: "hidden",
      }}
    >
      {/* ✅ SAME CONTAINER AS HERO */}
      <Box
        sx={{
          maxWidth: "1440px",
          margin: "0 auto",
          px: { xs: "20px", sm: "32px", md: "48px" },
          width: "100%",
        }}
      >
        <MotionTypography
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          sx={{
            color: "#00D9FF",
            fontSize: { xs: "11px", sm: "12px", md: "13px" },
            letterSpacing: { xs: "4px", md: "6px" },
            textTransform: "uppercase",
            mb: "24px",
            fontWeight: 500,
          }}
        >
          Core Service Verticals
        </MotionTypography>

        <MotionTypography
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          sx={{
            fontSize: { xs: "30px", sm: "40px", md: "46px", lg: "48px" },
            lineHeight: { xs: "38px", sm: "48px", md: "56px", lg: "58px" },
            fontWeight: 500,
            mb: "22px",
          }}
        >
          Comprehensive Services
        </MotionTypography>

        <MotionTypography
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          sx={{
            color: "#8D94B8",
            fontSize: { xs: "14px", sm: "15px", md: "16px" },
            lineHeight: { xs: "24px", sm: "26px", md: "28px" },
            maxWidth: "1120px",
            mb: { xs: "44px", md: "64px" },
          }}
        >
          IITIL delivers a complete digital ecosystem covering infrastructure,
          applications, CRM systems, SaaS platforms, automation, cybersecurity,
          and data services under one scalable operating model.
        </MotionTypography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, minmax(0, 1fr))",
              lg: "repeat(3, minmax(0, 1fr))",
            },
            gap: { xs: "24px", md: "34px" },
            width: "100%",
          }}
        >
          {services.map((service, index) => (
            <MotionBox
              key={service.title}
              initial={{ opacity: 0, y: 38 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.07 }}
              whileHover={{
                y: -7,
                borderColor: "rgba(0,217,255,0.35)",
                boxShadow: "0 22px 55px rgba(0,217,255,0.08)",
              }}
              sx={{
                bgcolor: "#0F1433",
                borderTop: "0.8px solid #1A1F47",
                borderLeft: "1px solid rgba(255,255,255,0.04)",
                borderRight: "1px solid rgba(255,255,255,0.04)",
                borderBottom: "1px solid rgba(255,255,255,0.04)",
                p: { xs: "24px", md: "32px" },
                minHeight: "430px",
                transition: "all 0.3s ease",
              }}
            >
              <Box sx={{ display: "flex", gap: "16px", mb: "20px" }}>
                <Box
                  sx={{
                    width: "40px",
                    height: "40px",
                    border: "1px solid rgba(0,217,255,0.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "14px",
                      height: "14px",
                      borderRadius: "50%",
                      bgcolor: "#00D9FF",
                    }}
                  />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontSize: { xs: "18px", md: "20px" },
                      fontWeight: 500,
                      mb: "6px",
                    }}
                  >
                    {service.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#8D94B8",
                      fontSize: "14px",
                    }}
                  >
                    {service.desc}
                  </Typography>
                </Box>
              </Box>

              <Box component="ul" sx={{ p: 0, m: 0 }}>
                {service.points.map((point) => (
                  <Box
                    key={point}
                    component="li"
                    sx={{ display: "flex", gap: "8px", mb: "10px" }}
                  >
                    <Box
                      sx={{
                        width: "4px",
                        height: "4px",
                        bgcolor: "#00D9FF",
                        mt: "8px",
                      }}
                    />
                    <Typography sx={{ fontSize: "13px", color: "#8D94B8" }}>
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