import header from './header';
import home from './home'
import './style.css';

const content = document.getElementById('content');

content.appendChild(header());

home();