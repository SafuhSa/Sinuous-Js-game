# Sinuous Game

## Background and Overview
 Sinuous is a game that show the power of Javascript. Users navigate through a field of red spots that are moving towards you in ever-increasing quantities and speed. The game uses HTML5 canvas for the graphics.

Use your mouse to guide your serpentine cursor safely through the field of red dots, snagging power ups to get various boosts and increase that all-powerful high-score. The longer you play, the more green dots will appear on your trail, which will let you sustain more direct hits.

[sinuousgame Live](http://www.sinuousgame.com/)

Instructions
1. Avoid red dots.
2. Hit other dots for boosts.
3. Score extra points by moving around a lot.
4. Stay alive.

### Functionality & MVP  

- [ ] Create asteroids of custom size, color.
- [ ] Hear sounds on collisions
- [ ] Animate a line in after effects (mouse movement)
- [ ] Start, pause, restart!!
- [ ] have various boosts and increase power ups that all-powerful high-score.
- [ ] Have differents levels

### Wireframes

This app will consist of a single screen with the simulation canvas, playback controls, probabilities controls and nav links to the Github, my LinkedIn.  

The simulation canvas will include a dropdown for selecting the initial color of the creation object. Users will click and drag to create objects of a certain size and vector angle.

Playback controls along the top will include Start, Pause and Restart buttons.

On the left near the bottom, will be an expandable menu allowing users to select the 'levels'.


### Architecture and Technologies

This project will be implemented with the following technologies:

- Vanilla JavaScript for overall structure and game logic,
- `HTML5 Canvas` for DOM manipulation and rendering,
- `Web Audio API` for sound generation, processing and control. `WebAudioAPI` allows for simultaneous sounds with more dependable time triggering.
- Webpack to bundle and serve up the various scripts.

In addition to the webpack entry file, there will be four scripts involved in this project:

`board.js`: this script will handle the logic for creating and updating the necessary DOM elements.

`asteroids.js`: this script will house the physics logic for the asteroids.

`audio.js`: this script will handle the audio logic and the creation of `AudioEvent`s based on the input parameters outlined above. The programming paradigm will be an audio graph consisting of buffers and processing nodes, all connected into a master bus, and referencing a global AudioContext with its own timeline.

`evolutions.js`: this lightweight script will house the constructor and update functions for the `Evolutions` objects.  

### Implementation Timeline
**Day 1**: 
- [x] Finished momentum collision physics on my version of the Asteroids project
- [x] Completed WebAudioAPI Tutorial and loaded basic sound from static assets

**Day 2**: 
Setup all necessary Node modules, including getting webpack up and running.  Create `webpack.config.js` as well as `package.json`.  Write a basic entry file and the bare bones of all 4 scripts outlined above.  L  Goals for the day:

- [x] Get `webpack` serving files and frame out index.html
- [x] Learn how to create a sound on collision.
- [x] Port over the relevant pieces of my Asteroids(with collision physics) project and implement Asteroid creation

**Day 3**: 
Build out the `AudioEvent` object to connect to the `Board` object.  Then, use `board.js` to create and render `Asteroid`s and `AudioEvent`s. Goals for the day:

- [x] Complete the `asteroids.js` module (constructor, update functions, colors)
- [x] Get sounds to play on collisions
- [x] Get collision graphics working
- [x] Make the `Asteroid`s able to be movable with mouse.

**Day 4**:
Create the logic. Build out functions for handling the different evolutions. Goals for the day:
- [x] work on `AudioEvent` object with correct type and handling logic
- [x] Have a functional screen on the `Canvas` frontend.
- [x] Make sure that starting and stopping works.

**Day 5**: 
Install the controls for the user to interact with the game. Style the frontend, making it polished and professional. Goals for the day:

- [x] Create controls for game speed, stop, start, restart.
- [x] Have a styled `Canvas`, nice looking controls and title
- [x] Deploy the project on GitHub Pages

### Bonus features
- [x] Make it usable by multiple users
- [x] Adding multiple diffculty leveels
