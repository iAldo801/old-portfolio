import React from "react";
import { BsArrowDownCircle } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai"

export default function Services() {

  return (

    <section id="services" className="min-h-screen">
      <div>
        <h3 className="font-poppinsBold text-5xl leading-tight text-white">Why you shold hire me?</h3>
        <p className="font-poppinsMedium text-lg py-2 leading-8 text-slate-400">
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
        <div className="font-poppins lg:flex gap-10 text-white">
          <div className="text-center shadow-2xl p-10 rounded-xl my-10 bg-slate-900 flex-1 floating-animation">
            <h3>
              <i className={"bi bi-check-lg text-green-700 text-2xl"}></i>
            </h3>
            <h3 className="text-lg pt-8 pb-2">
              <i className="bi bi-globe"></i> Frontend Web Developer
            </h3>
            <p className="py-2">
              The technologies I use/know are as follow.
              NextJS, TailwindCSS, Bootstrap,
              HTML, CSS, and JS.
            </p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-slate-900 flex-1 floating-animation">
            <h3><i className={"bi bi-exclamation-triangle-fill text-yellow-400 text-2xl"}></i></h3>
            <h3 className="text-lg font-medium pt-8 pb-2 ">
              <i className="bi bi-discord"></i> Discord Bot Developer
            </h3>
            <p className="py-2">
              I have been making discord bots for
              about 5 months or so which is not much but
              I'm still learning when I have the time
              and I'm also enhancing my skills developing
              discord bots when possible.
            </p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-slate-900 flex-1 floating-animation">
            <h3><i className={"bi bi-info-circle text-blue-800 text-2xl"}></i></h3>
            <h3 className="text-lg font-medium pt-8 pb-2 "><i className="bi bi-list-ol"></i> Other Services</h3>
            <p className="py-2">
              The service you are looking for is not listed above?
              You should still reach to me! I might be able to help you.
              If not than I can still refer/vouch for you to someone who can :D.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center flex-col items-center">
        <div className="text-center mb-4">
          <h3 className="font-poppins text-lg text-slate-400">
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
      <br />
      <br />
      <br />
      <br />
    </section>
  )

  function handleClick(event) {
    event.preventDefault();
    const servicesSection = document.getElementById("portfolio");
    const yCoord = servicesSection.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: yCoord, behavior: "smooth" });
  }
}