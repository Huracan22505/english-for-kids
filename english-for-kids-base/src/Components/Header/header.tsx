import React from 'react';
import './style.scss';

export default function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header-container">
          <img
            className="img"
            src="./burger-icon.png"
            alt=""
            width="59px"
            height="59px"
          />
          <div className="switcher__block">
            <input className="switcher" id="switch1" type="checkbox"></input>
            <label className="switcher__for" htmlFor="switch1"></label>
          </div>
        </div>
      </div>
    </header>
  );
}
