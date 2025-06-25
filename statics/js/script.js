document.addEventListener('DOMContentLoaded', function () {


  const tituloPrincipal = document.getElementById('titulo-principal');
  if (tituloPrincipal) {
    console.log('Título principal encontrado:', tituloPrincipal.textContent);
    tituloPrincipal.addEventListener('click', function () {
      alert('Bem-vindo ao Centro de Memória FATEC!');
    });
  }




  const secaoInformacoes = document.getElementById('informacoes-detalhadas');
  if (secaoInformacoes) {
    console.log('Seção de informações detalhadas encontrada');




    window.mostrarInformacoes = function (infoId, detalhesInfo) {
      if (detalhesInfo[infoId]) {
        secaoInformacoes.innerHTML = `
         <div class="info-container">
           <h2 class="info-title">${detalhesInfo[infoId].titulo}</h2>
           <div class="info-content">
             <div class="info-bio">
               ${detalhesInfo[infoId].conteudo}
           <div class="botoes-navegacao">
  <button id="voltar-info" class="botao-voltar">Voltar</button>
  <button id="fechar-info" class="botao-fechar">Fechar</button>
</div>
         </div>
       `;


        secaoInformacoes.style.display = 'block';
        secaoInformacoes.scrollIntoView({ behavior: 'smooth' });


        const novosLinks = secaoInformacoes.querySelectorAll('.saiba-mais');
        novosLinks.forEach(link => {
          link.addEventListener('click', function (e) {
            e.preventDefault();
            const novoId = this.getAttribute('data-id');
            if (detalhesInfo[novoId]) {
              window.mostrarInformacoes(novoId, detalhesInfo);
            }
          });
        });


        const botaoFechar = document.getElementById('fechar-info');
        if (botaoFechar) {
          console.log('Botão de fechar encontrado');
          botaoFechar.addEventListener('click', function () {
            secaoInformacoes.style.display = 'none';

            const botaoVoltar = document.getElementById('voltar-info');
            if (botaoVoltar) {
              console.log('Botão de voltar encontrado');
              botaoVoltar.addEventListener('click', function () {
                window.history.back();
              });
            }
          });
        }
      }
    };
  }




  const saibaMaisLinks = document.querySelectorAll('.saiba-mais');

  const detalhesInfo = {

    'eventos-programas': {
      titulo: 'Eventos e Programas da Fatec',
      conteudo: `
    <div class="card-container">
      <article class="card">
        <div class="card-image-container">
          <img src="statics/imgs/pictures/BAJA.jpeg" alt="BAJA" class="card-image" loading="lazy">
        </div>
        <div class="card-content">
          <h3 class="card-title">BAJA SAE BRASIL</h3>
          <p class="card-text">O Projeto Baja é desenvolvido por alunos dos cursos de Engenharia e Física, entre outros,
            no intuito de aplicar os conceitos aprendidos em sala de aula para projetar, construir e desenvolver um
            protótipo no estilo off-road para competir entre as equipes.</p>
          <a href="#" class="saiba-mais" data-id="baja">Saiba +</a>
        </div>
      </article>

      <article class="card">
        <div class="card-image-container">
          <img src="statics/imgs/pictures/EMB-120/EMB-120.png" alt="EMB-120" class="card-image" loading="lazy">
        </div>
        <div class="card-content">
          <h3 class="card-title">Aeronaves</h3>
          <p class="card-text">Informações sobre as aeronaves utilizadas na FATEC para fins didáticos e de pesquisa.
            Nossa coleção inclui desde aeronave Guri, doada pela ANAC, até estudos detalhados sobre o EMB-120 Brasília
            da Embraer. Todos os recursos disponíveis foram cuidadosamente catalogados por nossos próprios alunos do
            Curso de Tecnologia em Manutenção de Aeronaves</p>
          <a href="#" class="saiba-mais" data-id="aeronaves">Saiba +</a>
        </div>
      </article>
    </div>
  `
    },

    'nomes-inspiram': {
      titulo: 'Nomes que Inspiram',
      conteudo: `
    <div class="card-container">
      <article class="card">
        <div class="card-image-container">
          <img src="statics/imgs/pessoas/lattes/lattes.jpg" alt="César Lattes" class="card-image" loading="lazy">
        </div>
        <div class="card-content">
          <h3 class="card-title">Cesare Lattes</h3>
          <p class="card-text">Cesar Lattes (1924-2005) foi um cientista brasileiro. Estudou física e matemática na
            Universidade de São Paulo. Com 19 anos era assistente da cadeira de Física Teórica.</p>
          <a href="#" class="saiba-mais" data-id="cesar-lattes">Saiba +</a>
        </div>
      </article>

      <article class="card">
        <div class="card-image-container">
          <img src="statics/imgs/pessoas/jessenVidal/jessenVidal.jpg" alt="Professor Jessen Vidal" class="card-image"
            loading="lazy">
        </div>
        <div class="card-content">
          <h3 class="card-title">Prof. Jessen Vidal</h3>
          <p class="card-text">Jessen Vidal (1930-2007) foi um engenheiro mecânico e professor universitário, e sua
            contribuição para a educação técnica e tecnológica em São José dos Campos é reconhecida pela atribuição de
            seu nome à Fatec local.</p>
          <a href="#" class="saiba-mais" data-id="jessen-vidal">Saiba +</a>
        </div>
      </article>

      <article class="card">
        <div class="card-image-container">
          <img src="statics/imgs/pessoas/souza/souza.png" alt="Paula Souza" class="card-image" loading="lazy">
        </div>
        <div class="card-content">
          <h3 class="card-title">Paula Souza</h3>
          <p class="card-text">Antônio Francisco de Paula Souza foi engenheiro e político paulista, formado na Europa,
            que se destacou na construção de ferrovias e na fundação da Escola Politécnica de São Paulo. Atuou como
            diretor da instituição por 24 anos e defendeu a educação técnica voltada ao desenvolvimento nacional. Seu
            legado inspirou a criação do Centro Paula Souza em 1969.</p>
          <a href="#" class="saiba-mais" data-id="paula-souza">Saiba +</a>
        </div>
      </article>
    </div>
  `
    },

    'fatec-sjc': {
      titulo: 'FATEC São José dos Campos',
      conteudo: `
       <div class="card-container">
         <article class="card">
           <div class="card-image-container">
             <img src="statics/imgs/pictures/fatec centro memoria.jpg" alt="Centro de Memórias" class="card-image" loading="lazy">
           </div>
           <div class="card-content">
             <h3 class="card-title">Centro de Memórias</h3>
             <p class="card-text">Criado pela Portaria 01 de 30/06/2022, o projeto visa resgatar e preservar a memória da
               Fatec São José dos Campos por meio de inventário, acervo e ações culturais ligadas à história da educação
               tecnológica.</p>
             <a href="#" class="saiba-mais" data-id="centro-memorias">Saiba +</a>
           </div>
         </article>

         <article class="card">
           <div class="card-image-container">
             <video controls class="card-image" loading="lazy">
               <source src="statics/video/video centro de memoria.mp4">
               Seu navegador não suporta vídeos HTML5.
             </video>
           </div>
           <div class="card-content">
             <h3 class="card-title">Video Centro de Memórias</h3>
             <p class="card-text">Video Apresentação do Centro de Memórias</p>
             <a href="#" class="saiba-mais" data-id="video-centro-memorias">Saiba +</a>
           </div>
         </article>
       </div>
     `
    },

    'centro-memorias': {
      titulo: 'Centro de Memórias da FATEC',
      conteudo: `
       <img src="statics/imgs/pictures/fatec centro memoria.jpg" alt="Centro de Memórias" class="info-image">
       <p>O Centro de Memórias da FATEC São José dos Campos foi criado pela Portaria 01 de 30/06/2022, com o objetivo de resgatar e preservar a memória da instituição por meio de inventário, acervo e ações culturais ligadas à história da educação tecnológica.</p>
       <p>Este projeto visa documentar a trajetória da instituição, seus professores, alunos e contribuições para o desenvolvimento tecnológico da região.</p>
       <div class="info-sources">
         <p>Membros responsáveis:</p>
         <p>Gerson Carlos Favalli;</p>
         <p>Luciana de Abreu Aquino;</p>
         <p>Sardes Aparecida Batista;</p>
         <p>Nilo Jerônimo Vieira;</p>
         <p>Eliane Penha Mergulhão Dias;</p>
       </div>
       <div class="info-sources">
         <p>Professores convidados:</p>
         <p>Elisiane Alves de Oliveira;</p>
         <p>Julia Kanazawa (Etec Jacareí);</p>
       </div>
       <div class="info-sources">
         <p>Link relacionado:</p>
         <p><a href="http://www.memorias.cpscetec.com.br/acervoVer.php?cma=29" target="_blank" class="parque-link">Centros de Memória do Centro Paula Souza</a></p>
       </div>
     `
    },

    'video-centro-memorias': {
      titulo: 'Vídeo do Centro de Memórias',
      conteudo: `
       <div class="video-container">
         <video controls width="100%">
           <source src="statics/video/video centro de memoria.mp4" type="video/mp4">
           Seu navegador não suporta a reprodução de vídeos.
         </video>
       </div>
     `
    },

    'jessen-vidal': {
      titulo: 'Quem foi Jessen Vidal?',
      conteudo: `
   <img src="statics/imgs/pessoas/jessenVidal/jessenJovem.jpg" alt="Professor Jessen Vidal" class="info-image">
   <p>O Prof. Jessen Vidal nasceu no município pernambucano de Guaranhuns, em 21 de novembro de 1930, filho de Sólon Vidal e Katy Leitão Vidal. Na infância e adolescência frequentou o Colégio Presbiteriano XV de Novembro de Guaranhuns e em 1950 veio para São José dos Campos para estudar no Instituto Tecnológico de Aeronáutica (ITA).</p>
   <p>Se formou Engenheiro Aeronáutico no ano de 1956, no ano de 1965, tirou o mestrado no ITA e em 1971 o doutorado na UNESP. Foi Professor Titular da Divisão de Aeronáutica do ITA, Professor Associado da Faculdade de Engenharia Mauá de 1965 a 1970. Reitor do ITA, de 1977 a 1982 e de 1989 a 1994 e Professor Titular e Diretor da Faculdade de Engenharia de Guaratinguetá, da UNESP.</p>
   <p>Foi membro do Conselho Deliberativo da FATEC de 1979 a 1981 e do Conselho Estadual de Educação de 1981 a 1984 e Secretário da Educação do Estado de São Paulo entre 1982 e 1983. Foi também conselheiro do CREA entre 1967 a 1971 e participou do conselho da FUNCATE no período de 1996 a 2007.</p>
   <p><a href="http://www.aeitaonline.com.br/wiki/index.php?title=Jessen_Vidal" target="_blank" class="jessen-link">Wikepedia</a></p>
   <p><a href="https://www.al.sp.gov.br/repositorio/legislacao/lei/2009/lei-13875-16.12.2009.html" target="_blank" class="jessen-link">Ficha Informativa - Assembleia Legislativa do Estado de São Paulo</a></p>
   <p><a href="https://www.al.sp.gov.br/noticia/?id=262504" target="_blank" class="jessen-link">Homenagem - Assembleia Legislativa do Estado de São Paulo</a></p>
 `
    },
    'parque-tecnologico': {
      titulo: 'Parque Tecnológico de São José dos Campos',
      conteudo: `
       <img src="statics/imgs/pictures/ParqueTecnologico2.png" alt="Parque Tecnológico" class="info-image">
       <p>O Parque Tecnológico São José dos Campos foi instituído pelo Decreto Municipal nº 12.367/2006, sendo um ambiente de inovação que abriga empresas de tecnologia, centros de pesquisa e instituições de ensino.</p>
       <p>A FATEC São José dos Campos está localizada dentro do Parque Tecnológico, o que proporciona aos alunos e professores um ambiente privilegiado para o desenvolvimento de projetos e pesquisas em parceria com empresas e instituições.</p>
       <p><a href="https://beacons.ai/pitsjc" target="_blank" class="parque-link">Visite o site do Parque Tecnológico</a></p>
     `
    },
    'cesar-lattes': {
      titulo: 'Quem foi Cesare Lattes?',
      conteudo: `
       <img src="statics/imgs/pessoas/lattes/cesare.png" alt="César Lattes" class="info-image">
       <p>Cesar Lattes (1924-2005) foi um físico brasileiro, considerado um dos cientistas mais importantes do país. Formou-se em física e matemática pela Universidade de São Paulo (USP).</p>
       <p>Seu trabalho mais conhecido foi a descoberta do méson pi (ou píon), uma partícula subatômica, realizada em 1947 quando tinha apenas 23 anos. Esta descoberta foi fundamental para o avanço da física nuclear e de partículas.</p>
       <p>Em sua homenagem, foi criada a Plataforma Lattes, sistema de currículos acadêmicos mantido pelo CNPq que se tornou padrão nacional para o registro da vida acadêmica de estudantes e pesquisadores do Brasil.</p>
       <div class="info-sources">
         <p>Fontes:</p>
         <p><a href="https://pt.wikipedia.org/wiki/C%C3%A9sar_Lattes#CITEREFLeite_Vieira2019" target="_blank" class="jessen-link">Wikpedia</a></p>
         <p><a href="https://www.ebiografia.com/cesar_lattes/" target="_blank" class="jessen-link">Biografia</a></p>
         <p><a href="https://educacao.uol.com.br/biografias/cesar-lattes.htm" target="_blank" class="jessen-link">Reportagem UOL</a></p>
       </div>
     `
    },
    'paula-souza': {
      titulo: 'Quem foi Paula Souza?',
      conteudo: `
       <img src="statics/imgs/pessoas/souza/souza.png" alt="Paula Souza" class="info-image">
       <p>Antônio Francisco de Paula Souza (1843-1917) foi um engenheiro e político brasileiro, formado na Europa. Destacou-se pela contribuição à educação técnica no país, tendo sido o fundador da Escola Politécnica de São Paulo (atual Poli-USP).</p>
       <p>Foi diretor da instituição por 24 anos e defendeu uma educação técnica voltada ao desenvolvimento nacional. Seu legado inspirou a criação do Centro Estadual de Educação Tecnológica Paula Souza (CEETEPS) em 1969, instituição que administra as FATECs e ETECs do estado de São Paulo.</p>
       <div class="info-sources">
         <p>Fontes:</p>
         <p><a href="https://www.poli.usp.br/institucional/diretoria/galeria-de-diretores/prof-dr-antonio-francisco-de-paula-souza" target="_blank" class="jessen-link">Escola Politécnica USP</a></p>
         <p><a href="https://www.cps.sp.gov.br/sobre-o-centro-paula-souza/" target="_blank" class="jessen-link">Centro Paula Souza</a></p>
       </div>
     `
    },
    'baja': {
      titulo: 'Projeto BAJA SAE BRASIL',
      conteudo: `
       <img src="statics/imgs/pictures/BAJA.jpeg" alt="BAJA" class="info-image">
       <p>O Projeto Baja SAE é desenvolvido por alunos de diversos cursos, principalmente Engenharia, com o objetivo de aplicar os conhecimentos teóricos em um projeto prático: projetar, construir e testar um veículo off-road.</p>
       <p>As equipes participam de competições nacionais e internacionais, onde são avaliadas em diversos aspectos, desde o projeto até o desempenho do veículo em provas dinâmicas e de resistência.</p>
       <p>Na FATEC São José dos Campos, o projeto Baja proporciona aos alunos a oportunidade de desenvolver habilidades técnicas e de gestão, trabalhando em equipe e aplicando conhecimentos de diversas áreas.</p>
       <div class="info-sources">
         <p>Fontes:</p>
         <p><a href="https://saebrasil.org.br/programas-estudantis/baja-sae-brasil" target="_blank" class="jessen-link">BAJA SAE BRASIL – ETAPA NACIONAL</a></p>
         <p><a href="https://www.cps.sp.gov.br/fatec-sao-jose-dos-campos-recebe-competicao-nacional-de-engenharia/" target="_blank" class="jessen-link">Fatec SJC recebe competição nacional de engenharia</a></p>
         <p><a href="https://pt.wikipedia.org/wiki/F%C3%B3rmula_SAE" target="_blank" class="jessen-link">Society of Automotive Engineers</a></p>
       </div>
     `
    },
    'guri': {
      titulo: 'A Incorporação da Aeronave AMT-600 Guri à Infraestrutura Didática da FATEC São José dos Campos',
      conteudo: `
       <img src="../statics/imgs/pictures/GURI/guri(1).jpg" alt="GURI" class="info-image">
       <p>No mês de setembro de 2016, a Faculdade de Tecnologia de São José dos Campos – Prof. Jessen Vidal (FATEC-SJC) integrou oficialmente à sua infraestrutura acadêmica a aeronave AMT-600 Guri, doada pela Agência Nacional de Aviação Civil (ANAC). Esta aquisição representa um avanço significativo na qualificação dos ambientes de aprendizagem voltados ao curso de Tecnologia em Manutenção de Aeronaves, promovendo o aprimoramento das atividades práticas essenciais à formação tecnológica dos discentes.</p>
       <p>A aeronave, fabricada em 2008 pela empresa brasileira AEROMOT, havia sido originalmente adquirida por meio do Projeto de Cooperação Técnica Internacional. Entretanto, após um incidente durante o voo de translado para o Aeroclube do Rio Grande do Sul (ARGS), com apenas três horas de operação, o equipamento permaneceu inoperante e estacionado por vários anos.</p>
       <p>O processo de obtenção foi iniciado por meio de articulações institucionais com a ANAC, culminando na emissão do Termo de Doação em janeiro de 2016. A logística de transporte envolveu o apoio de diferentes entidades, destacando-se a colaboração da Pontifícia Universidade Católica do Rio Grande do Sul (PUC-RS), do Comando da Aeronáutica (COMAER), do Departamento de Ciência e Tecnologia Aeroespacial (DCTA) e da Base Aérea de Canoas. A ação conjunta dessas instituições possibilitou o translado terrestre da aeronave até o campus da FATEC.</p>
       <p>A chegada da aeronave Guri não apenas enriqueceu o acervo técnico-pedagógico da instituição, mas também promoveu grande engajamento entre professores e alunos, incentivando a aprendizagem por meio da vivência prática em situações reais de manutenção e operação aeronáutica.</p>
       <div class="info-sources">
         <p>Fonte de Informações:</p>
         <p>Prof. Felix Strottmann – Coordenador do Curso de Tecnologia em Manutenção de Aeronaves - FATEC – Faculdade de São José dos Campos – Prof. Jessen Vidal – 21/Setembro/2016.</p>
       </div>
     `,
    },
    'brasilia': {
      titulo: 'EMB-120 Brasília: Desenvolvimento, Impacto e Legado da Aviação Regional Brasileira',
      conteudo: `
       <img src="../statics/imgs/pictures/EMB-120/EMB-120(5).png" alt="EMB-120" class="info-image">
       <p>O EMB-120 Brasília representa um dos marcos mais relevantes da indústria aeronáutica brasileira. Desenvolvido pela Embraer no início da década de 1980, o modelo foi concebido para atender ao mercado regional com uma aeronave turboélice pressurizada, eficiente e de alta confiabilidade. Com capacidade para 30 passageiros, a aeronave é equipada com dois motores Pratt & Whitney Canada PW118A, alcançando velocidades superiores a 580 km/h e operando a altitudes de até 25 mil pés.</p>
       <p>O desenvolvimento do EMB-120 teve como base o programa EMB-12X, que previa uma família de aeronaves com fuselagem comum em diferentes configurações. Embora apenas o EMB-121 Xingu tenha sido efetivamente fabricado inicialmente, a crescente demanda por transporte regional impulsionou a criação do Brasília, cujo primeiro voo ocorreu em julho de 1983. A Embraer adotou sistemas avançados para a época, como o EFIS, e rapidamente conquistou certificações internacionais, o que permitiu sua comercialização em diversos países.</p>
       <p>Durante sua vida operacional, foram desenvolvidas versões aprimoradas como a HOT & HIGH (1986), voltada para operações em ambientes extremos; a Enhanced Range (1992), com maior autonomia e capacidade de carga; e a versão Advanced (1994), que trouxe melhorias significativas em conforto, manutenção e operação em pistas não pavimentadas.</p>
       <p>Com mais de 350 unidades produzidas, o EMB-120 somou mais de quatro milhões de horas de voo e transportou mais de 60 milhões de passageiros. No Brasil, teve papel fundamental na integração regional aérea, sendo utilizado por diversas companhias nacionais. Sua relevância foi reconhecida internacionalmente, sendo eleito "Top Regional Airliner" nos EUA por três anos consecutivos.</p>
       <p>Em 2012, a aeronave EMB 120.167 foi doada pela Embraer à FATEC São José dos Campos – Prof. Jessen Vidal, contribuindo diretamente para o aprimoramento da formação técnica e prática dos estudantes da área de manutenção aeronáutica.</p>
       <div class="info-sources">
         <p>Fonte Bibliográfica:</p>
         <p><a href="http://www1.folha.uol.com.br/folha/turismo/preparese/aviao-embraer_brasilia.shtml" target="_blank" class="jessen-link">http://www1.folha.uol.com.br/folha/turismo/preparese/aviao-embraer_brasilia.shtml</a></p>
         <p>Marcos Resende* Especial para a Folha Online</p>
         <p>Prof. Felix A. Strottmann - FATEC</p>
       </div>
     `,
    },
    'helicoptero': {
      titulo: 'Evolução e Contribuições do Laboratório de Asas Rotativas e Drones da FATEC-SJC para a Formação Tecnológica em Aviação',
      conteudo: `
       <img src="../statics/imgs/pictures/Laboratorio/galpao.png" alt="Laboratórios" class="info-image">
       <p>O Laboratório de Asas Rotativas e Drones da FATEC São José dos Campos – Prof. Jessen Vidal tem desempenhado um papel estratégico na formação prática e tecnológica de estudantes dos cursos da área aeronáutica. Desde sua criação, a infraestrutura do laboratório tem evoluído continuamente com a aquisição e integração de componentes reais de helicópteros, simulações estruturais e desenvolvimento de projetos de engenharia, com foco em asas rotativas e sistemas não tripulados.</p>
       <p>As atividades tiveram início em 2016 com a incorporação de partes de aeronaves como o rotor do Schweizer 300 CB, Pantera AS 365K, Esquilo AS 350B e trem de pouso auxiliar do Pantera AS356, muitos deles adquiridos em parceria com a empresa Brascopter Projetos Aeronáuticos e Mecânicos Ltda.</p>
       <p>Entre 2017 e 2019, o laboratório ampliou suas atividades com a participação em competições como a Fórmula Drone SAE, e com a inauguração oficial do espaço no 1º semestre de 2018. Nesse período, destaca-se a instalação experimental de pás de madeira de balsa e testes mecânicos com o conjunto de "skid", cujo comportamento foi analisado por meio de gráficos de força versus deslocamento.</p>
       <p>Em 2020, foram desenvolvidos projetos complexos de proteção para o rotor de cauda do helicóptero Schweizer, detalhados com desenhos técnicos em CAD. As estruturas incluíam suportes metálicos, telas de proteção e sistemas de fixação por parafusos, sendo todas as peças dimensionadas com base em dados de manuais técnicos e medições fotográficas. O projeto demonstrou capacidade dos alunos em engenharia aplicada, desde o dimensionamento até a execução do protótipo.</p>
       <p>Durante os anos de 2021 a 2023, o laboratório seguiu em expansão com o desenvolvimento do projeto do Núcleo Estrutural de Hélices, incluindo elementos como longarina, braços de conexão, suportes e uso de materiais como honeycomb. A fixação de pás e testes de protótipo também foram realizados, culminando em resultados práticos no desenvolvimento da chamada "Pá Master".</p>
       <p>Além disso, destaca-se o projeto conceitual do Alpha One, futuro simulador de voo voltado a asas rotativas, indicando a continuidade das inovações tecnológicas previstas para o laboratório.</p>
       <p>A trajetória do Laboratório de Asas Rotativas e Drones da FATEC-SJC revela um ecossistema acadêmico inovador, orientado para o aprendizado baseado em projetos reais e aplicação direta de conhecimentos de engenharia, contribuindo significativamente para a qualificação de mão de obra especializada no setor aeronáutico nacional.</p>
     `,
    },
    'masanori': {
      titulo: 'Entrevista com o Professor Fernando Masanori (22/11/2024)',
      conteudo: `
       <img src="../statics/imgs/pessoas/masanori/masanori7.jpeg" alt="Masanori" class="info-image">
       <p>Fernando Masanori nasceu em 1º de setembro de 1964, em São Paulo. De origem japonesa, teve uma infância marcada por dificuldades financeiras, especialmente após a separação dos pais e a falência do negócio do pai. Desde cedo, trabalhou para ajudar a sustentar a família e, com a ajuda de uma prima, conseguiu cursar o pré-vestibular e ingressar na USP, onde se formou em Ciências da Computação em 1988. O contato com o Opus Dei durante a graduação teve grande influência em sua formação ética e pessoal.</p>
       <p>Profissionalmente, Masanori teve uma carreira sólida em grandes empresas como Itaú, Mastercard e PwC. Entretanto, após um episódio de burnout, decidiu mudar de rumo: mudou-se para São José dos Campos, fez mestrado no ITA e iniciou um doutorado, que precisou interromper em 2005 para cuidar do pai doente. Após essa fase difícil, voltou-se para a docência, mantendo-se ainda ativo no mercado, especialmente em pesquisa computacional na UNIVAP.</p>
       <p>Em 2006, viu na criação da FATEC São José dos Campos uma oportunidade de começar algo do zero. Através de uma recomendação informal, começou a lecionar no curso de Logística, e no ano seguinte implantou o curso de Informática, assumindo sua coordenação. Enfrentou desafios como a falta de professores efetivos e conduziu 32 concursos para regularização. Desde o início, promoveu metodologias que valorizavam o erro como etapa de aprendizado e aproximou os alunos da comunidade Python e de empresas parceiras.</p>
       <p>O início no Parque Tecnológico foi marcante. Apesar da estrutura futurista, o local apresentava dificuldades como a ausência de janelas e problemas com o ar-condicionado. Ainda assim, a união da comunidade acadêmica e eventos como a Semana de Inovação Tecnológica fortaleceram a identidade institucional. A mudança para o novo prédio trouxe laboratórios bem equipados, graças à sua articulação antecipada com fornecedores.</p>
       <p>Durante a pandemia, Masanori teve contato precoce com os impactos da COVID-19, ao manter comunicação com ex-alunos que moravam na China. A FATEC se destacou pela rápida adaptação ao ensino remoto, preservando o vínculo com os alunos e oferecendo suporte emocional essencial em tempos de isolamento. Ele destaca que a pandemia evidenciou a importância da faculdade não só como transmissora de conteúdo, mas também como rede de apoio social.</p>
       <p>O professor vê na FATEC um espaço de transformação real, com inúmeros ex-alunos hoje atuando em empresas como Facebook, Oracle, IBM e startups regionais. Ressalta a importância de manter o sentimento de pertencimento que marcou os primeiros anos da unidade, quando alunos e professores formavam uma comunidade próxima, capaz de realizar eventos de forma autônoma e engajada. Mesmo com o crescimento da instituição, acredita ser essencial preservar esses valores e continuar promovendo impacto na sociedade.</p>
     `,
    },
    'arakaki': {
      titulo: 'Resumo da Entrevista com o Professor Reinaldo Gen Ichiro Arakaki (30/03/2025)',
      conteudo: `
       <img src="../statics/imgs/pessoas/arakaki/arakaki.jpg" alt="Arakaki" class="info-image">
       <p>Reinaldo Arakaki nasceu em 10 de setembro, na cidade de São Paulo, no bairro do Bom Retiro. Formado em Física pela USP, mudou-se para São José dos Campos em 1989 para cursar mestrado em Sensoriamento Remoto e, posteriormente, doutorado em Computação pelo INPE, concluído em 2000. Sua trajetória como educador começou ainda antes do mestrado, lecionando matemática em escolas como o Colégio Bilac, e depois atuando na UNIVAP.</p>
       <p>Após o doutorado, participou da implantação da UNIFESP em São José dos Campos. No entanto, em 2009, optou por ingressar na FATEC, onde viu um modelo educacional que o encantou — com foco na formação técnica e humana dos alunos, muitos deles oriundos de escolas públicas e em busca de ascensão profissional. Arakaki se tornou coordenador de cursos ligados à área de TI, sucedendo o professor Masanori, e foi fundamental na criação e estruturação dos cursos de Análise e Desenvolvimento de Sistemas (ADS) e Desenvolvimento de Software Multiplataforma (DSM).</p>
       <p>Durante seu tempo na FATEC, acompanhou a evolução da unidade desde os tempos no Parque Tecnológico — onde as instalações eram improvisadas, com salas sem janelas e problemas recorrentes no ar-condicionado — até a mudança para o prédio atual em 2011. Foi responsável por acompanhar de perto a obra, cuja mestre de obras, curiosamente, foi sua ex-aluna. Já no novo prédio, coordenou tanto o curso de Informática com ênfase em Banco de Dados quanto o novo curso de ADS, assumindo dupla carga até a reorganização institucional que separou oficialmente as coordenações.</p>
       <p>Arakaki também é fortemente engajado em atividades voluntárias. Coordena a Olimpíada Brasileira de Matemática (OBM) desde 1994 e a OBMEP desde 2005, além de atuar no cursinho comunitário VESTEC — projeto social que sofreu retração com a pandemia, mas que ele ainda busca reativar. Participa também da organização de maratonas de programação como o InterFATECs e a Maratona Estadual.</p>
       <p>Na pandemia, a FATEC destacou-se por sua rápida adaptação ao ensino remoto, especialmente na área de TI. Arakaki destaca que, enquanto muitas instituições perderam tempo aguardando um retorno presencial, a FATEC manteve aulas com qualidade, aproveitando a familiaridade dos alunos com ambientes digitais. No entanto, ressalta que o ensino online funciona melhor nos semestres avançados, quando os alunos já têm mais autonomia. Nos primeiros semestres, o contato presencial é essencial para o desenvolvimento técnico, emocional e comportamental.</p>
       <p>O que o mantém motivado após mais de 16 anos na FATEC é o contato renovador com os alunos. Cada nova turma representa novas histórias e novas oportunidades de transformação. Muitos ex-alunos o procuram para agradecer e compartilhar conquistas profissionais — alguns atuando até fora do país, como em Londres, no Facebook. Ele reconhece que a FATEC tem sido um verdadeiro divisor de águas na vida de muitos, principalmente por acolher e desenvolver jovens com potencial, mas que muitas vezes só precisam de uma chance.</p>
       <p>Atento às transformações do mercado, Arakaki reconhece o impacto da inteligência artificial na área de TI. Destaca que ferramentas como ChatGPT, Copilot e DeepSeek já são usadas pelos alunos no dia a dia, mas ressalta que é essencial entender o que se está fazendo — a IA é um apoio, mas não substitui o domínio do conhecimento. Ele vê essas ferramentas como aliadas no processo de ensino, desde que utilizadas com consciência.</p>
       <p>Por fim, acredita que o ensino deve ir além do conteúdo técnico. O mercado exige cada vez mais soft skills — como empatia, comunicação e trabalho em equipe — habilidades que se tornaram tão importantes quanto as hard skills. Segundo ele, "você é contratado pelas suas hard skills e demitido pelas suas soft skills", e a FATEC, com suas metodologias inovadoras e projetos interdisciplinares, é um ambiente fértil para o desenvolvimento completo dos alunos.</p>
     `,
    },
    'sales': {
      titulo: 'Resumo da Entrevista com o Professor Antonio Wellington Sales Rios',
      conteudo: `
       <img src="../statics/imgs/pessoas/sales/salesAula.jpg" alt="Sales" class="info-image">
       <p>Antonio Wellington Sales Rios nasceu em Fortaleza (CE), em 20 de junho de 1954. Mudou-se para São Paulo em 1971, aos 17 anos, para cursar a Escola de Especialistas da Aeronáutica (EEAer) em Guaratinguetá. Formado como 3º Sargento, ingressou posteriormente na Academia da Força Aérea (AFA) e, mais tarde, no Instituto Tecnológico de Aeronáutica (ITA), onde concluiu a graduação em Engenharia de Infraestrutura Aeronáutica (1981) e o mestrado (1991). Ao longo de sua carreira na Força Aérea, trabalhou na Diretoria de Engenharia da Aeronáutica e no Instituto de Proteção ao Voo (IPV), onde contribuiu com o desenvolvimento do SIPAR — um simulador de radar de aproximação que foi utilizado em diversos países da América Latina.</p>
       <p>Em 1995, ingressou no Centro Paula Souza, sendo diretor da FATEC Guaratinguetá entre 1998 e 2002. Em 2006, foi convidado pelo superintendente do CPS para implantar a FATEC São José dos Campos, tornando-se seu primeiro diretor, função que exerceu até 2010. A criação da unidade foi fruto de uma parceria entre o CPS e a Prefeitura Municipal de São José dos Campos (PMSJC), com o CPS responsável pela operação e a prefeitura fornecendo a infraestrutura.</p>
       <p>Inicialmente, cogitou-se usar um prédio escolar no bairro 31 de Março, mas, devido às condições precárias, optou-se por adaptar emergencialmente o antigo prédio da fábrica da Solectron, recém-incorporado ao futuro Parque Tecnológico de São José dos Campos. A estrutura da Solectron surpreendeu positivamente, especialmente por já possuir uma rede de computadores sofisticada, o que permitiu a instalação dos primeiros laboratórios.</p>
       <p>O início das aulas foi improvisado, com a contratação emergencial de professores para o curso de Logística e Transportes. Ainda nesse período, o professor Wellington contou com o apoio da esposa e dos filhos para montar o primeiro laboratório de informática — instalando e configurando os equipamentos durante um final de semana para garantir o início das aulas. Como a FATEC foi a primeira instituição a ocupar a estrutura do Parque Tecnológico, instalou-se na parte nobre do prédio, com salas envidraçadas e climatização central — que frequentemente falhava, tornando as aulas insuportáveis devido ao calor.</p>
       <p>Em 2007, foi criado o curso de Tecnologia em Informática com ênfase em Banco de Dados e Redes. Em 2009, em parceria com a EMBRAER, surgiram os cursos voltados à área aeronáutica: Manutenção e Manufatura Aeronáutica. A construção do prédio próprio da FATEC foi concluída em 2011, quando se iniciou a mudança para a sede definitiva, com apoio de professores e funcionários. Novos cursos também foram criados nesse momento, como os de Estruturas Leves (posteriormente rebatizado para Projetos de Estruturas Aeronáuticas), Automação Aeronáutica (mais tarde Manufatura Avançada) e Análise e Desenvolvimento de Sistemas.</p>
       <p>Após deixar a direção em 2011, Wellington continuou contribuindo com a instituição, atuando como coordenador do curso de Projetos de Estruturas Aeronáuticas até 2016. Atualmente, continua como professor, ministrando disciplinas relacionadas a meio ambiente, redes de computadores e sustentabilidade em diversos cursos tecnológicos da FATEC SJC.</p>
       <p>Sua trajetória é marcada pelo pioneirismo, dedicação e espírito colaborativo. Além de professor, também é empreendedor — fundador da empresa Micro Assist Informática Ltda. Seu papel foi essencial para a fundação, estruturação e consolidação da FATEC São José dos Campos, sendo lembrado como uma figura central nos primeiros anos da unidade e na formação de sua identidade institucional.</p>
     `,
    },
    'jeronimo': {
      titulo: 'Resumo da Entrevista com o Professor Nilo Jeronimo Vieira (Março de 2023)',
      conteudo: `
       <img src="../statics/imgs/pessoas/jeronimo/jeronimo3.jpeg" alt="Jeronimo" class="info-image">
       <p>Professor Nilo Jeronimo Vieira, mineiro de Contagem (MG), mudou-se ainda criança para Itaquaquecetuba (SP), onde viveu até os 26 anos. De origem humilde, encontrou na leitura e nas músicas o gosto pela língua inglesa, tornando-se apaixonado pela educação desde cedo. Casado e pai de três filhos e três netas, mudou-se para São José dos Campos em 1993, após se casar com sua atual esposa. Formado em Letras (Português/Inglês) pela Universidade Cidade de São Paulo em 1991, iniciou sua trajetória como professor quase por acaso, após ser indicado por sua madrinha para cobrir uma vaga emergencial em uma escola estadual.</p>
       <p>Antes da docência, Nilo teve uma carreira diversificada: serviu na Força Aérea Brasileira, trabalhou em empresas como as Lojas Mappin, na Câmara Municipal de São Paulo, e em funções administrativas. Sua transição definitiva para o magistério se deu após essa primeira experiência como professor, tornando-se sua vocação permanente.</p>
       <p>Nilo teve papel fundamental na criação da FATEC São José dos Campos, mesmo antes da sua fundação oficial. Entre 2003 e 2004, liderou — junto com o professor Gilmar Camargo — uma campanha com abaixo-assinado pela instalação de uma FATEC na cidade. O movimento resultou em mais de 50 mil assinaturas, com apoio de figuras como o astronauta Marcos Pontes e o deputado estadual Luis Carlos Gondim. O projeto foi acolhido pelo Governo de São Paulo, sendo implantado com a ajuda do professor Antonio Wellington Rios, primeiro diretor da unidade.</p>
       <p>Foi o primeiro professor contratado da FATEC São José dos Campos, tendo sua entrevista ainda realizada no prédio da escola estadual no bairro 31 de Março. Em março de 2006, iniciou suas aulas, sendo responsável pela implantação das disciplinas de Língua Inglesa, Comunicação Social e Português em todos os cursos.</p>
       <p>O primeiro curso da FATEC foi o de Logística, cuja primeira turma era composta por alunos maduros e engajados. Os coordenadores iniciais incluíam o Prof. Arakaki (Informática), Prof. Valter (Logística) e Prof. Sergio Espel (Manutenção de Aeronaves). As aulas ocorriam no espaço adaptado do Parque Tecnológico de São José dos Campos, com boas condições, apesar das limitações de espaço e da ausência de recursos como computadores em sala.</p>
       <p>A mudança para o prédio atual ocorreu em dezembro de 2010, ampliando significativamente a infraestrutura da unidade: mais salas de aula, laboratórios de informática e mecânica, e possibilidade de expansão dos cursos. Atualmente, a FATEC oferece 10 cursos, com 400 novos alunos por semestre. O novo prédio foi equipado pelo Governo do Estado com carteiras, mesas, datashows, computadores e lousas modernas.</p>
       <p>Professor Nilo foi também responsável pela implantação do programa Ciências sem Fronteiras no Centro Paula Souza e do Núcleo de Relações Internacionais da FATEC, promovendo intercâmbios e acesso a exames como TOEIC e TOEFL. Ele ressalta que a FATEC é a única faculdade pública a oferecer inglês com foco em conversação em todos os cursos, com carga horária de 4 a 6 semestres. A instituição também passou a integrar a iniciativa internacional CDIO (Conceber, Desenvolver, Implementar e Operacionalizar), sendo a primeira FATEC a fazer parte da rede, o que ele considera um marco para o ensino de engenharia e tecnologia no Brasil.</p>
       <p>Professor Nilo demonstra entusiasmo com o futuro da FATEC, acreditando em seu papel transformador no ensino público de qualidade, gratuito e voltado ao desenvolvimento pessoal e profissional dos alunos.</p>
     `,
    },
    'tozi': {
      titulo: 'Resumo da Entrevista com o Professor Luiz Antonio Tozi (20/09/2024)',
      conteudo: `
       <img src="../statics/imgs/pessoas/tozi/tozi.png" alt="Tozi" class="info-image">
       <p>Luiz Antonio Tozi é engenheiro naval pela USP, mestre e doutor pelo ITA, com larga experiência acadêmica, empresarial e em gestão pública. Já atuou como Secretário Executivo do Ministério da Educação (vice-ministro), Vice-Superintendente do Centro Paula Souza, conselheiro em empresas, professor da FGV e, desde 2011, é diretor da FATEC São José dos Campos.</p>
       <p>Com uma formação marcada por forte influência familiar — mãe professora e pai engenheiro da Embraer —, Tozi cresceu em um ambiente voltado ao conhecimento e à responsabilidade. Passou por escolas públicas e religiosas e ingressou na USP após tentativas em outras universidades. Chegou a montar empresas de alumínio e informática, mas sua paixão por ensinar falou mais alto, levando-o a retornar à docência.</p>
       <p>Ingressou na FATEC em 2006 como professor do curso de Logística, após indicação do ITA. Suas primeiras aulas foram desafiadoras, mas logo consolidou sua atuação. Assumiu a direção em agosto de 2011, já no novo prédio da unidade — não participou da construção, mas foi essencial na infraestrutura externa: vias de acesso, segurança, iluminação e a integração da FATEC com o entorno.</p>
       <p>Tozi destaca que a FATEC São José nasceu junto ao Parque Tecnológico de São José dos Campos com um diferencial: não formar apenas mão de obra, mas formar mentes capazes de pensar, inovar e atuar nos ecossistemas de tecnologia. Essa concepção foi inspirada por políticas públicas avançadas, como o Sistema Paulista de Parques Tecnológicos e o modelo de "tríplice hélice" (integração entre governo, academia e empresas). A FATEC São José representa um protótipo bem-sucedido dessa política, unindo prática, inovação e educação.</p>
       <p>Ele enfatiza que o diferencial da FATEC está na formação de mindset inovador, e não apenas técnico. A estrutura acadêmica foi pensada para fomentar soluções criativas e parcerias, especialmente com o setor privado. Segundo ele, essa abordagem gerou visibilidade nacional, sendo uma das Fatecs que mais envia alunos para mestrados no ITA, INPE e DCTA, além de atender a demandas do mercado com alto nível de empregabilidade.</p>
       <p>Durante a pandemia, Tozi destaca que a grande lição foi: "gente é importante". A pandemia evidenciou que a aprendizagem é um fenômeno humano, não apenas um processo técnico ou digital. O ensino remoto revelou os limites das tecnologias quando se perde a interação e o vínculo humano, algo essencial à educação de verdade. Também criticou a tendência de "processualização" excessiva no ensino — tanto nas empresas quanto nas escolas — e defendeu a importância das soft skills, que ganham destaque justamente porque os modelos engessados falharam.</p>
       <p>Com visão crítica e realista, Tozi analisa os desafios da educação básica no Brasil, marcada por um foco exclusivo no ENEM, em detrimento da formação cidadã. Ele vê a FATEC São José como uma exceção positiva, que já evoluiu da formação por habilidades para a atuação em atividades profissionais, com foco em competências reais.</p>
       <p>Durante sua gestão, destaca que não realizou grandes mudanças internas — manteve a equipe formada por seu antecessor, Professor Wellington — mas buscou fortalecer a FATEC como polo de inovação, inclusive criando o conselho consultivo externo e introduzindo metodologias como o CDIO e os projetos API.</p>
       <p>Tozi vê a FATEC São José como uma escola viva, em constante transformação, e não acomodada. Reafirma que ali não é lugar de aplicar soluções prontas, mas de prototipar, experimentar e inovar com coragem e visão coletiva. Finaliza destacando que seu papel tem sido garantir autonomia para que a escola continue sendo um espaço de desenvolvimento humano, acadêmico e social, sempre conectada com o ecossistema que a cerca.</p>
     `,
    },
  };

  saibaMaisLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      if (!this.getAttribute('target')) {
        e.preventDefault();

        let infoId = this.getAttribute('data-id');

        if (infoId === 'entrevistas') {
          window.location.href = 'templates/individuais/entrevistas.html';
          return;
        }

        if (infoId === 'aeronaves') {
          window.location.href = 'templates/individuais/aeronaves.html';
          return;
        }

        if (!infoId) {
          const cardElement = this.closest('.card');
          const cardTitle = cardElement.querySelector('.card-title').textContent.trim();

          if (cardTitle.includes('EMB- 120')) {
            infoId = 'emb-120';
          } else if (cardTitle.includes('Guri na Fatec')) {
            infoId = 'guri';
          } else if (cardTitle.includes('Catálogos dos Laboratórios')) {
            infoId = 'laboratorios';
          }
        }

        if (infoId && detalhesInfo[infoId]) {
          window.mostrarInformacoes(infoId, detalhesInfo);
        } else {
          console.log('Informações para o ID:', infoId, 'não encontradas');
          alert('Informações não disponíveis no momento. Em breve teremos mais conteúdo!');
        }
      }
    });
  });
});
