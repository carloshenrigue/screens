const perguntas = document.querySelectorAll(".quest button")

function onQuest(event) {
  const perguntas = event.currentTarget;
  const controls = perguntas.getAttribute("aria-controls");
  const resportas = document.getElementById(controls)
  resportas.classList.toggle("ativa")
}

function secQuest(perguntas) {
  perguntas.addEventListener("click",onQuest)
}

perguntas.forEach(secQuest)