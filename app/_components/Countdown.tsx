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
      <div key={interval} className="countdown-item">
        <span className="number">
          {/* @ts-ignore */}
          {String(timeLeft[interval]).padStart(2, '0')}
        </span>
        <span className="label">{interval}</span>
      </div>
    );
  });

  return (
    <div className="countdown-timer">
      {timerComponents.length ? timerComponents : <span>O evento começou!</span>}
    </div>
  );
};

export default Countdown;


