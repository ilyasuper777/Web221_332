function initBoard() {
  let board = document.getElementById("board"); // .getElementById(...) получить объект по id=...
  for (let i = 0; i < 9; i++) {
    let bordCell = document.createElement("div"); // ..createElement("..."") - создание элемента с тегом ...
    bordCell.classList.add("cell"); // classList.add(""..."") - добавляет существующему тегу - новый класс "..."
    board.append(bordCell); // .append(...) - добавляет дочерний элемент ... - в конец родительского элемента
  }
  return board;
}

function checkAvialableSteps() {
  let cells = document.querySelectorAll(".cell");
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].innerHTML == "") return true;
  }
  return false;
}

function checkWinner() {
  let cells = document.querySelectorAll(".cell"); // .querySelectorAll('.cell') - возвращается массив элементов, у которых class=".cell"
  let row, column, diag, diag1;
  for (let i = 0; i < 3; i++) {
    row = cells[i * 3 + 0].innerHTML != "";
    column = cells[i].innerHTML != "";
    diag = cells[0].innerHTML != "";
    diag1 = cells[3 - 1].innerHTML != "";
    for (let j = 0; j < 3 - 1; j++) {
      row = row && cells[i * 3 + j].innerHTML == cells[i * 3 + j + 1].innerHTML;
      column =
        column &&
        cells[j * 3 + i].innerHTML == cells[(j + 1) * 3 + i].innerHTML;
      diag =
        diag &&
        cells[j * 3 + j].innerHTML == cells[(j + 1) * 3 + j + 1].innerHTML;
      diag1 =
        diag1 &&
        cells[j * 3 + 3 - 1 - j].innerHTML ==
          cells[(j + 1) * 3 + 3 - 1 - (j + 1)].innerHTML;
    }
    let winner =
      (row && cells[i * 3 + 0].innerHTML) ||
      (column && cells[i].innerHTML) ||
      (diag && cells[0].innerHTML) ||
      (diag1 && cells[3 - 1].innerHTML);
    if (winner) return winner;
  }
  return false;
}

function clickHandler(event) {
  if (event.target.className == "cell") {
    // .target - позволяет узнать, на какой объект пользователь кликнул
    if (GameOver) {
      alert("Игра окончена, начните новую игру!");
      return;
    }
    if (event.target.innerHTML != "") {
      // innerHTML - выдаёт HTML-код элемента
      // В данном случае - если пустота, то можно вставать "x" или "0", а если там уже стоит что-то, то знаение клетки поменять не получится
      alert("Эта клетка уже занята!");
    } else {
      event.target.innerHTML = turn == 0 ? "x" : "0";
      turn = (turn + 1) % 2; // позволяет чередовать 'x' и '0'
    }
    let winner = checkWinner();
    if (winner || !checkAvialableSteps()) {
      GameOver = 1;
      alert(winner ? `${winner} одержал победу!` : "Ничья");
    }
  }
}
function newGame() {
  let cells = document.querySelectorAll(".cell");
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerHTML = "";
  }
  turn = 0;
  GameOver = 0;
}
let turn = 0; // говорит чей ход
let GameOver = 0;

window.onload = function () {
  // window.onload - всё что внутри происходит при полной загруззке страницы
  let board = initBoard(); // на данном этапе мы инициализировали доску
  board.onclick = clickHandler; // .onclick - при нажатии
  document.querySelector(".new-game-btn").onclick = newGame; // newGame - без () специально
};
