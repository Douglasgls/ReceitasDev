
import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr';

import Link from "next/link";

import { Barlow } from 'next/font/google'

const hankenGrotesk = Barlow({
    weight: ['500', '500'],
    subsets: ['latin'],
})



export default function Header() {
    return (
       <section className="overflow-hidden relative">
        <div >
            <div className="bg-white opacity-90 h-auto pt-4 sm:py-4">
                <div className="flex items-center justify-center rounded-2xl lg:hidden xl:hidden">
                    <div className="bg-[#050a30] w-96  h-12 flex items-center justify-center rounded-2xl md:w-auto">
                        <input type="text" className="bg-[#050a30] w-96 h-12 pl-4 flex items-center justify-center rounded-2xl text-white focus:outline-none" placeholder="Procure por uma receita"/>
                        <button className="bg-[#050a30] w-12 h-12 flex items-center justify-center rounded-2xl cursor-pointer">
                            <MagnifyingGlass size={24} color="white"/>
                        </button>
                    </div>
                </div>
                <div className="text-white grid grid-cols-3 gap-2 p-4 items-center justify-center sm:gap-4 sm:pt-4 lg:grid-cols-5 xl:grid-cols-4">
                    <button className="bg-[#050a30] w-auto h-12 flex items-center justify-center rounded-2xl cursor-pointer">
                        <Link href="/ingredientes">
                            <h2 className={`${hankenGrotesk.className} `}>Ingredientes</h2>
                        </Link>
                    </button>
                    <button className="bg-[#050a30] w-auto h-12 flex items-center justify-center rounded-2xl cursor-pointer">
                        <h2 className={`${hankenGrotesk.className} `}>Surpreenda-me</h2>
                    </button>
                    <button className="bg-[#050a30] w-auto h-12 flex items-center justify-center rounded-2xl cursor-pointer">
                        <h2 className={`${hankenGrotesk.className} `}>Categorias</h2>
                    </button>
                    <div className="rounded-2xl hidden lg:block lg:col-span-2 xl:block xl:col-span-1 xl:p-2">
                        <div className="bg-[#050a30] w-96  h-12 flex  rounded-2xl md:w-auto">
                            <input type="text" className="bg-[#050a30] w-96 h-12 pl-4 lg:w-96 flex items-center justify-center rounded-2xl text-white focus:outline-none" placeholder="Procure por uma receita"/>
                            <button className="bg-[#050a30] w-12 h-12 pr-2flex items-center justify-end  rounded-2xl cursor-pointer">
                                <MagnifyingGlass size={24} color="white"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </section>
    );
}