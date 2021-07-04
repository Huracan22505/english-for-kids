import refs from './shared/refs';
import { App } from './app';
import { mainPageRender } from './components/mainPage/mainPage';
import { trainCardsRender } from './components/trainCards/trainCards';
import { sets } from './data/sets';

const routing = (): void => {
  const mainPage = document.getElementById('main') as HTMLElement;

  function startGame() {
    new App(refs.appElement).start();
  }

  const gameRender = () => {
    mainPage.innerHTML = '';
    startGame();
  };

  const controller = (hash: string) => {
    switch (hash) {
      case 'home':
        mainPageRender();
        break;
      case 'action-set-a':
        trainCardsRender(sets.actionSetA);
        break;
      case 'action-set-b':
        trainCardsRender(sets.actionSetB);
        break;
      case 'action-set-c':
        trainCardsRender(sets.actionSetC);
        break;
      case 'adjective':
        trainCardsRender(sets.adjective);
        break;
      case 'animal-set-a':
        trainCardsRender(sets.animalSetA);
        break;
      case 'animal-set-b':
        trainCardsRender(sets.animalSetB);
        break;

      default:
        mainPageRender();
        break;
    }
  };

  const handleHash = (): void => {
    const hash = window.location.hash ? window.location.hash.slice(1) : '';

    controller(hash);
  };

  window.addEventListener('hashchange', handleHash);

  handleHash();
};

export { routing };
