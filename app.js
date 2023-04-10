'use strict';

class Gameboard {
  constructor() {
    this.gameboardArr = ['', '', '', '', '', '', '', '', ''];
  }
  createHTML() {
    const gameboardContainer = document.querySelector('.gameboardContainer');

    let gameboard = document.createElement('div');
    gameboard.classList.add(
      'gameboard',
      'grid',
      'justify-center',
      'grid-cols-3',
      'relative',
      'top-72',
      'w-96',
      'h-96',
      'border-2',
      'border-sky-500'
    );

    for (let i = 0; i < this.gameboardArr.length; i++) {
      const field = document.createElement('div');
      field.classList.add(
        'field',
        'flex',
        'justify-center',
        'items-center',
        'w-32',
        'h-32',
        'text-5xl',
        'font-extrabold',
        'text-slate-400',
        'border',
        'border-sky-500'
      );
      field.setAttribute('id', `field-${i}`);

      gameboard.appendChild(field);

      let playerSign = document.createElement('i');
      if (this.gameboardArr[i] === 'x') {
        playerSign.classList.add('fa-solid', 'fa-x', 'text-7xl');
        field.appendChild(playerSign);
      } else if (this.gameboardArr[i] === 'o') {
        playerSign.classList.add('fa-solid', 'fa-o', 'text-7xl');
        field.appendChild(playerSign);
      }
    }

    gameboardContainer.appendChild(gameboard);
  }
}

const newGameboard = new Gameboard();
newGameboard.createHTML();

class GameController {
  constructor() {}

  playGame() {}

  checkWinner() {}
}
