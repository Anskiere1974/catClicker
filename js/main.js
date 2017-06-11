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
	currentCat: null,
	adminPanel: false
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
	},
	setAdminPanelTrue: function() {
		model.adminPanel = true;
	},
	setAdminPanelFalse: function() {
		model.adminPanel = false;
	},
	getAdminPanel: function() {
		return model.adminPanel;
	},
	getCurrenCatName: function() {
		return model.currentCat.name;
	},
	getCurrentCatClicks: function() {
		return model.currentCat.counter;
	},
	getCurrentCatSource: function() {
		return model.currentCat.source;
	},
	setCurrentCatName: function(cat) {
		model.currentCat.name = cat;
	},
	setCurrentCatClicks: function(clicks) {
		model.currentCat.counter = clicks;
	},
	setCurrentCatSource: function(source) {
		model.currentCat.source = source;
	}
};

// ******************************************************************
// ****                 catListView                               ***
// ******************************************************************
var catListView = {
	init: function() {
		// storing the ul element with id of cat-list
		this.elemCatList = document.getElementById('cat-list');

		// Listen for clicks on adminpanelbutton
		this.elemAdminPanelButton = document.getElementById('admin-panel-button');
		this.elemAdminPanelButton.addEventListener('click', function(){
			octopus.setAdminPanelTrue();
			adminView.init();
		});
		// initializing the render function
		this.render();
	},
	render: function() {
		// First we need all the Cats - we use the octopus to get them from the model
		var cats = octopus.getAllCats();
		// first we need to clear the ul list, making sure our list is empty
		this.elemCatList.innerHTML = "";
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
                    adminView.render();
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
			if(octopus.getAdminPanel){
				adminView.render();
			}
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

// ******************************************************************
// ****                 adminView                                ***
// ******************************************************************
var adminView = {
	init: function() {
		this.elemAdminPanel = document.getElementById('adminPanel');
		this.htmlAdminPanel = '<h3>Welcome to the Admin Panel</h3><form><label for="catname">Name:</label><input type="text" id="catname"><br><label for="catclicks">Number of clicks:</label><input type="text" id="catclicks"><br><label for="catsource">Img Source:</label><input type="text" id="catsource"></form><button id="btnclose">Close</button><button id="btnsave">Save</button>';
		// start the render function
		this.render();
		// listen for clicks on btnclose
		if(octopus.getAdminPanel) {
			var elemBtnClose = document.getElementById('btnclose');
			elemBtnClose.addEventListener('click', function() {
				octopus.setAdminPanelFalse();
				adminView.render();
			});
		}
	},
	render: function() {
		if(octopus.getAdminPanel()) {
			this.elemAdminPanel.innerHTML = this.htmlAdminPanel;
			// Fill in the current cat name as value in form
			var elemCatName = document.getElementById('catname');
			elemCatName.value = octopus.getCurrenCatName();
			// Fill in the click counter as value in form
			var elemCatClicks = document.getElementById('catclicks');
			elemCatClicks.value = octopus.getCurrentCatClicks();
			// Fill in the img source as value in form
			var elemCatSource = document.getElementById('catsource');
			elemCatSource.value = octopus.getCurrentCatSource();

			// Now listen for a click on the save button
			var elemBtnSave = document.getElementById('btnsave');
			elemBtnSave.addEventListener('click', function(){
				// saving values from the form to the model via the octopus
				octopus.setCurrentCatName(elemCatName.value);
				octopus.setCurrentCatClicks(elemCatClicks.value);
				octopus.setCurrentCatSource(elemCatSource.value);
				// Now update the views
				catListView.render();
				catView.render();
			});
		} else {
			this.elemAdminPanel.innerHTML = "";
		}
	}
};

// Let's start the show
octopus.init();

