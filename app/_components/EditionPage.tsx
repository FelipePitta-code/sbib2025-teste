import React from 'react';

type EditionPageProps = {
  year: number;
  bannerSrc?: string;
  photoSrc?: string;
  committee?: string;
  acknowledgements?: string;
  youtubePlaylist?: string;
};

const EditionPage: React.FC<EditionPageProps> = ({
  year,
  bannerSrc,
  photoSrc,
  committee,
  acknowledgements,
  youtubePlaylist,
}) => {
  return (
    <main className="container edition-detail">
      <h2>{year}</h2>

      <section className="edition-banner">
        {bannerSrc ? (
          <img src={bannerSrc} alt={`Banner da edição ${year}`} />
        ) : (
          <div className="banner-placeholder">Banner da edição {year}</div>
        )}
      </section>

      <section className="edition-meta">
        <div className="meta-block">
          <h3>Comissão Organizadora:</h3>
          <p>{committee || 'Conteúdo em preparação.'}</p>
        </div>
        <div className="meta-block">
          <h3>Agradecimentos:</h3>
          <p>{acknowledgements || 'Conteúdo em preparação.'}</p>
        </div>
      </section>

      <section className="edition-photo">
        <div className="photo-container">
          {photoSrc ? (
            <img src={photoSrc} alt={`Foto da edição ${year}`} />
          ) : (
            <div className="photo-placeholder">Foto da edição {year}</div>
          )}
        </div>
        {youtubePlaylist && (
          <div className="youtube-link">
            <a 
              href={youtubePlaylist} 
              target="_blank" 
              rel="noopener noreferrer"
              className="youtube-btn"
            >
              📺 Ver Playlist no YouTube
            </a>
          </div>
        )}
      </section>
    </main>
  );
};

export default EditionPage;


