import refs from '../../shared/refs';
import { sidebarMarkupTemplate } from '../sidebar/sidebar';
import { backdropMarkup } from '../backdrop/backdrop';
import { categories } from '../../data/categories';
import './header.scss';

const headerMarkupTemplate = `
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
          <h1>English For Kids</h1>
          <div class="mode-switcher">
           <p class="text">Train</p>
           <div id="mode-switcher" class="mode-switch__control">
            <input
              class="mode-switch__toggle"
              type="checkbox"
              name="mode"
              id="mode-switch-toggle"
              aria-label="Change mode"
            />
             <label
              aria-hidden="true"
              class="mode-switch__track"
              for="mode-switch-toggle"
            >
             </label>
             <div aria-hidden="true" class="mode-switch__marker">
             </div>
           </div>
           <p class="text">Game</p>
          </div>
        </div>
      </div>
    </header>
    ${backdropMarkup}
    <main id="main" class="main"></main>
    ${sidebarMarkupTemplate(categories)}
`;

const headerRender = (): void => {
  refs.appElement?.insertAdjacentHTML('afterbegin', headerMarkupTemplate);

  const burgerBtn = document.querySelector('#burgerBtn') as HTMLImageElement;
  const sidebar = document.querySelector('aside') as HTMLElement;
  const app = document.querySelector('#app') as HTMLElement;
  const backdrop = document.querySelector('#cover');

  burgerBtn.addEventListener('click', () => {
    sidebar.classList.toggle('sidebarActive');
    backdrop?.classList.toggle('hidden');
    burgerBtn.src = './close-burger.png';
  });

  app.addEventListener('click', event => {
    const target = <HTMLElement>event.target;

    if (target.classList.contains('cover')) {
      sidebar.classList.toggle('sidebarActive');
      backdrop?.classList.toggle('hidden');
      burgerBtn.src = './burger-icon.png';
    }
  });
};

export { headerRender };
