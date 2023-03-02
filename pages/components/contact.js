import React from "react";

export default function Contact() {

    return (

        <section id="contact" className="min-h-screen">

            <div className="relative container">
                <div className="lg:flex gap-10">
                    <div className="text-center shadow-2xl p-40 rounded-xl my-10 bg-slate-800 flex-1 floating-animation md:p-80">
                        <h3 className="md:text-lg text-sm font-medium pt-8 pb-2">
                            <i className="bi bi-envelope"></i> Contact Me
                        </h3>
                        <p className="py-2">
                            If you have any questions or want to contact me, you can do so with the info below.
                        </p>
                        <div className="flex justify-center">
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-col items-center gap-2">
                                    <a className="hover:text-cyan-700" href="https://t.me/iAldo80">
                                        <i className="bi bi-telegram text-2xl"> iAldo80</i>
                                    </a>
                                    <a className="hover:text-blue-800">
                                        <i class="bi bi-discord text-2xl"> iAldo80#3946</i>
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
