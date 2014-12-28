// Main javascript 

var menu_items = ["Contact", "Github", "Projects",
				 "Resume", "Jasper Forest - Web Developer"];

var languages_libraries = ["Java", "JavaScript", "C", "Swift",
				"OpenGL", "Python", "CSS", "HTML", "Git"];

function initLoad(){

	// Load top menu
	for (var i = menu_items.length - 1; i >= 0; i--) {
		var menu_name = menu_items[i];
		var item;
		if (menu_name.search("Github") != -1) {
			item ="<li class=\"menu_items\">\n" + "<a href=\"https://github.com/JPERF\">\n"
					+ menu_name + "\n</a>" + "\n</li>";
		}
		else{
			item ="<li class=\"menu_items\">\n" + "<a href=\"#/" + menu_name + "\">\n"
					+ menu_name + "\n</a>" + "\n</li>";
		}
		document.getElementById('menu').innerHTML += item; 
	};

	// Which page is being loaded
	var url = document.URL;

	if (url.search("Contact") != -1) {
		alert("Contact");
	}
	else if(url.search("Projects") != -1){
		alert("Projects");
	}
	else {
		alert("Resume");
	}

	while (true){
		url = document.URL;
	}
}