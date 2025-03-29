// Store current clothes selected
let selectedHat = null;
let selectedShirt = null;
let selectedTrouser = null;
let selectedShoe = null;

const characterContainer = document.getElementById('character-container');

// Change the character's hat
function changeHat(image) {
    selectedHat = image;
    updateCharacter();
}

// Change the character's shirt
function changeShirt(image) {
    selectedShirt = image;
    updateCharacter();
}

// Change the character's trousers
function changeTrouser(image) {
    selectedTrouser = image;
    updateCharacter();
}

// Change the character's shoes
function changeShoe(image) {
    selectedShoe = image;
    updateCharacter();
}

// Update the character with the selected clothing
function updateCharacter() {
    // Clear existing clothing layers
    characterContainer.innerHTML = '<img id="character-img" src="images/character.png" alt="Character">';

    // Add hat if selected
    if (selectedHat) {
        const hatImg = document.createElement('img');
        hatImg.src = `images/${selectedHat}`;
        hatImg.alt = 'Hat';
        hatImg.classList.add('hat');
        hatImg.style.top = '-60px';  // Position above the character head
        hatImg.style.left = '50%';
        hatImg.style.transform = 'translateX(-50%)';
        hatImg.style.width = '60px';
        characterContainer.appendChild(hatImg);
    }

    // Add shirt if selected
    if (selectedShirt) {
        const shirtImg = document.createElement('img');
        shirtImg.src = `images/${selectedShirt}`;
        shirtImg.alt = 'Shirt';
        shirtImg.classList.add('shirt');
        shirtImg.style.top = '60px';  // Position on the torso
        shirtImg.style.left = '50%';
        shirtImg.style.transform = 'translateX(-50%)';
        shirtImg.style.width = '80px';
        characterContainer.appendChild(shirtImg);
    }

    // Add trousers if selected
    if (selectedTrouser) {
        const trouserImg = document.createElement('img');
        trouserImg.src = `images/${selectedTrouser}`;
        trouserImg.alt = 'Trouser';
        trouserImg.classList.add('trouser');
        trouserImg.style.bottom = '0';
        trouserImg.style.left = '50%';
        trouserImg.style.transform = 'translateX(-50%)';
        trouserImg.style.width = '90px';
        characterContainer.appendChild(trouserImg);
    }

    // Add shoes if selected
    if (selectedShoe) {
        const shoeImg = document.createElement('img');
        shoeImg.src = `images/${selectedShoe}`;
        shoeImg.alt = 'Shoe';
        shoeImg.classList.add('shoe');
        shoeImg.style.bottom = '0';
        shoeImg.style.left = '50%';
        shoeImg.style.transform = 'translateX(-50%)';
        shoeImg.style.width = '50px';
        characterContainer.appendChild(shoeImg);
    }
}

// Reset the character to its original state
function resetGame() {
    selectedHat = null;
    selectedShirt = null;
    selectedTrouser = null;
    selectedShoe = null;
    updateCharacter();
}
