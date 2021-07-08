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
        `<li style="background-image: url(${el.image})" class="item"><a href="#${el.route}">
            <p class="text" >${el.category}</p>
          </a></li>`,
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
