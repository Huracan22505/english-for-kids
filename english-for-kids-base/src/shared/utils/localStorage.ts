import { sets } from '../../data/sets';
import { LocalStorageKeys, Mods } from '../enums';
import { Set } from '../types';

export const setupLocalStorage = (): void => {
  const statistic = sets;
  const modeSwitcherToggle = document.querySelector(
    '.mode-switch__toggle',
  ) as HTMLInputElement;

  if (!localStorage.getItem(LocalStorageKeys.Mode))
    localStorage.setItem(LocalStorageKeys.Mode, Mods.Training);

  if (localStorage.getItem(LocalStorageKeys.Mode) === Mods.Game) {
    modeSwitcherToggle.checked = true;
  }

  if (!localStorage.getItem(LocalStorageKeys.Statistic)) {
    localStorage.setItem(LocalStorageKeys.Statistic, JSON.stringify(statistic));
  }
};

export const getDataFromLocalStorage = (
  key: string,
): { [index: string]: Array<Set> } => {
  const localStore = localStorage.getItem(key);
  if (typeof localStore !== 'string')
    throw new Error('Local Storage not found');

  const data = JSON.parse(localStore);
  return data;
};
