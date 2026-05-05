import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

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

function Layout() {
  const { pathname } = useLocation();

  // ✅ Scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto", // change to "smooth" if needed
    });
  }, [pathname]);

  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
      <CookieConsent />
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