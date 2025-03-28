// Arrays to store the image paths for each outfit
const hats = [
    'images/hat1.png',
    'images/hat2.png',
    'images/hat3.png'
];

const shirts = [
    'images/shirt1.png',
    'images/shirt2.png',
    'images/shirt3.png'
];

const trousers = [
    'images/trouser1.png',
    'images/trouser2.png',
    'images/trouser3.png'
];

const shoes = [
    'images/shoe1.png',
    'images/shoe2.png',
    'images/shoe3.png'
];

// Variables to store the currently selected outfit
let selectedHat = null;
let selectedShirt = null;
let selectedTrouser = null;
let selectedShoe = null;

// Change the character's hat
function changeHat(index) {
    selectedHat = hats[index];
    updateCharacter();
}

// Change the character's shirt
function changeShirt(index) {
    selectedShirt = shirts[index];
    updateCharacter();
}

// Change the character's trousers
function changeTrouser(index) {
    selectedTrouser = trousers[index];
    updateCharacter();
}

// Change the character's shoes
function changeShoe(index) {
    selectedShoe = shoes[index];
    updateCharacter();
}

// Update the character's appearance with the selected outfit
function updateCharacter() {
    const character = document.getElementById('character-img');

    let outfit = '';

    if (selectedHat) {
        outfit += `<img src="${selectedHat}" alt="Hat" class="outfit">`;
    }
    if (selectedShirt) {
        outfit += `<img src="${selectedShirt}" alt="Shirt" class="outfit">`;
    }
    if (selectedTrouser) {
        outfit += `<img src="${selectedTrouser}" alt="Trouser" class="outfit">`;
    }
    if (selectedShoe) {
        outfit += `<img src="${selectedShoe}" alt="Shoe" class="outfit">`;
    }

    character.innerHTML = outfit;  // Update character with selected outfit
}

// Reset the game (reset to default character image)
function resetGame() {
    const character = document.getElementById('character-img');
    character.src = 'images/character.png';  // Default character image

    // Reset outfit selections
    selectedHat = null;
    selectedShirt = null;
    selectedTrouser = null;
    selectedShoe = null;
}
