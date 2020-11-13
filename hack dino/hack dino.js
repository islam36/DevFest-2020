//backup the original gameOver function
let backup = Runner.prototype.gameOver;

//change the gameOver function to an empty one
Runner.prototype.gameOver = function(){};

Runner.config.ACCELERATION = 0.1; //change acceleration of the game
Runner.config.INVERT_DISTANCE = 100; //required distance to toggle between dark and light mode
Runner.config.INVERT_FADE_DURATION = 3000; //change duration of dark/light mode
Runner.config.MAX_SPEED = 50;
Runner.config.SPEED = 1; //initial speed
Runner.config.MAX_OBSTACLE_LENGTH = 10;
