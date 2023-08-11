export default function contact() {
    const main = document.createElement('main');
    const contactDiv = document.createElement('div');
    const contactInfo = document.createElement('div');

    contactDiv.className = 'contact-div';
    contactDiv.innerText = 'Contact';
    contactInfo.innerText = `Phone: 505-505-5050
    info@bodaciousbagels.com`;
    contactInfo.className = 'contact-info';
    
    contactDiv.appendChild(contactInfo);
    main.appendChild(contactDiv);
    return main;
}