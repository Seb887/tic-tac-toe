'use strict';
// Default settings
let currentPlayer = 'x';
let gameboardArr = ['', '', '', '', '', '', '', '', ''];

// DOM Elements
const main = document.querySelector('main');
const gameboardContainer = document.querySelector('.gameboardContainer');
const gameboard = document.querySelector('.gameboard');
const fields = document.querySelectorAll('.fields');
const restartBtn = document.querySelector('#restart');

// Events
restartBtn.onclick = () => restart();

// const createGameboard = () => {
//   let gameboard = document.createElement('div');
//   gameboard.classList.add(
//     'gameboard',
//     'grid',
//     'justify-center',
//     'grid-cols-3',
//     // 'relative',
//     // 'top-72',
//     'w-96',
//     'h-96',
//     'border-2',
//     'border-sky-500'
//   );

//   for (let i = 0; i < gameboardArr.length; i++) {
//     const field = document.createElement('div');
//     field.classList.add(
//       'field',
//       'flex',
//       'justify-center',
//       'items-center',
//       'w-32',
//       'h-32',
//       'text-5xl',
//       'font-extrabold',
//       'text-slate-400',
//       'border',
//       'border-sky-500'
//     );
//     field.setAttribute('id', i);

//     gameboard.appendChild(field);

//     let playerSign = document.createElement('i');
//     if (gameboardArr[i] === 'x') {
//       playerSign.classList.add('fa-solid', 'fa-x', 'text-7xl');
//       field.appendChild(playerSign);
//     } else if (gameboardArr[i] === 'o') {
//       playerSign.classList.add('fa-solid', 'fa-o', 'text-7xl');
//       field.appendChild(playerSign);
//     }
//   }

//   gameboardContainer.appendChild(gameboard);

//   const restartBtn = document.createElement('button');
//   restartBtn.textContent = 'Restart';
//   restartBtn.setAttribute('id', 'restart');
//   restartBtn.classList.add(
//     'justify-center',
//     'w-24',
//     'h-10',
//     'border',
//     'border-sky-500',
//     'rounded-xl'
//   );

//   gameboardContainer.appendChild(restartBtn);
// };

// createGameboard();

// const clearBoard = () => {
//   while (gameboardContainer.firstChild) {
//     gameboardContainer.removeChild(gameboardContainer.firstChild);
//   }
// };

const refresh = (index) => {
  let getField = document.getElementById(index);

  gameboardArr.forEach((e) => {
    if (e === 'x') {
      const playerX = document.createElement('i');
      playerX.classList.add('fa-solid', 'fa-x', 'text-7xl');
      getField.appendChild(playerX);
    } else if (e === 'o') {
      const playerO = document.createElement('i');
      playerO.classList.add('fa-solid', 'fa-o', 'text-7xl');
      getField.appendChild(playerO);
    }
  });
};

const restart = () => {
  // reset gameboardArr
  gameboardArr = ['', '', '', '', '', '', '', '', ''];
  console.log(gameboardArr);
  // removes inner HTML from every field
  fields.forEach((e) => {
    while (e.firstChild) {
      e.removeChild(e.firstChild);
    }
  });
};

const gameController = () => {
  gameboard.addEventListener('click', (e) => {
    const fieldIndex = parseInt(e.target.id);
    console.log(fieldIndex);

    if (gameboardArr[fieldIndex] === '') {
      gameboardArr[fieldIndex] = currentPlayer;
      if (currentPlayer === 'x') {
        currentPlayer = 'o';
      } else if (currentPlayer === 'o') {
        currentPlayer = 'x';
      }
    }

    console.log(gameboardArr);

    refresh(fieldIndex);
  });
  // refresh();
};

gameController();
// const checkWinner = () => {};

// console.log('Modulo', 5 % 2);
