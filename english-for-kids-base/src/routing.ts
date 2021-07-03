import refs from './shared/refs';
import { App } from './app';

const routing = (): void => {
  const scoreBtn = document.getElementById('score') as HTMLElement;
  const aboutBtn = document.getElementById('about') as HTMLElement;
  const settingsBtn = document.getElementById('settings') as HTMLElement;
  const startBtn = document.querySelector('.start-btn') as HTMLElement;

  function startGame() {
    if (startBtn.innerHTML === 'RESTART GAME') {
      const cardsField = document.querySelector('.cards-field') as HTMLElement;
      cardsField.remove();
    }

    new App(refs.appElement).start();

    startBtn.innerHTML = 'RESTART GAME';
  }

  const gameRender = () => {
    window.location.hash = 'game';
    startGame();

    const cardsField = document.querySelector('.cards-field') as HTMLElement;

    const difficulty = localStorage.getItem('gameDifficulty');
    if (difficulty === '6x6') {
      cardsField.setAttribute('style', 'width:1440px;');
    } else {
      cardsField.setAttribute('style', 'width:640px;');
    }
  };

  const controller = (hash: string) => {
    switch (hash) {
      case 'score':
        break;
      case 'settings':
        break;
      case 'game':
        gameRender();
        break;

      default:
        break;
    }
  };

  const handleHash = (): void => {
    const hash = window.location.hash ? window.location.hash.slice(1) : '';

    controller(hash);
  };

  window.addEventListener('hashchange', handleHash);
  // startBtn.addEventListener('click', gameRender);

  handleHash();
};

export { routing };
