import { categories } from '../../data/categories';
import './statistic.scss';

const statisticMarkupTemplate = (
  words: Array<
    Array<{
      id: number;
      text: string;
      translate: string;
      audio: string;
      image: string;
    }>
  >,
) => `
    <section class="statistic-section">
      <h2 class="hidden">Statistic</h2>
      <ul class="category">
        ${categories
          .map(
            (el, i) => `
        <li class="item">
          <div>
            <h3 class="title">${el.category}</h3>
            <img src="${el.image}" alt="" />
          </div>
          <ul class="words-list">
            ${words[i]
              .map(
                (ele: { text: string; translate: string }) => `
            <li class="word-list-item">
              <p>${ele.text}</p>
              <p>${ele.translate}</p>
            </li>
            `,
              )
              .join(' ')}
          </ul>
        </li>
        `,
          )
          .join(' ')}
      </ul>
    </section>
`;

const statisticRender = (data: {
  actionSetA: Array<{
    id: number;
    text: string;
    translate: string;
    audio: string;
    image: string;
  }>;
  actionSetB: Array<{
    id: number;
    text: string;
    translate: string;
    audio: string;
    image: string;
  }>;
  actionSetC: Array<{
    id: number;
    text: string;
    translate: string;
    audio: string;
    image: string;
  }>;
  adjective: Array<{
    id: number;
    text: string;
    translate: string;
    audio: string;
    image: string;
  }>;
  animalSetA: Array<{
    id: number;
    text: string;
    translate: string;
    audio: string;
    image: string;
  }>;
  animalSetB: Array<{
    id: number;
    text: string;
    translate: string;
    audio: string;
    image: string;
  }>;
  clothes: Array<{
    id: number;
    text: string;
    translate: string;
    audio: string;
    image: string;
  }>;
  emotions: Array<{
    id: number;
    text: string;
    translate: string;
    audio: string;
    image: string;
  }>;
}): void => {
  const words: Array<
    Array<{
      id: number;
      text: string;
      translate: string;
      audio: string;
      image: string;
    }>
  > = Object.values(data);

  const mainPage = document.getElementById('main') as HTMLElement;
  mainPage.innerHTML = statisticMarkupTemplate(words);
};

export { statisticRender };
