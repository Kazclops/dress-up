// Arrays to store the image paths for each outfit
const hats = ['images/hat1.png', 'images/hat2.png', 'images/hat3.png'];
const shirts = ['images/shirt1.png', 'images/shirt2.png', 'images/shirt3.png'];
const trousers = ['images/trouser1.png', 'images/trouser2.png', 'images/trouser3.png'];
const shoes = ['images/shoe1.png', 'images/shoe2.png', 'images/shoe3.png'];

// Variables to store the currently selected outfit
let selectedHat = null;
let selectedShirt = null;
let selectedTrouser = null;
let selectedShoe = null;

// Character element
const characterContainer = document.getElementById('character-container');

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
    // Clear any previously added clothing images
    characterContainer.innerHTML = '<img id="character-img" src="images/character.png" alt="Character">';

    // Create new images for each selected item and append them
    if (selectedHat) {
        const hatImg = document.createElement('img');
        hatImg.src = selectedHat;
        hatImg.alt = 'Hat';
        hatImg.classList.add('clothing');
        hatImg.style.position = 'absolute';  // Position it over the character
        hatImg.style.top = '0';
        hatImg.style.left = '50%';
        characterContainer.appendChild(hatImg);
    }

    if (selectedShirt) {
        const shirtImg = document.createElement('img');
        shirtImg.src = selectedShirt;
        shirtImg.alt = 'Shirt';
        shirtImg.classList.add('clothing');
        shirtImg.style.position = 'absolute';
        shirtImg.style.top = '50%';
        shirtImg.style.left = '50%';
        characterContainer.appendChild(shirtImg);
    }

    if (selectedTrouser) {
        const trouserImg = document.createElement('img');
        trouserImg.src = selectedTrouser;
        trouserImg.alt = 'Trouser';
        trouserImg.classList.add('clothing');
        trouserImg.style.position = 'absolute';
        trouserImg.style.bottom = '0';
        trouserImg.style.left = '50%';
        characterContainer.appendChild(trouserImg);
    }

    if (selectedShoe) {
        const shoeImg = document.createElement('img');
        shoeImg.src = selectedShoe;
        shoeImg.alt = 'Shoe';
        shoeImg.classList.add('clothing');
        shoeImg.style.position = 'absolute';
        shoeImg.style.bottom = '0';
        shoeImg.style.left = '50%';
        characterContainer.appendChild(shoeImg);
    }
}

// Reset the game (reset to default character image)
function resetGame() {
    selectedHat = null;
    selectedShirt = null;
    selectedTrouser = null;
    selectedShoe = null;
    updateCharacter();
}
