import { useState } from "react";
import Image from "next/image";
import nothing from "../../public/nothing.png"

export default function Portfolio() {

    const [isOpenWeb, setIsOpenWeb] = useState(false);
    const [isOpenBots, setIsOpenBots] = useState(false);

    return (

        <section id="portfolio" className=''>
            <div>
                <h3 className="font-poppinsSemiBold text-5xl py-1 text-white">Portfolio</h3>
                <p className="font-medium text-lg py-2 leading-8 text-slate-400">
                    Below are some of my projects.
                </p>
            </div>

            <div className="py-5">
                <button className="font-poppins text-slate-400 py-2 px-4 border border-gray-400 rounded-xl hover:bg-emerald-700" onClick={() => setIsOpenWeb(!isOpenWeb)}> Webpages {isOpenWeb ? <i className="bi bi-chevron-compact-up"></i> : <i className="bi bi-chevron-compact-down"></i>}
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
                <button className="font-poppins text-slate-400 py-2 px-4 border border-gray-400 rounded-xl hover:bg-blue-700" onClick={() => setIsOpenBots(!isOpenBots)}>
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
        </section>
    )
}