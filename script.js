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
        shoeImg.style.width = '70px';
        characterContainer.appendChild(shoeImg);
    }
}

// Reset the game
function resetGame() {
    selectedHat = null;
    selectedShirt = null;
    selectedTrouser = null;
    selectedShoe = null;
    updateCharacter();
}

// Dragging an item
function drag(event) {
    event.dataTransfer.setData("text", event.target.id); // Store the dragged item ID
}

// Allow the drop by specifying the event handler for the drop area
function allowDrop(event) {
    event.preventDefault(); // Allow the drop
}

// Handle the drop action and add the clothing to the character
function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text"); // Get the dragged item ID
    var droppedItem = document.getElementById(data);  // Get the dragged element

    // Position the dropped item on the character
    var characterContainer = document.getElementById("character-container");
    droppedItem.style.position = "absolute";
    droppedItem.style.left = (event.clientX - characterContainer.offsetLeft) + "px";  // X position
    droppedItem.style.top = (event.clientY - characterContainer.offsetTop) + "px";   // Y position
    characterContainer.appendChild(droppedItem); // Add the item to the character container
}

// Add event listeners for the drop area (character container)
const characterContainer = document.getElementById("character-container");
characterContainer.addEventListener("dragover", allowDrop);
characterContainer.addEventListener("drop", drop);

