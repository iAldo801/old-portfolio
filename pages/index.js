import Head from "next/head";
import { useState } from "react";
import HomeAndNav from "./components/home_nav";
import Services from "./components/services";
import Portfolio from "./components/portfolio";
import Footer from "./components/footer";
import Contact from "./components/contact";

export default function main() {
  const [darkMode, setDarkMode] = useState(true);


  return (


    <div className={darkMode ? "dark" : ""}>


      <Head>
        <title>iAldo80 Portofolio</title>
        <meta name="description" content="This is my personal website. In here you can find my portfolio and how to contact me." />
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