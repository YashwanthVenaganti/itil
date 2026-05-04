import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const sections = [
  {
    title: "Terms and Conditions",
    items: [
      "1.1 Acceptance of Terms By accessing or using the ITIL website, solutions, or platforms, you agree to comply with and be bound by these Terms & Conditions. If you do not agree, you should not use our services.",
      "1.2 Services Scope ITIL provides IT services, data analytics, software development, cloud solutions, artificial intelligence, SaaS solutions, and related consulting services under one scalable delivery model.",
      "1.3 Use of Website Users agree not to misuse the website, attempt unauthorized access, introduce malware or viruses, or interfere with normal functionality.",
      "1.4 Intellectual Property All content, branding, software, graphics and materials on this website are the intellectual property of ITIL unless otherwise stated. Unauthorized reproduction is strictly prohibited.",
      "1.5 Limitation of Liability ITIL shall not be held liable for any indirect, incidental, or consequential damages arising from the use of our website or services.",
    ],
  },
  {
    title: "Privacy Policy",
    items: [
      "2.1 Information Collection We may collect personal and non-personal information such as name, email, phone number, company details, and usage data to enable delivery and improvement.",
      "2.2 Use of Information Collected data is used for service delivery and support, business communication, analytics and performance improvement, compliance, and legal obligations.",
      "2.3 Data Protection We implement reasonable technical and organizational security measures to protect user data against unauthorized access, disclosure, or destruction.",
      "2.4 Data Sharing We do not sell or rent personal data. Data may be shared only with trusted service partners under strict confidentiality governance or legal requirements.",
      "2.5 Cookies Our website may use cookies to enhance user experience, track usage patterns, and improve performance.",
    ],
  },
  {
    title: "Service Disclaimer",
    items: [
      "3.1 Service Availability While ITIL strives to ensure uninterrupted services, we do not guarantee that all services will always be available without delay, interruption, or error.",
      "3.2 Third-Party Services Some solutions may depend on external platforms, hosting services, cloud providers, APIs, or integrations. ITIL is not responsible for failures caused by third-party systems.",
      "3.3 Business Outcomes ITIL provides technology and consulting services based on agreed scope. Business results may vary depending on client operations, adoption, and external market factors.",
    ],
  },
  {
    title: "Intellectual Property Rights (IPR)",
    items: [
      "All trademarks, logos, graphics, designs, documents, software elements, layouts, architecture, UI files, written content and technical materials remain the intellectual property of ITIL or respective owners unless transferred through a written agreement.",
    ],
  },
  {
    title: "Grievance Redressal",
    items: [
      "For any concerns, complaints, or legal queries, users may contact our grievance officer through the official email or contact details provided on the website.",
    ],
  },
  {
    title: "Governing Law & Jurisdiction",
    items: [
      "These Terms and Policies shall be governed by the laws of India. Any disputes shall fall under the jurisdiction of Hyderabad, Telangana, India.",
    ],
  },
  {
    title: "Policy Updates",
    items: [
      "ITIL reserves the right to update or modify these legal policies at any time without prior notice. Users are encouraged to review this page periodically.",
    ],
  },
];

export default function LegalContentSection() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#0A0E27",
        color: "#E8EAF2",
        overflowX: "hidden",
        py: { xs: "50px", md: "80px" },
      }}
    >
      <Box
        sx={{
          maxWidth: "1440px",
          mx: "auto",
          px: { xs: "20px", sm: "32px", md: "48px" },
          boxSizing: "border-box",
        }}
      >
        <MotionBox
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          sx={{
            maxWidth: "1120px",
          }}
        >
          {sections.map((section, sectionIndex) => (
            <MotionBox
              key={section.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: sectionIndex * 0.06,
                ease: "easeOut",
              }}
              sx={{
                mb: { xs: "34px", md: "46px" },
              }}
            >
              <MotionTypography
                whileHover={{ x: 4 }}
                sx={{
                  fontFamily: "Jost, sans-serif",
                  fontWeight: 500,
                  fontSize: { xs: "22px", sm: "26px", md: "30px" },
                  lineHeight: { xs: "30px", sm: "34px", md: "38px" },
                  letterSpacing: "-0.6px",
                  color: "#E8EAF2",
                  mb: { xs: "16px", md: "20px" },
                  transition: "all 0.3s ease",
                }}
              >
                {section.title}
              </MotionTypography>

              <Box>
                {section.items.map((item, index) => (
                  <Typography
                    key={index}
                    sx={{
                      fontFamily: "Jost, sans-serif",
                      fontWeight: 400,
                      fontSize: { xs: "13px", sm: "14px", md: "15px" },
                      lineHeight: { xs: "23px", sm: "25px", md: "27px" },
                      color: "#9AA3C7",
                      mb: "10px",
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>
            </MotionBox>
          ))}
        </MotionBox>
      </Box>
    </Box>
  );
}