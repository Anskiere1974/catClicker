// Name of Cat One
var catOneName = "Schnurri";
var catTwoName = "Knurri";

// Display name of cat one
var elem1 = document.getElementById('cat1-name');
elem1.innerHTML = catOneName;
// Display name of cat two
var elem2 = document.getElementById('cat2-name');
elem2.innerHTML = catTwoName;

// defining the counters for each cat
var catOneCounter = 0;
var catTwoCounter = 0;

// Listening for click on first cat
var elem3 = document.getElementById('catpic1');
var elem4 = document.getElementById('counterCat1');
elem3.addEventListener('click', function(){
	catOneCounter++;
	elem4.innerHTML = catOneCounter;
});

// Listening for click on second cat
var elem5 = document.getElementById('catpic2');
var elem6 = document.getElementById('counterCat2');
elem5.addEventListener('click', function(){
	catTwoCounter++;
	elem6.innerHTML = catTwoCounter;
});
