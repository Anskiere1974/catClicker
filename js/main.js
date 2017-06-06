var cats = [
{
	name: "Oliver",
	counter: 0,
	source: "cat1.jpg"
},
{
	name: "Simba",
	counter: 0,
	source: "cat2.jpg"
},{
	name: "Nala",
	counter: 0,
	source: "cat3.jpg"
},
{
	name: "Tigger",
	counter: 0,
	source: "cat4.jpg"
},
{
	name: "Gideon",
	counter: 0,
	source: "cat5.jpg"
}];

// Looping over the cats
for (var i = 0; i < cats.length; i++) {
	// this is our current cat
	var cat = cats[i];
	// create a new list item
	var listItem = document.createElement("li");
	// create a new text node
	var t = document.createTextNode(cat.name); 
	// append text node to list-item
	listItem.appendChild(t);
	// listen for clicks on each cat
    listItem.addEventListener('click', (function(catCopy) {
        return function() {
        	catCopy.counter++;
        	// change the image of the cat on click
        	document.getElementById("catpic").src = "images/" + catCopy.source;
            // Write out the cat's name and counter to the message
            var elem2 = document.getElementById('message');
            elem2.innerHTML = "Hi my name is " + catCopy.name + ". You have clicked me " + catCopy.counter + " times";
        };
    })(cat));
	// append list-item to ul
	var elem = document.getElementById("cat-list");
	elem.appendChild(listItem);
}


/*
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
*/