import refs from './shared/refs';
import { menuHandler, headerMarkup } from './components/header/header';
import { backdropMarkup } from './components/backdrop/backdrop';
import { sidebarMarkup } from './components/sidebar/sidebar';
import { routing } from './routing';
import { setupLocalStorage } from './shared/utils/localStorage';

const setupApp = () => {
  routing();
  setupLocalStorage();
};

const appMarkup = `
    ${headerMarkup}
    ${backdropMarkup}
    <main id="main"></main>
    ${sidebarMarkup}
`;

export const appRender = (): void => {
  refs.appElement.insertAdjacentHTML('afterbegin', appMarkup);
  menuHandler();
  setupApp();
};
