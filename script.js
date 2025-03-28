const hats = [
    'images/hat1.png',
    'images/hat2.png',
    'images/hat3.png',
    // Add more hat paths here
];

const shirts = [
    'images/shirt1.png',
    'images/shirt2.png',
    'images/shirt3.png',
    // Add more shirt paths here
];

// Repeat for trousers, shoes, crochet hooks, etc.

// When changing the character's outfit:
const character = document.getElementById("character-img");

function changeHat(index) {
    character.src = hats[index];
}

function changeShirt(index) {
    character.src = shirts[index];
}

// You would trigger these functions when a user selects an option, for example
