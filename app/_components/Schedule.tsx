import React from 'react';

const Schedule = () => {
  // Dados do cronograma para fácil manutenção
  const scheduleData = [
    { day: "25 Seg", date: "25/09", mode: "100% ONLINE", events: [{ time: "09:00-10:00", title: "ANÁLISE DE SINAIS FISIOLÓGICOS MULTIMO...", type: "palestra" }] },
    { day: "26 Ter", date: "26/09", mode: "PRESENCIAL NA UFPR + ONLINE", events: [] },
    { day: "27 Qua", date: "27/09", mode: "PRESENCIAL NA USP + ONLINE", events: [{ time: "09:00-10:00", title: "INFLUÊNCIA DO MICROBIOMA INTESTINAL N...", type: "palestra" }] },
    { day: "28 Qui", date: "28/09", mode: "PRESENCIAL NA UFCSPA + ONLINE", events: [] },
    { day: "29 Sex", date: "29/09", mode: "MINICURSOS PRESENCIAIS", events: [{ time: "09:00-12:00", title: "USP - DESVENDANDO GIT: INTRODUÇÃO AOS...", type: "minicurso" }] },
  ];

  const getTypeClass = (type: string) => {
    switch(type) {
      case 'palestra': return 'border-pink-500';
      case 'minicurso': return 'border-blue-500';
      default: return 'border-gray-500';
    }
  }

  return (
    <section id="cronograma" className="py-20 px-4 bg-slate-900">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">CRONOGRAMA</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {scheduleData.map(item => (
            <div key={item.day} className="bg-slate-800/50 p-4 rounded-lg">
              <div className="text-center mb-4">
                <p className="font-bold text-lg">{item.day}</p>
                <p className="text-sm text-gray-400">{item.mode}</p>
              </div>
              <div className="space-y-4">
                {item.events.map(event => (
                  <div key={event.title} className={`p-3 rounded-md bg-slate-700 border-l-4 ${getTypeClass(event.type)}`}>
                    <p className="font-semibold text-sm">{event.title}</p>
                    <p className="text-xs text-gray-400">{event.time}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8 space-x-6">
            <div className="flex items-center"><span className="w-4 h-4 bg-pink-500 rounded-full mr-2"></span> Palestra</div>
            <div className="flex items-center"><span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span> Mesa Redonda</div>
            <div className="flex items-center"><span className="w-4 h-4 bg-blue-500 rounded-full mr-2"></span> Minicurso</div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
