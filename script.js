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
  
  // Atualizações periódicas
  setInterval(calcularTempoJuntos, 1000);
  ajustarTematica();
  