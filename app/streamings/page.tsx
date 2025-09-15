import React from 'react';
// Ícones profissionais para substituir os emojis
import { PlayCircle, Clock, CheckCircle, Smartphone, MessageSquare, CalendarDays } from 'lucide-react';

// --- Interface para definir a estrutura de cada transmissão ---
interface Stream {
  id: number;
  title: string;
  status: 'live' | 'upcoming' | 'finished'; // Status dinâmicos
  description: string;
  streamLink?: string; // Link opcional, só existe se estiver ao vivo
}

// --- DADOS DAS TRANSMISSÕES (fácil de atualizar) ---
const streamsData: Stream[] = [
  { id: 1, title: "Abertura - USP", status: 'live', description: "Abertura oficial da XXIII SBIB.", streamLink: "#" },
  { id: 2, title: "Abertura - UFPR", status: 'upcoming', description: "Abertura oficial da XXIII SBIB.", streamLink: "#" },
  { id: 3, title: "Abertura - UFCSPA", status: 'upcoming', description: "Abertura oficial da XXIII SBIB.", streamLink: "#" },
];

// --- Componente do Card de Streaming (inteligente e reutilizável) ---
const StreamingCard = ({ stream }: { stream: Stream }) => {
  const statusStyles = {
    live: {
      badge: "bg-red-500/20 text-red-400 border-red-500/30 animate-pulse",
      text: "AO VIVO",
      icon: <PlayCircle className="h-5 w-5 mr-2" />,
      button: "bg-[#c73db7] hover:bg-[#8f3985] text-white",
    },
    upcoming: {
      badge: "bg-gray-500/20 text-gray-400 border-gray-500/30",
      text: "EM BREVE",
      icon: <Clock className="h-5 w-5 mr-2" />,
      button: "bg-gray-700 text-gray-400 cursor-not-allowed",
    },
    finished: {
      badge: "bg-green-500/20 text-green-400 border-green-500/30",
      text: "ENCERRADO",
      icon: <CheckCircle className="h-5 w-5 mr-2" />,
      button: "bg-gray-800 text-gray-500 cursor-not-allowed",
    }
  };

  const currentStatus = statusStyles[stream.status];
  const CardTag = stream.status === 'live' && stream.streamLink ? 'a' : 'div';

  return (

    <div className="h-full flex bg-[#1f4b63]/40 rounded-xl border border-[#2b6670]/50 shadow-lg transition-all duration-300 hover:border-[#8c7ff5]/60 hover:scale-[1.03]">

      <div className="p-6 h-full flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-white">{stream.title}</h3>
          <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${currentStatus.badge}`}>
            {currentStatus.text}
          </span>
        </div>

        <p className="text-gray-400 mb-6 flex-grow">{stream.description}</p>
        
        <CardTag 
          href={stream.streamLink}
          className={`w-full flex items-center justify-center p-3 rounded-lg font-semibold transition-colors ${currentStatus.button}`}
        >
          {currentStatus.icon}
          {stream.status === 'live' ? 'Assistir Agora' : currentStatus.text}
        </CardTag>
      </div>
    </div>
  );
};

// --- Componente Principal da Página ---
const StreamingsPage = () => {
  // Ordena as transmissões para mostrar AO VIVO > EM BREVE > ENCERRADO
  const sortedStreams = [...streamsData].sort((a, b) => {
    const statusOrder = { live: 0, upcoming: 1, finished: 2 };
    return statusOrder[a.status] - statusOrder[b.status];
  });

  return (
    <div className="bg-gradient-to-b from-[#193f55] to-[#112d3d]">
      {/* Hero Section */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-[#8c7ff5] sm:text-5xl md:text-6xl">
            Transmissões ao Vivo
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300">
            Acompanhe as palestras e atividades da SBIB em tempo real. Os links são atualizados conforme a programação oficial.
          </p>
        </div>
      </section>

      {/* Seção Principal de Streamings */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedStreams.map((stream) => (
              <StreamingCard key={stream.id} stream={stream} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Seção de Informações Adicionais */}
      <section className="py-20 bg-[#193f55]/50">
          <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-white mb-12">Como Acessar</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  <div className="bg-[#2b6670]/30 p-8 rounded-xl">
                      <CalendarDays className="h-10 w-10 mx-auto text-[#8c7ff5] mb-4"/>
                      <h4 className="text-xl font-semibold text-white mb-2">Horários</h4>
                      <p className="text-gray-400">Consulte o cronograma oficial para saber os horários de cada atividade transmitida.</p>
                  </div>
                  <div className="bg-[#2b6670]/30 p-8 rounded-xl">
                      <Smartphone className="h-10 w-10 mx-auto text-[#8c7ff5] mb-4"/>
                      <h4 className="text-xl font-semibold text-white mb-2">Dispositivos</h4>
                      <p className="text-gray-400">Assista em qualquer dispositivo conectado à internet: computador, tablet ou celular.</p>
                  </div>
                  <div className="bg-[#2b6670]/30 p-8 rounded-xl">
                      <MessageSquare className="h-10 w-10 mx-auto text-[#8c7ff5] mb-4"/>
                      <h4 className="text-xl font-semibold text-white mb-2">Interação</h4>
                      <p className="text-gray-400">Participe com perguntas e comentários através do chat da plataforma de transmissão.</p>
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
};

export default StreamingsPage;