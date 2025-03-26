"use client"

import { useParams } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useFetchReceitasBr } from "@/app/hook/api";

interface Receita {
    id: number;
    receita: string;
    ingredientes: string;
    modo_preparo: string;
    link_imagem: string;
    tipo: string;
    IngredientesBase: { nomesIngrediente: string[] }[];
  }
  

  export default function ReceitasBR() {
    const { id } = useParams();
    const { data: receita, isLoading } = useFetchReceitasBr<Receita>(`${id}`);
    console.log(receita)

    if (isLoading) return <p className="text-center p-5">Carregando receita...</p>;
    if (!receita) return <p className="text-center p-5">Receita não encontrada.</p>;

   switch (receita.id){
    case 1:
        receita.link_imagem = 'https://sabores-new.s3.amazonaws.com/public/2024/11/frango-com-legumes-ao-molho-agridoce.jpg'
        break;
    case 2:
        receita.link_imagem = 'https://static.itdg.com.br/images/auto-auto/ad323d8ded95448412ed08bca89f8e4b/salada-grega.jpg'
        break;
    case 3:
        receita.link_imagem = 'https://www.mococa.com.br/wp-content/uploads/2022/02/fit-5.png'
        break;
    case 4:
        receita.link_imagem = 'https://img.cybercook.com.br/receitas/369/quiche-de-espinafre-com-ricota-1.jpeg'
        break;
    case 6:
        receita.link_imagem = 'https://www.plantte.com/wp-content/uploads/2020/09/curry-de-gr%C3%A3o-de-bico-4.jpg'
        break;
    default:
        break;
   }

  
    return (
        <section className="p-4 lg:flex lg:gap-8 lg:max-w-4xl mx-auto">
        {/* Imagem */}
        <div className="lg:w-1/2">
          <Image
            src={receita.link_imagem}
            alt={receita.receita}
            width={500}
            height={400}
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
  
        {/* Conteúdo */}
        <div className="lg:w-1/2">
            <div className="pt-6 gap-4 text-center text-gray-700 flex flex-col justify-center items-center lg:text-lg">
                <h1 className="text-3xl text-center font-bold text-gray-800">{receita.receita}</h1>
                <p className="text-lg bg-gray-200 rounded-full flex justify-center items-center px-3 py-1 text-center font-semibold text-gray-700 mr-2">{receita.tipo}</p>
            </div>
  
          {/* Ingredientes */}
          <h2 className="text-xl font-semibold p-2">Ingredientes</h2>
          <ul className="list-disc ml-6 text-gray-700">
            {receita.IngredientesBase[0]?.nomesIngrediente.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
  
          {/* Modo de Preparo */}
          <h2 className="text-xl font-semibold mt-4">Modo de Preparo</h2>
          <ul className="list-decimal ml-6 text-gray-700">
            {receita.modo_preparo
            .split(/\d+\./) // Divide por número seguido de ponto
            .filter(Boolean) // Remove elementos vazios
            .map((etapa, index) => (
                <li key={index} className="leading-relaxed">
                {etapa.trim()}
                </li>
            ))}
        </ul>
        </div>
      </section>
    );
  }