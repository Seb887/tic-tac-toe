'use strict';

class GameController {
  constructor(playerX, playerO) {
    this.playerSignX = playerX;
    this.playerSignO = playerO;
    this.gameboardArr = ['', '', '', '', '', '', '', '', ''];
    this.html = this.createHTML;
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
      'border',
      'border-sky-500'
    );

    for (let i = 0; i < this.gameboardArr.length; i++) {
      const field = document.createElement('div');
      field.classList.add(
        'field',
        'flex',
        'justify-center',
        'items-center',
        'text-5xl',
        'font-extrabold',
        'text-slate-400',
        'border',
        'border-sky-500'
      );
      field.setAttribute('id', `field-${i + 1}`);

      gameboard.appendChild(field);
    }

    gameboardContainer.appendChild(gameboard);
  }
  playGame() {}
  checkWinner() {}
}

const newGame = new GameController();
newGame.createHTML();
