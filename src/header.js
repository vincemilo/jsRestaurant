export default function header() {
    const headerDiv = document.createElement('header');
    const logo = document.createElement('div');
    const navButtons = document.createElement('div');
    const homeDiv = document.createElement('div'); 
    const menuDiv = document.createElement('div');
    const contactDiv = document.createElement('div');

    headerDiv.appendChild(logo);

    const elements = [homeDiv, menuDiv, contactDiv];
    let elementName = ['home', 'menu', 'contact'];
    let i = 0;
    
    elements.forEach((element) => {
        element.className = `${elementName[i]} btn`;
        navButtons.appendChild(element);
        i++
    });

    navButtons.className = 'nav-buttons';

    headerDiv.appendChild(navButtons);

    logo.innerHTML = 'Bodcacious Bagels';
    homeDiv.innerText = 'Home';
    menuDiv.innerText = 'Menu';
    contactDiv.innerText = 'Contact';
  
    return headerDiv;
};