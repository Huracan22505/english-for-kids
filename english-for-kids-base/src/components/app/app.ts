import refs from '../../shared/refs';
import { headerMarkup } from '../header/header';
import { backdropMarkup } from '../backdrop/backdrop';
import { sidebarMarkupTemplate } from '../sidebar/sidebar';
import { footerMarkup } from '../footer/footer';
import { categories } from '../../data/categories';
import './app.scss';

const appMarkup = `
    ${headerMarkup}
    ${backdropMarkup}
    <main id="main"></main>
    ${sidebarMarkupTemplate(categories)}
    ${footerMarkup}
`;

const appRender = (): void => {
  refs.appElement.insertAdjacentHTML('afterbegin', appMarkup);

  const burgerBtn = document.querySelector('#burgerBtn') as HTMLImageElement;
  const sidebar = document.querySelector('aside') as HTMLElement;
  const backdrop = document.querySelector('#cover');

  burgerBtn.addEventListener('click', () => {
    sidebar.classList.toggle('sidebarActive');
    backdrop?.classList.toggle('hidden');
    burgerBtn.src = './close-burger.png';
  });

  refs.appElement.addEventListener('click', event => {
    const target = <HTMLElement>event.target;

    if (target.classList.contains('cover')) {
      sidebar.classList.toggle('sidebarActive');
      backdrop?.classList.toggle('hidden');
      burgerBtn.src = './burger-icon.png';
    }
  });

  sidebar.addEventListener('click', e => {
    const [...links] = document.querySelectorAll('.sidebar .link');
    const target = e.target as HTMLElement;

    if (target.classList.contains('link')) {
      links.forEach(link => link.classList.remove('sidebar-active-link'));
      target.classList.add('sidebar-active-link');
      sidebar.classList.toggle('sidebarActive');
      burgerBtn.src = './burger-icon.png';
      backdrop?.classList.toggle('hidden');
    }
  });
};

export { appRender };
