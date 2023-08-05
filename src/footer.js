export default function footer() {
    const footerDiv = document.createElement('footer');
    const copyright = document.createElement('div');

    copyright.innerText = '(c) Bodacious Bagels 2003-2023';
    
    footerDiv.appendChild(copyright);
  
    return footerDiv;
};