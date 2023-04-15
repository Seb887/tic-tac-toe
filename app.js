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

console.log(fields);

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

const gameController = () => {
  gameboard.addEventListener('click', (e) => {
    const fieldIndex = parseInt(e.target.dataset.index);
    const getField = e.target;
    console.log('index:', fieldIndex);

    // currentPlayer push to array
    if (gameboardArr[fieldIndex] === '') {
      gameboardArr[fieldIndex] = currentPlayer;

      if (currentPlayer === 'x') {
        currentPlayer = 'o';
      } else {
        currentPlayer = 'x';
      }
    }

    console.log(gameboardArr);
    console.log('currentPlayer:', currentPlayer);

    let iconElement = document.createElement('i');
    iconElement.classList.add('fa-solid', 'text-7xl');

    if (gameboardArr[fieldIndex] === 'x') {
      iconElement.classList.add('fa-x');
    } else if (gameboardArr[fieldIndex] === 'o') {
      iconElement.classList.add('fa-o');
    }

    getField.appendChild(iconElement);
  });
  // refresh();
};

gameController();

const removeHTML = () => {
  fields.forEach((e) => {
    while (e.firstChild) {
      e.removeChild(e.firstChild);
    }
  });
};

// const checkWinner = () => {};

// console.log('Modulo', 5 % 2);
