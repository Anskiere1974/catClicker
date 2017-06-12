# Cat Clicker - a lesson about Design Patters

### Synopsis	

In Cat Clicker you will build a very basic program where a user can click the image of a cute cat. The clicks will be counted and the user will see, how often he clicked the image.

What starts as a simple five minute program will get more complicated soon enough. The specs of our Cat Clicker will change very fast. First we have two cats and then five, making coding more and more repetitive, producing chunks of ugly spaghetti code.

In order to clean up your code you have to separate data, data manipulation and view, by implementing your own fictional MVO(Model-View-Object Design Pattern), called Model-View-Octopus(sounds weird, but Larry the octopus will teach you a lot about data handling and MVO's in general). This coding step is a preparation for Knockout.js and Backbone.js

In the next step you will use Knockout.js to completely rebuild the app. You will learn about MVVM, declarative bindings and Tracking with observables. Cat data runs through a constructor function to build ko.observable Cat Objects.

### Versions

__v1.0 Cat Clicker One Cat__

This version is a starting point for our Cat Clicker Premium App. In v1.0 we have a cute cat image and a counter. Each time you click the image the counter goes up. This app is written in poor spaghetti code. There is no separation of concerns.

__v1.1 Cat Clicker Two Cats__

It is more or less the same code than before. Instead of one cat you have two clickable cats. You can already see  that things get quite messy with simple spaghetti code and no design patterns.

__v1.2 Cat Clicker Premium, the bad version__

In this version you see, how things should not be done. We have tons of repeating spaghetti code to handle five clickable cats. Time has come to bring in the MVO.

__v1.3 Cat Clicker Premium with MVO, aka the clever version__

I burned down the complete code from v1.2 and rewrote the whole app. But this time we have strong separation of concerns, introducing our own fictional design pattern called MVO(Model-View-Octopus). The Model holds all the cat's data(object literal), we have two views, who will render the cat list and the cat images and of course our octopus(Larry!). The octopus runs errands between the views and the model, making sure the view and model never have to talk directly to each other. This version will teach you tons about the basics of Design patterns and will help you to understand libraries like Knockout.js and Backbone.js. I strongly recommend you to take a closer look, if you are interested in design patterns.  

__v1.4__ __Cat Clicker Premium Pro__

Contains all features from v1.3 plus an admin panel. The admin panel allows you to change the cat's name, img source and click counter. This version will show more of our fictional MVO and advanced DOM Manipulation with native Js and the new admin Panel. The MVO will render our views as soon as they change. No reload of the site is needed.

__v2.0 Cat Clicker Premium Knockout.js with single Cat__

This  version is a complete rebuild of Cat Clicker Premium with Knockouts.js. You learn about MVVM(Model-View-ViewModel), ko.observables, ko.observableArray, ko.computed and a lot about data binding(text, click, foreach, with …). This version has only one cat, who is imported through a constructor function.

__v2.1 Cat Clicker Premium Knockout.js with multiple Cats__

Contains all features from v2.0 plus multiple cats. You have the same features as in v1.3 Cat Clicker Premium. But instead of using our own MVO, we do everything with Knockout.js. In this example you will see many of the core features of Knockout.js.