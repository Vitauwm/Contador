// Contador de tempo juntos
function calcularTempoJuntos() {
  const dataInicio = new Date("2023-07-22");
  const agora = new Date();

  const diffTempo = agora - dataInicio;

  const anos = Math.floor(diffTempo / (1000 * 60 * 60 * 24 * 365.25)); // Considera anos bissextos
  const dias = Math.floor((diffTempo / (1000 * 60 * 60 * 24)) % 365.25);
  const horas = Math.floor((diffTempo / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diffTempo / (1000 * 60)) % 60);
  const segundos = Math.floor((diffTempo / 1000) % 60);

  document.getElementById("contador").textContent =
    `${anos} anos, ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

// Função para verificar a data e ajustar a página
function ajustarTematica() {
  const agora = new Date();
  const mural = document.querySelector(".mural");
  const loveText = document.querySelector(".love-text");
  const title = document.querySelector(".title h1");

  // Temática de Natal
  if (agora.getMonth() === 11 && agora.getDate() === 26) {
    title.textContent = "Feliz Natal, Meu amor!";
    loveText.innerHTML = "<p>Que nosso amor seja tão mágico quanto esta data especial. Feliz Natal, meu amor! 🎄❤️</p>";
    mural.innerHTML = ` 
      <iframe width="560" height="315" src="https://www.youtube.com/embed/jNRXFk-9ksk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `;
  }
  // Temática de Ano Novo
  else if (agora.getMonth() === 11 && agora.getDate() === 31) {
    title.textContent = "Feliz Ano Novo, Victor e Lucia!";
    loveText.innerHTML = "<p>Que nosso amor cresça ainda mais neste novo ano. Feliz Ano Novo, meu amor! 🎆❤️</p>";
    mural.innerHTML = ` 
      <div style="text-align: center; padding: 20px;">
        <img src="https://i.ibb.co/rkw0zp3/2c828434019628e10dcfd2eb4bbaa451.jpg" alt="Ano Novo" style="max-width: 100%; height: auto; margin: 0 auto;">
      </div>
    `;
  }

  // Comemoração do aniversário de namoro (todo dia 22)
  else if (agora.getDate() === 22) {
    title.textContent = "Mais um mês com Amor!";
    loveText.innerHTML = "<p>Hoje celebramos mais um mês de amor e cumplicidade. Te amo, meu amor! Aqui estarão todos os motivos para eu te amar 💕</p>";
  
    // Lista de qualidades
    const qualidades = [
      "Seu sorriso.",
      "Seu cabelo.",
      "Como você me faz sentir especial.",
      "Como a gente se ama.",
      "O jeito que você se preocupa comigo.",
      "Sua companhia.",
      "Como você é inteligente.",
      "Quando você faz seus lindos desenhos.",
      "Quando você toca músicas lindas (principalmente se for pisadinha, haha).",
      "Como você está sempre me apoiando.",
      "Seu amor.",
      "Sua alegria.",
      "Seus beijos e abraços.",
      "Como você faz qualquer lugar se tornar especial.",
      "O jeito como você me motiva a ser uma pessoa melhor.",
      "Como você é criativa.",
      "Como você sempre consegue me fazer rir (cheia de gracinhas).",
      "O jeito que você bateria em alguém se me tratassem mal, é tão fofo."
    ];
  
    // Divisão da lista em três colunas
    const colunas = [[], [], []]; // Array com três subarrays (para cada coluna)
    qualidades.forEach((qualidade, index) => {
      colunas[index % 3].push(qualidade); // Distribui os itens nas três colunas
    });
  
    // Gerar HTML com as três colunas e numerar a lista
    const gerarListaHTML = (coluna, startIndex) => {
      return `
        <ol start="${startIndex}" style="padding-left: 20px; margin-bottom: 20px;">
          ${coluna.map((item, index) => `<li style="margin-bottom: 10px;">${item}</li>`).join('')}
        </ol>
      `;
    };
  
    // Atualizar o mural com as colunas
    mural.innerHTML = `
      <div style="text-align: center; max-width: 800px; margin: 0 auto;">
        ${gerarListaHTML(colunas[0], 1)}
        ${gerarListaHTML(colunas[1], colunas[0].length + 1)}
        ${gerarListaHTML(colunas[2], colunas[0].length + colunas[1].length + 1)}
      </div>
    `;
  }
}

// Função para criar o popup interativo
function criarPopup() {
  const popup = document.createElement('div');
  popup.style.position = 'fixed';
  popup.style.top = `${Math.random() * 80 + 10}%`;
  popup.style.left = `${Math.random() * 80 + 10}%`;
  popup.style.width = '200px';
  popup.style.height = '100px';
  popup.style.backgroundColor = '#ffcccc';
  popup.style.color = '#000';
  popup.style.border = '2px solid #ff6666';
  popup.style.borderRadius = '10px';
  popup.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
  popup.style.display = 'flex';
  popup.style.flexDirection = 'column';
  popup.style.justifyContent = 'center';
  popup.style.alignItems = 'center';
  popup.style.zIndex = 9999;

  const texto = document.createElement('p');
  texto.textContent = 'Casa comigo?';
  texto.style.margin = '0';
  texto.style.fontSize = '1.2rem';
  popup.appendChild(texto);

  const botaoSim = document.createElement('button');
  botaoSim.textContent = 'Sim';
  botaoSim.style.margin = '5px';
  botaoSim.style.backgroundColor = '#66ff66';
  botaoSim.style.border = 'none';
  botaoSim.style.padding = '5px 10px';
  botaoSim.style.cursor = 'pointer';
  botaoSim.style.borderRadius = '5px';
  botaoSim.addEventListener('click', () => {
      document.body.innerHTML = `
          <h1 style="text-align: center; margin-top: 50px; color: #ff66cc;">Obrigado por dizer sim! ❤️</h1>
          <p style="text-align: center; font-size: 1.5rem; color: #333;">A gente aí na lua de mel</p>
          <div style="display: flex; justify-content: center; gap: 20px; margin-top: 20px;">
              <img src="https://i.ibb.co/47M7dh6/Imagem-do-Whats-App-de-2024-12-17-s-09-12-03-0a9d9a36.jpg" alt="Imagem 1" style="width: 300px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);">
              <img src="https://i.ibb.co/RcnrWJz/Imagem-do-Whats-App-de-2024-12-17-s-09-12-03-691a45ff.jpg" alt="Imagem 2" style="width: 300px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);">
          </div>
      `;
  });

  const botaoNao = document.createElement('button');
  botaoNao.textContent = 'Não';
  botaoNao.style.margin = '5px';
  botaoNao.style.backgroundColor = '#ff6666';
  botaoNao.style.border = 'none';
  botaoNao.style.padding = '5px 10px';
  botaoNao.style.cursor = 'pointer';
  botaoNao.style.borderRadius = '5px';
  botaoNao.addEventListener('click', () => {
      criarPopup(); // Cria um novo popup
  });

  popup.appendChild(botaoSim);
  popup.appendChild(botaoNao);

  document.body.appendChild(popup);
}

// Inicializa o primeiro popup
criarPopup();

// Atualizações periódicas
setInterval(calcularTempoJuntos, 1000);
ajustarTematica();
