import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',  // Defina o protocolo, 'https' ou 'http'
        hostname: '**.tripadvisor.com', // Permite qualquer subdomínio de tripadvisor.com
      },
      {
        protocol: 'https',
        hostname: 'media-cdn.tripadvisor.com', // Permite especificamente esse domínio
      },
      {
       protocol:'https',
      hostname:'i.ytimg.com'
      },
      {
       protocol:'https',
      hostname:'i.pinimg.com'
      },
      {
       protocol:'https',
      hostname:'static.itdg.com.br'
      },
      {
       protocol:'https',
      hostname:'assets.tmecosys.cn'
      },
      {
       protocol:'https',
      hostname:'images.aws.nestle.recipes'
      },
      {
       protocol:'https',
      hostname:'sabores-new.s3.amazonaws.com'
      },
      {
       protocol:'https',
        hostname:'www.mococa.com.br'
      },
      {
       protocol:'https',
        hostname:"static.itdg.com.br"
      },
      {
       protocol:'https',
        hostname:"www.plantte.com"
      },
      {
       protocol:'https',
        hostname:"img.cybercook.com.br"
      },
      {
       protocol:'https',
        hostname:"www.themealdb.com"
      }
      
    ],
  },
};

export default nextConfig;