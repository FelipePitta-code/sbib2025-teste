import React from 'react';

const InfoCard = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 card-hover">
    <h3 className="text-xl font-bold text-cyan-400 mb-3">{title}</h3>
    <p className="text-gray-400 text-sm">
      {children}
    </p>
  </div>
);

const About = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">A SBIB</h2>
          <p className="text-gray-400">
            A Semana Brasileira de Informática Biomédica (SBIB) reúne acadêmicos e profissionais de diversas áreas para compartilhar experiências e informações. A programação científica inclui palestras, cursos e workshops, promovendo a integração entre estudantes, pesquisadores e empresas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <InfoCard title="BIOINFORMÁTICA">
            Modelagem e simulação de problemas biológicos, análise de genomas, proteomas, e desenvolvimento de modelos moleculares.
          </InfoCard>
          <InfoCard title="IMAGENS MÉDICAS">
            Desenvolvimento de sistemas de apoio à decisão médica, através de técnicas de aquisição, tratamento e análise de imagens médicas como tomografia e ressonância magnética.
          </InfoCard>
          <InfoCard title="BIOENGENHARIA">
            Aplicação de soluções e sistemas ao corpo humano utilizando técnicas de programação, prototipagem e microscopia.
          </InfoCard>
          <InfoCard title="E-SAÚDE">
            Desenvolvimento de sistemas para organização e gerenciamento de dados clínicos, como o prontuário eletrônico, e serviços de informação hospitalar.
          </InfoCard>
        </div>
      </div>
    </section>
  );
};

export default About;
