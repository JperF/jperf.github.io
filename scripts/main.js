// Main javascript 

var menu_items = ["Resume", "Projects", "Github", "Contact"];

function initLoad(){
	
	for (var i = menu_items.length - 1; i >= 0; i--) {
		document.getElementById('menu').innerHTML += "<li>\n" + menu_items[i] + "\n</li>";
		//document.getElementById('menu').innerHTML += menu_items[i];
		//document.getElementById('menu').innerHTML += "</li>";
	};
	alert("loaded");
}