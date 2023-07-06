# JumpyHorse

<a href= "https://vczaran.github.io/JumpyHorse/">Jumpy Horse</a> is an 8bit, retro style game in which the user navigates an equine avatar over obstacles. Colliding with an obstacle will end the game. Jumping is accomplished by pressing the spacebar. Start modal includes game instructions and start button that begins the game. End modal pops up upon collision and includes a button to restart the game. Galloping sound effects play during the game and end on game over. 

<img src="./assets/images/game.gif" alt="JumpyHorse GIF" width="600" height="400">

# Functionality: 

* Canvas drawing and movement of obstacles, background, and horse sprite is accomplished by compiling all individual draw functions from the different classes into one universal draw function to ensure all Canvas elements are drawn simultaneously every frame.

<img src="./assets/images/draw.png" alt="draw" width="600" height="400">


* Obstacles are created and immediately stored in an array on loop and shifted from the array when going off screen, thus only one obstacle is within the array at a time. Collision detection is therefore used to check for collisions between the first element in the obstacles array and the horse sprite by checking if the range of x and y coordinates of either object overlaps. Game over function is called when a collision is detected. If no collision is detected, the score increments. 

<img src="./assets/images/collision.png" alt="collision" width="600" height="400">


* Horse sprite animation is achieved by cycling through 5 different images of the same size every 6 frames. The drawHorse function is called every frame, hence the counter attribute will increment with every frame. Horse sprite images are stored in an HTML div tag and accessed by accessing the children of that tag.

<img src="./assets/images/animate.png" alt="collision" width="600" height="400">

# Technologies, Libraries, APIs:

* Canvas API

* HTML

* CSS

* Webpack and Babel

* npm

# Future Bonus Features:

Obstacle width and height will vary and be randomized. Obstacle appearance will also be varied and random. The speed of the game will increase every 5 jumps. Local high score will be stored and displayed on the upper right hand corner of the screen. Additional music aside from gallop sound effects. Horse animation and sound effects will pause while jumping. The game is won after clearing 100 jumps. Every 25 jumps the theme will change - background, music, and obstacles will change accordingly. Default initial style will be a farm and will transition to spooky forest, then city, and finally beach. 

Horse styles willl be unlockable based on game progress - each will have different stats (such as increased jump height and/or speed). The final unlock, upon completion of the game, will be a pegasus that can fly over obstacles.


# Implementation Timeline:

* Thursday & Friday: Basic styling and rendering of all canvas elements completed. Added gravity functionality. Added logo. Added moving obstacles and jump on keypress functionality.

* Weekend: Implemented collision detection and start game/game over logic.

* Monday: Fine tuned collision detection and start game/game over logic.

* Tuesday: Added instruction/start and end game modals with start/restart game functionality.

* Wednesday: Background movement and horse sprite animation implemented. Added gallop sound effects.

* Thursday Morning: Added production ReadME.


# Art Credits:

* Logo and additional background design by Alexandra Czaran (https://www.linkedin.com/in/aczaran1999/)
* Initial barnyard background by kaleb-silva
* Horse sprite art by alizard of opengameart.org
* Pixeloid font sourced from fontspace.com (created by GGBotNet)
