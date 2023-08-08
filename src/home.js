export default function home() {
    const main = document.createElement('main');
    const story = document.createElement('div');
    const p = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    story.className = 'story';

    p.innerText = 'Established in 2003, Bodacious Bagels brings the best of New York Style bagels to the Southwest.';
    p2.innerText = 'Featuring twelve different varieties of water boiled bagels and a plethora of toppings including cream cheese, breakfast, and lunch options.';
    p3.innerText = 'Dine-in, take-out, and catering options available.';
    story.appendChild(p);
    story.appendChild(p2);
    story.appendChild(p3);
    main.appendChild(story);
    return main;
};