import { playAudio } from '../../shared/utils/audio';
import { shuffle } from '../../shared/utils/shuffleArr';

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
    <button class="start-btn" type="button">
      <span class="start-btn-text">Start</span>
      <img class="start-btn-img hidden" src="./images/repeat.png" alt="" />
    </button>`;

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

      let score = 0;
      let mistakes = 0;

      startBtnText?.classList.add('hidden');
      startBtnImg?.classList.remove('hidden');

      playAudio(shuffledArr[0]);

      startBtn.addEventListener('click', () => playAudio(shuffledArr[0]));

      cardField.addEventListener('click', e => {
        const target = <HTMLElement>e.target;

        if (target.classList.contains('card__front')) {
          const targetId = target.dataset.id;
          const targetAudio = target.dataset.audio;

          if (targetAudio === shuffledArr[0]) {
            score += 1;

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
            playAudio('./audio/error.mp3');
          }
        }
      });
    },
    { once: true },
  );
};

export { gameCardsRender };
