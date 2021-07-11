export enum Mods {
  Training = 'training',
  Game = 'game',
}

export enum LocalStorageKeys {
  Mode = 'mode',
  Statistic = 'statistic',
}

export enum EndGameImg {
  Win = './images/win.gif',
  Failure = 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_174772259_2000148320009280397_382964.jpg',
}

export enum ScoreImg {
  Success = './images/star-win.png',
  Mistake = './images/star.png',
}

// IN MILLISECONDS
export enum Delays {
  Win = 3000,
  Failure = 2500,
  NextAudio = 700,
}

export enum Audio {
  Win = './audio/success.mp3',
  Failure = './audio/failure.mp3',
  Success = './audio/correct.mp3',
  Mistake = './audio/error.mp3',
}

export enum Scores {
  Win = 8,
  NoMistakes = 0,
}

export enum MenuIcons {
  Open = './burger-icon.png',
  Close = './close-burger.png',
}
