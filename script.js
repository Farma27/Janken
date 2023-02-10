function getChoiceComp() {
  const comp = Math.random();
  if (comp < 0.34) return "rock";
  if (comp >= 0.34 && comp < 0.67) return "paper";
  return "scissors";
}

function getResult(comp, player) {
  if (player == comp) return "SERI!";
  if (player == "rock") return comp == "paper" ? "KALAH!" : "MENANG!";
  if (player == "paper") return comp == "scissors" ? "KALAH!" : "MENANG!";
  if (player == "scissors") return comp == "paper" ? "MENANG!" : "KALAH!";
}

function loopImg() {
  const imgComp = document.querySelector(".img-computer");
  const img = ["rock", "scissors", "paper"];
  let i = 0;
  const timeStart = new Date().getTime();
  setInterval(() => {
    if (new Date().getTime() - timeStart > 1000) {
      clearInterval();
      return;
    }
    imgComp.setAttribute("src", "img/" + img[i++] + ".png");
    if (i == img.length) i = 0;
  }, 100);
}

const choice = document.querySelectorAll("li img");
choice.forEach(function (i) {
  i.addEventListener("click", function () {
    const choiceComp = getChoiceComp();
    const choicePlayer = i.className;
    const result = getResult(choiceComp, choicePlayer);

    loopImg();

    setTimeout(() => {
      const imgComp = document.querySelector(".img-computer");
      imgComp.setAttribute("src", "img/" + choiceComp + ".png");

      const info = document.querySelector(".info");
      info.innerHTML = result;
    }, 1000);
  });
});
