// Main javascript 

var menu_items = ["Contact", "Github", "Projects", "Resume", "Jasper Forest Web Developer"];

function initLoad(){
	
	for (var i = menu_items.length - 1; i >= 0; i--) {
		document.getElementById('menu').innerHTML += "<li>\n" + menu_items[i] + "\n</li>";
	};
	alert("loaded");
}