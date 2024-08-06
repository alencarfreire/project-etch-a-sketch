const contDiv = document.querySelector(".container");

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Cria 256 divs e adiciona ao contêiner
for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.dataset.opacity = 0;
  div.dataset.baseColor = ""; // Inicia sem cor de fundo
  contDiv.appendChild(div);
}

const selectDiv = contDiv.querySelectorAll("div");
selectDiv.forEach((div) => {
  div.addEventListener("mouseover", () => {
    let currentOpacity = parseFloat(div.dataset.opacity);

    if (currentOpacity === 0) {
      // Se for a primeira interação, define a cor base
      div.dataset.baseColor = getRandomColor();
    }

    if (currentOpacity < 1) {
      currentOpacity += 0.2;
      div.dataset.opacity = currentOpacity;
      div.style.backgroundColor = div.dataset.baseColor;
      div.style.opacity = currentOpacity; // Ajusta a opacidade
    }
  });
});

const btnReset = document.querySelector("#clear");
btnReset.addEventListener("click", () => {
  selectDiv.forEach((div) => {
    div.dataset.opacity = 0; // Reseta a opacidade
    div.style.backgroundColor = ""; // Remove a cor de fundo
    div.style.opacity = 1; // Reseta a opacidade visualmente
  });
});
