const red = document.querySelector("#red");
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");

function colors() {
  document.body.style.backgroundColor =
    "rgb(" + red.value + "," + green.value + "," + blue.value + ")";

  let hex = "";

  let r = parseInt(red.value, 10).toString(16);
  r = r.length == 1 ? "0" + r : r;

  let b = parseInt(green.value, 10).toString(16);
  b = b.length == 1 ? "0" + b : b;

  let g = parseInt(blue.value, 10).toString(16);
  g = g.length == 1 ? "0" + g : g;

  hex = "#" + r + b + g;
  document.querySelector("#hex").innerText = hex;
}
colors();

let randomColor = document.querySelector("#random");
randomColor.addEventListener("click", function () {
  fetch("https://dummy-apis.netlify.app/api/color")
    .then((response) => response.json())
    .then((colors) => {
      red.value = colors.rgb.r;
      green.value = colors.rgb.b;
      blue.value = colors.rgb.g;
    });
  colors();
  localStorage();
});

function localStorage() {
  if (localStorage.setItem("colors")) {
    const qouteElement = localStorage.getItem("colors");
    todos = JSON.parse(colorsElement);
  }
}
localStorage();
loadData();
