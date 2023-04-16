'use strict';
// Default settings
let currentPlayer = 'x';
let gameboardArr = ['', '', '', '', '', '', '', '', ''];

// ### DOM ELEMENTS ###
const main = document.querySelector('main');
const gameboardContainer = document.querySelector('.gameboardContainer');
const gameboard = document.querySelector('.gameboard');
const fields = document.querySelectorAll('.fields');
const restartBtn = document.querySelector('#restart');

// console.log(fields);

// ### EVENTS ###

// Reset game
restartBtn.addEventListener('click', () => {
  gameboardArr = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'x';
  console.clear();
  console.log('reset gameboard:', gameboardArr, 'reset player:', currentPlayer);
  removeHTML();
});

// ### FUNCTIONS ###

gameboard.addEventListener('click', (e) => {
  const fieldIndex = parseInt(e.target.dataset.index);
  const getField = e.target;
  // console.log('index:', fieldIndex);

  // currentPlayer push to array
  if (gameboardArr[fieldIndex] === '') {
    gameboardArr[fieldIndex] = currentPlayer;

    if (currentPlayer === 'x') {
      currentPlayer = 'o';
    } else {
      currentPlayer = 'x';
    }
  }

  // console.log(gameboardArr);
  // console.log('currentPlayer:', currentPlayer);

  let iconElement = document.createElement('i');
  iconElement.classList.add('fa-solid', 'text-7xl');

  if (gameboardArr[fieldIndex] === 'x') {
    iconElement.classList.add('fa-x');
  } else if (gameboardArr[fieldIndex] === 'o') {
    iconElement.classList.add('fa-o');
  }

  getField.appendChild(iconElement);

  checkWinner();
});

const removeHTML = () => {
  fields.forEach((e) => {
    while (e.firstChild) {
      e.removeChild(e.firstChild);
    }
  });
};

const checkWinner = () => {
  let winningOrder = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  winningOrder.forEach((e) => {
    let value1 = e[0];
    let value2 = e[1];
    let value3 = e[2];

    if (
      (gameboardArr[value1] && gameboardArr[value2] && gameboardArr[value3]) ===
      'x'
    ) {
      console.log(
        'X:',
        gameboardArr[value1],
        gameboardArr[value2],
        gameboardArr[value3]
      );
      console.log('Player X is winning');
    } else if (
      (gameboardArr[value1] && gameboardArr[value2] && gameboardArr[value3]) ===
      'o'
    ) {
      console.log(
        'O:',
        gameboardArr[value1],
        gameboardArr[value2],
        gameboardArr[value3]
      );
      console.log('Player O is winning');
    }
  });
};
