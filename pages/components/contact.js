import React from "react";

export default function Contact() {

    return (

        <section id="contact" className="py-10">

            <div className="relative container">
                <div className="lg:flex gap-10">
                    <div className="text-center shadow-2xl p-10 rounded-xl my-10 bg-slate-900 flex-1 floating-animation md:p-40 text-white">
                        <h3 className="md:text-4xl text-2xl font-bold_font pt-8 pb-2">
                            <i className="bi bi-envelope"></i> Contact Me
                        </h3>
                        <p className="py-2 text-lg">
                            If you have any questions or want to contact me, you can do so with the info below.
                        </p>
                        <div className="flex justify-center">
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-col items-center gap-2">
                                    <a className="hover:text-cyan-700" href="https://t.me/iAldo80">
                                        <i className="bi bi-telegram text-2xl"> iAldo80</i>
                                    </a>
                                    <a className="hover:text-blue-800">
                                        <i className="bi bi-discord text-2xl"> iAldo80#3946</i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    )
}
