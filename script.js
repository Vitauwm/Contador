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
    if (agora.getMonth() === 11 && agora.getDate() === 25) {
      title.textContent = "Feliz Natal, Victor e Lucia!";
      loveText.innerHTML = "<p>Que nosso amor seja tão mágico quanto esta data especial. Feliz Natal, meu amor! 🎄❤️</p>";
      mural.innerHTML = `
        <img src="https://i.ibb.co/natal1.jpg" alt="Natal 1">
        <img src="https://i.ibb.co/natal2.jpg" alt="Natal 2">
        <img src="https://i.ibb.co/natal3.jpg" alt="Natal 3">
      `;
    }
    // Temática de Ano Novo
    else if (agora.getMonth() === 11 && agora.getDate() === 31) {
      title.textContent = "Feliz Ano Novo, Victor e Lucia!";
      loveText.innerHTML = "<p>Que nosso amor cresça ainda mais neste novo ano. Feliz Ano Novo, meu amor! 🎆❤️</p>";
      mural.innerHTML = `
        <img src="https://i.ibb.co/anonovo1.jpg" alt="Ano Novo 1">
        <img src="https://i.ibb.co/anonovo2.jpg" alt="Ano Novo 2">
        <img src="https://i.ibb.co/anonovo3.jpg" alt="Ano Novo 3">
      `;
    }
    // Comemoração do aniversário de namoro (todo dia 22)
    else if (agora.getDate() === 22) {
      title.textContent = "Feliz Mês de Amor!";
      loveText.innerHTML = "<p>Hoje celebramos mais um mês de amor e cumplicidade. Te amo, meu amor! 💕</p>";
      mural.innerHTML = `
        <img src="https://i.ibb.co/mesario1.jpg" alt="Mesversário 1">
        <img src="https://i.ibb.co/mesario2.jpg" alt="Mesversário 2">
        <img src="https://i.ibb.co/mesario3.jpg" alt="Mesversário 3">
      `;
    }
    // Aniversário dela (24 de setembro)
    else if (agora.getMonth() === 8 && agora.getDate() === 24) { // Setembro é mês 8 (0-indexed)
      title.textContent = "Feliz Aniversário, Lucia!";
      loveText.innerHTML = "<p>Hoje é um dia especial, meu amor! Feliz aniversário! Que sua vida seja repleta de felicidade. ❤️🎂</p>";
      mural.innerHTML = `
        <img src="https://i.ibb.co/aniversario1.jpg" alt="Aniversário 1">
        <img src="https://i.ibb.co/aniversario2.jpg" alt="Aniversário 2">
        <img src="https://i.ibb.co/aniversario3.jpg" alt="Aniversário 3">
      `;
    }
  }
  function criarPopup() {
    // Cria o elemento de popup
    const popup = document.createElement('div');
    popup.style.position = 'fixed';
    popup.style.top = `${Math.random() * 80 + 10}%`; // Posição aleatória na tela
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

    // Adiciona o texto
    const texto = document.createElement('p');
    texto.textContent = 'Casa comigo?';
    texto.style.margin = '0';
    texto.style.fontSize = '1.2rem';
    popup.appendChild(texto);

    // Botões
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

    // Adiciona os botões ao popup
    popup.appendChild(botaoSim);
    popup.appendChild(botaoNao);

    // Adiciona o popup ao corpo do documento
    document.body.appendChild(popup);
}

// Inicializa o primeiro popup
criarPopup();

  // Atualizações periódicas
  setInterval(calcularTempoJuntos, 1000);
  ajustarTematica();
  