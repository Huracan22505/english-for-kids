import { playAudio } from '../../shared/utils/audio';
import { shuffle } from '../../shared/utils/shuffleArr';
import { Set } from '../../shared/types';
import './cards.scss';

const gameCardsMarkupTemplate = (
  data: Array<{
    id: number;
    text: string;
    translate: string;
    audio: string;
    image: string;
  }>,
) => `
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

const gameCardsRender = (
  data: Array<{
    id: number;
    text: string;
    translate: string;
    audio: string;
    image: string;
  }>,
): void => {
  const mainPage = document.getElementById('main') as HTMLElement;

  mainPage.innerHTML = gameCardsMarkupTemplate(data);

  const startBtn = document.querySelector('.start-btn') as HTMLButtonElement;
  const cardField = document.querySelector('.cards-field') as HTMLDivElement;
  const [...cardContainers] = document.querySelectorAll('.card-container');
  const [...cardCovers] = document.querySelectorAll('.card-cover');

  const audioArr = data.map(el => el.audio);
  const shuffledArr = shuffle(audioArr);

  startBtn.addEventListener(
    'click',
    () => {
      const startBtnText = document.querySelector('.start-btn-text');
      const startBtnImg = document.querySelector('.start-btn-img');
      const scoreContainer = document.querySelector('.score');

      let score = 0;
      let mistakes = 0;

      startBtnText?.classList.add('hidden');
      startBtnImg?.classList.remove('hidden');

      playAudio(shuffledArr[0]);

      startBtn.addEventListener('click', () => playAudio(shuffledArr[0]));

      cardField.addEventListener('click', e => {
        const target = <HTMLElement>e.target;
        const location = window.location.hash.slice(1);

        if (target.classList.contains('card__front')) {
          const targetId = target.dataset.id;
          const targetAudio = target.dataset.audio;
          const [...starsCount] = document.querySelectorAll('.star');

          if (targetAudio === shuffledArr[0]) {
            score += 1;

            // LOCAL STORAGE
            const localStore = localStorage.getItem('statistic');
            if (typeof localStore !== 'string') return;

            const dataStorage = JSON.parse(localStore);
            const targetSet: Array<Set> = dataStorage[location];

            const filteredArr = targetSet.filter(
              (el: Set) => el.audio === targetAudio,
            );
            const targetStorageObj = filteredArr[0];
            targetStorageObj.success += 1;
            localStorage.setItem('statistic', JSON.stringify(dataStorage));

            if (score === 8 && mistakes !== 0) {
              playAudio('./audio/failure.mp3');
              mainPage.innerHTML = `<img class="win-img" src="./images/failure.gif" alt="you win" />
              <p class="failure-msg" >You made ${mistakes} ${
  mistakes > 1 ? 'mistakes' : 'mistake'
}!</p>`;

              setTimeout(() => {
                window.location.hash = '#home';
              }, 2500);
            }

            if (score === 8 && mistakes === 0) {
              playAudio('./audio/success.mp3');
              mainPage.innerHTML = `<img class="win-img" src="./images/win.gif" alt="you win" />`;

              setTimeout(() => {
                window.location.hash = '#home';
              }, 3000);
            }

            if (starsCount.length > 7) scoreContainer?.lastChild?.remove();
            scoreContainer?.insertAdjacentHTML(
              'afterbegin',
              `<img class="star" src="./images/star-win.png" alt="success">`,
            );

            cardContainers[Number(targetId) - 1].classList.add(
              'noPointerEvents',
            );
            cardCovers[Number(targetId) - 1].classList.remove('hidden');

            playAudio('./audio/correct.mp3');

            setTimeout(() => {
              shuffledArr.shift();
              playAudio(shuffledArr[0]);
            }, 700);
          } else {
            mistakes += 1;

            // LOCAL STORAGE
            const localStore = localStorage.getItem('statistic');
            if (typeof localStore !== 'string') return;

            const dataStorage = JSON.parse(localStore);
            const targetSet: Array<Set> = dataStorage[location];

            const filteredArr = targetSet.filter(
              (el: Set) => el.audio === shuffledArr[0],
            );
            const targetStorageObj = filteredArr[0];
            targetStorageObj.mistakes += 1;
            localStorage.setItem('statistic', JSON.stringify(dataStorage));

            if (starsCount.length > 7) scoreContainer?.lastChild?.remove();
            scoreContainer?.insertAdjacentHTML(
              'afterbegin',
              '<img class="star" src="./images/star.png" alt="success">',
            );

            playAudio('./audio/error.mp3');
          }
        }
      });
    },
    { once: true },
  );
};

export { gameCardsRender };
