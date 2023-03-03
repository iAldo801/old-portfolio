import React from "react";
import { BsArrowDownCircle } from "react-icons/bs";

export default function Services() {

  return (

    <section id="services" className="min-h-screen">
      <div>
        <h3 className="font-bold_font text-5xl py-1 text-white">My Services</h3>
        <p className="text-lg py-2 leading-8 text-slate-400">
          Below are the services I currently offer.
          <br></br>
          <i className={"bi bi-check-lg text-green-700 text-lg"}></i> Accepting commissions
          <br></br>
          <i className={"bi bi-exclamation-triangle-fill text-yellow-400 text-lg"}></i> Might or might not accept commissions
          <br></br>
          <i className={"bi bi-x-lg text-red-700 text-lg"}></i> Not accepting any commissions
        </p>
      </div>
      <div className="relative container">
        <div className="lg:flex gap-10 text-white">
          <div className="text-center shadow-2xl p-10 rounded-xl my-10 bg-slate-900 flex-1 floating-animation">
            <h3>
              <i className={"bi bi-check-lg text-green-700 text-2xl"}></i>
            </h3>
            <h3 className="text-lg font-medium pt-8 pb-2">
              <i className="bi bi-globe"></i> Frontend Web Developer
            </h3>
            <p className="py-2">
              The technologies I use are as follow.
              Next.js (Basic knowledge), TailwindCSS, Bootstrap,
              HTML, CSS, and JavaScript.
            </p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-slate-900 flex-1 floating-animation">
            <h3><i className={"bi bi-x-lg text-red-700 text-2xl"}></i></h3>
            <h3 className="text-lg font-medium pt-8 pb-2 ">
              <i className="bi bi-discord"></i> Discord Bot Developer
            </h3>
            <p className="py-2">
              I have been making discord bots for
              about three months which is not much but
              I'm still learning when I have the time
              and I'm also enhancing my skills each time.
            </p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-slate-900 flex-1 floating-animation">
            <h3><i className={"bi bi-exclamation-triangle-fill text-yellow-400 text-2xl"}></i></h3>
            <h3 className="text-lg font-medium pt-8 pb-2 "><i className="bi bi-gear"></i> Minecraft Configurations</h3>
            <p className="py-2">
              I have configuraterd a few minecraft
              servers and been doings for about 3
              years or so. I have lots of experience
              with multiple plugins and can help you
              out with your server with no problem :D.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center flex-col items-center">
        <div className="text-center mb-4">
          <h3 className="text-lg text-slate-400">
            Interested in any of my services?<br></br>
            Check out my portofolio by clicking
            this button!
          </h3>
        </div>
        <div className="flex justify-center">
          <button onClick={handleClick} className="hover:text-orange-500 text-white">
            <BsArrowDownCircle className="text-4xl animate-bounce" />
          </button>
        </div>
      </div>
    </section>

  )

  function handleClick(event) {
    event.preventDefault();
    const servicesSection = document.getElementById("portfolio");
    const yCoord = servicesSection.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: yCoord, behavior: "smooth" });
  }

}