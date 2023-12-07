import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import ProjectPortfolio from "./components/ProjectPortfolio";
import Testimonials from "./components/Testimonials";
import Employment from "./components/Employment";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Admin from "./components/Admin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  let pages = [
    "ABOUT US",
    "SERVICES",
    "PROJECT PORTFOLIO",
    "TESTIMONIALS",
    "EMPLOYMENT",
    "CONTACT US",
  ];

  return (
    <Router>
      <div>
        <ToastContainer position="top-center"></ToastContainer>
        <NavBar pages={pages} />
        <Routes>
          <Route path="/services" element={<Services />} />
          <Route path="/project-portfolio" element={<ProjectPortfolio />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/employment" element={<Employment />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/" element={<h2>Welcome to A2Z Renovations</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
