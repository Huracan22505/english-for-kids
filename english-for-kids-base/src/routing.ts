import { mainPageRender } from './components/mainPage/mainPage';
import { trainingCardsRender } from './components/cards/trainingCards';
import { gameCardsRender } from './components/cards/gameCards';
import { statisticRender } from './components/statistic/statistic';

import { sets } from './data/sets';
import { LocalStorageKeys, Mods, Routes } from './shared/enums';

const trainingRender = (hash: string) => {
  switch (hash) {
    case Routes.Home:
      mainPageRender();
      break;
    case Routes.ActionSetA:
      trainingCardsRender(sets.actionSetA);
      break;
    case Routes.ActionSetB:
      trainingCardsRender(sets.actionSetB);
      break;
    case Routes.ActionSetC:
      trainingCardsRender(sets.actionSetC);
      break;
    case Routes.Adjective:
      trainingCardsRender(sets.adjective);
      break;
    case Routes.AnimalSetA:
      trainingCardsRender(sets.animalSetA);
      break;
    case Routes.AnimalSetB:
      trainingCardsRender(sets.animalSetB);
      break;
    case Routes.Clothes:
      trainingCardsRender(sets.clothes);
      break;
    case Routes.Emotions:
      trainingCardsRender(sets.emotions);
      break;
    case Routes.Statistic:
      statisticRender();
      break;
    default:
      mainPageRender();
      break;
  }
};

const gameRender = (hash: string) => {
  switch (hash) {
    case Routes.Home:
      mainPageRender();
      break;
    case Routes.ActionSetA:
      gameCardsRender(sets.actionSetA);
      break;
    case Routes.ActionSetB:
      gameCardsRender(sets.actionSetB);
      break;
    case Routes.ActionSetC:
      gameCardsRender(sets.actionSetC);
      break;
    case Routes.Adjective:
      gameCardsRender(sets.adjective);
      break;
    case Routes.AnimalSetA:
      gameCardsRender(sets.animalSetA);
      break;
    case Routes.AnimalSetB:
      gameCardsRender(sets.animalSetB);
      break;
    case Routes.Clothes:
      gameCardsRender(sets.clothes);
      break;
    case Routes.Emotions:
      gameCardsRender(sets.emotions);
      break;
    case Routes.Statistic:
      statisticRender();
      break;
    default:
      mainPageRender();
      break;
  }
};

const routing = (): void => {
  const controller = (hash: string) => {
    if (localStorage.getItem(LocalStorageKeys.Mode) === Mods.Training) {
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
