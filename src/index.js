import home from './home'
import './style.css';

home();
const content = document.getElementById('content');

function component() {
    const header = document.createElement('header');
    const logo = document.createElement('div');
    const home = document.createElement('div');
    const menu = document.createElement('div');
    const contact = document.createElement('div');
    logo.innerHTML = 'Bodcacious Bagels';
    home.innerText = 'Home';
    menu.innerText = 'Menu';
    contact.innerText = 'Contact';

    const elements = [logo, home, menu, contact]
    
    elements.forEach((element) => {
        header.appendChild(element)
    });
  
    return header;
  }
  
content.appendChild(component());