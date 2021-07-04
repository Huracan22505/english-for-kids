import { categories } from '../../data/categories';
import './mainPage.scss';

const mainPageMarkupTemplate = (
  data: Array<{
    category: string;
    image: string;
  }>,
) => `
    <section class="main-section">
      <div class="container">
        <ul class="category-list">
        ${data.map(
          el =>
            `<a href=""><li style="background-image: url(${el.image})" class="item">
            <p class="text" >${el.category}</p>
          </li></a>`,
        )}
        </ul>
      </div>
    </section>
`;

const mainPageRender = (): void => {
  const mainPage = document.getElementById('main') as HTMLElement;
  mainPage.innerHTML = mainPageMarkupTemplate(categories);
};

export { mainPageRender };
