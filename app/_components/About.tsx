import React from 'react';
// Importando os ícones que vamos usar
import { Dna, Scan, Cpu, HeartPulse } from 'lucide-react';

// ============================================================================
// 1. Componente InfoCard
// ============================================================================
type InfoCardProps = {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
};

const InfoCard = ({ icon: Icon, title, children }: InfoCardProps) => (
  // Adicionado: flex, flex-col, items-center e text-center para centralizar tudo
  <div className="
    h-full rounded-2xl p-6 flex flex-col items-center text-center
    bg-white/10 backdrop-blur-lg
    border border-white/20
    transition-all duration-300
    hover:border-white/40 hover:scale-105 hover:bg-white/20
    group
  ">
    {/* Contêiner do Ícone */}
    <div className="mb-5 p-3 rounded-full bg-purple-500/20 group-hover:bg-purple-500/40 transition-colors duration-300">
      <Icon className="h-8 w-8 text-purple-300" />
    </div>
    
    {/* Conteúdo de Texto */}
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-300 text-base leading-relaxed">
      {children}
    </p>
  </div>
);

// ============================================================================
// 2. Componente Principal
// ============================================================================
const About = () => {
  return (
    <section className="
      py-20 sm:py-28
      bg-[#111827] 
      bg-[radial-gradient(at_20%_80%,hsla(260,80%,25%,0.3)_0px,transparent_50%),radial-gradient(at_80%_20%,hsla(280,85%,30%,0.3)_0px,transparent_50%),radial-gradient(at_50%_50%,hsla(270,75%,20%,0.2)_0px,transparent_50%)]
    ">
      <div className="container mx-auto px-4">
        {/* NOVO: Layout principal que divide a tela em duas colunas em telas grandes (lg) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Coluna 1: Textos Explicativos */}
          <div className="lg:pr-8">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
              SBIB e a Informática Biomédica
            </h2>
            <div className="text-lg text-gray-300 space-y-6 leading-relaxed">
              <p>
                A <strong>Semana Brasileira de Informática Biomédica (SBIB)</strong> é um evento que reúne estudantes, pesquisadores e profissionais de áreas como Computação, Engenharias, Medicina e Biologia. Com caráter acadêmico e empresarial, a SBIB oferece um espaço interdisciplinar para a troca de experiências e a discussão de inovações tecnológicas aplicadas à saúde.
              </p>
              <p>
                O principal objetivo é aproximar a comunidade, permitindo que alunos tenham contato direto com pesquisadores de referência e com o setor produtivo, fortalecendo a formação e incentivando parcerias estratégicas para pesquisa e inovação.
              </p>
              <p>
                A <strong>Informática Biomédica</strong>, por sua vez, é a área interdisciplinar dedicada a aplicar tecnologias computacionais na saúde. Ela atua desde a análise de dados genômicos até a gestão de informações médicas, sendo estratégica para o avanço de diagnósticos, tratamentos personalizados e políticas públicas de saúde.
              </p>
            </div>
          </div>

          {/* Coluna 2: Cards com as Áreas */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <InfoCard icon={Dna} title="BIOINFORMÁTICA">
                Análise de dados genômicos, transcriptômicos e proteômicos para avanços na ciência e na medicina personalizada.
              </InfoCard>
              <InfoCard icon={Scan} title="IMAGENS MÉDICAS">
                Processamento e análise de imagens de radiologia, tomografia e ressonância para otimizar diagnósticos clínicos.
              </InfoCard>
              <InfoCard icon={Cpu} title="BIOENGENHARIA">
                Desenvolvimento de soluções e dispositivos médicos através de simulações, prototipagem e engenharia de tecidos.
              </InfoCard>
              <InfoCard icon={HeartPulse} title="E-SAÚDE">
                Criação de sistemas como prontuários eletrônicos e tecnologias assistivas para um atendimento mais eficiente e seguro.
              </InfoCard>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;