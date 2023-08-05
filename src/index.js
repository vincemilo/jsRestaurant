import header from './header';
import home from './home'
import footer from './footer';
import './style.css';


const content = document.getElementById('content');

content.appendChild(header());
content.appendChild(home());
content.appendChild(footer());