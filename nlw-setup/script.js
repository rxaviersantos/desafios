const form = document.querySelector("#form-habits");
const nlwSetup = new NLWSetup(form);
const button = document.querySelector("header button");

button.addEventListener("click", add);
form.addEventListener("change", save);

function add() {
  // const today = new Date().toLocaleDateString("pt-br").slice(0, -5);
  const today = "16/01";
  const toda = "17/01";
  const tod = "18/01";
  const to = "19/01";
  const t = "20/01";
  const dayExists = nlwSetup.dayExists(today);
  const dayExist = nlwSetup.dayExists(toda);
  const dayExis = nlwSetup.dayExists(tod);
  const dayExi = nlwSetup.dayExists(to);
  const dayEx = nlwSetup.dayExists(t);

  if (dayExists) {
    alert("Dia já incluso ❌");
    return;
  }
  if (dayExist) {
    alert("Dia já incluso ❌");
    return;
  }
  if (dayExis) {
    alert("Dia já incluso ❌");
    return;
  }
  if (dayExi) {
    alert("Dia já incluso ❌");
    return;
  }
  if (dayEx) {
    alert("Dia já incluso ❌");
    return;
  }
  alert("Adicionado com sucesso ✔️");
  nlwSetup.addDay(today);
  nlwSetup.addDay(toda);
  nlwSetup.addDay(tod);
  nlwSetup.addDay(to);
  nlwSetup.addDay(t);
}

function save() {
  localStorage.setItem("habits", JSON.stringify(nlwSetup.data));
}

const data = JSON.parse(localStorage.getItem("habits")) || {};
nlwSetup.setData(data);
nlwSetup.load();
