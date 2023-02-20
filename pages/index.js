import Head from "next/head";
import { AiFillGithub, AiOutlineInstagram, AiFillTwitterCircle } from "react-icons/ai";
import Image from "next/image";
import nothing from "../public/nothing.png"
import { useState } from "react";


export default function portoflio() {
  const [darkMode, setDarkMode] = useState(true);
  const [isOpenWeb, setIsOpenWeb] = useState(false);
  const [isOpenBots, setIsOpenBots] = useState(false);
  const [isOPenConfig, setIsOpenConfig] = useState(false);



  return (

    <div className={darkMode ? "dark" : ""}>

      <Head>
        <title>iAldo80 Portofolio</title>
        <meta name="description" content="This is my personal website. In here you can find my portfolio and how to contact me." />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="font-poppins px-10 bg-gray-300 dark:bg-slate-800 md:px-20 lg:px-40">

        {/* Home Sectiom */}

        <section className="min-h-screen">

          {/* Navbar */}

          <nav className="py-10 mb-12 flex justify-between dark:text-slate-500">
            <h1 className="font-poppins text-xl">iAldo80</h1>
            <ul className="flex items-center">
              <li className="text-2xl pr-5 flex justify-center gap-5 text-stone-700 dark:text-gray-400">
                <a target={"_blank"} href="https://github.com/iAldo85">
                  <AiFillGithub />
                </a>
                <a target={"_blank"} href="https://www.instagram.com/ialdo85/">
                  <AiOutlineInstagram />
                </a>
                <a target={"_blank"} href="https://twitter.com/iAldo85">
                  <AiFillTwitterCircle />
                </a>
              </li>
            </ul>
          </nav>

          {/* Home Section */}

          <div className="text-center p-10 py-10">
            <h2 className="font-bold_font text-6xl py-2 dark:text-white text-shadow md:text-7xl">
              Aldo Hernandez
            </h2>
            <hr className="w-64 border-blue-600 mx-auto"></hr>
            <br></br>
            <h3 className="text-2xl font-semibold py-2 dark:text-slate-400 md:text-3xl">
              Frontend Web Developer
            </h3>
            <p className="text-md py-5 leading-8 dark:text-slate-400 max-w-xl mx-auto md:text-xl">
              I'm a Frontend Web Developer based in the US. I enjoy
              creating things that live on the internet, whether that
              be websites, applications, or anything in between. I also
              enjoy playing video games and hanging out with friends.
            </p>
          </div>
        </section>

        {/* Services Section */}

        <section className="min-h-screen">
          <div>
            <h3 className="font-bold_font text-5xl py-1 dark:text-white">My Services</h3>
            <p className="text-lg py-2 leading-8 dark:text-slate-400">
              Below are the services I currently offer.
              <br></br>
              <i className={"bi bi-check-lg text-green-700 text-lg"}></i> Accepting commissions
              <br></br>
              <i className={"bi bi-exclamation-triangle-fill text-yellow-400 text-lg"}></i> Might or might not accept commissions
              <br></br>
              <i className={"bi bi-x-lg text-red-700 text-lg"}></i> Not accepting any commissions
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-2xl p-10 rounded-xl my-10 midnight flex-1">
              <h3><i className={"bi bi-x-lg text-red-700 text-2xl"}></i></h3>
              <h3 className="text-lg font-medium pt-8 pb-2">
                <i className="bi bi-globe"></i> Frontend Web Developer
              </h3>
              <p className="py-2">
                The technologies I use are as follow.
                Next.js (Basic knowledge), TailwindCSS, Bootstrap,
                HTML, CSS, and JavaScript.
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 midnight flex-1">
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
            <div className="text-center shadow-lg p-10 rounded-xl my-10 midnight flex-1">
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
          <div className="flex justify-center flex-col items-center">
            <div className="text-center mb-4">
              <h3 className="text-lg dark:text-slate-400">
                Interested in any of my services?<br></br>
                Check out my portofolio by clicking
                this button!
              </h3>
            </div>
            <div className="flex justify-center">
              <button className="py-2 px-4 border border-gray-400 relative inline-flex items-center justify-start overflow-hidden transition-all bg-gray-600 rounded-xl hover:bg-gray-500 group">
                <span className="w-0 h-0  bg-blue-600 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                <span className="dark:text-white w-full transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                  Click me here!
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}

        <section id="dasjdsal" className="min-h-screen py-10">
          <div>
            <h3 className="font-bold_font text-5xl py-1 dark:text-white">Portfolio</h3>
            <p className="text-lg py-2 leading-8 dark:text-slate-400">
              Below are some of my projects.
            </p>
          </div>
        
          <div className="py-5">
            <button
              className="dark:text-slate-400 py-2 px-4 border border-gray-400 rounded-xl hover:bg-emerald-700"
              onClick={() => setIsOpenWeb(!isOpenWeb)}
            >
              Webpages {isOpenWeb ? <i className="bi bi-chevron-compact-up"></i> : <i className="bi bi-chevron-compact-down"></i>}
            </button>
            <div className="image-container" style={{ maxHeight: isOpenWeb ? '1000px' : '0', transition: 'max-height 1s ease', overflow: 'hidden' }}>
              {isOpenWeb && (
                <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                  <div className="basis-1/3 flex-1">
                    <Image className="rounded-lg object-cover" width={'100%'} height={'100%'} src={nothing} />
                  </div>
                  <div className="basis-1/3 flex-1">
                    <Image className="rounded-lg object-cover" width={'100%'} height={'100%'} src={nothing} />
                  </div>
                  <div className="basis-1/3 flex-1">
                    <Image className="rounded-lg object-cover" width={'100%'} height={'100%'} src={nothing} />
                  </div>
                  <div className="basis-1/3 flex-1">
                    <Image className="rounded-lg object-cover" width={'100%'} height={'100%'} src={nothing} />
                  </div>
                </div>
              )}
            </div>
          </div>


          <div className="py-5">
            <button
              className="dark:text-slate-400 py-2 px-4 border border-gray-400 rounded-xl hover:bg-blue-700"
              onClick={() => setIsOpenBots(!isOpenBots)}
            >
              Discord Bots {isOpenBots ? <i className="bi bi-chevron-compact-up"></i> : <i className="bi bi-chevron-compact-down"></i>}
            </button>
            <div className="image-container" style={{ maxHeight: isOpenBots ? '1000px' : '0', transition: 'max-height 1s ease', overflow: 'hidden' }}>
              {isOpenBots && (
                <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                  <div className="basis-1/3 flex-1">
                    <Image className="rounded-lg object-cover" width={'100%'} height={'100%'} layout='responsive' src={nothing} />
                  </div>
                  <div className="basis-1/3 flex-1">
                    <Image className="rounded-lg object-cover" width={'100%'} height={'100%'} layout='responsive' src={nothing} />
                  </div>
                  <div className="basis-1/3 flex-1">
                    <Image className="rounded-lg object-cover" width={'100%'} height={'100%'} layout='responsive' src={nothing} />
                  </div>
                  <div className="basis-1/3 flex-1">
                    <Image className="rounded-lg object-cover" width={'100%'} height={'100%'} layout='responsive' src={nothing} />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="py-5">
            <button
              className="dark:text-slate-400 py-2 px-4 border border-gray-400 rounded-xl hover:bg-green-800"
              onClick={() => setIsOpenConfig(!isOPenConfig)}
            >
              Minecraft Configurations {isOPenConfig ? <i className="bi bi-chevron-compact-up"></i> : <i className="bi bi-chevron-compact-down"></i>}
            </button>
            <div className="image-container" style={{ maxHeight: isOPenConfig ? '1000px' : '0', transition: 'max-height 1s ease', overflow: 'hidden' }}>
              {isOPenConfig && (
                <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                  <div className="basis-1/3 flex-1">
                    <Image className="rounded-lg object-cover" width={'100%'} height={'100%'} layout='responsive' src={nothing} />
                  </div>
                  <div className="basis-1/3 flex-1">
                    <Image className="rounded-lg object-cover" width={'100%'} height={'100%'} layout='responsive' src={nothing} />
                  </div>
                  <div className="basis-1/3 flex-1">
                    <Image className="rounded-lg object-cover" width={'100%'} height={'100%'} layout='responsive' src={nothing} />
                  </div>
                  <div className="basis-1/3 flex-1">
                    <Image className="rounded-lg object-cover" width={'100%'} height={'100%'} layout='responsive' src={nothing} />
                  </div>
                </div>
              )}
            </div>
          </div>


        </section>

        {/* Footer */}

        <footer>
          <div className="text-center py-10">
            <p className="text-md py-2 leading-8 text-stone-700 dark:text-slate-500">
              Copyright &copy; 2023 Aldo Hernandez. All Rights Reserved.
            </p>
          </div>
        </footer>

      </main>
    </div>
  );
}