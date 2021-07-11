import { categories } from '../../data/categories';
import { Category } from '../../shared/types';
import './sidebar.scss';

export const sidebarMarkup = `
    <aside class="sidebar">
      <h2><a href="#home" class="link sidebar-active-link">Main Page</a></h2>
      <ul class="sidebar-list">
      ${categories
    .map(
      (el: Category) =>
        `<li class="item">
          <a class="link" href="#${el.route}">${el.category}</a>
        </li>`,
    )
    .join('')}
          <li class="item">
            <a class="link" href="#statistic">Statistic</a>
          </li>
      </ul>
    </aside>
`;
