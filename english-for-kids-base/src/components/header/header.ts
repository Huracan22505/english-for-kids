import refs from '../../shared/refs';
import './header.scss';

const headerMarkupTemplate = `
    <header class="header">
      <div class="container">
        <div class="header-container">
          <img
            class="img"
            src="./burger-icon.png"
            alt=""
            width="59px"
            height="59px"
          />
          <h1>English For Kids</h1>
          <div class="mode-switch__control">
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
            <div aria-hidden="true" class="mode-switch__marker"></div>
          </div>
        </div>
      </div>
    </header>
    <main id="main"></main>
`;

const headerRender = (): void => {
  refs.appElement?.insertAdjacentHTML('afterbegin', headerMarkupTemplate);
};

export { headerRender };
