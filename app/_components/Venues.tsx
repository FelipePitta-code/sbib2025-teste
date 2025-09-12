import React from 'react';

// Definição dos tipos das props para clareza
interface VenueCardProps {
  university: string;
  location: string;
  auditorium: string;
  logoSrc: string;    // <-- Nova prop para a URL da logo
  mapLink: string;    // <-- Nova prop para o link do mapa
}

const VenueCard = ({ university, location, auditorium, logoSrc, mapLink }: VenueCardProps) => {
  return (
    // Usamos Tailwind CSS para criar o layout flexível
    // bg-[...] é uma forma de usar variáveis CSS com Tailwind
    <div className="bg-[var(--accent-purple)] p-6 rounded-lg flex items-center space-x-6">
      {/* Coluna da Logo */}
      <div className="flex-shrink-0">
        <img src={logoSrc} alt={`Logo da ${university}`} className="h-16 w-32 object-contain" />
      </div>

      {/* Coluna das Informações */}
      <div>
        <h3 className="text-[var(--text-light)] text-xl font-bold">{university}</h3>
        {/* O texto agora é um link clicável que abre em nova aba */}
        <a href={mapLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
          <p className="text-[var(--text-light)] mt-1">{location}</p>
          <p className="text-[var(--text-secondary)] text-sm">{auditorium}</p>
        </a>
      </div>
    </div>
  );
};


const Venues = () => {
  return (
    <section className="content-section">
      <h2 className="section-title">SEDES PRESENCIAIS</h2>
      {/* ALTERAÇÃO: Adicionadas classes para limitar a largura e centralizar */}
      <div className="venues-list space-y-6 max-w-4xl mx-auto">

        {/* Card da USP com as novas props */}
        <VenueCard
          university="USP"
          location="ESPAÇO DE EVENTOS"
          auditorium="BLOCO DIDÁTICO - USP FMRP"
          // ALTERAÇÃO: URL da logo atualizada para melhor qualidade
          logoSrc="https://upload.wikimedia.org/wikipedia/commons/4/4b/Webysther_20160310_-_Logo_USP.svg"
          // ALTERAÇÃO: Link do mapa simplificado
          mapLink="https://www.google.com/maps/place/Bloco+Did%C3%A1tico+-+FMRP+-+Subsetor+Oeste+-+11+(N-11),+Ribeir%C3%A3o+Preto+-+SP/data=!4m2!3m1!1s0x94b9bde86aec4c65:0x941ecdb53c96450f?sa=X&ved=1t:242&ictx=111"
        />

        {/* Card da UFPR com as novas props */}
        <VenueCard
          university="UFPR"
          location="AUDITÓRIO"
          auditorium="DEPARTAMENTO DE INFORMÁTICA - UFPR"
          // ALTERAÇÃO: URL da logo atualizada para melhor qualidade
          logoSrc="https://ufpr.br/wp-content/uploads/2015/11/ufpr_alta.jpg"
          // ALTERAÇÃO: Link do mapa simplificado
          mapLink="https://www.google.com/maps/place/Department+of+Informatics+-+UFPR/@-25.450457,-49.2317319,17z/data=!4m6!3m5!1s0x94dce510c13f4c49:0xdd5fbed9fe690672!8m2!3d-25.450457!4d-49.2317319!16s%2Fg%2F11b5wlppkp?entry=ttu&g_ep=EgoyMDI1MDkwOC4wIKXMDSoASAFQAw%3D%3D"
        />

        {/* Card da UFCSPA com as novas props */}
        <VenueCard
          university="UFCSPA"
          location="SALÃO NOBRE"
          auditorium="PRÉDIO 1 - UFCSPA"
          // ALTERAÇÃO: URL da logo atualizada para melhor qualidade
          logoSrc="https://simposioensinonasaude.ufcspa.edu.br/apoio/logo-ufcspa.png"
          // ALTERAÇÃO: Link do mapa simplificado
          mapLink="https://www.google.com/maps/place/R.+Sarmento+Leite,+245+-+Centro+Hist%C3%B3rico,+Porto+Alegre+-+RS,+90050-170/@-30.0313551,-51.2207829,17z/data=!4m6!3m5!1s0x951979a9f6540815:0x511d2ece84acff3b!8m2!3d-30.0313548!4d-51.2207637!16s%2Fg%2F11bw3gxf2t?entry=ttu&g_ep=EgoyMDI1MDkwOC4wIKXMDSoASAFQAw%3D%3D"
        />

      </div>
    </section>
  );
};

export default Venues;
