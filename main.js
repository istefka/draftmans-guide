const words = [
  { word: 'Tree', restricted: ['leaf', 'wood', 'plant'] },
  { word: 'Clock', restricted: ['time', 'numbers', 'hands'] },
  { word: 'Car', restricted: ['vehicle', 'wheels', 'drive'] },
  { word: 'Sun', restricted: ['sky', 'hot', 'bright'] },
  { word: 'Book', restricted: ['read', 'pages', 'story'] },
  { word: 'Pizza', restricted: ['cheese', 'crust', 'slice'] },
  { word: 'Laptop', restricted: ['computer', 'screen', 'keyboard'] },
  { word: 'Snowman', restricted: ['cold', 'winter', 'build'] },
  { word: 'Fire', restricted: ['hot', 'burn', 'flame'] },
  { word: 'Balloon', restricted: ['air', 'float', 'pop'] },
  { word: 'Bridge', restricted: ['connect', 'water', 'road'] },
  { word: 'Guitar', restricted: ['instrument', 'strings', 'music'] },
  { word: 'Ice Cream', restricted: ['cold', 'dessert', 'cone'] },
  { word: 'Castle', restricted: ['building', 'king', 'queen'] },
  { word: 'Airplane', restricted: ['sky', 'fly', 'travel'] },
  { word: 'Spider', restricted: ['web', 'legs', 'insect'] },
  { word: 'Island', restricted: ['water', 'ocean', 'land'] },
  { word: 'Train', restricted: ['tracks', 'station', 'fast'] },
  { word: 'Rainbow', restricted: ['colors', 'sky', 'rain'] },
  { word: 'Rocket', restricted: ['space', 'launch', 'NASA'] }
];

let lastIndex = -1;

function getRandomWord() {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * words.length);
  } while (randomIndex === lastIndex && words.length > 1);
  
  lastIndex = randomIndex;
  return words[randomIndex];
}

function updateDisplay(wordObj) {
  document.getElementById('mainWord').textContent = wordObj.word;
  
  const restrictedList = document.getElementById('restrictedList');
  restrictedList.innerHTML = wordObj.restricted
    .map(word => `<li>${word}</li>`)
    .join('');
}

document.getElementById('generateBtn').addEventListener('click', () => {
  const wordObj = getRandomWord();
  updateDisplay(wordObj);
});