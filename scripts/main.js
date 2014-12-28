// Main javascript 

var menu_items = ["Contact", "Github", "Projects",
				 "Resume", "Jasper Forest - Web Developer"];

var languages_libraries = ["Java", "JavaScript", "C", "Swift",
				"OpenGL", "Python", "CSS", "HTML", "Git"];

var url = document.URL;

function initLoad(){

	url = document.URL;
	// Load top menu
	// Clear current fill
	document.getElementById('menu').innerHTML = "";
	// Populates 
	for (var i = menu_items.length - 1; i >= 0; i--) {
		var menu_name = menu_items[i];
		var item;
		if (menu_name.search("Github") != -1) {
			item = "<a href=\"https://github.com/JPERF\" class=\"menuItem\">\n" + "<li>\n"
					+ menu_name + "\n</li>"+ "\n</a>";
		}
		else if(menu_name.search("Jasper Forest - Web Developer") != -1){
			item ="<a href=\"#/Resume\">\n" +"<li>\n"
			 +  menu_name  + "\n</li>"+ "\n</a>";
		}
		else{
			item ="<a href=\"#/" + menu_name + "\"";
			if(url.search(menu_items[i]) != -1){
			 	item += ">\n <li style=\"background-color:black; color:white;\"";
			}
			else{
				item += " class=\"menuItem\">\n <li";
			}


			item +=  ">\n" 
					+ menu_name  + "\n</li>"+ "\n</a>";
		}
		document.getElementById('menu').innerHTML += item; 
	}

	// Which page is being loaded
	
	var main_page;

	if (url.search("Contact") != -1) {

		main_page = contact();
		document.getElementById('main').innerHTML = main_page; 
	}
	else if(url.search("Projects") != -1){
		main_page = project();
		document.getElementById('main').innerHTML = main_page; 
	}
	else {
		main_page = resume();
		document.getElementById('main').innerHTML = main_page; 
	}
}

function contact() {
	var string = "";

	string += "<h1> Contact </h1>";

	return string;
}

function project() {
	var string = "";

	string += "<h1> Projects </h1>";

	return string;
}

function resume(){
	var string = "";

	string += "<h1> Resume </h1>";

	return string;
}