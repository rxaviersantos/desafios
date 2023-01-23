const form = document.querySelector("#form-habits");
const nlwSetup = new NLWSetup(form);
const button = document.querySelector("header button");

button.addEventListener("click", add);

function add() {
  const today = "01/01";
  const dayExists = nlwSetup.dayExists(today);

  if (dayExists) {
    alert("Dia já incluso");
    return;
  }
  nlwSetup.addDay("01/01");
}

// const data = {
//   run: ["01-01", "24-02", "01-06", "03-02", "09-06", "25-02", "06-06"],
//   technologist: ["01-04", "01-05"],
//   food: ["01-01", "01-03"],
//   book: ["01-01", "01-03"],
//   studant: ["01-04", "01-05"],
// };

// nlwSetup.setData(data);
// nlwSetup.load();
