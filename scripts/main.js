// Main javascript 

var menu_items = ["Contact", "Github", "Projects",
				 "Resume", "Jasper Forest - Web Developer"];

var languages_libraries = ["Java", "JavaScript", "C", "Swift",
				"OpenGL", "Python", "CSS", "HTML", "Git"];

var url = document.URL;

var outerAmount = 990;
var innerAmount = 767;

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
			item ="<a href=\"\" style=\"color:black;\">\n" +"<li>\n"
			 +  menu_name  + "\n</li>"+ "\n</a>";
		}
		else{
			item ="<a href=\"#/" + menu_name + "\"";
			if(url.search(menu_items[i]) != -1 || 
				(url.valueOf() == "http://jperf.github.io/" && menu_items[i].valueOf() == "Resume")){
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

function listCreator(list){
	var string = "";
	var len = list.length;
	var dWidth = window.outerWidth;
	var rowNum;

	if(dWidth>= outerAmount){
		rowNum = 6; 
	}
	else if(dWidth >= innerAmount){
		rowNum = 4;
	}
	else {
		rowNum = 3;
	}

	string += "<ul style=\"list-style-type:disc;\">";
	for (var i = 0; i <= len-1; i++) {

		string += "<li";
		
		string += " class=\"languages\">" ;
		

		string += list[i] + "</li>";
	}
	string += "</ul>";

	return string;
}

function contact() {
	var string = "";

	string += "<ul>\n";
	string += "<li class=\"contact\"> <strong> Email </strong>";
	string += "<a href=\"mailto:jasperforest@sandiego.edu?\"> Jasperforest@sandiego.edu </a> </li>\n"
	string += "<li class=\"contact\"> <strong> Phone </strong>";
	string += "+1 (831) 239 7476 </li>\n";
	string += "<li class=\"contact\"> <strong> Linkedin </strong>";
	string += "<a href=\"http://www.linkedin.com/pub/jasper-forest/\"> www.linkedin.com/pub/jasper-forest/ </a> </li>\n";

	return string;
}

function project() {
	var string = "";

	string += "<h1> Projects </h1>";

	return string;
}

function resume(){
	var string = "";

	string += "<h4>Languages / Libraries</h4>\n";
	string += listCreator(languages_libraries);

	return string;
}