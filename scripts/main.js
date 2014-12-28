// Main javascript 

var menu_items = ["Contact", "Github", "Projects",
				 "Resume", "Jasper Forest - Web Developer"];

var languages_libraries = ["Java", "JavaScript", "C", "Swift",
				"OpenGL", "Python", "CSS", "HTML", "Git"];

var url = document.URL;

function initLoad(){

	url = document.URL;
	alert(url);
	// Load top menu
	// Clear current fill
	document.getElementById('menu').innerHTML = "";
	// Populates 
	for (var i = menu_items.length - 1; i >= 0; i--) {
		var menu_name = menu_items[i];
		var item;
		if (menu_name.search("Github") != -1) {
			item = "<a href=\"https://github.com/JPERF\">\n" + "<li class=\"menu_items\">\n"
					+ menu_name + "\n</li>"+ "\n</a>";
		}
		else if(menu_name.search("Jasper Forest - Web Developer") != -1){
			item ="<a href=\"#/\">\n" +"<li class=\"menu_items\">\n"
			 +  menu_name  + "\n</li>"+ "\n</a>";
		}
		else{
			item ="<a href=\"#/" + menu_name + "\">\n <li class=\"menu_items\"" ;

			if(url.search(menu_items[i] != 1)){
				item += "style=\"background-color:black; color:white;\"";
			}

			item +=  ">\n" 
					+ menu_name  + "\n</li>"+ "\n</a>";
		}
		document.getElementById('menu').innerHTML += item; 
	};

	// Which page is being loaded
	
	if (url.search("Contact") != -1) {
		document.getElementById('Main').innerHTML = "Contact"; 
	}
	else if(url.search("Projects") != -1){
		document.getElementById('Main').innerHTML = "Projects"; 
	}
	else {
		document.getElementById('Main').innerHTML = "Resume"; 
	}
}