import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "../Components/Header/Header";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/About/About";
import Solutions from "../Pages/Solutions/Solutions";
import CaseStudies from "../Pages/CaseStudies/CaseStudies";
import Contact from "../Pages/Contact/Contact";
import Footer from "../Components/Footer/Footer";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Legal from "../Pages/Legal/Legal";
import Speak from "../Pages/Speak/Speak";
import Consultation from "../Pages/Consultation/Consultation";
import CookieConsent from "../Components/Cookies/Cookies";
import { Box } from "@mui/material";

function Layout() {
  const { pathname } = useLocation();
  const [cookieAccepted, setCookieAccepted] = useState(false);

  useEffect(() => {
    const cookieStatus = localStorage.getItem("iitilCookieConsent");
    if (cookieStatus) {
      setCookieAccepted(true);
    }
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <>
      <Header />

      {/* ✅ BLUR WRAPPER */}
      <Box
        sx={{
          filter: cookieAccepted ? "none" : "blur(6px)",
          pointerEvents: cookieAccepted ? "auto" : "none",
          userSelect: cookieAccepted ? "auto" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <Outlet />
        <Footer />
      </Box>

      {/* COOKIE BANNER (always on top) */}
      <CookieConsent onAccept={() => setCookieAccepted(true)} />
    </>
  );
}

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />   
          <Route path="/legal" element={<Legal />} />
          <Route path="/speak-to-our-expert" element={<Speak />} />
          <Route path="/schedule-consultation" element={<Consultation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;