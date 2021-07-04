import './sidebar.scss';

const sidebarMarkupTemplate = (
  data: Array<{
    category: string;
    image: string;
  }>,
): string => `
    <aside class="sidebar">
      <a href=""><h2>Main Page</h2></a>
      <ul class="sidebar-list">
      ${data
        .map(
          el =>
            `<li class="item">
          <a href="">${el.category}</a>
        </li>`,
        )
        .join('')}
      </ul>
    </aside>
`;

export { sidebarMarkupTemplate };
