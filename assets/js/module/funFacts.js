const funFacts = [
    "The first website ever created is still online!",
    "The most used programming language in the world is JavaScript.",
    "The first computer programmer was a woman named Ada Lovelace.",
    "The term 'bug' in computing came from an actual moth.",
    "The first computer mouse was made of wood."
];

export function initFunFacts() {
    displayRandomFact();
    // Refresh fact when clicking on the fun fact section
    document.getElementById('fun-fact').addEventListener('click', displayRandomFact);
}

function displayRandomFact() {
    const factText = document.getElementById('fact-text');
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    factText.textContent = funFacts[randomIndex];
}