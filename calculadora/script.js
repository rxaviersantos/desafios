var text = document.querySelector(".visualizaCalculo");
var res = document.querySelector(".resultado");

var calculate = (number) => {
  text.value += number;
};
var resultado = () => {
  try {
    res.value = eval(text.value);
  } catch (err) {
    alert("Operação incorreta");
  }
};

function clr() {
  res.value = "";
  text.value = "";
}

function del() {
  text.value = text.value.slice(0, -1);
}

function round() {
  res.value = res.value.tofixed(2);
}
