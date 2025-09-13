import React from 'react';
import EditionPage from '@/app/_components/EditionPage';

export default function Page2021() {
  return (
    <EditionPage
      year={2021}
      bannerSrc="/img.past/2021-banner.jpg"
      photoSrc="/img.past/2021-photo.jpg"
      youtubePlaylist="https://youtube.com/playlist?list=PL2021_SBIB"
      committee="Comissão Organizadora: Ana Powarchuk Xavier, Andréia Martins Ferreira, Bianca Siega Bernardi, Carlos Eduardo Capelini Eli Lopes, Caroline Bernich, Debora Daniela Wendland Amorim, Felipe Limão Lopes de Almeida, Gabriela Toledo da Costa, Guilherme Pereira Menezes, Laura Teresa Ricoboni, Leticia Fontanelli Straube de Souza, Mariana Aya Suzuki Uchida, Rafaela Laura Ribeiro, Thiago Figueiredo e Vitória Torrescasana Teixeira."
      acknowledgements="Agradecimentos: Rocket Studio, VarStation, Sabin, InfoBioJr., InnovaSpace, Carefy e Kidopi."  
    />
  );
}


