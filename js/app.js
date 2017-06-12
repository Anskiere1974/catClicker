// Model
var initialCats = [
	{
		name: "Gideon",
		counter: 0,
		source: "images/cat1.jpg",
		nicknames: ['Gid', 'Pascha', 'The G!']
	},
	{
		name: "Simba",
		counter: 0,
		source: "images/cat2.jpg",
		nicknames: ['Sim', 'King', 'Simbooo']
	},
	{
		name: "Nala",
		counter: 0,
		source: "images/cat3.jpg",
		nicknames: ['Nal', 'Schnurri', 'Princess']
	},
	{
		name: "Gizmo",
		counter: 0,
		source: "images/cat4.jpg",
		nicknames: ['Giz', 'Mo', 'Sleepy']
	},
	{
		name: "Casper",
		counter: 0,
		source: "images/cat5.jpg",
		nicknames: ['Cas', 'Big Cas', 'C!!!']
	}
];
// Cats is a constructor function for building new cats
var Cat = function(data) {
	this.name = ko.observable(data.name);
	this.counter = ko.observable(data.counter);
	this.source = ko.observable(data.source);
	this.nicknames = ko.observableArray(data.nicknames);

	// depending how often you click on a cat, she will rise in rank
	this.rank = ko.computed(function() {
		if(this.counter() < 10) { 
			return 'Newborn';
		}
		else if(this.counter() < 100) {
			return 'Infant';
		}
		else if(this.counter() < 200) {
			return 'Teen';
		}
		else if(this.counter() < 500) {
			return 'Adult';
		}
		else {
			return 'Ninja';
		}
	}, this);
};

// View Model
var ViewModel = function() {
	var self = this;
	// let's build an array of cats with our initial cats
	this.catList = ko.observableArray([]);
	// loop over every Cat in InitialCats and make a new Cat and push it into our catList
	initialCats.forEach(function(catItem){
		self.catList.push(new Cat(catItem));
	});
	// Let's set the current Cat
	this.currentCat = ko.observable(this.catList()[0]);
	// this.incrementCounter will add 1 to this.counter
	this.incrementCounter = function(){
		// look how you add one to the variable itself
		// its looking wierd, but every observable variable is a function, hence the wierd syntax
		self.currentCat().counter(self.currentCat().counter() + 1);
	};
	// let's set the current cat
	this.setCat = function(clickedCat){
		self.currentCat(clickedCat);
	};
};

// to activate Knockout, add the following line
ko.applyBindings(new ViewModel());