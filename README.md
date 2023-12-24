# Simon Game https://n0c7urn4l.github.io/simon_game/

This is a simple implementation of the classic Simon game using JavaScript, jQuery, HTML, and CSS.

## How to Play

The game shows a series of colors. The player must repeat the series. If the player succeeds, the series becomes progressively longer and faster. The game is over when the player makes a mistake.

## Code Overview

The game is implemented in a single JavaScript file, `game.js`.

### Variables

- `buttonColors`: An array of the four colors used in the game.
- `gamePattern`: An array that holds the current game pattern.
- `userClickedPattern`: An array that holds the pattern the user has clicked.
- `level`: The current level of the game.
- `currentLevel`: The current level of the user.
- `key`: A variable to hold the key pressed by the user.
- `blueSound`, `yellowSound`, `redSound`, `greenSound`: Audio objects for the sounds that play when the corresponding color is clicked.

### Functions

- `nextSequence()`: Generates the next color in the sequence, adds it to the game pattern, updates the level display, plays the corresponding sound, and animates the button press.

## How to Run

Open https://n0c7urn4l.github.io/simon_game/ in your web browser to start the game.
