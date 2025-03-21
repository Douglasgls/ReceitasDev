"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useFetchThemeal } from "../hook/api";
import { useState, useEffect } from "react";

const foodVeganDescriptions = [
    {
        strMeal: "Roast fennel and aubergine paella",
        description: "Uma paella aromática com erva-doce assada e berinjela, trazendo um toque sofisticado e cheio de sabor mediterrâneo."
    },
    {
        strMeal: "Vegan Chocolate Cake",
        description: "Um bolo de chocolate incrivelmente macio e úmido, sem ingredientes de origem animal, mas com todo o sabor que você ama."
    },
    {
        strMeal: "Vegan Lasagna",
        description: "Uma lasanha deliciosa e 100% vegetal, com camadas de molho rico, legumes saborosos e uma textura irresistível."
    }
];

interface FoodVegan {
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
}

export default function FoodVegan() {
    const { data } = useFetchThemeal<{ meals: FoodVegan[] }>("filter.php?c=vegan");
    const [foodVegan, setFoodVegan] = useState<FoodVegan[]>([]);

    useEffect(() => {
        if (data?.meals) {
            setFoodVegan(data.meals);
        }
    }, [data]);

    
    return (
        <section className="relative bg-[#cbddd1] overflow-hidden min-h-screen">
               <article className="w-full relative">
                    <div className="flex flex-col items-center justify-center min-h-full p-6 relative xl:p-32">
                        <div>
                            <h1 className="text-4xl pb-12 text-center font-sans text-[#365b6d] sm:text-4xl lg:text-6xl">Culinária Vegana</h1>
                        </div>
                        <div className="relative grid gap-6 sm:px-24 md:px-32 lg:grid-cols-3 lg:px-2">
                        {foodVegan.map((meal:any) => {
                            const descriptionObj = foodVeganDescriptions.find(desc => desc.strMeal === meal.strMeal);
                                return (
                                    <div className="bg-[#365b6d] rounded-4xl min-h-[500px] grid grid-flow-col relative" key={meal.idMeal}>
                                        <div className="flex flex-col-reverse h-full text-center items-center relative pb-5">
                                            <Button variant="default" className="bg-[#289dd2] text-md text-white cursor-pointer w-auto ">
                                                Vamos cozinhar ?
                                            </Button>
                                            <p className="text-sm text-white p-2 font-sans">
                                                {descriptionObj ? descriptionObj.description : "Descrição não disponível."}
                                            </p>
                                            <h1 className="text-2xl text-white w-auto h-auto font-semibold">
                                                {meal.strMeal}
                                            </h1>
                                            <Image
                                                src={meal.strMealThumb}
                                                width={300}
                                                height={400}
                                                alt="foto comida"
                                                className="absolute top-0 min-w-full h-[300px] object-cover rounded-t-4xl"
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </article>
        </section>
    );
}