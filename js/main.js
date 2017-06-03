var counter = 0;
var elem = document.getElementById('catPic');
var elem2 = document.getElementById('counterCat');
elem.addEventListener('click', function(){
	counter++;
	elem2.innerHTML = counter;
});