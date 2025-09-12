import React from 'react';

const StreamingsPage = () => {
  return (
    <div className="streamings-page">
      {/* Hero Section para Streamings */}
      <section className="hero-section">
        <div className="container">
          <h1>Transmissões ao Vivo</h1>
          <p className="event-date">Acompanhe as palestras e eventos em tempo real</p>
          <p>As transmissões estarão disponíveis durante o evento. Links serão atualizados conforme a programação.</p>
        </div>
      </section>

      {/* Seção Principal de Streamings */}
      <section className="content-section">
        <div className="container">
          <h2>Transmissões Disponíveis</h2>
          
          {/* Grid de Streamings */}
          <div className="streamings-grid">
            {/* Streaming 1 - Sala Principal */}
            <div className="streaming-card">
              <div className="streaming-header">
                <h3>Sala Principal</h3>
                <span className="streaming-status">Em Breve</span>
              </div>
              <div className="streaming-content">
                <div className="streaming-placeholder">
                  <div className="placeholder-icon">📺</div>
                  <p>Link da transmissão será disponibilizado em breve</p>
                </div>
              </div>
            </div>

            {/* Streaming 2 - Sala Secundária */}
            <div className="streaming-card">
              <div className="streaming-header">
                <h3>Sala Secundária</h3>
                <span className="streaming-status">Em Breve</span>
              </div>
              <div className="streaming-content">
                <div className="streaming-placeholder">
                  <div className="placeholder-icon">📺</div>
                  <p>Link da transmissão será disponibilizado em breve</p>
                </div>
              </div>
            </div>

            {/* Streaming 3 - Workshop */}
            <div className="streaming-card">
              <div className="streaming-header">
                <h3>Workshop</h3>
                <span className="streaming-status">Em Breve</span>
              </div>
              <div className="streaming-content">
                <div className="streaming-placeholder">
                  <div className="placeholder-icon">📺</div>
                  <p>Link da transmissão será disponibilizado em breve</p>
                </div>
              </div>
            </div>

            {/* Streaming 4 - Mesa Redonda */}
            <div className="streaming-card">
              <div className="streaming-header">
                <h3>Mesa Redonda</h3>
                <span className="streaming-status">Em Breve</span>
              </div>
              <div className="streaming-content">
                <div className="streaming-placeholder">
                  <div className="placeholder-icon">📺</div>
                  <p>Link da transmissão será disponibilizado em breve</p>
                </div>
              </div>
            </div>

            {/* Streaming 5 - Apresentações de Trabalhos */}
            <div className="streaming-card">
              <div className="streaming-header">
                <h3>Apresentações de Trabalhos</h3>
                <span className="streaming-status">Em Breve</span>
              </div>
              <div className="streaming-content">
                <div className="streaming-placeholder">
                  <div className="placeholder-icon">📺</div>
                  <p>Link da transmissão será disponibilizado em breve</p>
                </div>
              </div>
            </div>

            {/* Streaming 6 - Cerimônia de Abertura */}
            <div className="streaming-card">
              <div className="streaming-header">
                <h3>Cerimônia de Abertura</h3>
                <span className="streaming-status">Em Breve</span>
              </div>
              <div className="streaming-content">
                <div className="streaming-placeholder">
                  <div className="placeholder-icon">📺</div>
                  <p>Link da transmissão será disponibilizado em breve</p>
                </div>
              </div>
            </div>
          </div>

          {/* Informações Adicionais */}
          <div className="streaming-info">
            <h3>Como Acessar as Transmissões</h3>
            <div className="info-cards">
              <div className="info-card">
                <div className="info-icon">🕐</div>
                <h4>Horários</h4>
                <p>As transmissões seguem o cronograma oficial do evento. Consulte a programação para mais detalhes.</p>
              </div>
              <div className="info-card">
                <div className="info-icon">📱</div>
                <h4>Dispositivos</h4>
                <p>Assista de qualquer dispositivo: computador, tablet ou smartphone.</p>
              </div>
              <div className="info-card">
                <div className="info-icon">💬</div>
                <h4>Interação</h4>
                <p>Participe através do chat das transmissões para fazer perguntas aos palestrantes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StreamingsPage;
