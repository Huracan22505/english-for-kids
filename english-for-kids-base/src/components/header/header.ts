import { routing } from '../../routing';
import { LocalStorageKeys, MenuIcons, Mods } from '../../shared/enums';
import refs from '../../shared/refs';
import { switcherMarkup } from '../switcher/switcher';
import './header.scss';

let mode;

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

const onModeSwitcherChange = () => {
  const statisticPage = 'statistic';
  mode = localStorage.getItem(LocalStorageKeys.Mode);

  switch (mode) {
    case Mods.Game:
      localStorage.setItem(LocalStorageKeys.Mode, Mods.Training);
      break;
    case Mods.Training:
      localStorage.setItem(LocalStorageKeys.Mode, Mods.Game);
      break;
    default:
      break;
  }

  if (window.location.hash.slice(1) === statisticPage) {
    return;
  }

  routing();
};

export const menuHandler = (): void => {
  const modeSwitcher = document.getElementById('mode-switcher') as HTMLElement;
  modeSwitcher.addEventListener('change', onModeSwitcherChange);

  const burgerBtn = document.querySelector('#burgerBtn') as HTMLImageElement;
  const sidebar = document.querySelector('aside') as HTMLElement;
  const backdrop = document.querySelector('#cover') as HTMLElement;

  burgerBtn.addEventListener('click', () => {
    sidebar.classList.toggle('sidebarActive');
    backdrop?.classList.toggle('hidden');
    burgerBtn.src = MenuIcons.Close;
  });

  refs.appElement.addEventListener('click', event => {
    const target = <HTMLElement>event.target;

    if (target.classList.contains('cover')) {
      sidebar.classList.toggle('sidebarActive');
      backdrop?.classList.toggle('hidden');
      burgerBtn.src = MenuIcons.Open;
    }
  });

  sidebar.addEventListener('click', e => {
    const [...links] = document.querySelectorAll('.sidebar .link');
    const target = e.target as HTMLElement;

    if (target.classList.contains('link')) {
      links.forEach(link => link.classList.remove('sidebar-active-link'));
      target.classList.add('sidebar-active-link');
      sidebar.classList.toggle('sidebarActive');
      burgerBtn.src = MenuIcons.Open;
      backdrop.classList.toggle('hidden');
    }
  });
};
