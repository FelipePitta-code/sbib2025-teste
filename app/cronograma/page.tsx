'use client';
import React, { useState, useMemo } from 'react';
import { University, Tv, Users, Presentation } from 'lucide-react'; // Ícones para um toque extra

// ============================================================================
// 1. ESTRUTURA DE DADOS REFEITA (ORGANIZADA POR LOCAL)
// ============================================================================
const allSchedules = {
  usp: [
    { day: "22 Seg", date: "22/09 - E-Saúde", events: [
      { time: "14:00-14:15", title: "ABERTURA SBIB - DIA 1", type: "palestra" },
      { time: "14:20-15:00", title: "COMO CONSOLIDAR UMA CARREIRA NA ÁREA DA SAÚDE E TECNOLOGIA", type: "palestra" },
      { time: "15:00-15:20", title: "DINÂMICA 1", type: "mesa" },
      { time: "15:20-16:00", title: "GESTÃO EM SAÚDE - PELA VISÃO DE UMA EX SECRETÁRIA DE SAÚDE", type: "palestra" },
      { time: "16:00-16:40", title: "PANORAMA GERAL DA TRASFORMAÇÃO TECNOLÓGICA NA SAÚDE PÚBLICA", type: "palestra" },
      { time: "16:40-17:00", title: "DINÂMICA 2", type: "mesa" },
    ]},
    { day: "23 Ter", date: "23/09 - Imagens Médicas", events: [
      { time: "14:00-14:15", title: "ABERTURA SBIB - DIA 2", type: "palestra" },
      { time: "14:20-15:00", title: "INICIATIVAS COM IA", type: "palestra" },
      { time: "15:00-15:20", title: "DINÂMICA 1", type: "mesa" },
      { time: "15:20-16:00", title: "GESTÃO EM SAÚDE - PELA VISÃO DE UMA EX SECRETÁRIA DE SAÚDE", type: "palestra" },
      { time: "16:00-16:40", title: "PANORAMA GERAL DA TRASFORMAÇÃO TECNOLÓGICA NA SAÚDE PÚBLICA", type: "palestra" },
      { time: "16:40-17:00", title: "DINÂMICA 2", type: "mesa" },
    ]},
  ],
  ufpr: [
    { day: "26 Ter", date: "26/09", events: [
      { time: "09:00-10:00", title: "PROCESSAMENTO DE IMAGENS MÉDICAS", type: "palestra" },
      { time: "10:30-12:00", title: "MESA REDONDA: FUTURO DA INFORMÁTICA BIOMÉDICA", type: "mesa" },
      { time: "14:00-16:00", title: "WORKSHOP: ANÁLISE DE DADOS GENÔMICOS", type: "minicurso" }
    ]},
    { day: "29 Sex", date: "29/09", events: [
      { time: "14:00-17:00", title: "ANÁLISE DE DADOS COM PYTHON", type: "minicurso" }
    ]}
  ],
  ufcspa: [
    { day: "28 Qui", date: "28/09", events: [
      { time: "09:00-10:00", title: "BIOMECÂNICA E ENGENHARIA DE TECIDOS", type: "palestra" },
      { time: "10:30-12:00", title: "E-SAÚDE E PRONTUÁRIOS ELETRÔNICOS", type: "palestra" },
      { time: "14:00-16:00", title: "WORKSHOP: DESENVOLVIMENTO DE APPS MÉDICAS", type: "minicurso" }
    ]},
    { day: "29 Sex", date: "29/09", events: [
      { time: "18:00-20:00", title: "VISUALIZAÇÃO DE DADOS MÉDICOS", type: "minicurso" }
    ]}
  ],
  online: [
    { day: "25 Seg", date: "25/09", events: [
      { time: "09:00-10:00", title: "ANÁLISE DE SINAIS FISIOLÓGICOS MULTIMO...", type: "palestra" },
      { time: "10:00-11:00", title: "INTELIGÊNCIA ARTIFICIAL EM SAÚDE", type: "palestra" },
      { time: "14:00-15:00", title: "BIOINFORMÁTICA E MEDICINA PERSONALIZADA", type: "palestra" }
    ]}
  ]
};

