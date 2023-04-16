'use strict';

const gameBoard = document.querySelector('#gameboard');
const infoMessage = document.querySelector('#infoMessage');
const startCells = ['', '', '', '', '', '', '', '', ''];

let playerSign = 'cross';
infoMessage.textContent = 'CROSS goes first';

const createBoard = () => {
  startCells.forEach((_cells, index) => {
    const cellElement = document.createElement('div');
    cellElement.classList.add('square');
    cellElement.id = index;
    cellElement.addEventListener('click', playGame);
    gameBoard.append(cellElement);
  });
};

const playGame = (e) => {
  const iconElement = document.createElement('div');
  iconElement.classList.add(playerSign);
  e.target.append(iconElement);
  playerSign = playerSign === 'cross' ? 'circle' : 'cross';
  infoMessage.textContent = `${playerSign.toUpperCase()}, it's your turn!`;
  e.target.removeEventListener('click', playGame);

  checkWinner();
};

const checkWinner = () => {
  const winnerCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const allSquares = document.querySelectorAll('.square');
  // console.log(allSquares);

  winnerCombos.forEach((arr) => {
    // vergleicht jeden Wert des Arrays mit dem des div's, ob die Klasse enthalten ist
    const circleWins = arr.every((cell) =>
      allSquares[cell].firstChild?.classList.contains('circle')
    );

    if (circleWins) {
      infoMessage.textContent = 'CIRCLE wins!';
      infoMessage.setAttribute('style', 'color: red');
      allSquares.forEach((square) =>
        square.replaceWith(square.cloneNode(true))
      );
    }
  });

  winnerCombos.forEach((arr) => {
    // vergleicht jeden Wert des Arrays mit dem des div's, ob die Klasse enthalten ist
    const crossWins = arr.every((cell) =>
      allSquares[cell].firstChild?.classList.contains('cross')
    );

    if (crossWins) {
      infoMessage.textContent = 'CROSS wins!';
      infoMessage.setAttribute('style', 'color: red');
      allSquares.forEach((square) =>
        square.replaceWith(square.cloneNode(true))
      );
    }
  });
};

createBoard();
