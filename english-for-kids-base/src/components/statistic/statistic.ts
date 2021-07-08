import { categories } from '../../data/categories';
import { Set } from '../../shared/types';
import { getSuccessPercents } from '../../shared/utils/getPercents';
import './statistic.scss';

const statisticMarkupTemplate = (words: Array<Array<Set>>) => `
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
                (ele: Set) => `
            <li class="word-list-item">
              <p>${ele.text}</p>
              <p>${ele.translate}</p>
              <p>Training clicks: ${ele.clicks}</p>
              <p>Guessing: ${ele.success}</p>
              <p>Mistakes: ${ele.mistakes}</p>
              <p>Guessing ${getSuccessPercents(ele.success, ele.mistakes)}%</p>
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

const statisticRender = (): void => {
  const localStoreData = localStorage.getItem('statistic');
  if (!localStoreData) return;
  const data = JSON.parse(localStoreData);

  const words: Array<Array<Set>> = Object.values(data);

  const mainPage = document.getElementById('main') as HTMLElement;
  mainPage.innerHTML = statisticMarkupTemplate(words);
};

export { statisticRender };
