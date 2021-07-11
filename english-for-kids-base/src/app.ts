import refs from './shared/refs';
import { headerListeners, headerMarkup } from './components/header/header';
import { backdropMarkup } from './components/backdrop/backdrop';
import { sidebarMarkup } from './components/sidebar/sidebar';
import { footerMarkup } from './components/footer/footer';

const appMarkup = `
    ${headerMarkup}
    ${backdropMarkup}
    <main id="main"></main>
    ${sidebarMarkup}
    ${footerMarkup}
`;

export const appRender = (): void => {
  refs.appElement.insertAdjacentHTML('afterbegin', appMarkup);
  headerListeners();
};
