import './switcher.scss';

export const switcherMarkup = `<div class="mode-switcher">
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
`;
