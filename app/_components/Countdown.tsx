'use client';
import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const calculateTimeLeft = () => {
    // A data do evento deve ser ajustada conforme necessário
    const difference = +new Date("2025-09-22T00:00:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutos: Math.floor((difference / 1000 / 60) % 60),
        Segundos: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = Object.keys(timeLeft).map(interval => {
    if (!timeLeft[interval]) {
      // @ts-ignore
      timeLeft[interval] = 0;
    }
    return (
      <div key={interval} className="bg-slate-800 p-4 rounded-lg">
        <div className="text-4xl font-bold text-cyan-400">
          {/* @ts-ignore */}
          {String(timeLeft[interval]).padStart(2, '0')}
        </div>
        <div className="text-sm uppercase text-gray-400">{interval}</div>
      </div>
    );
  });

  return (
    <div className="flex justify-center space-x-4">
      {timerComponents.length ? timerComponents : <span>O evento começou!</span>}
    </div>
  );
};

export default Countdown;
