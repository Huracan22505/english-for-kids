import './sidebar.scss';

const sidebarMarkupTemplate = (
  data: Array<{
    route: string;
    category: string;
    image: string;
  }>,
): string => `
    <aside class="sidebar">
      <a href="#home"><h2>Main Page</h2></a>
      <ul class="sidebar-list">
      ${data
    .map(
      el =>
        `<li class="item">
          <a href="#${el.route}">${el.category}</a>
        </li>`,
    )
    .join('')}
      </ul>
    </aside>
`;

export { sidebarMarkupTemplate };
