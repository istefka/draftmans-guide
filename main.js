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
let timeLeft = 600;
let timerInterval = null;
let isRunning = false;

const mainWord = document.getElementById('mainWord');
const restrictedList = document.getElementById('restrictedList');
const generateBtn = document.getElementById('generateBtn');
const timerBtn = document.getElementById('timerBtn');
const resetBtn = document.getElementById('resetBtn');
const timeDisplay = document.getElementById('timeDisplay');
const wordContainer = document.getElementById('wordContainer');
const playIcon = document.querySelector('.play-icon');
const pauseIcon = document.querySelector('.pause-icon');

function getRandomWord() {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * words.length);
  } while (randomIndex === lastIndex && words.length > 1);
  
  lastIndex = randomIndex;
  return words[randomIndex];
}

function updateDisplay(wordObj) {
  mainWord.textContent = wordObj.word;
  restrictedList.innerHTML = wordObj.restricted
    .map(word => `<span class="restricted-word">${word}</span>`)
    .join('');
    
  wordContainer.classList.add('animate');
  setTimeout(() => wordContainer.classList.remove('animate'), 300);
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function toggleTimer() {
  if (!isRunning && timeLeft === 0) {
    timeLeft = 600;
  }
  
  isRunning = !isRunning;
  timerBtn.classList.toggle('running', isRunning);
  playIcon.classList.toggle('hidden', isRunning);
  pauseIcon.classList.toggle('hidden', !isRunning);
  
  if (isRunning) {
    timerInterval = setInterval(() => {
      timeLeft--;
      timeDisplay.textContent = formatTime(timeLeft);
      
      if (timeLeft === 0) {
        clearInterval(timerInterval);
        isRunning = false;
        timerBtn.classList.remove('running');
        playIcon.classList.remove('hidden');
        pauseIcon.classList.add('hidden');
      }
    }, 1000);
  } else {
    clearInterval(timerInterval);
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  isRunning = false;
  timeLeft = 600;
  timeDisplay.textContent = formatTime(timeLeft);
  timerBtn.classList.remove('running');
  playIcon.classList.remove('hidden');
  pauseIcon.classList.add('hidden');
}

generateBtn.addEventListener('click', () => {
  const wordObj = getRandomWord();
  updateDisplay(wordObj);
});

timerBtn.addEventListener('click', toggleTimer);
resetBtn.addEventListener('click', resetTimer);