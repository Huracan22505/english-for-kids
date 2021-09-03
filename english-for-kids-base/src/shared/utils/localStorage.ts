import { sets } from '../../data/sets';
import { LocalStorageKeys, Mods } from '../enums';
import { Set } from '../types';

export const setupLocalStorage = (): void => {
  const statistic = sets;
  const modeSwitcherToggle = document.querySelector(
    '.mode-switch__toggle',
  ) as HTMLInputElement;
  const getMode = localStorage.getItem(LocalStorageKeys.Mode);

  if (!getMode) localStorage.setItem(LocalStorageKeys.Mode, Mods.Training);

  if (getMode === Mods.Game) {
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

  return JSON.parse(localStore);
};
