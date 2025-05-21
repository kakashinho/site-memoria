document.addEventListener('DOMContentLoaded', function() {
  
  const tituloPrincipal = document.getElementById('titulo-principal');
  if (tituloPrincipal) {
    console.log('Título principal encontrado:', tituloPrincipal.textContent);
    tituloPrincipal.addEventListener('click', function() {
      alert('Bem-vindo ao Centro de Memória FATEC!');
    });
  }
  
  
  const secaoInformacoes = document.getElementById('informacoes-detalhadas');
  if (secaoInformacoes) {
    console.log('Seção de informações detalhadas encontrada');
    
   
    window.mostrarInformacoes = function(infoId, detalhesInfo) {
      if (detalhesInfo[infoId]) {
        secaoInformacoes.innerHTML = `
          <div class="info-container">
            <h2 class="info-title">${detalhesInfo[infoId].titulo}</h2>
            <div class="info-content">
              <div class="info-bio">
                ${detalhesInfo[infoId].conteudo}
              </div>
            </div>
            <button id="fechar-info" style="display: block; margin: 20px auto; padding: 8px 15px; background-color: #005c6e; color: white; border: none; border-radius: 4px; cursor: pointer;">Fechar</button>
          </div>
        `;
        
        secaoInformacoes.style.display = 'block';
        secaoInformacoes.scrollIntoView({ behavior: 'smooth' });
        
      
        const botaoFechar = document.getElementById('fechar-info');
        if (botaoFechar) {
          console.log('Botão de fechar encontrado');
          botaoFechar.addEventListener('click', function() {
            secaoInformacoes.style.display = 'none';
          });
        }
      }
    };
  }
  
  
  const saibaMaisLinks = document.querySelectorAll('.saiba-mais');
  
  
  const detalhesInfo = {
    'fatec-sjc': {
      titulo: 'FATEC São José dos Campos',
      conteudo: `
        <img src="statics/imgs/pictures/fatec.png" alt="Fatec São José dos Campos" class="info-image">
        <p>A Fatec São José dos Campos - Prof. Jessen Vidal foi criada em 2 de março de 2006. É uma faculdade pública estadual que oferece cursos superiores de tecnologia gratuitos.</p>
        <p>A instituição é mantida pelo Centro Paula Souza, autarquia do Governo do Estado de São Paulo vinculada à Secretaria de Desenvolvimento Econômico, Ciência, Tecnologia e Inovação.</p>
        <p>Localizada no Parque Tecnológico de São José dos Campos, a Fatec está inserida em um ambiente de inovação e desenvolvimento tecnológico, o que proporciona aos alunos contato direto com empresas e instituições de pesquisa.</p>

        <div class="video-container">
          <video controls width="100%">
            <source src="statics/video/CENTRO DE MEMÓRIA.mp4" type="video/mp4">
            Seu navegador não suporta a reprodução de vídeos.
          </video>
        </div>
      `
    },
    'centro-memorias': {
      titulo: 'Centro de Memórias da FATEC',
      conteudo: `
        <img src="statics/imgs/pictures/fatec centro memoria.jpg" alt="Centro de Memórias" class="info-image">
        <p>O Centro de Memórias da FATEC São José dos Campos foi criado pela Portaria 01 de 30/06/2022, com o objetivo de resgatar e preservar a memória da instituição por meio de inventário, acervo e ações culturais ligadas à história da educação tecnológica.</p>
        <p>Este projeto visa documentar a trajetória da instituição, seus professores, alunos e contribuições para o desenvolvimento tecnológico da região.</p>
      `
    },
    'jessen-vidal': {
  titulo: 'Quem foi Jessen Vidal?',
  conteudo: `
    <img src="statics/imgs/pessoas/jessenVidal.jpg" alt="Professor Jessen Vidal" class="info-image">
    <p>O Prof. Jessen Vidal nasceu no município pernambucano de Guaranhuns, em 21 de novembro de 1930, filho de Sólon Vidal e Katy Leitão Vidal. Na infância e adolescência frequentou o Colégio Presbiteriano XV de Novembro de Guaranhuns e em 1950 veio para São José dos Campos para estudar no Instituto Tecnológico de Aeronáutica (ITA).</p>
    <p>Se formou Engenheiro Aeronáutico no ano de 1956, no ano de 1965, tirou o mestrado no ITA e em 1971 o doutorado na UNESP. Foi Professor Titular da Divisão de Aeronáutica do ITA, Professor Associado da Faculdade de Engenharia Mauá de 1965 a 1970. Reitor do ITA, de 1977 a 1982 e de 1989 a 1994 e Professor Titular e Diretor da Faculdade de Engenharia de Guaratinguetá, da UNESP.</p>
    <p>Foi membro do Conselho Deliberativo da FATEC de 1979 a 1981 e do Conselho Estadual de Educação de 1981 a 1984 e Secretário da Educação do Estado de São Paulo entre 1982 e 1983. Foi também conselheiro do CREA entre 1967 a 1971 e participou do conselho da FUNCATE no período de 1996 a 2007.</p>
    <p><a href="http://www.aeitaonline.com.br/wiki/index.php?title=Jessen_Vidal" target="_blank" class="jessen-link">Wikpedia</a></p>
    <p><a href="https://www.al.sp.gov.br/repositorio/legislacao/lei/2009/lei-13875-16.12.2009.html" target="_blank" class="jessen-link">Ficha Informativa - Assembleia Legislativa do Estado de São Paulo</a></p>
    <p><a href="https://www.al.sp.gov.br/noticia/?id=262504" target="_blank" class="jessen-link">Homenagem - Assembleia Legislativa do Estado de São Paulo</a></p>
  `
},
    'parque-tecnologico': {
      titulo: 'Parque Tecnológico de São José dos Campos',
      conteudo: `
        <img src="statics/imgs/pictures/parqueTecnologico.png" alt="Parque Tecnológico" class="info-image">
        <p>O Parque Tecnológico São José dos Campos foi instituído pelo Decreto Municipal nº 12.367/2006, sendo um ambiente de inovação que abriga empresas de tecnologia, centros de pesquisa e instituições de ensino.</p>
        <p>A FATEC São José dos Campos está localizada dentro do Parque Tecnológico, o que proporciona aos alunos e professores um ambiente privilegiado para o desenvolvimento de projetos e pesquisas em parceria com empresas e instituições.</p>
        <p><a href="https://beacons.ai/pitsjc" target="_blank" class="parque-link">Visite o site do Parque Tecnológico</a></p>
      `
    },
    'cesar-lattes': {
      titulo: 'Quem foi Cesare Lattes?',
      conteudo: `
        <img src="statics/imgs/pessoas/lattes.jpg" alt="César Lattes" class="info-image">
        <p>Cesar Lattes (1924-2005) foi um físico brasileiro, considerado um dos cientistas mais importantes do país. Formou-se em física e matemática pela Universidade de São Paulo (USP).</p>
        <p>Seu trabalho mais conhecido foi a descoberta do méson pi (ou píon), uma partícula subatômica, realizada em 1947 quando tinha apenas 23 anos. Esta descoberta foi fundamental para o avanço da física nuclear e de partículas.</p>
        <p>Em sua homenagem, foi criada a Plataforma Lattes, sistema de currículos acadêmicos mantido pelo CNPq que se tornou padrão nacional para o registro da vida acadêmica de estudantes e pesquisadores do Brasil.</p>
      `
    },
    'paula-souza': {
      titulo: 'Quem foi Paula Souza?',
      conteudo: `
        <img src="statics/imgs/pessoas/souza.png" alt="Paula Souza" class="info-image">
        <p>Antônio Francisco de Paula Souza (1843-1917) foi um engenheiro e político brasileiro, formado na Europa. Destacou-se pela contribuição à educação técnica no país, tendo sido o fundador da Escola Politécnica de São Paulo (atual Poli-USP).</p>
        <p>Foi diretor da instituição por 24 anos e defendeu uma educação técnica voltada ao desenvolvimento nacional. Seu legado inspirou a criação do Centro Estadual de Educação Tecnológica Paula Souza (CEETEPS) em 1969, instituição que administra as FATECs e ETECs do estado de São Paulo.</p>
      `
    },
    'baja': {
      titulo: 'Projeto BAJA SAE BRASIL',
      conteudo: `
        <img src="statics/imgs/pictures/BAJA.jpeg" alt="BAJA" class="info-image">
        <p>O Projeto Baja SAE é desenvolvido por alunos de diversos cursos, principalmente Engenharia, com o objetivo de aplicar os conhecimentos teóricos em um projeto prático: projetar, construir e testar um veículo off-road.</p>
        <p>As equipes participam de competições nacionais e internacionais, onde são avaliadas em diversos aspectos, desde o projeto até o desempenho do veículo em provas dinâmicas e de resistência.</p>
        <p>Na FATEC São José dos Campos, o projeto Baja proporciona aos alunos a oportunidade de desenvolver habilidades técnicas e de gestão, trabalhando em equipe e aplicando conhecimentos de diversas áreas.</p>
      `
    }
  };
  
  saibaMaisLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      if (!this.getAttribute('target')) {
        e.preventDefault();
        
        
        let infoId = this.getAttribute('data-id');
        
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