import Head from "next/head";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import {
  BsFillMoonStarsFill,
  BsSun,
} from "react-icons/bs";
import {
  RxCross2,
} from "react-icons/rx"
import { useState, useEffect } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [mailformToggled, toggleMailForm] = useState(false);


  const handleClick = () => {
    toggleMailForm(!mailformToggled);
  };


  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>iAldo80 Portofolio</title>
        <meta name="description" content="This is my personal website. In Here you can find my portfolio and how to contact me." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-poppins px-10 dark:bg-gray-900 md:px-20 lg:px-40">

        {/* Navbar */}

        <section className="min-h-screen">

          <nav className="py-10 mb-12 flex justify-between text-stone-700 dark:text-slate-500">
            <h1 className="font-poppins text-xl">iAldo80</h1>
            <ul className="flex items-center">
              <li>
                {darkMode ? (
                  <BsSun
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-2xl"
                  />
                ) : (
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-2xl"
                  />
                )}
              </li>
              <li>
              </li>
            </ul>
          </nav>

          {/* Home Section */}

          <div className="text-center p-10 py-10">
            <h2 className="font-poppins font-medium text-5xl py-2 bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text md:text-6xl animate-pulse">
              Aldo Hernandez
            </h2>
            <hr className="w-64 border-blue-600 mx-auto testlol"></hr>
            <br></br>
            <h3 className="text-2xl py-2 text-stone-700 dark:text-slate-500 md:text-3xl">
              Frontend Web Dev
            </h3>
            <p className="text-md py-5 leading-8 text-stone-700 dark:text-slate-500 max-w-xl mx-auto md:text-xl">
              I'm a Frontend Web Developer based in the US. I enjoy
              creating things that live on the internet, whether that
              be websites, applications, or anything in between. I also
              enjoy playing video games and hanging out with friends.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-stone-700 dark:text-gray-400">
              <a target={"_blank"} href="https://github.com/iAldo85">
                <AiFillGithub />
              </a>
              <a target={"_blank"} href="https://www.instagram.com/ialdo85/">
                <AiOutlineInstagram />
              </a>
              <a target={"_blank"} href="https://twitter.com/iAldo85">
                <AiFillTwitterCircle />
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}

        <section className="min-h-screen py-10">
          <div>
            <h3 className="text-3xl py-1 text-stone-700 dark:text-slate-500 ">My services</h3>
            <p className="text-md py-2 leading-8 text-stone-700 dark:text-slate-500">
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
        </section>

        {/* Portfolio Section */}
        {/* <section className="py-10 min-h-screen">

        </section> */}

        <footer>
          <div className="text-center py-10">
            <p className="text-md py-2 leading-8 text-stone-700 dark:text-slate-500">
              Copyright &copy; 2023 Aldo Hernandez
            </p>
          </div>
        </footer>

      </main>
    </div>
  );
}
