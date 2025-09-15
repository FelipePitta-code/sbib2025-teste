'use client';
import React, { useState, useEffect } from 'react';
// Adicionamos um novo ícone para a mensagem de término
import { PartyPopper } from 'lucide-react';

// --- Tipos e Componentes Auxiliares ---
type TimeLeft = {
  Dias: number;
  Horas: number;
  Minutos: number;
  Segundos: number;
};
type EventStatus = 'upcoming' | 'live' | 'ended';

// Componente para exibir cada unidade de tempo (Dias, Horas, etc.) - Sem alterações
const TimeCard = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="
      w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28
      flex items-center justify-center
      bg-gradient-to-b from-[#2b6670]/50 to-[#193f55]/50
      rounded-lg shadow-lg
      text-4xl sm:text-5xl md:text-6xl font-bold text-white
    ">
      {String(value).padStart(2, '0')}
    </div>
    <span className="mt-3 text-sm font-semibold text-[#8c7ff5] uppercase tracking-wider">{label}</span>
  </div>
);

// --- Componente Principal do Countdown ---
const Countdown = () => {
  // --- DATAS PRINCIPAIS DO EVENTO ---
  const eventStartDate = new Date("2025-09-22T14:00:00");
  const eventEndDate = new Date("2025-09-26T18:00:00");

  // --- FUNÇÕES DE LÓGICA ---
  const getEventStatus = (): EventStatus => {
    const now = +new Date();
    if (now > +eventEndDate) return 'ended';
    if (now > +eventStartDate) return 'live';
    return 'upcoming';
  };

  const calculateTimeLeft = (): TimeLeft => {
    const difference = +eventStartDate - +new Date();
    if (difference > 0) {
      return {
        Dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutos: Math.floor((difference / 1000 / 60) % 60),
        Segundos: Math.floor((difference / 1000) % 60),
      };
    }
    return { Dias: 0, Horas: 0, Minutos: 0, Segundos: 0 };
  };

  // --- ESTADOS DO COMPONENTE ---
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [eventStatus, setEventStatus] = useState<EventStatus>(getEventStatus());
  const [fastCountdown, setFastCountdown] = useState<number | null>(null);

  // --- EFEITOS (HOOKS) ---
  useEffect(() => {
    // O timer principal só precisa rodar se o evento ainda está por vir.
    if (eventStatus !== 'upcoming') return;

    const timer = setInterval(() => {
      // A cada segundo, verificamos o status novamente.
      const currentStatus = getEventStatus();
      if (currentStatus !== 'upcoming') {
        setEventStatus(currentStatus);
        clearInterval(timer);
      } else {
        setTimeLeft(calculateTimeLeft());
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [eventStatus]);

  useEffect(() => {
    // O efeito de contagem rápida só roda quando o status muda para 'live'.
    if (eventStatus === 'live') {
      setFastCountdown(10);
      const fastTimer = setInterval(() => {
        setFastCountdown(prev => {
          if (prev !== null && prev > 1) return prev - 1;
          clearInterval(fastTimer);
          return 0;
        });
      }, 150);
      return () => clearInterval(fastTimer);
    }
  }, [eventStatus]);

  // --- RENDERIZAÇÃO CONDICIONAL ---
  
  // 1. Se o evento TERMINOU
  if (eventStatus === 'ended') {
    return (
      <div className="text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
          O Evento Terminou!
        </h2>
        <p className="mt-4 text-lg text-gray-300">Agradecemos a sua participação. Até a próxima edição!</p>
      </div>
    );
  }

  // 2. Se o evento está AO VIVO
  if (eventStatus === 'live') {
    // Durante a contagem rápida...
    if (fastCountdown !== null && fastCountdown > 0) {
      return (
        <div className="flex justify-center gap-4">
          <TimeCard value={fastCountdown} label="Iniciando" />
        </div>
      );
    }
    // Após a contagem rápida...
    return (
      <div className="text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#c73db7] animate-pulse">
          O Evento Começou!
        </h2>
        <p className="mt-4 text-lg text-gray-300">Acompanhe as transmissões ao vivo.</p>
      </div>
    );
  }

  // 3. Se o evento está POR VIR (padrão)
  return (
    <div className="flex justify-center gap-4 sm:gap-6">
      {Object.entries(timeLeft).map(([label, value]) => (
        <TimeCard key={label} value={value} label={label} />
      ))}
    </div>
  );
};

export default Countdown;