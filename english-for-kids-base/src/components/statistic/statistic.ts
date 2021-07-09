import { categories } from '../../data/categories';
import { Set } from '../../shared/types';
import { getSuccessPercents } from '../../shared/utils/getPercents';
import { sets } from '../../data/sets';
import './statistic.scss';

const categoriesMarkupTemplate = (words: Array<Array<Set>>) => `
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
`;

const statisticMarkupTemplate = (words: Array<Array<Set>>) => `
    <section class="statistic-section">
    <div class="stats-filters">
      <button class="stats-btn reset-btn" type="button">Reset</button>
      <button class="stats-btn sort-alphabet-btn" type="button">Sort by alphabet</button>
      <button class="stats-btn sort-guessing-btn" type="button">Sort by guessing</button>
      <button class="stats-btn sort-mistakes-btn" type="button">Sort by mistakes</button>
    </div>
      <h2 class="hidden">Statistic</h2>
      <div id="stats-table">
      ${categoriesMarkupTemplate(words)}
      </div>
    </section>
`;

const statisticRender = (): void => {
  const localStoreData = localStorage.getItem('statistic');
  if (!localStoreData) return;
  const data = JSON.parse(localStoreData);

  const words: Array<Array<Set>> = Object.values(data);

  const mainPage = document.getElementById('main') as HTMLElement;
  mainPage.innerHTML = statisticMarkupTemplate(words);

  const resetBtn = document.querySelector('.reset-btn') as HTMLElement;
  const sortAlphabetBtn = document.querySelector(
    '.sort-alphabet-btn',
  ) as HTMLElement;
  const sortByGuessingBtn = document.querySelector(
    '.sort-guessing-btn',
  ) as HTMLElement;
  const sortByMistakesBtn = document.querySelector(
    '.sort-mistakes-btn',
  ) as HTMLElement;

  resetBtn.addEventListener('click', () => {
    localStorage.clear();

    const statistic = sets;

    if (!localStorage.getItem('statistic')) {
      localStorage.setItem('statistic', JSON.stringify(statistic));
    }

    statisticRender();
  });

  const statsTable = document.getElementById('stats-table') as HTMLElement;

  sortAlphabetBtn.addEventListener('click', () => {
    if (localStorage.getItem('sortAlphabet') === 'alphabet') {
      const sortedByAlphabet = words.map(word =>
        word.sort((a, b) => (a.text < b.text ? 1 : -1)),
      );
      statsTable.innerHTML = categoriesMarkupTemplate(sortedByAlphabet);
      localStorage.setItem('sortAlphabet', 'reverse');
    } else {
      const sortedByAlphabet = words.map(word =>
        word.sort((a, b) => (a.text > b.text ? 1 : -1)),
      );
      statsTable.innerHTML = categoriesMarkupTemplate(sortedByAlphabet);
      localStorage.setItem('sortAlphabet', 'alphabet');
    }
  });

  sortByGuessingBtn.addEventListener('click', () => {
    if (localStorage.getItem('sortGuessing') === 'guessing') {
      const sortedByGuessing = words.map(word =>
        word.sort((a, b) => (a.success < b.success ? 1 : -1)),
      );
      statsTable.innerHTML = categoriesMarkupTemplate(sortedByGuessing);
      localStorage.setItem('sortGuessing', 'reverse');
    } else {
      const sortedByGuessing = words.map(word =>
        word.sort((a, b) => (a.success > b.success ? 1 : -1)),
      );
      statsTable.innerHTML = categoriesMarkupTemplate(sortedByGuessing);
      localStorage.setItem('sortGuessing', 'guessing');
    }
  });

  sortByMistakesBtn.addEventListener('click', () => {
    if (localStorage.getItem('sortMistakes') === 'mistakes') {
      const sortedByMistakes = words.map(word =>
        word.sort((a, b) => (a.mistakes < b.mistakes ? 1 : -1)),
      );
      statsTable.innerHTML = categoriesMarkupTemplate(sortedByMistakes);
      localStorage.setItem('sortMistakes', 'reverse');
    } else {
      const sortedByMistakes = words.map(word =>
        word.sort((a, b) => (a.mistakes > b.mistakes ? 1 : -1)),
      );
      statsTable.innerHTML = categoriesMarkupTemplate(sortedByMistakes);
      localStorage.setItem('sortMistakes', 'mistakes');
    }
  });
};

export { statisticRender };
