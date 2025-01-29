# Draftmaster's Guide

A fun word description game perfect for online meetings, virtual team building, or casual gaming sessions. Players must describe a word without using certain restricted words, making it challenging and entertaining!

## Features

- 🎲 Random word generation with restricted words
- ⏱️ 10-minute countdown timer
- 🎨 Beautiful, responsive design
- 🌟 Smooth animations and transitions
- 🎮 Easy to use interface

## How to Play

1. Click the "Generate New Word" button to get a random word
2. Start the timer when you're ready to begin
3. Try to describe the word to your teammates
4. Avoid using any of the restricted words listed below the main word
5. Keep playing and have fun!

## Quick Start

### Option 1: Direct Download
1. Download all files (`index.html`, `style.css`, and `main.js`)
2. Keep them in the same directory
3. Open `index.html` in your web browser

### Option 2: Deploy to Web
1. Upload the files to any web hosting service
2. Access through the provided URL

## Local Development

To run this project locally:

1. Clone the repository
2. Open `index.html` in your browser
3. Start playing!

## Customization

### Adding New Words
Edit the `words` array in `main.js` to add new words and their restricted terms:

```javascript
const words = [
  { 
    word: 'YourWord', 
    restricted: ['restricted1', 'restricted2', 'restricted3'] 
  },
  // Add more words here
];
```

### Styling
The game uses CSS variables for easy customization. Edit the following in `style.css`:

```css
:root {
  --primary-color: #9333ea;    /* Main purple color */
  --primary-hover: #7e22ce;    /* Hover state color */
  --bg-color: #f3f4f6;         /* Background color */
  --card-bg: rgba(255, 255, 255, 0.8);  /* Card background */
  --text-color: #1f2937;       /* Text color */
}
```

## Contributing

Feel free to contribute by:
1. Forking the repository
2. Creating a new branch
3. Making your changes
4. Submitting a pull request

## License

MIT License - feel free to use and modify as needed!