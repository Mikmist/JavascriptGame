var foodNumber =10;
var woodNumber =0;
var population =1
var food = false;
var wood = false;
var array = []


window.setInterval(function(){
  startFunction();
  console.log(food);
  console.log(wood);
  woodFunction();
  foodFunction();
  document.getElementById('foodDisplay').innerHTML = "Food: " + round(foodNumber);
  document.getElementById('woodDisplay').innerHTML = "Wood: " + round(woodNumber);
},1000)

function round(input){
  return Math.round(input * 100) / 100;
}

function foodFunction(){
  foodNumber -= 0.2*population;
  if (food){
    foodNumber += 1;
  }
}

function woodFunction(){
  if (wood){
    woodNumber += 1;
  }
}

function foodButton(){
  if(food){
    food = false;
  } else {
    food = true;
    wood = false;
  }
}

function woodButton(){
  if(wood){
    wood = false;
  } else {
    wood = true;
    food = false;
  }
}

function notifications(array) {
    document.getElementById("textDisplay").innerHTML = array;
}
