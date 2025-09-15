'use client';
import React, { useState, useMemo } from 'react';
import { University, Users, Presentation, Clock } from 'lucide-react';

// ============================================================================
// 1. ESTRUTURA DE DADOS ATUALIZADA E CORRIGIDA
// ============================================================================
const allSchedules = {
  usp: [
    // Antigos eventos "Online" agora consolidados na USP
    { day: "Seg 22/09", date: "22/09 - E-Saúde", events: [
      { time: "14:00-14:15", title: "ABERTURA SBIB - DIA 1", type: "palestra" },
      { time: "14:20-15:00", title: "COMO CONSOLIDAR UMA CARREIRA NA ÁREA DA SAÚDE E TECNOLOGIA - UBIRAJARA", type: "palestra" },
      { time: "15:00-15:20", title: "DINÂMICA 1", type: "mesa" },
      { time: "15:20-16:00", title: "GESTÃO EM SAÚDE - PELA VISÃO DE UMA EX SECRETÁRIA DE SAÚDE - LUCIANA", type: "palestra" },
      { time: "16:00-16:40", title: "PANORAMA GERAL DA TRASFORMAÇÃO TECNOLÓGICA NA SAÚDE PÚBLICA - MELISSA", type: "palestra" },
      { time: "16:40-17:00", title: "DINÂMICA 2", type: "mesa" },
    ]},
    { day: "Ter 23/09", date: "23/09 - Imagens Médicas", events: [
      { time: "14:00-14:15", title: "ABERTURA SBIB - DIA 2", type: "palestra" },
      { time: "14:20-15:00", title: "INICIATIVAS COM IA - PAULO MAZZONCINI", type: "palestra" },
      { time: "15:00-15:20", title: "DINÂMICA 1", type: "mesa" },
      { time: "15:20-16:00", title: "GESTÃO EM SAÚDE - PELA VISÃO DE UMA EX SECRETÁRIA DE SAÚDE - GRACIELLA FAVORETO", type: "palestra" },
      { time: "16:00-16:40", title: "PANORAMA GERAL DA TRASFORMAÇÃO TECNOLÓGICA NA SAÚDE PÚBLICA - BEATRIZ CORRETI", type: "palestra" },
      { time: "16:40-17:00", title: "DINÂMICA 2", type: "mesa" },
    ]},
    { day: "Qua 24/09", date: "24/09 - Bioinformática", events: [
      { time: "14:00-14:15", title: "ABERTURA SBIB - DIA 3", type: "palestra" },
      { time: "14:20-15:00", title: "EXPLORANDO A IMUNOLOGIA COM scRNA-seq E TRANSCRIPTOMA ESPACIAL - MARCO ATAIDE", type: "palestra" },
      { time: "15:00-15:20", title: "DINÂMICA 1", type: "mesa" },
      { time: "15:20-16:00", title: "FASTBIO - CONHEÇA UM POUCO MAIS SOBRE A EMPRESA", type: "palestra" },
      { time: "16:10-16:50", title: "?? - DANIEL TIEZZI", type: "palestra" },
      { time: "16:50-17:10", title: "DINÂMICA 2", type: "mesa" },
      { time: "17:10-17:40", title: "BIONFORMÁTICA E INTELIGÊNCIA ARTIFICIAL NA SAÚDE DE PRECISÃO - TATHIANE MALTA", type: "mesa" },
    ]},
    { day: "Qui 25/09", date: "25/09 - Biomecânica", events: [
      { time: "14:00-14:15", title: "ABERTURA SBIB - DIA 4", type: "palestra" },
      { time: "14:20-15:00", title: "?? - LAIANE SIMÕES", type: "palestra" },
      { time: "15:00-15:20", title: "DINÂMICA 1", type: "mesa" },
      { time: "15:20-16:00", title: "EDITBIO - CONHEÇA UM POUCO MAIS SOBRE A EMPRESA", type: "palestra" },
      { time: "16:10-16:50", title: "SENSORIAL LIFE - CONHEÇA UM POUCO MAIS SOBRE A EMPRESA", type: "palestra" },
      { time: "16:50-17:10", title: "DINÂMICA 2", type: "mesa" },
      { time: "17:10-17:40", title: "EPISTEMOLOGIA DA INSURGÊNCIA COM INTELIGÊNCIA ARTIFICIAL (EIIA) - MARIA CRISTIANE GALVÃO", type: "palestra" },
    ]}
  ],
  ufpr: [
    { day: "Seg 22/09", date: "22/09", events: [
        { time: "08:00-09:00", title: "ABERTURA SBIB", type: "palestra" },
        { time: "09:00-10:00", title: "APRENDIZADO DE MÁQUINA EM PSIQUIATRIA", type: "palestra" },
        { time: "10:15-11:15", title: "SISTEMAS MOBILE PARA AUXÍLIO DIAGNÓSTICO", type: "palestra" },
        { time: "13:00-14:00", title: "APLICAÇÃO DE TECNOLOGIAS ÔMICAS NO ESTUDO DA SAÚDE DE PRECISÃO ONCOLÓGICA", type: "palestra" },
        { time: "15:00-16:00", title: "PROCESSAMENTO E PRÉ-PROCESSAMENTO DE IMAGENS BIOMÉDICAS", type: "palestra" },
        { time: "16:00-18:00", title: "REUNIÃO GUILHERME", type: "mesa" },
        { time: "18:00-19:00", title: "MINICURSO ECOMP", type: "minicurso" }
    ]},
    { day: "Ter 23/09", date: "23/09", events: [
        { time: "08:00-09:00", title: "INTELIGÊNCIA ARTIFICIAL EM SAÚDE: CONCEITOS, APLICAÇÕES E PERSPECTIVAS", type: "palestra" },
        { time: "13:00-14:00", title: "A INCORPORAÇÃO DE TECNOLOGIAS NA NAVEGAÇÃO DO CUIDADO: DESAFIOS E PERSPECTIVAS", type: "palestra" },
        { time: "15:00-16:00", title: "IA APLICADA À SAÚDE: PASSADO E NOVAS PERSPECTIVAS", type: "palestra" },
        { time: "16:00-17:00", title: "INTELIGÊNCIA ARTIFICIAL", type: "palestra" },
        { time: "17:00-19:00", title: "MINICURSO LATEX", type: "minicurso" }
    ]},
    { day: "Qua 24/09", date: "24/09", events: [
        { time: "09:00-11:15", title: "IMPRESSÃO 3D APLICADA A FISIOTERAPIA", type: "palestra" },
        { time: "13:00-14:00", title: "USO DE MODELOS IN SILICO NA AVALIAÇÃO DA SEGURANÇA DE PRODUTOS", type: "palestra" },
        { time: "15:00-16:00", title: "AUXÍLIO DE IA NO DIAGNÓSTICO ODONTOLÓGICO", type: "palestra" },
        { time: "16:00-17:00", title: "BIOINFORMÁTICA", type: "palestra" },
        { time: "17:00-19:00", title: "MINICURSO IMAGENS MÉDICAS", type: "minicurso" }
    ]},
    { day: "Qui 25/09", date: "25/09", events: [
        { time: "09:00-11:15", title: "ANÁLISES FILOGENÉTICAS BASEADAS EM SEQUÊNCIAS DE DNA: NOÇÕES GERAIS E APLICAÇÕES", type: "minicurso" },
        { time: "13:00-14:00", title: "PET SAÚDE", type: "palestra" },
        { time: "16:00-17:00", title: "PROJETOS DE IA: ASSISTENTES VIRTUAIS E CLASSIFICAÇÃO DE IMAGENS DE RETINOGRAFIA", type: "palestra" },
        { time: "17:00-19:00", title: "MINICURSO DE GIT", type: "minicurso" }
    ]},
    { day: "Sex 26/09", date: "26/09", events: [
        { time: "09:00-11:15", title: "TECNOLOGIAS NA REABILITAÇÃO NEUROLÓGICA", type: "minicurso" },
        { time: "13:00-14:00", title: "MINERAÇÃO DE GENOMAS DE FUNGOS ENDOFÍTICOS", type: "palestra" },
        { time: "15:00-16:00", title: "COMPUTADORES QUÂNTICOS", type: "palestra" },
        { time: "16:00-18:00", title: "MINICURSO DE LINUX VOLTADO A SEGURANÇA", type: "minicurso" },
        { time: "18:00-19:00", title: "MINICURSO ECOMP", type: "minicurso" }
    ]}
  ],
  ufcspa: [], // Mantido para a aba, adicione aqui os eventos da UFCSPA
};

