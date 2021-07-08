export type Set = {
  id: number;
  text: string;
  translate: string;
  audio: string;
  image: string;
  clicks: number;
  success: number;
  mistakes: number;
};

export type Sets = {
  actionSetA: Array<Set>;
  actionSetB: Array<Set>;
  actionSetC: Array<Set>;
  adjective: Array<Set>;
  animalSetA: Array<Set>;
  animalSetB: Array<Set>;
  clothes: Array<Set>;
  emotions: Array<Set>;
};
