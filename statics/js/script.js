document.addEventListener('DOMContentLoaded', function() {
  const detalhesInfo = {
    'jessen-vidal': {
      titulo: 'Quem foi Jessen Vidal?',
      conteudo: `
        <img src="statics/imgs/pessoas/jessenVidal.jpg" alt="Professor Jessen Vidal" class="info-image">
        <p>O Prof. Jessen Vidal nasceu no município pernambucano de Guaranhuns, em 21 de novembro de 1930, filho de Sólon Vidal e Katy Leitão Vidal. Na infância e adolescência frequentou o Colégio Presbiteriano XV de Novembro de Guaranhuns e em 1950 veio para São José dos Campos para estudar no Instituto Tecnológico de Aeronáutica (ITA).</p>
        <p>Se formou Engenheiro Aeronáutico no ano de 1956, no ano de 1965, tirou o mestrado no ITA e em 1971 o doutorado na UNESP. Foi Professor Titular da Divisão de Aeronáutica do ITA, Professor Associado da Faculdade de Engenharia Mauá de 1965 a 1970. Reitor do ITA, de 1977 a 1982 e de 1989 a 1994 e Professor Titular e Diretor da Faculdade de Engenharia de Guaratinguetá, da UNESP.</p>
        <p>Foi membro do Conselho Deliberativo da FATEC de 1979 a 1981 e do Conselho Estadual de Educação de 1981 a 1984 e Secretário da Educação do Estado de São Paulo entre 1982 e 1983. (Governo José Maria Marin). Foi também conselheiro do CREA entre 1967 a 1971 e participou do conselho da FUNCATE (Fundação de Projetos de Ciência, Aplicações e Tecnologia Espacial) no período de 1996 a 2007. Na vida pessoal, casou-se com Priscila de Macedo Custódio Vidal em 1958 e teve como filhos. Jessen Custodio Vidal Filho, Priscila Cristina Custódio Vidal Milioni e Ricardo Custódio Vidal. Faleceu em 12 de janeiro de 2009 em São José dos Campos, SP. Em 16 de dezembro de 2009 através da lei PL 379/2009 do deputado Hélio Nishimoto foi dado a denominação de "Professor Jessen Vidal" a Faculdade de Tecnologia de São José dos Campos (FATEC).</p>
        <div class="info-sources">
          <p>Fontes:</p>
          <p>http://www.aeitaonline.com.br/wiki/index.php?title=Jessen_Vidal</p>
          <p>https://www.al.sp.gov.br/repositorio/legislacao/lei/2009/lei-13875-16.12.2009.html</p>
          <p>https://www.al.sp.gov.br/noticia/?id=262504</p>
        </div>
      `,
    }
  };

  const saibaMaisLinks = document.querySelectorAll('.saiba-mais');
  const secaoInformacoes = document.getElementById('informacoes-detalhadas');

  saibaMaisLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      if (!this.getAttribute('target')) {
        e.preventDefault();
        
        // Verificar se o link tem um data-id
        let infoId = this.getAttribute('data-id');
        
        // Se não tiver data-id, tentar identificar pelo título do card
        if (!infoId) {
          const cardElement = this.closest('.card');
          const cardTitle = cardElement.querySelector('.card-title').textContent.trim();
          
          if (cardTitle.includes('Jessen Vidal')) {
            infoId = 'jessen-vidal';
          }
        }
        
        // Se tiver informações para mostrar
        if (infoId && detalhesInfo[infoId]) {
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
          
          document.getElementById('fechar-info').addEventListener('click', function() {
            secaoInformacoes.style.display = 'none';
          });
        }
      }
    });
  });
});