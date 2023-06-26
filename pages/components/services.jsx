import React from "react";
import { BsArrowDownCircle } from "react-icons/bs";

export default function Services() {

  return (

    <section id="services" className="min-h-screen">
      <div>
        <h3 className="font-interBold text-5xl leading-tight text-white">Services</h3>
        <p className="font-inter text-md py-5 leading-8 text-white max-w-xl md:text-xl">
          Here are some of the many services i offer.
          If you are interested in any of my services
          you can contact me through my email.
        </p>
      </div>
      <div className="relative">
        <div className="font-poppins lg:flex gap-10 text-white">
          <div className="text-center shadow-2xl p-10 rounded-xl my-10 bg-slate-900 flex-1 floating-animation">
            <h3 className="text-lg pt-8 pb-2">
              <i className="bi bi-globe mr-1" />
              Frontend Web Developer
            </h3>
            <p className="py-2">
              I use more modern technologies to create websites/projects
              like NextJS, I also use TailwindCSS for styling. If you are interested
              in a website for your business or personal use, you can contact me
              through my email.
            </p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-slate-900 flex-1 floating-animation">
            <h3 className="text-lg font-medium pt-8 pb-2 ">
              <i className="bi bi-discord mr-1" />
              Discord Bot Developer
            </h3>
            <p className="py-2">
              I have enough knowledge with discordjs api to create
              a decent bot for your server with a ton of features.
              Like moderation, games, and more.
            </p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-slate-900 flex-1 floating-animation">
            <h3 className="text-lg font-medium pt-8 pb-2 ">
              <i className="bi bi-list-ol mr-1" />
              Other Services
            </h3>
            <p className="py-2">
              The service you are looking for is not listed above?
              You should still reach to me! I might be able to help you.
              If not than I can still refer/vouch for you to someone who can :D.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}