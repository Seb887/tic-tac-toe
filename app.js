'use strict';

const gameBoard = document.querySelector('#gameboard');
const infoMessage = document.querySelector('#infoMessage');
const startCells = ['', '', '', '', '', '', '', '', ''];

let playerSign = 'cross';
infoMessage.textContent = 'Cross goes first';

const playGame = (e) => {
  const iconElement = document.createElement('div');
  iconElement.classList.add(playerSign);
  e.target.append(iconElement);
  playerSign = playerSign === 'cross' ? 'circle' : 'cross';
  infoMessage.textContent = `It's ${playerSign}'s turn`;
  e.target.removeEventListener('click', playGame);
};

const createBoard = () => {
  startCells.forEach((_cells, index) => {
    const cellElement = document.createElement('div');
    cellElement.classList.add('square');
    cellElement.id = index;
    cellElement.addEventListener('click', playGame);
    gameBoard.append(cellElement);
  });
};

createBoard();
