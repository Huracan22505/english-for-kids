import './sidebar.scss';

const sidebarMarkupTemplate = (
  data: Array<{
    route: string;
    category: string;
    image: string;
  }>,
): string => `
    <aside class="sidebar">
      <h2><a href="#home" class="link sidebar-active-link">Main Page</a></h2>
      <ul class="sidebar-list">
      ${data
    .map(
      el =>
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

export { sidebarMarkupTemplate };
