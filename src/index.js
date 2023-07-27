import home from './home'

const content = document.getElementById('content');

function component() {
    const element = document.createElement('header');
  
    
    element.innerHTML = 'Bodcacious Bagels';
    home();
  
    return element;
  }
  
  content.appendChild(component());