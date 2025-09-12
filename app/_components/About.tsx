import React from 'react';

const InfoCard = ({ title, children }: { title: string, children: React.ReactNode }) => (
  // ALTERAÇÃO: Estilização do card com Tailwind e variáveis CSS para um visual consistente.
  // A classe 'h-full' garante que os cards em uma mesma linha tenham a mesma altura.
  <div className="feature-card bg-[var(--accent-purple)] p-6 rounded-lg h-full">
    <h3 className="text-[var(--text-light)] text-xl font-bold mb-4">{title}</h3>
    <p className="text-[var(--text-secondary)] text-base">
      {children}
    </p>
  </div>
);

const About = () => {
  return (
    <section className="info-section content-section">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">A SBIB</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed space-y-4">
            A Semana Brasileira de Informática Biomédica (SBIB) é um evento que reúne estudantes, pesquisadores, professores e profissionais de diversas áreas do conhecimento, como Informática Biomédica, Física Médica, Ciências da Computação, Engenharia da Computação, Engenharia Biomédica, Medicina e Biologia. Realizada anualmente, a SBIB tem caráter acadêmico, empresarial e cultural, oferecendo um espaço interdisciplinar para a troca de experiências e a discussão de inovações tecnológicas aplicadas à saúde.
            <br/><br/>
            A programação científica inclui palestras, minicursos, oficinas práticas e workshops, que abordam temas variados da Informática Biomédica. Entre eles estão o processamento e análise de imagens médicas, inteligência artificial aplicada à saúde, sistemas de apoio à decisão clínica, bioinformática, bioengenharia, biotecnologia e gestão em saúde. Além disso, empresas da área de tecnologia e saúde também participam do evento, promovendo palestras e apresentando soluções inovadoras, o que proporciona aos estudantes maior contato com o setor produtivo.
            <br/><br/>
            O principal objetivo da SBIB é aproximar a comunidade acadêmica, científica e empresarial, promovendo um ambiente de integração e colaboração. O encontro permite que alunos tenham contato direto com pesquisadores de referência e com profissionais de diferentes segmentos, fortalecendo a formação acadêmica e incentivando a construção de redes de contato e parcerias estratégicas para pesquisa e inovação.
            <br/><br/>
            Para tornar a experiência ainda mais completa, a semana também promove atividades culturais e momentos de confraternização, que estimulam a troca de experiências em um ambiente mais descontraído. Dessa forma, a SBIB se consolida não apenas como um evento científico, mas também como uma oportunidade de formação integral, contribuindo para o desenvolvimento acadêmico, profissional e social dos participantes.
          </p>
        </div>

        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 style={{ color: 'var(--accent-purple)', fontSize: '2rem', marginBottom: '2rem' }}>INFORMÁTICA BIOMÉDICA</h2>
          <div className="text-[var(--text-secondary)] text-lg leading-relaxed space-y-6 text-left md:text-center">
            <p>
              A Informática Biomédica é uma área interdisciplinar dedicada ao desenvolvimento e à aplicação de tecnologias computacionais em biociências e saúde. Ela atua desde a análise de dados biológicos até a gestão de informações médicas, oferecendo soluções que apoiam diagnósticos, tratamentos personalizados e pesquisas científicas.
            </p>
            <p>
              Com a crescente digitalização da saúde, o campo atende a uma demanda em expansão em hospitais, laboratórios, empresas farmacêuticas, de biotecnologia e startups de saúde digital. Além do setor privado, também contribui para políticas públicas, por meio de sistemas de informação em saúde, prontuários eletrônicos e monitoramento epidemiológico.
            </p>
            <p>
              Por integrar conhecimentos de computação, biologia, medicina e estatística, a Informática Biomédica se destaca como uma área estratégica para inovação científica e tecnológica, com impacto direto na melhoria da qualidade de vida e na eficiência dos serviços de saúde.
            </p>
          </div>
        </div>

        {/* ALTERAÇÃO: Layout de Grid responsivo para alinhar os cards lado a lado em telas maiores */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <InfoCard title="BIOINFORMÁTICA">
          A Informática Biomédica atua de forma estratégica na modelagem e simulação de problemas biológicos, permitindo o processamento de grandes volumes de dados em áreas como genômica, transcriptômica e proteômica. Suas aplicações incluem a montagem de genomas, análise de expressão gênica, identificação de polimorfismos, estudo de redes gênicas, análise filogenética e predição de estruturas de macromoléculas. Por meio de algoritmos, softwares e simulações, possibilita avanços na compreensão de processos biológicos, no desenvolvimento de novos fármacos, na biotecnologia e na medicina personalizada, transformando dados complexos em conhecimento aplicável à ciência e à saúde.</InfoCard>
          <InfoCard title="IMAGENS MÉDICAS">
          A Informática Biomédica contribui de forma decisiva para o desenvolvimento de sistemas de apoio à decisão médica, utilizando técnicas avançadas para aquisição, processamento e análise de sinais e imagens médicas. Entre as aplicações estão modalidades como radiologia, tomografia computadorizada, ressonância magnética, ultrassonografia, medicina nuclear e registros de atividade elétrica cerebral e cardíaca. Essas tecnologias permitem otimizar diagnósticos, apoiar tratamentos personalizados e ampliar a precisão clínica, transformando dados complexos em informações úteis para médicos e pesquisadores.</InfoCard>
          <InfoCard title="BIOENGENHARIA">
          A Informática em Biomecânica, também chamada de Bioengenharia, concentra-se no desenvolvimento de sistemas, aplicativos e soluções aplicados ao estudo do corpo humano. Utiliza ferramentas como o método dos elementos finitos, programação em MATLAB, prototipagem, fotoelasticidade e microscopia eletrônica de varredura para analisar estruturas biológicas, otimizar dispositivos médicos e apoiar pesquisas em reabilitação, ortopedia e engenharia de tecidos. Dessa forma, integra tecnologia e saúde para aprimorar o entendimento e a aplicação prática da biomecânica.
          </InfoCard>
          <InfoCard title="E-SAÚDE">
          A Informática Biomédica também atua no desenvolvimento de sistemas para organização e gerenciamento de dados clínicos, englobando computação clínica, serviços de informação hospitalar, saúde pública e epidemiologia. Suas aplicações incluem prontuários eletrônicos, sistemas de apoio à decisão clínica, gestão do fluxo de informações médicas e tecnologias assistivas, que tornam o atendimento mais eficiente, seguro e acessível. Dessa forma, contribui para a integração de informações em saúde e para a melhoria da qualidade dos serviços prestados à população.</InfoCard>
        </div>
      </div>
    </section>
  );
};

export default About;
