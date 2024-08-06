const contDiv = document.querySelector(".container");

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.dataset.opacity = 0;
  div.dataset.baseColor = "";
  contDiv.appendChild(div);
}

const selectDiv = contDiv.querySelectorAll("div");
selectDiv.forEach((div) => {
  div.addEventListener("mouseover", () => {
    let currentOpacity = parseFloat(div.dataset.opacity);

    if (currentOpacity === 0) {
      div.dataset.baseColor = getRandomColor();
    }

    if (currentOpacity < 1) {
      currentOpacity += 0.2;
      div.dataset.opacity = currentOpacity;
      div.style.backgroundColor = div.dataset.baseColor;
      div.style.opacity = currentOpacity;
    }
  });
});

const btnReset = document.querySelector("#clear");
btnReset.addEventListener("click", () => {
  selectDiv.forEach((div) => {
    div.dataset.opacity = 0;
    div.style.backgroundColor = "";
    div.style.opacity = 1;
  });
});