// --- Configuração das abas e tipos de evento (sem a aba "Online") ---
const tabs = [
  { id: 'all', label: 'Todos', icon: Presentation },
  { id: 'usp', label: 'USP', icon: University },
  { id: "ufpr", label: "UFPR", icon: University },
  { id: 'ufcspa', label: 'UFCSPA', icon: University },
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

  const scheduleToDisplay = useMemo(() => {
    if (activeTab === 'all') {
      const combinedSchedule = {};
      Object.entries(allSchedules).forEach(([location, schedule]) => {
        schedule.forEach(day => {
          if (!combinedSchedule[day.day]) {
            // Cria a estrutura do dia se ela não existir
            combinedSchedule[day.day] = { day: day.day, date: day.date, events: [] };
          }
          const eventsWithLocation = day.events.map(event => ({ ...event, location }));
          combinedSchedule[day.day].events.push(...eventsWithLocation);
        });
      });
      return Object.values(combinedSchedule).sort((a, b) => {
        // Ordena os dias para garantir a sequência correta (Seg, Ter, Qua...)
        const dayOrder = ["Seg", "Ter", "Qua", "Qui", "Sex"];
        const dayA = a.day.split(" ")[0];
        const dayB = b.day.split(" ")[0];
        return dayOrder.indexOf(dayA) - dayOrder.indexOf(dayB);
      });
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
                  <h2 className="text-3xl font-bold text-white">{day.day.split(' ')[0]} {day.day.split(' ')[1]}</h2>
                  {/* Na aba 'Todos', a data pode variar, então mostramos um texto genérico */}
                  {activeTab !== 'all' && <span className="text-xl font-medium text-[#8c7ff5]">{day.date}</span>}
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

export default SchedulePage;