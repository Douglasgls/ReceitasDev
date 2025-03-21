"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useFetchThemeal } from "../hook/api";
import { useState, useEffect } from "react";

const foodBreakfastDescriptions = [
    {
        strMeal: "Bread omelette",
        description: "Uma combinação clássica e rápida para o café da manhã, com fatias de pão mergulhadas em ovos temperados e fritas até ficarem douradas e saborosas."
    },
    {
        strMeal: "Breakfast Potatoes",
        description: "Batatas douradas e crocantes, temperadas com especiarias e ervas, perfeitas para acompanhar ovos e bacon no café da manhã."
    },
    {
        strMeal: "English Breakfast",
        description: "Um café da manhã tradicional britânico, repleto de ovos fritos, bacon, linguiça, cogumelos, tomates grelhados e feijão cozido."
    },
    {
        strMeal: "Fruit and Cream Cheese Breakfast Pastries",
        description: "Massas folhadas recheadas com cream cheese cremoso e frutas frescas, trazendo um equilíbrio perfeito entre doçura e textura crocante."
    },
    {
        strMeal: "Full English Breakfast",
        description: "Uma versão completa do café da manhã inglês, com ovos, bacon, linguiça, feijão, cogumelos, tomate grelhado e pão torrado."
    },
    {
        strMeal: "Home-made Mandazi",
        description: "Bolinho frito originário da África Oriental, macio por dentro e crocante por fora, perfeito para acompanhar café ou chá."
    },
    {
        strMeal: "Salmon Eggs Eggs Benedict",
        description: "Muffin inglês tostado coberto com salmão defumado, ovo pochê perfeito e um cremoso molho holandês, ideal para um brunch sofisticado."
    },
    {
        strMeal: "Smoked Haddock Kedgeree",
        description: "Prato britânico-indiano que combina peixe defumado, arroz temperado, ervas frescas e ovos cozidos, resultando em um sabor levemente picante e reconfortante."
    }
];

interface breakfast {
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
}

export default function FoodBreakfast() {
    const { data } = useFetchThemeal<{ meals: breakfast[] }>("filter.php?c=breakfast");
    const [FoodBreakfast, setFoodBreakfast] = useState<breakfast[]>([]);

    console.log(data)

    useEffect(() => {
        if (data?.meals) {
            setFoodBreakfast(data.meals);
        }
    }, [data]);

    return (
    <section className="relative bg-[#d36a1a] overflow-hidden min-h-screen">
            <article className="w-full relative">
                <div className="flex flex-col items-center justify-center min-h-full p-6 relative xl:p-32">
                    <div>
                        <h1 className="text-4xl pb-12 text-center font-sans font-bold text-[#f9f7dc] sm:text-4xl lg:text-6xl">Café Da Manhã</h1>
                    </div>

                    <div className="relative grid gap-6 sm:px-12 sm:grid-cols-2 md:px-32 lg:grid-cols-3 lg:px-2">
                        {FoodBreakfast.map((meal:any) => {
                            const descriptionObj = foodBreakfastDescriptions.find(desc => desc.strMeal === meal.strMeal);
                                return (
                                    <div className="bg-[#f9f7dc] rounded-4xl relative min-h-96 overflow-hidden flex flex-col-reverse" key={meal.idMeal}>
                                        <div className="flex flex-col-reverse flex-grow text-center items-center p-4 sm:p-5 lg:p-6">
                                            <div className="p-2">
                                                <Button variant="default" className="bg-[#763c00] text-md text-white cursor-pointer w-auto ">
                                                    Vamos cozinhar ?
                                                </Button>
                                            </div>
                                            <div className="p-2">
                                                <p className="text-sm text-[#763c00] font-sans lg:max-h-20 overflow-hidden">
                                                    {descriptionObj ? descriptionObj.description : "Descrição não disponível."}
                                                </p>
                                            </div>
                                            <h1 className="text-2xl text-[#763c00] font-semibold ">
                                                {meal.strMeal}
                                            </h1>
                                       
                                        </div>
                                        <div className="relative">
                                            <Image
                                                src={meal.strMealThumb}
                                                alt={meal.strMeal}
                                                className="w-full h-52 object-cover"
                                                width={500}
                                                height={500}
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