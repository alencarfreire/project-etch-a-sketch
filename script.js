const contDiv = document.querySelector(".container");

for (let i = 1; i < 257; i++) {
  const div = document.createElement("div");
  div.classList;
  contDiv.appendChild(div);
}

let selectDiv = document.querySelectorAll("div");

function getRandomColor(opacity = 1) {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

selectDiv.forEach((div) => {
  div.addEventListener("mouseover", function (e) {
    if (e.target.style.backgroundColor == "") {
      e.target.style.backgroundColor = getRandomColor(0.3);
    } else {
    }
  });
});
