import { categories } from '../../data/categories';
import './mainPage.scss';

const mainPageMarkupTemplate = (
  data: Array<{
    route: string;
    category: string;
    image: string;
  }>,
) => `
    <section class="category-section">
      <div class="container">
        <ul class="category-list">
        ${data
    .map(
      el =>
        `<a href="#${el.route}"><li style="background-image: url(${el.image})" class="item">
            <p class="text" >${el.category}</p>
          </li></a>`,
    )
    .join(' ')}
        </ul>
      </div>
    </section>
`;

const mainPageRender = (): void => {
  const mainPage = document.getElementById('main') as HTMLElement;
  mainPage.innerHTML = mainPageMarkupTemplate(categories);
};

export { mainPageRender };
