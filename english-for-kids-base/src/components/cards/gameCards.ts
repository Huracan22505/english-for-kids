import { playAudio } from '../../shared/utils/audio';
import { shuffle } from '../../shared/utils/shuffleArr';
import { getDataFromLocalStorage } from '../../shared/utils/localStorage';
import {
  Delays,
  EndGameImg,
  LocalStorageKeys,
  ScoreImg,
  Audio,
  Scores,
} from '../../shared/enums';
import { Set } from '../../shared/types';
import './cards.scss';

const gameCardsMarkupTemplate = (data: Array<Set>) => `
    <div class="cards-field">
      ${data
    .map(
      el => `
      <div class="card-container">
        <div class="card">
          <div class="card-cover hidden"></div>
          <div
            class="card__front"
            style="background-image: url(${el.image})"
            data-audio="${el.audio}"
            data-id="${el.id}"
          ></div>
        </div>
      </div>
      `,
    )
    .join(' ')}
    </div>
    <div class="score-container">
    <div class="score"></div>
    <button class="start-btn" type="button">
    <span class="start-btn-text">Start</span>
    <img class="start-btn-img hidden" src="./images/repeat.png" alt="" />
    </button>
    </div>
`;

const startGame = (data: Array<Set>) => {
  const mainPage = document.getElementById('main') as HTMLElement;
  const startBtn = document.querySelector('.start-btn') as HTMLButtonElement;
  const cardField = document.querySelector('.cards-field') as HTMLDivElement;
  const [...cardContainers] = document.querySelectorAll('.card-container');
  const [...cardCovers] = document.querySelectorAll('.card-cover');

  const audioArr = data.map(el => el.audio);
  const shuffledAudioArr = shuffle(audioArr);

  startBtn.addEventListener(
    'click',
    () => {
      const startBtnText = document.querySelector('.start-btn-text');
      const startBtnImg = document.querySelector('.start-btn-img');
      const scoreContainer = document.querySelector('.score');

      let score = 0;
      let mistakes = 0;
      const starsLimit = 7;
      const homeView = '#home';

      startBtnText?.classList.add('hidden');
      startBtnImg?.classList.remove('hidden');
      playAudio(shuffledAudioArr[0]);

      startBtn.addEventListener('click', () => playAudio(shuffledAudioArr[0]));

      cardField.addEventListener('click', e => {
        const targetElem = <HTMLElement>e.target;
        const location = window.location.hash.slice(1);

        if (targetElem.classList.contains('card__front')) {
          const targetId = targetElem.dataset.id;
          const targetAudio = targetElem.dataset.audio;
          const [...starsCount] = document.querySelectorAll('.star');

          if (targetAudio === shuffledAudioArr[0]) {
            playAudio(Audio.Success);
            score += 1;

            const dataStorage = getDataFromLocalStorage(
              LocalStorageKeys.Statistic,
            );
            const targetSet: Array<Set> = dataStorage[location];
            const filteredArr = targetSet.filter(
              (el: Set) => el.audio === targetAudio,
            );
            const targetStorageObj = filteredArr[0];
            targetStorageObj.success += 1;
            localStorage.setItem(
              LocalStorageKeys.Statistic,
              JSON.stringify(dataStorage),
            );

            if (score === Scores.Win && mistakes !== Scores.NoMistakes) {
              playAudio(Audio.Failure);
              mainPage.innerHTML = `<img class="win-img" src=${
                EndGameImg.Failure
              }
               alt="you win" />
              <p class="failure-msg">You made ${mistakes} ${
  mistakes > 1 ? 'mistakes' : 'mistake'
}!</p>`;

              setTimeout(() => {
                window.location.hash = homeView;
              }, Delays.Failure);
            }

            if (score === Scores.Win && mistakes === Scores.NoMistakes) {
              playAudio(Audio.Win);
              mainPage.innerHTML = `<img class="win-img" src=${EndGameImg.Win} alt="you win" />`;

              setTimeout(() => {
                window.location.hash = homeView;
              }, Delays.Win);
            }

            if (starsCount.length > starsLimit)
              scoreContainer?.lastChild?.remove();

            scoreContainer?.insertAdjacentHTML(
              'afterbegin',
              `<img class="star" src=${ScoreImg.Success} alt="success">`,
            );

            cardContainers[Number(targetId) - 1].classList.add(
              'noPointerEvents',
            );
            cardCovers[Number(targetId) - 1].classList.remove('hidden');

            setTimeout(() => {
              shuffledAudioArr.shift();
              playAudio(shuffledAudioArr[0]);
            }, Delays.NextAudio);
          } else {
            mistakes += 1;

            const dataStorage = getDataFromLocalStorage(
              LocalStorageKeys.Statistic,
            );
            const targetSet: Array<Set> = dataStorage[location];
            const filteredArr = targetSet.filter(
              (el: Set) => el.audio === shuffledAudioArr[0],
            );
            const targetStorageObj = filteredArr[0];
            targetStorageObj.mistakes += 1;
            localStorage.setItem(
              LocalStorageKeys.Statistic,
              JSON.stringify(dataStorage),
            );

            if (starsCount.length > starsLimit)
              scoreContainer?.lastChild?.remove();

            scoreContainer?.insertAdjacentHTML(
              'afterbegin',
              `<img class="star" src=${ScoreImg.Mistake} alt="success">`,
            );

            playAudio(Audio.Mistake);
          }
        }
      });
    },
    { once: true },
  );
};

export const gameCardsRender = (data: Array<Set>): void => {
  const mainPage = document.getElementById('main') as HTMLElement;
  mainPage.innerHTML = gameCardsMarkupTemplate(data);

  startGame(data);
};
