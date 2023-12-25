var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var currentLevel = 0;
var key = null;
var blueSound = new Audio("./sounds/blue.mp3");
var yellowSound = new Audio("./sounds/yellow.mp3");
var redSound = new Audio("./sounds/red.mp3");
var greenSound = new Audio("./sounds/green.mp3");
var wrongSound = new Audio("./sounds/wrong.mp3");

/**
 * Generates the next sequence for the Simon game.
 * Updates the level display, generates a random color, and adds it to the game pattern.
 * Also plays the corresponding sound and animates the button press.
 */
function nextSequence(){
    $('h1').text("Level "+level);
    console.log("level: "+level)  
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];
    // console.log("random color: "+randomChosenColor);
    animatePress(randomChosenColor);
    playSound(randomChosenColor);
    gamePattern.push(randomChosenColor);
    currentLevel = 0;
    level++;
    // console.log("game pattern: "+gamePattern);
}

/**
 * Plays a sound based on the chosen color.
 * 
 * @param {string} chosenColor - The color for which the sound should be played.
 * @returns {void}
 */
function playSound(chosenColor) {
  switch (chosenColor) {
    case "green":
      greenSound.play();
      break;
    case "red":
      redSound.play();
      break;
    case "yellow":
      yellowSound.play();
    case "blue":
      blueSound.play();
    default:
      break;
  }
}

/**
 * Animates the button press effect for the given color.
 * @param {string} currentColor - The color of the button to animate.
 */
function animatePress(currentColor) {
  $("div[type='button']#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("div[type='button']#" + currentColor).removeClass("pressed");
  }, 100);
}

/**
 * Checks if the user's clicked pattern matches the game pattern at the current level.
 * @param {number} currentLevel - The current level of the game.
 * @returns {boolean} - Returns true if the user's clicked pattern matches the game pattern, otherwise false.
 */
function checkAnswer(currentLevel){
    // console.log("current level: "+currentLevel);
    if(!(gamePattern[currentLevel] === userClickedPattern[currentLevel])){
        console.log("wrong");
        return false;
    }
    console.log("right");
    return true;
}
// Add a click event listener to the h2 element
$("h2").on("click", function() {
    gamePattern = [];
    userClickedPattern = [];
    level = 0;
    currentLevel = 0;
    setTimeout(() => {
      nextSequence();
    }, 1000);

});

$(document).keypress((event) => {
  // console.log(event.key);
  if(event.key === "a" || event.key === "A"){
    gamePattern = [];
    userClickedPattern = [];
    level = 0;
    currentLevel = 0;
    setTimeout(() => {
      nextSequence();
    }, 1000);
  }

});

$(document).on("click","div[type='button']",(event)=>{
  var userChosenColor = event.target.id;
  // console.log("clicked tile: "+event.target.id);
  userClickedPattern.push(userChosenColor);
  // console.log("user pattern: "+userClickedPattern);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  if(checkAnswer(currentLevel)){
    currentLevel++;
    if(currentLevel === level){
      currentLevel = 0;
      userClickedPattern = [];
      setTimeout(() => {
        nextSequence();
      }, 1000);
    }
  }else{
    $("body").addClass("game-over");
    wrongSound.play();
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    $('h1').text("Game Over, Press A to Restart\n Max Level: "+level);
  }
});