// --- Configuração das abas e tipos de evento ---
const tabs = [
  { id: 'all', label: 'Todos', icon: Presentation },
  { id: 'usp', label: 'USP', icon: University },
  { id: "ufpr", label: "UFPR", icon: University },
  { id: 'ufcspa', label: 'UFCSPA', icon: University },
  { id: 'online', label: 'Online', icon: Tv }
];

const eventTypes = {
  palestra: { label: 'Palestra', color: 'bg-[#c73db7]', borderColor: 'border-l-4 border-[#c73db7]' },
  mesa: { label: 'Mesa Redonda', color: 'bg-[#56bb8c]', borderColor: 'border-l-4 border-[#56bb8c]' },
  minicurso: { label: 'Minicurso', color: 'bg-[#8c7ff5]', borderColor: 'border-l-4 border-[#8c7ff5]' }
};

// ============================================================================
// 2. COMPONENTE PRINCIPAL DA PÁGINA DE CRONOGRAMA
// ============================================================================
const SchedulePage = () => {
  const [activeTab, setActiveTab] = useState('all');

  // useMemo otimiza a performance, calculando o cronograma a ser exibido apenas quando a aba ativa muda
  const scheduleToDisplay = useMemo(() => {
    if (activeTab === 'all') {
      const combinedSchedule = {};
      // Combina todos os eventos de todos os locais
      Object.entries(allSchedules).forEach(([location, schedule]) => {
        schedule.forEach(day => {
          if (!combinedSchedule[day.day]) {
            combinedSchedule[day.day] = { ...day, events: [] };
          }
          const eventsWithLocation = day.events.map(event => ({ ...event, location }));
          combinedSchedule[day.day].events.push(...eventsWithLocation);
        });
      });
      return Object.values(combinedSchedule);
    }
    return allSchedules[activeTab] || [];
  }, [activeTab]);

  return (
    <div className="bg-gradient-to-b from-[#193f55] to-[#112d3d] min-h-screen text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-[#8c7ff5] sm:text-5xl">Cronograma do Evento</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
            Filtre por localidade para visualizar a programação desejada.
          </p>
        </div>

        {/* --- Abas de Navegação --- */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 font-semibold rounded-full transition-all duration-300
                ${activeTab === tab.id 
                  ? 'bg-[#c73db7] text-white shadow-lg' 
                  : 'bg-[#2b6670]/50 text-gray-300 hover:bg-[#2b6670]'
                }`}
            >
              <tab.icon size={18} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* --- Grid do Cronograma --- */}
        <div className="space-y-12">
          {scheduleToDisplay.length > 0 ? (
            scheduleToDisplay.map(day => (
              <div key={day.day}>
                <div className="flex items-baseline gap-4 mb-6">
                  <h2 className="text-3xl font-bold text-white">{day.day}</h2>
                  <span className="text-xl font-medium text-[#8c7ff5]">{day.date}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {day.events.map((event, index) => (
                    <div key={index} className={`bg-[#1f4b63]/50 rounded-lg p-5 ${eventTypes[event.type]?.borderColor}`}>
                      <div className="flex justify-between items-start mb-3">
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full text-white ${eventTypes[event.type]?.color}`}>
                          {eventTypes[event.type]?.label}
                        </span>
                        {activeTab === 'all' && (
                          <span className="text-xs font-bold uppercase text-gray-400">{event.location}</span>
                        )}
                      </div>
                      <h4 className="font-semibold text-white mb-2">{event.title}</h4>
                      <p className="text-sm text-gray-400 flex items-center gap-2"><Clock size={14}/> {event.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16 bg-[#1f4b63]/30 rounded-lg">
              <Users size={48} className="mx-auto text-[#8c7ff5] mb-4"/>
              <h3 className="text-2xl font-bold text-white">Nenhum evento agendado</h3>
              <p className="text-gray-400 mt-2">Não há eventos para a localidade selecionada.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Adicione este componente `Clock` se `lucide-react` não tiver um
const Clock = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export default SchedulePage;