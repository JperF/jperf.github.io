// Main javascript 

var menu_items = ["Contact", "Github", "Projects",
				 "Resume", "Jasper Forest - Web Developer"];

var languages_libraries = ["Java", "JavaScript", "C", "Swift",
				"OpenGL", "Python", "CSS", "HTML", "Git"];

var url = document.URL;

function initLoad(){

	// Load top menu
	// Clear current fill
	document.getElementById('menu').innerHTML = "";
	// Populates 
	for (var i = menu_items.length - 1; i >= 0; i--) {
		var menu_name = menu_items[i];
		var item;
		if (menu_name.search("Github") != -1) {
			item ="<li class=\"menu_items\">\n" + "<a href=\"https://github.com/JPERF\">\n"
					+ menu_name + "\n</a>" + "\n</li>";
		}
		else if(menu_name.search("Jasper Forest - Web Developer") != -1){
			item ="<li class=\"menu_items\">\n" + "<a href=\"#/\">\n"
					+ menu_name + "\n</a>" + "\n</li>";
		}
		else{
			item ="<li class=\"menu_items\">\n" + "<a href=\"#/" + menu_name + "\">\n"
					+ menu_name + "\n</a>" + "\n</li>";
		}
		document.getElementById('menu').innerHTML += item; 
	};

	// Which page is being loaded
	url = document.URL;
	if (url.search("Contact") != -1) {
		alert("Contact"); 
	}
	else if(url.search("Projects") != -1){
		alert("Projects");
	}
	else {
		alert("Resume");
	}
}