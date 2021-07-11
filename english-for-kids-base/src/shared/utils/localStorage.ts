import { Set } from '../types';

export const getDataFromLocalStorage = (
  key: string,
): { [index: string]: Array<Set> } => {
  const localStore = localStorage.getItem(key);
  if (typeof localStore !== 'string')
    throw new Error('Local Storage not found');

  const data = JSON.parse(localStore);
  return data;
};
