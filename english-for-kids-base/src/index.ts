import { headerRender } from './components/header/header';
import { routing } from './routing';
import { sets } from './data/sets';
import './style.scss';

headerRender();
routing();

const modeSwitcher = document.getElementById('mode-switcher') as HTMLElement;
const modeSwitcherToggle = document.querySelector(
  '.mode-switch__toggle',
) as HTMLInputElement;

let mode;

if (!localStorage.getItem('mode')) localStorage.setItem('mode', 'training');

if (localStorage.getItem('mode') === 'game') {
  modeSwitcherToggle.checked = true;
}

modeSwitcher.addEventListener('change', () => {
  mode = localStorage.getItem('mode');

  switch (mode) {
    case 'game':
      localStorage.setItem('mode', 'training');
      break;
    case 'training':
      localStorage.setItem('mode', 'game');
      break;
    default:
      break;
  }

  if (window.location.hash.slice(1) === 'statistic') {
    return;
  }

  routing();
});

// CODE DUPLICATE

const statistic = sets;

if (!localStorage.getItem('statistic')) {
  localStorage.setItem('statistic', JSON.stringify(statistic));
}
