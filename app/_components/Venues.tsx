import React from 'react';
import Image from 'next/image';
import { MapPin } from 'lucide-react';

// --- Dados das Sedes (sem alterações) ---
const venuesData = [
  {
    university: "USP",
    location: "Espaço de Eventos",
    auditorium: "Bloco Didático - USP FMRP",
    logoSrc: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Webysther_20160310_-_Logo_USP.svg",
    mapLink: "https://www.google.com/maps/place/Bloco+Did%C3%A1tico+-+FMRP+-+Subsetor+Oeste+-+11+(N-11),+Ribeir%C3%A3o+Preto+-+SP/@-21.1639663,-47.8527869,17z/data=!3m1!4b1!4m6!3m5!1s0x94b9bde86aec4c65:0x941ecdb53c96450f!8m2!3d-21.1639663!4d-47.8527869!16s%2Fg%2F1ptwshcgd?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    university: "UFPR",
    location: "Auditório",
    auditorium: "Departamento de Informática - UFPR",
    logoSrc: "https://ufpr.br/wp-content/uploads/2015/11/ufpr_alta.jpg",
    mapLink: "https://www.google.com/maps/place/Departamento+de+Inform%C3%A1tica+-+UFPR/@-25.450457,-49.2317319,17z/data=!4m6!3m5!1s0x94dce510c13f4c49:0xdd5fbed9fe690672!8m2!3d-25.450457!4d-49.2317319!16s%2Fg%2F11b5wlppkp?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    university: "UFCSPA",
    location: "Salão Nobre",
    auditorium: "Prédio 1 - UFCSPA",
    logoSrc: "https://simposioensinonasaude.ufcspa.edu.br/apoio/logo-ufcspa.png",
    mapLink: "https://www.google.com/maps/place/R.+Sarmento+Leite,+245+-+Centro+Hist%C3%B3rico,+Porto+Alegre+-+RS,+90050-170/@-30.0313551,-51.2207829,17z/data=!4m6!3m5!1s0x951979a9f6540815:0x511d2ece84acff3b!8m2!3d-30.0313548!4d-51.2207637!16s%2Fg%2F11bw3gxf2t?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D",
  },
];

// --- Componente do Card Individual (com a correção de alinhamento) ---
interface VenueCardProps {
  university: string;
  location: string;
  auditorium: string;
  logoSrc: string;
  mapLink: string;
}

const VenueCard = ({ university, location, auditorium, logoSrc, mapLink }: VenueCardProps) => {
  return (
    <div className="
      bg-white dark:bg-gray-800/50 rounded-xl shadow-md
      transition-all duration-300
      hover:shadow-xl hover:scale-[1.03]
      flex flex-col h-full
    ">
      {/* MODIFICAÇÃO AQUI: Altura fixa e centralização para o logo.
        - h-32: Define uma altura fixa para esta área (você pode ajustar se precisar).
        - flex, items-center, justify-center: Centraliza o logo dentro desta área.
      */}
      <div className="h-32 flex items-center justify-center p-6 border-b border-gray-200 dark:border-gray-700">
        <Image
          src={logoSrc}
          alt={`Logo da ${university}`}
          width={150}
          height={60}
          className="object-contain" // Removido mx-auto pois o flex container já centraliza
        />
      </div>

      {/* Conteúdo de Texto (sem alterações) */}
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{location}</h3>
        <p className="text-gray-600 dark:text-gray-300 mt-1">{university}</p>
        <p className="text-gray-500 dark:text-gray-400 text-sm">{auditorium}</p>
      </div>
      
      {/* Botão de Ação (sem alterações) */}
      <div className="p-6 pt-0">
        <a
          href={mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center justify-center gap-2 w-full
            bg-purple-600 text-white font-semibold
            py-3 px-4 rounded-lg
            transition-colors duration-300
            hover:bg-purple-700
            focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
          "
        >
          <MapPin size={18} />
          Ver no Mapa
        </a>
      </div>
    </div>
  );
};

// --- Componente Principal da Seção (sem alterações) ---
const Venues = () => {
  return (
    <section className="bg-gray-200 dark:bg-gray-900 py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Sedes Presenciais
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            O evento acontecerá simultaneamente nas três universidades.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {venuesData.map((venue) => (
            <VenueCard key={venue.university} {...venue} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Venues;