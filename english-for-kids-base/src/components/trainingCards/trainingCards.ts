import { playAudio } from '../../shared/utils/audio';

const trainingCardsMarkupTemplate = (
  data: Array<{
    id: number;
    text: string;
    translate: string;
    audio: string;
    image: string;
  }>,
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

const trainingCardsRender = (
  data: Array<{
    id: number;
    text: string;
    translate: string;
    audio: string;
    image: string;
  }>,
): void => {
  const mainPage = document.getElementById('main') as HTMLElement;
  mainPage.innerHTML = trainingCardsMarkupTemplate(data);

  const cardField = document.querySelector('.cards-field') as HTMLDivElement;
  const [...cardContainers] = document.querySelectorAll('.card-container');

  cardField.addEventListener('click', e => {
    const target = <HTMLButtonElement>e.target;
    const targetId = target.dataset.id;
    const targetAudio = target.dataset.audio;

    if (targetId) {
      cardContainers[Number(targetId) - 1].classList.remove('flipped');

      cardField.addEventListener('mouseover', ev => {
        const mouseTarget = <HTMLDivElement>ev.target;

        if (mouseTarget.classList.contains('cards-field')) {
          cardContainers[Number(targetId) - 1].classList.add('flipped');
        }
      });
    }

    if (targetAudio) {
      playAudio(targetAudio);
    }
  });
};

export { trainingCardsRender };
