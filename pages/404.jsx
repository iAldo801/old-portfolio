import "react";
import Head from "next/head";

export default function Custom404() {


    return (
        <div>

            <Head>
                <title>404 - Page Not Found</title>
            </Head>

            <main className="bg-custom">
                <section>
                    <div className="h-screen">
                        <div className="flex flex-col justify-center items-center h-full text-slate-400">
                            <a href="http://localhost:3000/">
                            <button className="rounded-lg border border-gray-500 py-2 px-4 hover:bg-slate-800 hover:text-white">
                                Go back to the homepage
                            </button>
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}