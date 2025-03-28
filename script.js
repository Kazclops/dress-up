let character = document.getElementById('character');
let background = document.getElementById('background');
let options = {
    hat: [null, 'hat1.png', 'hat2.png', 'hat3.png', 'hat4.png', 'hat5.png'],
    shirt: [null, 'shirt1.png', 'shirt2.png', 'shirt3.png', 'shirt4.png', 'shirt5.png'],
    trouser: [null, 'trouser1.png', 'trouser2.png', 'trouser3.png', 'trouser4.png', 'trouser5.png'],
    shoe: [null, 'shoe1.png', 'shoe2.png', 'shoe3.png', 'shoe4.png', 'shoe5.png'],
    crochetHook: [null, 'hook1.png', 'hook2.png', 'hook3.png', 'hook4.png', 'hook5.png'],
    accessory: [null, 'accessory1.png', 'accessory2.png', 'accessory3.png', 'accessory4.png', 'accessory5.png'],
};

function changeItem(item, index) {
    let element = document.createElement('img');
    element.src = `images/${options[item][index]}`;
    element.classList.add(item);
    element.style.position = 'absolute';

    // Clear current item and update the new one
    let currentItem = document.querySelector(`.${item}`);
    if (currentItem) {
        currentItem.remove();
    }
    
    character.appendChild(element);
}

function resetItems() {
    character.innerHTML = '';  // Remove all accessories
    // Reset to default position for character and background
}

function takeScreenshot() {
    alert("Screenshot feature coming soon!");
    // Placeholder for screenshot logic, e.g., using HTML2Canvas library
}
