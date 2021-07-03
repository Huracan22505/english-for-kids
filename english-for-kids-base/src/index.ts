import { headerRender } from './components/header/header';
import { routing } from './routing';
import './style.scss';

localStorage.setItem('gameCategory', 'Animals');
localStorage.setItem('gameDifficulty', '4x4');

headerRender();
routing();
