var foodNumber =10;
var woodNumber =0;
var population =1
var food = false;
var wood = false;
var array = []
var realTime = 50;

window.setInterval(function(){
    document.getElementById('time').innerHTML = "Time: " + time(round(++realTime));
//    document.getElementById('time').innerHTML = "Time: " + round(++time);
    console.log(food);
    console.log(wood);
    woodFunction();
    foodFunction();
    document.getElementById('foodDisplay').innerHTML = "Food: " + round(foodNumber);
    document.getElementById('woodDisplay').innerHTML = "Wood: " + round(woodNumber);
    lowFoodWarning();
}, 1000)


function time(time) {
	var minutes = (time / 60);
    minutes = Math.floor(minutes);
    var seconds = time - minutes*60;
    return "m " + minutes +" s " + seconds;
}

function round(input){
    return Math.round(input * 100) / 100;
}

function lowFoodWarning(){
    if (foodNumber < 9){
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
    console.log(array)
    if(array[0] != "") {
        var length = Math.min(array.length);
        // als je hier "length - 4" vervangt met 0 krijg je een box
        // waarin je kut scrollen. Heb wat ccs gemaakt hiervoor.
        // zie maar wat je leuk vind.
        for(i = length - 4; i < length; i++) {
            if(array[i] != null) {
                el.innerHTML += array[i] + "<br>";
            }
        }
    }
    el.innerHTML += (time(round(realTime)) +" sec: "+ notification);

}
