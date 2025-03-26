"use client"
import { useFetchThemeal } from "@/app/hook/api";
import Image from "next/image";
import { useState, useEffect } from "react";

interface Meal {
    idMeal: string;
    strMeal: string;
    strCategory: string;
    strArea: string;
    strInstructions: string;
    strMealThumb: string;
    strTags: string | null;
    strYoutube: string;
    strIngredients: { ingredient: string; measure: string }[];
    strSource: string;
}

export default function MealCard() {

    const [meal, setMeal] = useState<Meal | null>(null);
    const { data } = useFetchThemeal<{ meals: any }>("random.php");

    useEffect(() => {
        if (data?.meals && data.meals.length > 0) {
            const mealData = data.meals[0];
            const ingredients = [];

            for (let i = 1; i <= 20; i++) {
                const ingredient = mealData[`strIngredient${i}`]?.trim();
                const measure = mealData[`strMeasure${i}`]?.trim();
                
                if (ingredient && ingredient !== "") {
                    ingredients.push({ ingredient, measure });
                }
            }

            setMeal({
                idMeal: mealData.idMeal,
                strMeal: mealData.strMeal,
                strCategory: mealData.strCategory,
                strArea: mealData.strArea,
                strInstructions: mealData.strInstructions,
                strMealThumb: mealData.strMealThumb,
                strTags: mealData.strTags,
                strYoutube: mealData.strYoutube,
                strIngredients: ingredients,
                strSource: mealData.strSource
            });
        }
    }, [data]);


    console.log(meal);
    
  return (
    <section className="p-2 pb-14 overflow-hidden h-auto w-auto">
        <article className="rounded-lg shadow-lg p-2 border-2 border-gray-200 lg:flex">
            <div className="px-2 bg-white max-h-1/2 overflow-hidden flex justify-center items-center lg:w-1/2">
            {meal?.strMealThumb && (
                <Image
                    src={meal.strMealThumb}
                    alt={meal.strMeal || "Receita"}
                    className="w-full max-w-[1000px] h-auto object-cover rounded-lg shadow-lg"
                    width={700}
                    height={600}
                    quality={100}
                />
            )}
            </div>
            
            <div className="p-6 lg:w-3/4">
                {
                    meal === null ? (
                        <div className="flex justify-center items-center">
                            <div className="animate-spin rounded-full h-6 w-6 border-t-4 border-black"></div>
                        </div>
                    ) : (
                        <span></span>
                    )
                }
                <h2 className="text-2xl lg:text-4xl text-center font-bold text-gray-800">{meal?.strMeal}</h2>
                <p className="text-sm lg:text-lg text-center text-gray-600">{meal?.strCategory} • {meal?.strArea}</p>
                <ul className="flex justify-center mt-4 flex-wrap">
                    {meal?.strTags && (
                        meal?.strTags.split(',').map((tag, index) => (
                            <li key={index} className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                                {tag}
                            </li>
                        )))
                    }
                </ul>
                <ul className="mt-3 text-gray-700 text-sm lg:text-lg">
                    {meal?.strIngredients.map((item, index) => (
                        <li key={index} className="flex justify-between border-b py-2">
                        <span>{item.ingredient}</span>
                        <span className="font-semibold">{item.measure}</span>
                        </li>
                    ))}
                </ul>  
                <p className="mt-4  text-gray-700 text-sm line-clamp-3 lg:line-clamp-none lg:text-lg">{meal?.strInstructions}</p>

                <div className="max-w-screen h-20 items-center mt-4 overflow-hidden hidden lg:flex lg:justify-center gap-12">
                    <div>
                        <a href={meal?.strSource} className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-4 xl:px-10 xl:py-6 rounded-lg cursor-pointer text-nowrap">
                            assistir no youtube
                        </a>
                    </div>
                    <div>
                        <a href={meal?.strSource} className="bg-gray-800 hover:bg-gray-600 text-white text-sm px-3 py-4 xl:px-10 xl:py-6 rounded-lg cursor-pointer text-nowrap">
                            Receita completa
                        </a>
                    </div>
                </div>
               
            </div>
                
            <div className="flex justify-around p-6 gap-2 overflow-hidden lg:hidden">
                <div>
                    <a href={meal?.strSource} className="bg-red-500 hover:bg-red-600 text-white text-sm py-3 px-6 md:px-20 lg:px-28 rounded-lg cursor-pointer text-nowrap">
                        assistir no youtube
                    </a>
                </div>
                <div>
                    <a href={meal?.strSource} className="bg-gray-800 hover:bg-gray-600 text-white text-sm py-3 px-6 md:px-20  lg:px-28 rounded-lg cursor-pointer text-nowrap">
                        Receita completa
                    </a>
                </div>
            </div>
        </article>
    </section>
  );
}
