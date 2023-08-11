export default function home() {
    const main = document.createElement('main');
    const story = document.createElement('div');
    story.className = 'story';

    story.innerText = 'Established in 2003, Bodacious Bagels brings the best of New York Style bagels to the Southwest. \n\n Featuring twelve different varieties of water boiled bagels and a plethora of toppings including cream cheeses, breakfast, and lunch options. \n\n Dine-in, take-out, and catering options available.'
    main.appendChild(story);
    return main;
};