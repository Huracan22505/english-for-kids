import { categories } from '../../data/categories';
import { Sets, Set } from '../../shared/types';
import './statistic.scss';

const statisticMarkupTemplate = (
  words: Array<
  Array<Set>
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

const statisticRender = (data: Sets): void => {
  const words: Array<
  Array<Set>
  > = Object.values(data);

  const mainPage = document.getElementById('main') as HTMLElement;
  mainPage.innerHTML = statisticMarkupTemplate(words);
};

export { statisticRender };
