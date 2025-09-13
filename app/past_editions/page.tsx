import React from 'react';

const editionsRow1 = [
  { year: 2018, link: '/past_editions/2018' },
  { year: 2019, link: '/past_editions/2019' },
];

const editionsRow2 = [
  { year: 2020, link: '/past_editions/2020' },
  { year: 2021, link: '/past_editions/2021' },
  { year: 2022, link: '/past_editions/2022' },
];

const editionsRow3 = [
  { year: 2023, link: '/past_editions/2023' },
  { year: 2024, link: '/past_editions/2024' },
];

const PastEditionsPage = () => {
  return (
    <main className="container past-editions-page">
      <h2>Edições Anteriores</h2>
      <div className="past-editions-rows">
        <div className="edition-row two">
          {editionsRow1.map(({ year, link }) => (
            <a key={year} href={link} className="edition-card" aria-label={`Edição ${year}`}>
              <div className="edition-card-inner">
                <span className="edition-year">{year}</span>
              </div>
            </a>
          ))}
        </div>
        <div className="edition-row three">
          {editionsRow2.map(({ year, link }) => (
            <a key={year} href={link} className="edition-card" aria-label={`Edição ${year}`}>
              <div className="edition-card-inner">
                <span className="edition-year">{year}</span>
              </div>
            </a>
          ))}
        </div>
        <div className="edition-row two">
          {editionsRow3.map(({ year, link }) => (
            <a key={year} href={link} className="edition-card" aria-label={`Edição ${year}`}>
              <div className="edition-card-inner">
                <span className="edition-year">{year}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
};

export default PastEditionsPage;


