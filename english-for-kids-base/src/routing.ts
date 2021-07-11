import { mainPageRender } from './components/mainPage/mainPage';
import { trainingCardsRender } from './components/cards/trainingCards';
import { gameCardsRender } from './components/cards/gameCards';
import { statisticRender } from './components/statistic/statistic';

import { sets } from './data/sets';

const trainingRender = (hash: string) => {
  switch (hash) {
    case 'home':
      mainPageRender();
      break;
    case 'actionSetA':
      trainingCardsRender(sets.actionSetA);
      break;
    case 'actionSetB':
      trainingCardsRender(sets.actionSetB);
      break;
    case 'actionSetC':
      trainingCardsRender(sets.actionSetC);
      break;
    case 'adjective':
      trainingCardsRender(sets.adjective);
      break;
    case 'animalSetA':
      trainingCardsRender(sets.animalSetA);
      break;
    case 'animalSetB':
      trainingCardsRender(sets.animalSetB);
      break;
    case 'clothes':
      trainingCardsRender(sets.clothes);
      break;
    case 'emotions':
      trainingCardsRender(sets.emotions);
      break;
    case 'statistic':
      statisticRender();
      break;
    default:
      mainPageRender();
      break;
  }
};

const gameRender = (hash: string) => {
  switch (hash) {
    case 'home':
      mainPageRender();
      break;
    case 'actionSetA':
      gameCardsRender(sets.actionSetA);
      break;
    case 'actionSetB':
      gameCardsRender(sets.actionSetB);
      break;
    case 'actionSetC':
      gameCardsRender(sets.actionSetC);
      break;
    case 'adjective':
      gameCardsRender(sets.adjective);
      break;
    case 'animalSetA':
      gameCardsRender(sets.animalSetA);
      break;
    case 'animalSetB':
      gameCardsRender(sets.animalSetB);
      break;
    case 'clothes':
      gameCardsRender(sets.clothes);
      break;
    case 'emotions':
      gameCardsRender(sets.emotions);
      break;
    case 'statistic':
      statisticRender();
      break;
    default:
      mainPageRender();
      break;
  }
};

const routing = (): void => {
  const controller = (hash: string) => {
    if (localStorage.getItem('mode') === 'training') {
      trainingRender(hash);
    } else {
      gameRender(hash);
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
