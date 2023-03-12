import { useState } from "react";
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
    </div>
  );
}
