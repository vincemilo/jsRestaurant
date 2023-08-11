export default function menu() {
    const main = document.createElement('main');
    const menuDiv = document.createElement('div');
    const menuItems = document.createElement('div');
    const items = {'1 Piece Bagel':'$1.50', 
    'Bakers Dozen Bagel' : '$18.00',
    'Bagel with Cream Cheese' : '$3.75',
    'Eggs with Bacon Sandwich' : '$7.99',
    'Nova and Cream Cheese Bagel Sandwich' : '$14.50',
    'Bacon, Lettuce, and Tomato Bagel Sandwich' : '$8.99',
    };

    for (const prop in items) {
        let item = document.createElement('div');
        let key = document.createElement('div');
        let value = document.createElement('div');
        key.innerText = prop;
        value.innerText = items[prop];
        item.appendChild(key);
        item.appendChild(value);
        item.className = 'item';
        menuItems.appendChild(item);
    }

    menuDiv.className = 'menu-div';
    menuDiv.innerText = 'Menu';
    menuItems.className = 'menu-items';

    
    
    menuDiv.appendChild(menuItems);
    main.appendChild(menuDiv);
    return main;
}