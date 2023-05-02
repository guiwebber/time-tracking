let button = document.querySelectorAll(".button");
let botaoClicado;

let horas = document.querySelectorAll(".horas");
let pLast = document.querySelectorAll(".pLast");
let valoresWork = ["8hrs", "32hrs", "1200hrs"];
let valoresPwork = [
  "Yesterday - 8hrs",
  "Last week - 36hrs",
  "Last month - 1600hrs",
];

let valoresStudy = ["3hrs", "4hrs", "100hrs"];
let valoresPstudy = [
  "Yesterday - 3hrs",
  "Last week - 7hrs",
  "Last month - 120hrs",
];

let valoresSelfCare = ["1hrs", "2hrs", "5hrs"];
let valoresPselfCare = [
  "Yesterday - 1hrs",
  "Last week - 2hrs",
  "Last month - 6hrs",
];

let valoresExercise = ["1hrs", "4hrs", "40hrs"];
let valoresPexercise = [
  "Yesterday - 2hrs",
  "Last week - 5hrs",
  "Last month - 41hrs",
];

let valoresPlay = ["1hrs", "10hrs", "16hrs"];
let valoresPplay = [
  "Yesterday - 8hrs",
  "Last week - 8hrs",
  "Last month - 1600hrs",
];

let valoresSocial = ["2hrs", "5hrs", "50hrs"];
let valoresPsocial = [
  "Yesterday - 5hrs",
  "Last week - 10hrs",
  "Last month - 60hrs",
];

button.forEach(function (nome, i) {
  button[i].addEventListener("click", () => {
    button[i].style.color = "white";
    botaoClicado = button[i];

    if (botaoClicado.textContent === "Weekly") {
      horas[0].textContent = valoresWork[1];
      horas[1].textContent = valoresPlay[1];
      horas[2].textContent = valoresStudy[1];
      horas[3].textContent = valoresExercise[1];
      horas[4].textContent = valoresSocial[1];
      horas[5].textContent = valoresSelfCare[1];
      pLast[0].textContent = valoresPwork[1];
      pLast[1].textContent = valoresPplay[1];
      pLast[2].textContent = valoresPstudy[1];
      pLast[3].textContent = valoresPexercise[1];
      pLast[4].textContent = valoresPsocial[1];
      pLast[5].textContent = valoresPselfCare[1];
    } else if (botaoClicado.textContent === "Dayli") {
      horas[0].textContent = valoresWork[0];
      horas[1].textContent = valoresPlay[0];
      horas[2].textContent = valoresStudy[0];
      horas[3].textContent = valoresExercise[0];
      horas[4].textContent = valoresSocial[0];
      horas[5].textContent = valoresSelfCare[0];
      pLast[0].textContent = valoresPwork[0];
      pLast[1].textContent = valoresPplay[0];
      pLast[2].textContent = valoresPstudy[0];
      pLast[3].textContent = valoresPexercise[0];
      pLast[4].textContent = valoresPsocial[0];
      pLast[5].textContent = valoresPselfCare[0];
    } else {
      horas[0].textContent = valoresWork[2];
      horas[1].textContent = valoresPlay[2];
      horas[2].textContent = valoresStudy[2];
      horas[3].textContent = valoresExercise[2];
      horas[4].textContent = valoresSocial[2];
      horas[5].textContent = valoresSelfCare[2];
      pLast[0].textContent = valoresPwork[2];
      pLast[1].textContent = valoresPplay[2];
      pLast[2].textContent = valoresPstudy[2];
      pLast[3].textContent = valoresPexercise[2];
      pLast[4].textContent = valoresPsocial[2];
      pLast[5].textContent = valoresPselfCare[2];
    }
  });
  button[i].addEventListener("blur", () => {
    button[i].style.color = "hsl(235, 45%, 61%)";
  });
});
