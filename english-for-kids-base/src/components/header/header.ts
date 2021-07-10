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
