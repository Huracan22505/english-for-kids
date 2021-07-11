import { playAudio } from '../../shared/utils/audio';
import { Set } from '../../shared/types';
import { getDataFromLocalStorage } from '../../shared/utils/localStorage';
import { LocalStorageKeys } from '../../shared/enums';

const trainingCardsMarkupTemplate = (
  data: Array<Set>,
) => `<div class="cards-field">
      ${data
    .map(
      el => `
      <div class="card-container flipped">
        <div class="card">
          <div
            class="card__front"
            style="background-image: url(${el.image})"
          >
            <p class="text">${el.translate}</p>
          </div>
          <div
            data-audio="${el.audio}"
            class="card__back"
            style="background-image: url(${el.image})"
          >
            <p class="text">${el.text}</p>
            <button class="btn" type="button">
              <img data-id="${el.id.toString()}" src="./flip.png" alt="" />
            </button>
          </div>
        </div>
      </div>`,
    )
    .join(' ')}
    </div>
`;

const startTraining = () => {
  const cardField = document.querySelector('.cards-field') as HTMLDivElement;
  const [...cardContainers] = document.querySelectorAll('.card-container');

  cardField.addEventListener('click', e => {
    const targetElem = <HTMLButtonElement>e.target;
    const targetId = targetElem.dataset.id;
    const targetAudio = targetElem.dataset.audio;

    if (targetAudio) {
      playAudio(targetAudio);
      const location = window.location.hash.slice(1);

      const dataStorage = getDataFromLocalStorage(LocalStorageKeys.Statistic);
      const targetSet: Array<Set> = dataStorage[location];
      const filteredArr = targetSet.filter(
        (el: Set) => el.audio === targetAudio,
      );
      const targetStorageObj = filteredArr[0];
      targetStorageObj.clicks += 1;
      localStorage.setItem(
        LocalStorageKeys.Statistic,
        JSON.stringify(dataStorage),
      );
    }

    if (targetId) {
      cardContainers[Number(targetId) - 1].classList.remove('flipped');

      cardField.addEventListener('mouseover', ev => {
        const mouseTarget = <HTMLDivElement>ev.target;

        if (mouseTarget.classList.contains('cards-field')) {
          cardContainers[Number(targetId) - 1].classList.add('flipped');
        }
      });
    }
  });
};

export const trainingCardsRender = (data: Array<Set>): void => {
  const mainPage = document.getElementById('main') as HTMLElement;
  mainPage.innerHTML = trainingCardsMarkupTemplate(data);

  startTraining();
};
