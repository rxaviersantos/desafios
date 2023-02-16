var text = document.querySelector(".visualizaCalculo");
var res = document.querySelector(".resultado");

var calculate = (number) => {
  text.value += number;
};
var resultado = () => {
  try {
    res.value = eval(text.value);
  } catch (err) {
    alert("Método não permitido ❌");
  }
};

function clr() {
  res.value = "";
  text.value = "";
}

function remove() {
  text.value = text.value.slice(0, -1);
}
