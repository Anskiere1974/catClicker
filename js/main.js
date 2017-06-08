// ******************************************************************
// ****                 MODEL                                     ***
// ******************************************************************
var model = {
	cats: [
{
	name: "Oliver",
	counter: 0,
	source: "images/cat1.jpg"
},
{
	name: "Simba",
	counter: 0,
	source: "images/cat2.jpg"
},{
	name: "Nala",
	counter: 0,
	source: "images/cat3.jpg"
},
{
	name: "Tigger",
	counter: 0,
	source: "images/cat4.jpg"
},
{
	name: "Gideon",
	counter: 0,
	source: "images/cat5.jpg"
}],
	currentCat: null
};

// ******************************************************************
// ****                 OCTOPUS                                   ***
// ******************************************************************
var octopus = {
	init: function() {
		// set the current cat to the first cat in the list
		model.currentCat = model.cats[0];
		// initializing catListView
		catListView.init();
		// initializing catView
		catView.init();
	},
	getAllCats: function() {
		return model.cats;
	},
	getCurrentCat: function() {
		return model.currentCat;
	},
	setCurrentCat: function(cat) {
		model.currentCat = cat;
	},
	increaseCounter: function(){
		model.currentCat.counter++;
		catView.render();
	}
};

// ******************************************************************
// ****                 catListView                               ***
// ******************************************************************
var catListView = {
	init: function() {
		// storing the ul element with id of cat-list
		this.elemCatList = document.getElementById('cat-list');
		// initializing the render function
		this.render();
	},
	render: function() {
		// First we need all the Cats - we use the octopus to get them from the model
		var cats = octopus.getAllCats();
		// Now we loop over all the cats
		for (var i = 0; i < cats.length; i++) {
			// this is our current cat
			var cat = cats[i];
			// create a new list item
			var listItem = document.createElement("li");
			// create a new text node
			var t = document.createTextNode(cat.name); 
			// append text node to list-item
			listItem.appendChild(t);
            // on click, setCurrentCat and render the catView
            // (this uses our closure-in-a-loop trick to connect the value
            //  of the cat variable to the click event function)
            listItem.addEventListener('click', (function(catCopy) {
                return function() {
                    octopus.setCurrentCat(catCopy);
                    catView.render();
                };
            })(cat));
			// append new list-item to corresponding ui Dom element
			this.elemCatList.appendChild(listItem);
		}
	},
};

// ******************************************************************
// ****                 catView                                   ***
// ******************************************************************
var catView = {
	init: function() {
		// let's store the DOM Element of the cat picture
		this.elemCatPic = document.getElementById('catpic');
		// Let's store the DOM Element of the cat message
		this.elemCatMessage = document.getElementById('catmessage');

		// listen for clicks on the current cat image
		this.elemCatPic.addEventListener('click', function(){
			octopus.increaseCounter();
		});

		// initialize the render method
		this.render();
	},
	render: function() {
		// Let's find the current Cat
		var currentCat = octopus.getCurrentCat();
		// set the img source accordingly
		this.elemCatPic.src = currentCat.source;

		this.elemCatMessage.textContent = "Hi my name is " + currentCat.name + ". You have clicked me " + currentCat.counter + " times";
	}
};
// Let's start the show
octopus.init();

/*
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
*/

