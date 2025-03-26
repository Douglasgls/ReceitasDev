"use client"
import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr';

import { useRouter } from 'next/navigation';
import { FaHome } from "react-icons/fa";

export default function Header() {
    const router = useRouter();

    const handleClick = () => {
        if (window.location.pathname === "/random") {
            window.location.reload(); // Se já estiver na página /random, recarrega
        } else {
            router.push("/random"); // Se não estiver, redireciona
        }
    };
    return (
       <section className="overflow-hidden relative">
        <div >
            <div className="bg-white opacity-90 h-auto pt-4 sm:py-4">
                <div className="flex items-center gap-4 justify-center rounded-2xl lg:hidden xl:hidden">
                    <div className="w-12 h-12 px-6  bg-[#050a30] text-white rounded-2xl cursor-pointer flex items-center justify-center">
                        <a href="/" className="text-white text-2xl">
                            <FaHome />
                        </a>
                    </div>
                    <div className="bg-[#050a30] w-72 h-12 flex items-center justify-center rounded-2xl md:w-auto">
                        <input type="text" className="bg-[#050a30] h-12 pl-4 flex items-center justify-center rounded-2xl text-white focus:outline-none" placeholder="Procure por uma receita"/>
                        <button className="bg-[#050a30] w-12 h-12 flex items-center justify-center rounded-2xl cursor-pointer">
                            <MagnifyingGlass size={24} color="white"/>
                        </button>
                        
                    </div>
                  
                </div>
                <div className="text-white flex items-center justify-center sm:grid-cols-3 lg:grid-cols-5 gap-2 p-4 sm:gap-4 sm:pt-4 xl:grid-cols-5">
                    <div className="hidden lg:flex xl:block col-span-1 items-center">
                        <a href="/" className="w-12 h-12 flex items-center justify-center bg-[#050a30] text-white rounded-2xl cursor-pointer">
                            <FaHome className="text-2xl" />
                        </a>
                    </div>
                    <div className="col-span-2 lg:col-span-3 flex justify-center items-center gap-2">
                        <a href='/ingredientes' className="bg-[#050a30] w-auto h-12 flex items-center justify-center rounded-2xl cursor-pointer px-4">
                            Ingredientes
                        </a>
                        <a href='/random' className="bg-[#050a30] w-auto h-12 flex items-center justify-center rounded-2xl cursor-pointer px-4 text-nowrap">
                            Surpreenda-me
                        </a>
                        <a href='/categorias' className="bg-[#050a30] w-auto h-12 flex items-center justify-center rounded-2xl cursor-pointer px-4">
                            Categorias
                        </a>
                        <div className="hidden lg:block col-span-1">
                            <div className="bg-[#050a30] w-72  h-12 flex rounded-2xl">
                                <input type="text" className="bg-[#050a30] w-full h-12 pl-4 text-white focus:outline-none rounded-2xl" placeholder="Procure por uma receita"/>
                                <button className="w-12 h-12 flex items-center justify-center rounded-2xl cursor-pointer">
                                    <MagnifyingGlass size={24} color="white"/>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
       </section>
    );
}