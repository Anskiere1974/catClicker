// Model
// Cats is a constructor function for building new cats
var Cat = function() {
	this.name = ko.observable('Gideon');
	this.counter = ko.observable(0);
	this.source = ko.observable('images/cat1.jpg');
	this.nicknames = ko.observableArray(['Gid', 'Pascha', 'The G!']);

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
	// Let's build our first cat
	this.currentCat = ko.observable(new Cat());
	// this.incrementCounter will add 1 to this.counter
	this.incrementCounter = function(){
		// look how you add one to the variable itself
		// its looking wierd, but every observable variable is a function, hence the wierd syntax
		self.currentCat().counter(self.currentCat().counter() + 1);
	};
};

// to activate Knockout, add the following line
ko.applyBindings(new ViewModel());