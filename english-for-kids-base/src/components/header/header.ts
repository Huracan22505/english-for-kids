import refs from '../../shared/refs';
import { switcherMarkup } from '../switcher/switcher';
import './header.scss';

export const headerMarkup = `
    <header class="header">
      <div class="container">
        <div class="header-container">
          <img
            id="burgerBtn"
            class="img burger-btn"
            src="./burger-icon.png"
            alt=""
            width="50px"
            height="50px"
          />
          <img
            src="https://media3.giphy.com/media/I3QPmzziCcTcY/giphy.gif"
            alt=""
            width="50px"
            height="50px"
          />
          <h1>English For Kids</h1>
          ${switcherMarkup}
        </div>
      </div>
    </header>
`;

export const headerListeners = (): void => {
  const burgerBtn = document.querySelector('#burgerBtn') as HTMLImageElement;
  const sidebar = document.querySelector('aside') as HTMLElement;
  const backdrop = document.querySelector('#cover') as HTMLElement;

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
      backdrop.classList.toggle('hidden');
    }
  });
};
