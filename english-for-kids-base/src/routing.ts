import refs from './shared/refs';
import { mainPageRender } from './components/mainPage/mainPage';
import { trainingCardsRender } from './components/trainingCards/trainingCards';
import { gameCardsRender } from './components/trainingCards/gameCards';

import { sets } from './data/sets';

const routing = (): void => {
  const mainPage = document.getElementById('main') as HTMLElement;

  const controller = (hash: string) => {
    if (localStorage.getItem('mode') === 'training') {
      switch (hash) {
        case 'home':
          mainPageRender();
          break;
        case 'action-set-a':
          trainingCardsRender(sets.actionSetA);
          break;
        case 'action-set-b':
          trainingCardsRender(sets.actionSetB);
          break;
        case 'action-set-c':
          trainingCardsRender(sets.actionSetC);
          break;
        case 'adjective':
          trainingCardsRender(sets.adjective);
          break;
        case 'animal-set-a':
          trainingCardsRender(sets.animalSetA);
          break;
        case 'animal-set-b':
          trainingCardsRender(sets.animalSetB);
          break;
        case 'clothes':
          trainingCardsRender(sets.clothes);
          break;
        case 'emotions':
          trainingCardsRender(sets.emotions);
          break;
        default:
          mainPageRender();
          break;
      }
    } else {
      switch (hash) {
        case 'home':
          mainPageRender();
          break;
        case 'action-set-a':
          gameCardsRender(sets.actionSetA);
          break;
        case 'action-set-b':
          gameCardsRender(sets.actionSetB);
          break;
        case 'action-set-c':
          gameCardsRender(sets.actionSetC);
          break;
        case 'adjective':
          gameCardsRender(sets.adjective);
          break;
        case 'animal-set-a':
          gameCardsRender(sets.animalSetA);
          break;
        case 'animal-set-b':
          gameCardsRender(sets.animalSetB);
          break;
        case 'clothes':
          gameCardsRender(sets.clothes);
          break;
        case 'emotions':
          gameCardsRender(sets.emotions);
          break;
        default:
          mainPageRender();
          break;
      }
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
