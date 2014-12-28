// Main javascript 

var menu_items = ["Contact", "Github", "Projects", "Resume", "Jasper Forest - Web Developer"];

function initLoad(){
	for (var i = menu_items.length - 1; i >= 0; i--) {
		var item ="<li class=\"menu_items\">\n" + menu_items[i] + "\n</li>";
		document.getElementById('menu').innerHTML += item; 
	};

}