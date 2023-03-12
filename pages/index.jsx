import { useState } from "react";
import { Tooltip } from '@mui/material';
import Head from "next/head";
import HomeAndNav from "./components/home_nav";
import Services from "./components/services";
import Portfolio from "./components/portfolio";
import Footer from "./components/footer";
import Contact from "./components/contact";

export default function main() {
  
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
  };

  // Home Tooltip

  const [tooltipOpenHome, setTooltipOpenHome] = useState(false);

  const handleTooltipCloseHome = () => {
    setTooltipOpenHome(false);
  };

  const handleTooltipOpenHome = () => {
    setTooltipOpenHome(true);
  };

  // Services Tooltip

  const [tooltipOpenServices, setTooltipOpenServices] = useState(false);

  const handleTooltipCloseServices = () => {
    setTooltipOpenServices(false);
  };

  const handleTooltipOpenServices = () => {
    setTooltipOpenServices(true);
  };

  // Portfolio Tooltip

  const [tooltipOpenPortfolio, setTooltipOpenPortfolio] = useState(false);

  const handleTooltipClosePortfolio = () => {
    setTooltipOpenPortfolio(false);
  };

  const handleTooltipOpenPortfolio = () => {
    setTooltipOpenPortfolio(true);
  };

  // Contact Tooltip

  const [tooltipOpenContact, setTooltipOpenContact] = useState(false);

  const handleTooltipCloseContact = () => {
    setTooltipOpenContact(false);
  };

  const handleTooltipOpenContact = () => {
    setTooltipOpenContact(true);
  };

  return (
    <div>
      <Head>
        <title>iAldo80 Portofolio</title>
        <meta
          name="description"
          content="This is my personal website. In here you can find my portfolio and how to contact me."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="font-poppins px-10 bg-primary md:px-20 lg:px-40">
        <HomeAndNav />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </main>

      <div className="fixed top-1/2 right-5 transform -translate-y-1/2 flex-col hidden md:flex">

        <Tooltip title="Home" placement="left" open={tooltipOpenHome} onClose={handleTooltipCloseHome}>
          <button onMouseEnter={handleTooltipOpenHome} onMouseLeave={handleTooltipCloseHome} className={`${activeSection === "about" ? "bg-white" : "bg-gray-500"} rounded-full w-3 h-3 mb-3 hover:bg-white`} onClick={() => scrollToSection("about")}>
          </button>
        </Tooltip>

        <Tooltip title="Services" placement="left" open={tooltipOpenServices} onClose={handleTooltipCloseServices}>
          <button onMouseEnter={handleTooltipOpenServices} onMouseLeave={handleTooltipCloseServices} className={`${activeSection === "services" ? "bg-white" : "bg-gray-500"} rounded-full w-3 h-3 mb-3 hover:bg-white`} onClick={() => scrollToSection("services")}>
          </button>
        </Tooltip>

        <Tooltip title="Portfolio" placement="left" open={tooltipOpenPortfolio} onClose={handleTooltipClosePortfolio}>
          <button onMouseEnter={handleTooltipOpenPortfolio} onMouseLeave={handleTooltipClosePortfolio} className={`${activeSection === "portfolio" ? "bg-white" : "bg-gray-500"} rounded-full w-3 h-3 mb-3 hover:bg-white`} onClick={() => scrollToSection("portfolio")}>
          </button>
        </Tooltip>

        <Tooltip title="How to reach me" placement="left" open={tooltipOpenContact} onClose={handleTooltipCloseContact}>
          <button onMouseEnter={handleTooltipOpenContact} onMouseLeave={handleTooltipCloseContact} className={`${activeSection === "contact" ? "bg-white" : "bg-gray-500"} rounded-full w-3 h-3 mb-3 hover:bg-white`} onClick={() => scrollToSection("contact")}>
          </button>
        </Tooltip>

      </div>
    </div>
  );
}
