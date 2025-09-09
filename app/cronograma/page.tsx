import React from 'react';

const Schedule = () => {
  // Dados do cronograma para fácil manutenção
  const scheduleData = [
    { 
      day: "25 Seg", 
      date: "25/09", 
      mode: "100% ONLINE", 
      events: [
        { time: "09:00-10:00", title: "ANÁLISE DE SINAIS FISIOLÓGICOS MULTIMO...", type: "palestra" },
        { time: "10:00-11:00", title: "INTELIGÊNCIA ARTIFICIAL EM SAÚDE", type: "palestra" },
        { time: "14:00-15:00", title: "BIOINFORMÁTICA E MEDICINA PERSONALIZADA", type: "palestra" }
      ] 
    },
    { 
      day: "26 Ter", 
      date: "26/09", 
      mode: "PRESENCIAL NA UFPR + ONLINE", 
      events: [
        { time: "09:00-10:00", title: "PROCESSAMENTO DE IMAGENS MÉDICAS", type: "palestra" },
        { time: "10:30-12:00", title: "MESA REDONDA: FUTURO DA INFORMÁTICA BIOMÉDICA", type: "mesa" },
        { time: "14:00-16:00", title: "WORKSHOP: ANÁLISE DE DADOS GENÔMICOS", type: "minicurso" }
      ] 
    },
    { 
      day: "27 Qua", 
      date: "27/09", 
      mode: "PRESENCIAL NA USP + ONLINE", 
      events: [
        { time: "09:00-10:00", title: "INFLUÊNCIA DO MICROBIOMA INTESTINAL N...", type: "palestra" },
        { time: "10:30-12:00", title: "SISTEMAS DE APOIO À DECISÃO CLÍNICA", type: "palestra" },
        { time: "14:00-16:00", title: "MINICURSO: MACHINE LEARNING EM SAÚDE", type: "minicurso" }
      ] 
    },
    { 
      day: "28 Qui", 
      date: "28/09", 
      mode: "PRESENCIAL NA UFCSPA + ONLINE", 
      events: [
        { time: "09:00-10:00", title: "BIOMECÂNICA E ENGENHARIA DE TECIDOS", type: "palestra" },
        { time: "10:30-12:00", title: "E-SAÚDE E PRONTUÁRIOS ELETRÔNICOS", type: "palestra" },
        { time: "14:00-16:00", title: "WORKSHOP: DESENVOLVIMENTO DE APPS MÉDICAS", type: "minicurso" }
      ] 
    },
    { 
      day: "29 Sex", 
      date: "29/09", 
      mode: "MINICURSOS PRESENCIAIS", 
      events: [
        { time: "09:00-12:00", title: "USP - DESVENDANDO GIT: INTRODUÇÃO AOS...", type: "minicurso" },
        { time: "14:00-17:00", title: "UFPR - ANÁLISE DE DADOS COM PYTHON", type: "minicurso" },
        { time: "18:00-20:00", title: "UFCSPA - VISUALIZAÇÃO DE DADOS MÉDICOS", type: "minicurso" }
      ] 
    },
  ];

  const getTypeClass = (type: string) => {
    switch(type) {
      case 'palestra': return 'border-pink-500';
      case 'mesa': return 'border-green-500';
      case 'minicurso': return 'border-blue-500';
      default: return 'border-gray-500';
    }
  }

  const getTypeLabel = (type: string) => {
    switch(type) {
      case 'palestra': return 'Palestra';
      case 'mesa': return 'Mesa Redonda';
      case 'minicurso': return 'Minicurso';
      default: return 'Evento';
    }
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-dark)' }}>
      <div className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="text-center mb-12">
          <h1 style={{ color: 'var(--text-light)', fontSize: '3rem', marginBottom: '1rem' }}>CRONOGRAMA</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
            Programação completa da XXIII Semana Brasileira de Informática Biomédica
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-12">
          {scheduleData.map(item => (
            <div key={item.day} style={{ backgroundColor: 'var(--accent-purple-dark)', padding: '1.5rem', borderRadius: '15px' }}>
              <div className="text-center mb-6">
                <h3 className="font-bold text-xl" style={{ color: 'var(--text-light)', marginBottom: '0.5rem' }}>{item.day}</h3>
                <p className="text-sm font-semibold" style={{ color: 'var(--accent-purple)', marginBottom: '0.5rem' }}>{item.date}</p>
                <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>{item.mode}</p>
              </div>
              <div className="space-y-4">
                {item.events.map((event, index) => (
                  <div key={index} className={`p-4 rounded-lg ${getTypeClass(event.type)}`} style={{ backgroundColor: 'var(--bg-dark)' }}>
                    <div className="flex items-center mb-2">
                      <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{ 
                        backgroundColor: event.type === 'palestra' ? '#ec4899' : 
                                       event.type === 'mesa' ? '#10b981' : '#3b82f6',
                        color: 'white'
                      }}>
                        {getTypeLabel(event.type)}
                      </span>
                    </div>
                    <p className="font-semibold text-sm mb-1" style={{ color: 'var(--text-light)' }}>{event.title}</p>
                    <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>{event.time}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 style={{ color: 'var(--text-light)', fontSize: '1.5rem', marginBottom: '2rem' }}>LEGENDA</h3>
          <div className="flex justify-center flex-wrap gap-6">
            <div className="flex items-center">
              <span className="w-4 h-4 bg-pink-500 rounded-full mr-2"></span>
              <span style={{ color: 'var(--text-light)' }}>Palestra</span>
            </div>
            <div className="flex items-center">
              <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
              <span style={{ color: 'var(--text-light)' }}>Mesa Redonda</span>
            </div>
            <div className="flex items-center">
              <span className="w-4 h-4 bg-blue-500 rounded-full mr-2"></span>
              <span style={{ color: 'var(--text-light)' }}>Minicurso</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
