import header from './header';
import home from './home'
import menu from './menu'
import contact from './contact';
import footer from './footer';
import './style.css';

const content = document.getElementById('content');

content.appendChild(header());
content.appendChild(home());
content.appendChild(footer());

const navButtons = document.querySelector('.nav-buttons');

navButtons.addEventListener('click', (e) => {
    const main = document.querySelector('main');
    let button = e.target.className;
    if (button === 'home btn'){
        content.replaceChild(home(), main);
    } else if (button === 'menu btn'){
        content.replaceChild(menu(), main);
    } else if (button === 'contact btn'){
        content.replaceChild(contact(), main);
    };
});