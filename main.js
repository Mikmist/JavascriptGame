var calories = 1000000;
var tickUpgrade = 100
var calorieUpgrade = 100;
var caloriePerTick = 5.5;
var tickrate = 1000;
var messageReel = ["U hungry?", "BURGERRRR", "Meemees"];
var lettuceCost = 10;
var tomatoesCost = 100;
var picklesCost = 1000;
var cheeseCost = 10000;
var dressingCost = 100000;
var burgerCost = 1000000;
var pressValue = 10000000;



onTick();
message("U hungry?");
myMove();

var tick = setInterval(function() {onTick()}, tickrate)
var messages = setInterval(function() {message(messageReel[Math.floor(Math.random() * messageReel.length)])}, 5000)

// I GIVE UP
function onTick () {
//  calories += caloriePerTick;
  updateUI();
}

// Updates the UI
function updateUI() {
  var buttons = document.getElementsByClassName("upgrade_button");
  if (calories >= 100000000){
    document.getElementsByClassName('upgrade_button').style.visibility = "hidden";

  }
  for (i in buttons) {
    // Has to check if there are not foreign objects in the array.
    if(typeof buttons[i] == "object") {
      if (calories >= 0) {
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
  calories += pressValue;
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

//function of every burgerupgrade
function upgradeLettuce() {
  if (calories>=lettuceCost){
//    document.getElementById('upgradeInfo').innerHTML = "You have enough monny";
    calories-= lettuceCost;
    pressValue += 0.2;
    pressValue = round(pressValue);
    document.getElementById('Caloriesperclick').innerHTML = pressValue + " calories";

  } else {
    document.getElementById('upgradeInfo').innerHTML = "You do not have enough monny";
  }
  updateUI();

}

function upgradeTomatoes() {
  if (calories>=tomatoesCost){
//    document.getElementById('upgradeInfo').innerHTML = "You have enough monny";
    calories-= tomatoesCost;
    pressValue += 2.2;
    pressValue = round(pressValue);
    document.getElementById('Caloriesperclick').innerHTML = pressValue + " calories";

  } else {
    document.getElementById('upgradeInfo').innerHTML = "You do not have enough monny";
  }
  updateUI();

}

function upgradePickles() {
  if (calories>=picklesCost){
//    document.getElementById('upgradeInfo').innerHTML = "You have enough monny";
    calories-= picklesCost;
    pressValue += 22.2;
    pressValue = round(pressValue);
    document.getElementById('Caloriesperclick').innerHTML = pressValue + " calories";

  } else {
    document.getElementById('upgradeInfo').innerHTML = "You do not have enough monny";
  }
  updateUI();

}

function upgradeCheese() {
  if (calories>=cheeseCost){
//    document.getElementById('upgradeInfo').innerHTML = "You have enough monny";
    calories-= cheeseCost;
    pressValue += 222.2;
    pressValue = round(pressValue);
    document.getElementById('Caloriesperclick').innerHTML = pressValue + " calories";

  } else {
    document.getElementById('upgradeInfo').innerHTML = "You do not have enough monny";
  }
  updateUI();

}

function upgradeDressing() {
  if (calories>=dressingCost){
//    document.getElementById('upgradeInfo').innerHTML = "You have enough monny";
    calories-= dressingCost;
    pressValue += 2222.2;
    pressValue = round(pressValue);
    document.getElementById('Caloriesperclick').innerHTML = pressValue + " calories";

  } else {
    document.getElementById('upgradeInfo').innerHTML = "You do not have enough monny";
  }
  updateUI();

}

function upgradeBurger() {
  if (calories>=burgerCost){
//    document.getElementById('upgradeInfo').innerHTML = "You have enough monny";
    calories-= burgerCost;
    pressValue += 22222.2;
    pressValue = round(pressValue);
    document.getElementById('Caloriesperclick').innerHTML = pressValue + " calories";

  } else {
    document.getElementById('upgradeInfo').innerHTML = "You do not have enough monny";
  }
  updateUI();

}

function showcost(text, object) {
  console.log(object);
  if (text == "lettuce"){
    document.getElementById('upgradeInfo').innerHTML = "cost: " + lettuceCost;
  } else if (text == "tomatoes") {
    document.getElementById('dropdownlettuce').innerHTML = "cost: " + tomatoesCost;
  } else if (text == "pickles") {
    document.getElementById('dropdownlettuce').innerHTML = "cost: " + picklesCost;
  } else if (text == "cheese") {
    document.getElementById('dropdownlettuce').innerHTML = "cost: " + cheeseCost;
  } else if (text == "dressing") {
    document.getElementById('dropdownlettuce').innerHTML = "cost: " + dressingCost;
  } else if (text == "burger") {
    document.getElementById('dropdownlettuce').innerHTML = "cost: " + burgerCost;
  }
}

function showtext(text, object){
  object.innerHTML = text + " " + pressValue;
}

function showcpcClear(object) {
  object.innerHTML = "cpc: " + pressValue + "!";
}

function showcostClear(){
  document.getElementById('upgradeInfo').innerHTML = "" ;

}
function message(text) {
    document.getElementById('notification').innerHTML = text;
}

function myMove() {
  var elem = document.getElementById("myAnimation");
  var posDirection = 0;
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (posDirection <= 200) {
      pos++;
      elem.style.left = pos + 'px';
      posDirection++;
      //console.log("1")
    } else if (posDirection<=400){

      pos--;
      elem.style.left = pos + 'px';
      posDirection++;
      //console.log("2")
    } else {
      posDirection = 0;
      pos++;
      elem.style.left = pos + 'px';
      //console.log(posDirection)
    }


  }
}
