let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let turnO = true; // playerX , playerY
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let count = 1;

const WinPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  enableBoxes();
  count = 1;
  msgContainer.classList.add("hide");
};

resetbtn.addEventListener("click", () => {
  resetGame();
});

newGameBtn.addEventListener("click", () => {
  resetGame();
  resetbtn.classList.remove("hide");
});

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    count++;

    if (turnO) {
      box.style.color = "green";
      box.innerText = "O";
      turnO = false;
    } else {
      box.style.color = "black";
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();

    if (count == 10) showDraw();
  });
});

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
  resetbtn.classList.add("hide");
};

const showDraw = () => {
  msg.innerText = `The match is Draw`;
  msgContainer.classList.remove("hide");
  disableBoxes();
  resetbtn.classList.add("hide");
};

const checkWinner = () => {
  for (let pattern of WinPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos3Val === pos2Val) {
        console.log("Winner", pos1Val);
        showWinner(pos1Val);
      }
    }
  }
};


// spoumyav 