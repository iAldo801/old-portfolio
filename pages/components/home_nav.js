import Link from "next/link";
import React from "react";
import { AiFillGithub, AiOutlineInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { BsArrowDownCircle } from "react-icons/bs";

export default function Home() {

    return (

        <section className="min-h-screen">

            <nav className="py-10 mb-12 flex justify-between dark:text-slate-500">
                <h1 className="font-poppins text-xl">iAldo80</h1>
                <ul className="flex items-center">
                    <li className="text-2xl pr-5 flex justify-center gap-5 dark:text-gray-400">
                        <a className="hover:text-slate-500" target={"_blank"} href="https://github.com/iAldo85">
                            <AiFillGithub />
                        </a>
                        <a className="hover:text-slate-500" target={"_blank"} href="https://www.instagram.com/ialdo85/">
                            <AiOutlineInstagram />
                        </a>
                        <a className="hover:text-slate-500" target={"_blank"} href="https://twitter.com/iAldo85">
                            <AiFillTwitterCircle />
                        </a>
                    </li>
                </ul>
            </nav>


            <div className="text-center p-10 py-10">
                <h2 className="font-bold_font text-6xl py-2 dark:text-white text-shadow md:text-7xl">
                    Aldo Hernandez
                </h2>
                <hr className="w-64 border-blue-600 mx-auto"></hr>
                <br></br>
                <h3 className="text-2xl font-semibold py-2 dark:text-slate-400 md:text-3xl">
                    Frontend Web Developer
                </h3>
                <p className="text-md py-5 leading-8 dark:text-slate-400  max-w-xl mx-auto md:text-xl">
                    I'm a Frontend Web Developer based in the US. I enjoy
                    creating things that live on the internet, whether that
                    be websites, applications, or anything in between. I also
                    enjoy playing video games and hanging out with friends.
                </p>
                <p className="text-md py-5 leading-8 dark:text-slate-400 max-w-xl mx-auto md:text-xl">
                    Check out my services!
                </p>
                <button onClick={handleClick} className="hover:text-orange-500">
                    <BsArrowDownCircle className="text-4xl animate-bounce" />
                </button>
            </div>
        </section>

    )

    function handleClick(event) {
        event.preventDefault();
        const servicesSection = document.getElementById("services");
        const yCoord = servicesSection.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: yCoord, behavior: "smooth" });
    }

}