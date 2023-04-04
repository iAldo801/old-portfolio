import { useState } from 'react';
import { Tooltip } from '@mui/material';
import { AiFillGithub, AiOutlineInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { BsArrowDownCircle, BsPerson, BsDiagram2, BsBriefcase } from "react-icons/bs";

export default function Home() {

    const [tooltipOpenGithub, setTooltipOpenGithub] = useState(false);

    const handleTooltipCloseGithub = () => {
      setTooltipOpenGithub(false);
    };

    const handleTooltipOpenGithub = () => {
        setTooltipOpenGithub(true);
      };

    return (

        <section id="about" className="min-h-screen">

            <div>

                {/* Nav Desktop */}

                <nav className="user-select-none py-10 mb-12 justify-between text-slate-500 hidden md:flex">
                    <h1 className="font-poppins text-xl">iAldo80</h1>
                    <ul className="flex items-center">
                        <li className="text-2xl pr-5 flex justify-center gap-5 text-gray-400">
                            <Tooltip title="Github" placement="bottom" open={tooltipOpenGithub} onClose={handleTooltipCloseGithub}>
                            <a onMouseEnter={handleTooltipOpenGithub} onMouseLeave={handleTooltipCloseGithub} className="hover:text-slate-500" target={"_blank"} href="https://github.com/iAldo85">
                                <AiFillGithub />
                            </a>
                            </Tooltip>
                            <a className="hover:text-slate-500" target={"_blank"} href="https://www.instagram.com/ialdo85/">
                                <AiOutlineInstagram />
                            </a>
                            <a className="hover:text-slate-500" target={"_blank"} href="https://twitter.com/iAldo85">
                                <AiFillTwitterCircle />
                            </a>
                        </li>

                    </ul>
                </nav>

                {/* Nav Mobile */}

                <nav className="user-select-none fixed bottom-8 left-0 right-0 w-72 mx-auto h-12 bg-gray-800 text-white  hover:text-opacity-5 text-sm flex justify-center items-center rounded-2xl animate-bounce md:hidden" style={{ zIndex: '999' }}>
                    <a onClick={handleClickAbout} href="#about" className="hover:text-green-300 flex-grow flex flex-col items-center justify-center">
                        <BsPerson className="text-2xl" />
                        <p>About me</p>
                    </a>
                    <a onClick={handleClickServices} href="#services" className="hover:text-green-300 flex-grow flex flex-col items-center justify-center">
                        <BsDiagram2 className="text-2xl" />
                        <p>Services</p>
                    </a>
                    <a onClick={handleClickPortfolio} href="#portfolio" className="hover:text-green-300 flex-grow flex flex-col items-center justify-center">
                        <BsBriefcase className="text-2xl" />
                        <p>Portfolio</p>
                    </a>
                </nav>


            </div>

            <div className="text-center p-10 py-10">
                <h2 className="font-bold_font text-6xl py-2 text-white text-shadow md:text-7xl">
                    Aldo Hernandez
                </h2>
                <hr className="w-64 border-blue-600 mx-auto"></hr>
                <br></br>
                <h3 className="text-2xl font-semibold py-2 text-slate-400 md:text-3xl">
                    Frontend Web Developer
                </h3>
                <p className="text-md py-5 leading-8 text-slate-400  max-w-xl mx-auto md:text-xl">
                    I'm a Frontend Web Developer based in the US. I enjoy
                    creating things that live on the internet, whether that
                    be websites, applications, or anything in between. I also
                    enjoy playing video games and hanging out with friends.
                </p>
                <p className="text-md py-5 leading-8 text-slate-400 max-w-xl mx-auto md:text-xl">
                    Check out my services!
                </p>
                <button onClick={handleClickServices} className="hover:text-orange-500 text-white">
                    <BsArrowDownCircle className="text-4xl animate-bounce" />
                </button>
            </div>
        </section>

    )


    function handleClickAbout(event) {
        event.preventDefault();
        const servicesSection = document.getElementById("about");
        const yCoord = servicesSection.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: yCoord, behavior: "smooth" });
    }

    function handleClickServices(event) {
        event.preventDefault();
        const servicesSection = document.getElementById("services");
        const yCoord = servicesSection.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: yCoord, behavior: "smooth" });
    }

    function handleClickPortfolio(event) {
        event.preventDefault();
        const servicesSection = document.getElementById("portfolio");
        const yCoord = servicesSection.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: yCoord, behavior: "smooth" });
    }

}