export default function header() {
    const headerDiv = document.createElement('header');
    const logo = document.createElement('div');
    const navButtons = document.createElement('div');
    const homeDiv = document.createElement('div'); 
    const menuDiv = document.createElement('div');
    const contactDiv = document.createElement('div');

    headerDiv.appendChild(logo);

    const elements = [homeDiv, menuDiv, contactDiv]
    
    elements.forEach((element) => {
        navButtons.appendChild(element);
    });

    navButtons.className = 'nav-buttons';
    headerDiv.appendChild(navButtons);

    logo.innerHTML = 'Bodcacious Bagels';
    homeDiv.innerText = 'Home';
    menuDiv.innerText = 'Menu';
    contactDiv.innerText = 'Contact';
  
    return headerDiv;
};