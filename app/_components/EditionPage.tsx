import React from 'react';

type EditionPageProps = {
  year: number;
  bannerSrc?: string;
  photoSrc?: string | null;
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
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-50">
          Edição <span className="text-purple-600">{year}</span>
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Relembre esta edição!
        </p>
      </div>

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
        
        {photoSrc && (
          <div className="photo-container">
            <img src={photoSrc} alt={`Foto da edição ${year}`} />
          </div>
        )}

        {youtubePlaylist && (
          <div className="youtube-link mt-8"> 
            <a 
              href={youtubePlaylist} 
              target="_blank" 
              rel="noopener noreferrer"
              className="youtube-btn"
            >
              Ver Playlist no YouTube
            </a>
          </div>
        )}
      </section>
    </main>
  );
};

export default EditionPage;