var foodNumber =10;
var woodNumber =0;
var population =1
var food = false;
var wood = false;
var array = []
var time = 0;

window.setInterval(function(){
    document.getElementById('time').innerHTML = "Time: " + round(++time);
    console.log(food);
    console.log(wood);
    woodFunction();
    foodFunction();
    document.getElementById('foodDisplay').innerHTML = "Food: " + round(foodNumber);
    document.getElementById('woodDisplay').innerHTML = "Wood: " + round(woodNumber);
    lowFoodWarning();
}, 1000)

function round(input){
    return Math.round(input * 100) / 100;
}

function lowFoodWarning(){
    if (foodNumber < 7){
        notify("Your food is low");
    }
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

/*
 * This function displays notifications with a max of 5.
 */
function notify(notification) {
    var el = document.getElementById('textDisplay');
    var array = el.innerHTML.split("<br>");
    var i;

    el.innerHTML = "";

    var length;
    if(array.length < 5) {
        length = array.length;
        i = 0;
    } else {
        i = 1;
    }
    for(; i < length; i++) {
        el.innerHTML += array[i] + "<br>";
    }

    el.innerHTML += notification + "<br>";
}
