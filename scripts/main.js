// Main javascript 

var menu_items = ["Contact", "Github", "Projects",
				 "Resume", "Jasper Forest - Web Developer"];

var languages_libraries = ["Java", "JavaScript", "C", "Swift",
				"OpenGL", "Python", "CSS", "HTML", "Git"];

function initLoad(){

	// Load top menu
	for (var i = menu_items.length - 1; i >= 0; i--) {
		var item ="<li class=\"menu_items\">\n" + menu_items[i] + "\n</li>";
		document.getElementById('menu').innerHTML += item; 
	};

	var url = document.URL;
	alert(url);

}