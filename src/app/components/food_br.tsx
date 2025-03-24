"use client";

import Image from "next/image";
import FotoCozinha from "../../../public/FotoCozinha.webp";
import { Barlow } from 'next/font/google'
import Autoplay from "embla-carousel-autoplay"
import BandeiraBr from "../../../public/brFoods/bandeira-do-brasil.png";
import { Button } from "@/components/ui/button"
import { useFetchReceitasBr } from "../hook/api";



import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import {
    Card,
    CardContent,
  } from "@/components/ui/card"


interface nomesIngrediente {
    id: number;
    receita_id: number;
    nomesIngrediente: string;
    created_at: string;
}

interface IngredientesBase {
    id: number;
    receita_id: number;
    nomesIngrediente: nomesIngrediente;
    created_at: string;
}

interface Receitas {
    id: number;
    receita: string;
    ingredientes: string;
    modoPreparo: string;
    link_imagem: string;
    tipo: string;
    created_at: string;
    IngredientesBase:IngredientesBase;
    
}

const hankenGrotesk = Barlow({
    weight: ['500', '500'],
    subsets: ['latin'],    
})

export default function Body() {
    const { data, isLoading  } = useFetchReceitasBr<Receitas[]>("todas") 
    const receitasBR = data && data.length > 0 ? data : null;
    if(receitasBR != null ){
        receitasBR.forEach(receita => {
            if(receita.id == 1 ){
                receita.link_imagem = "https://sabores-new.s3.amazonaws.com/public/2024/11/frango-com-legumes-ao-molho-agridoce.jpg"
            }
            if(receita.id == 3){
                receita.link_imagem = "https://www.mococa.com.br/wp-content/uploads/2022/02/fit-5.png"
            }
            if(receita.id == 4){
                receita.link_imagem = "https://img.cybercook.com.br/receitas/369/quiche-de-espinafre-com-ricota-1.jpeg"
            }
            if(receita.id == 2){
                receita.link_imagem = "https://static.itdg.com.br/images/auto-auto/ad323d8ded95448412ed08bca89f8e4b/salada-grega.jpg"
            }
            if(receita.id == 6){
                receita.link_imagem = "https://www.plantte.com/wp-content/uploads/2020/09/curry-de-gr%C3%A3o-de-bico-4.jpg"
            }
        });
    }

    return(
        <section className="overflow-hidden relative bg-[#050a30]">
            <div>
                <div className="flex justify-center items-center">
                    <Image src={FotoCozinha} alt="logo" quality={100} priority className="max-w-full h-auto opacity-68 xl:max-h-[75vh]"/>
                    <div className="absolute">
                        <h1 className={`${hankenGrotesk.className} text-4xl font-bold text-[#cae8ff] sm:text-6xl lg:text-7xl xl:text-8xl xl:pb-32`}>Receitas no Capricho!</h1>
                    </div>
                </div>

                <div className="flex items-center text-center justify-center p-4 pt-10">
                    <h1 className="text-4xl text-white font-sans lg:text-6xl">Culinária Brasileira</h1>
                </div>
                {
                    isLoading ? (
                        <div className="flex justify-center items-center ">
                            <div className="animate-spin rounded-full h-6 w-6 border-t-4 border-white"></div>
                        </div>
                    ):(
                        <div className="w-screen h-auto p-12 ">                    
                            <div className="flex items-center justify-center h-full sm">
                            <Carousel
                                opts={{ loop: true}}
                                plugins={[
                                    Autoplay({
                                    delay: 2000,
                                    }),
                                ]}
                                className="w-full px-4 sm:px-0"
                                >
                                <CarouselContent>
                                    {  receitasBR && receitasBR.map((receita) => (
                                    <CarouselItem key={receita.id} className="sm:basis-1/2 md:basis-1/2 xl:basis-1/4 xl:px-4">
                                        <div className="w-full h-full">
                                        <Card className="bg-[#f4f6fc] text-[#050a30] h-full">
                                            <div>
                                                <div className="w-full min-h-28">
                                                    <Image 
                                                        src={receita.link_imagem} 
                                                        className="w-full rounded-t-4xl h-64 object-cover"
                                                        alt="imagem da receita" 
                                                        width={400} 
                                                        height={300} 
                                                        priority 
                                                        />
                                                </div>
                                                <div className="min-h-full">
                                                    <div className="text-center py-2">
                                                        <div className="flex items-center justify-center ">
                                                            <b className="text-sm">
                                                                Gostinho brasileiro 
                                                            </b>
                                                            <Image 
                                                                src={BandeiraBr}
                                                                className="max-w-9 rounded-t-xl max-h-10 p-1.5"
                                                                alt="imagem da receita" 
                                                                width={60} 
                                                                height={60} 
                                                                priority 
                                                                />
                                                        </div>
                                                        <h1 className="text-2xl font-semibold py-2">{receita.receita}</h1>
                                                        <div className="pt-2">
                                                            <Button variant="default" className="bg-[#050a30] text-md text-white py-2  cursor-pointer">Vamos cozinhar ?</Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                        </div>
                                    </CarouselItem>
                                    ))}
                                </CarouselContent>
                            </Carousel>
                            </div>
                        </div>
                    )
                }

                    </div>
                <div>
            </div>
        </section>
    )
}