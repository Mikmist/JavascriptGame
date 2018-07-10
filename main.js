var calories = 58;
var tickUpgrade = 100
var calorieUpgrade = 100;
var caloriePerTick = 0.5;
var tickrate = 1000;
var messageReel = ["U hungry?", "BURGERRRR", "Meemees"]


onTick();
message("U hungry?");
myMove();

var tick = setInterval(function() {onTick()}, tickrate)
var messages = setInterval(function() {message(messageReel[Math.floor(Math.random() * messageReel.length)])}, 5000)

// I GIVE UP
function onTick () {
  calories += caloriePerTick;
  updateUI();
}

// Updates the UI
function updateUI() {
  var buttons = document.getElementsByClassName("upgrade_button");
  for (i in buttons) {
    // Has to check if there are not foreign objects in the array.
    if(typeof buttons[i] == "object") {
      if (calories >= 60) {
        buttons[i].style.display = "inline";
      } else {
        buttons[i].style.display = "none";
      }
    }
  }
  document.getElementById('calories').innerHTML = round(calories) + " Calories";
}

// Simple rounding function for getting rid of javascripts dumb logic.
function round(input){
  return Math.round(input * 100) / 100;
}

function buttonPress () {
  calories += 1;
  updateUI();
}

function upgradeTick () {
  if (calories >= tickUpgrade) {
    calories -= tickUpgrade;
    tickUpgrade *= 10
    tickrate -= 0.2*tickrate;
    document.getElementById('tickPrice').innerHTML = "Cost: " + round(tickUpgrade);
    clearInterval(tick);
    tick = setInterval(function() {onTick()}, tickrate);
  }
}

function upgradeCalorie () {
  if (calories >= calorieUpgrade) {
    calories -= calorieUpgrade;
    calorieUpgrade *= 10;
    caloriePerTick *= 10;
    document.getElementById('caloriePrice').innerHTML = "Cost: " + round(calorieUpgrade);
  }
}

function message(text) {
    document.getElementById('notification').innerHTML = text;
}

function myMove() {
  var elem = document.getElementById("myAnimation");
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == 600) {
    pos=0;
    } else {
      pos++;
      elem.style.left = pos + 'px';
    }
  }
}
