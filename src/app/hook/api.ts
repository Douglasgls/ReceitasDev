// "use client"

import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL_LOCAL = "https://api-receitas-pi.vercel.app/receitas";
const BASE_URL_EXTERNAL = "https://www.themealdb.com/api/json/v1/1/";

export  function useFetchReceitasBr<T = unknown >(endpoint:string){ 
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() =>  {
        axios.get(BASE_URL_LOCAL+ "/" + endpoint,{
            adapter: "fetch",
            fetchOptions: { cache: "force-cache" },
        })
        .then(response => {
            setData(response.data);
        })
        .finally(() => {
            setIsLoading(false);
        })
    },[])

    return { data, isLoading }
}

export function useFetchThemeal<T = unknown >(endpoint:string){ 
    const [data, setData] = useState<T | null>(null);
    useEffect(() =>  {
        axios.get(BASE_URL_EXTERNAL + endpoint)
        .then(response => {
            setData(response.data);
        })
    },[])

    return { data }
}



