// Main javascript
var menu_items = ["Contact", "Github", "Projects",
				 "Resume", "Jasper Forest - Software Developer"];

var main_name = "Jasper Forest - Software Developer";

// Languages known
var languages_libraries = ["Java", "JavaScript", "C", "Swift",
				"OpenGL", "Python", "CSS", "HTML", "Git", "AppleScript",
				"Scala", "Racket", "mySQL", "iOS", "Objective-C", "PHP", "MySQL"];

// School information
var school_names = ["University of San Diego", "Cabrillo College"];
var school_location = ["San Diego, CA", "Aptos, CA"];
var school_years = [ "2012 - 2015", "2009 - 2012"];
var school_majors= ["B.A. - Computer Science", "A.A. - Mathamatics"];
var school_classes = [
						["Software Engineering, Operating Systems, Programming Languages, Website Design, Data Structures & Algorithms",
						"Object Orientated Programming, Theory of Computation, Computer Graphics, Assembly Language, Math Logic"],
						["Calculus I, Calculus II, Calculus III"]
					];

// Work information
var work_names = ["LIA", "University of San Diego", "University of San Diego"];
var work_titles = ["Software Intern", "Computer Science Tutor", "Teaching Assistant"];
var work_years = ["October 2014 - Present", "September 2014 - December 2014",
					"October 2014 - December 2014"]
var work_overview = ["Q/A testing the web, iOS, Android, and Window application", "Tutored intro level Computer Science Students",
						"Grading/Critique Homework"];
var work_traits = [
					["Q/A Product Testing", "Code Refactoring", "Regression Testing"],
					["Helped students have a better understanding of their classes.", "Helped guide students through their programs/assignments."],
					["Grade/Critique coursework from the introductory computer sceience classes", "Debuggin Programs"]
					];

// Project information
var project_names = ["TumYum", "Virtual World"];
var project_linkURL = ["https://github.com/JperF/TumYum", "https://github.com/JperF/GraphicsFinalProject"];
var project_date = ["2014", "2014"]
var project_description = [
							["iOS Recipe finding application written in swift.",
							"Virtual world made using openGL in C."]
							];


var url = document.URL;

var buttonDown = false;

var outerAmount = 990;
var innerAmount = 767;

var locked = false;

function initLoad(){

	url = document.URL;
	// Load top menu
	// Clear current fill
	document.getElementById('menu').innerHTML = "";
	var dWidth = window.outerWidth;
	var small = false;
	var h;
	if (dWidth < innerAmount) {
		small = true;
		if (buttonDown)
		{
			expand('extraMenu');
		}
	}
	else{
		retract('extraMenu');
	}

	// Populates
	if(small){
		var item;
		item ="<a href=\"\" style=\"color:black;\">\n" +"<li>\n"
				 +  main_name  + "\n</li>"+ "\n</a>";


		item += makeButtonMenu();

		document.getElementById('menu').innerHTML += item;
	}
	else {
		for (var i = menu_items.length - 1; i >= 0; i--) {
			var menu_name = menu_items[i];
			var item;
			if (menu_name.search("Github") != -1) {
				item = "<a href=\"https://github.com/JPERF\" class=\"menuItem\">\n" + "<li>\n"
						+ menu_name + "\n</li>"+ "\n</a>";
			}
			else if(menu_name.search("Jasper Forest - Software Developer") != -1){
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
				item +=  ">\n" + menu_name  + "\n</li>"+ "\n</a>";
			}
			document.getElementById('menu').innerHTML += item;
		}
	}

	// Which page is being loaded
	bodyLoad();
}


function bodyLoad(h){
	var main_page;

	var dWidth = window.outerWidth;
	var small = false;
	var h;
	if(dWidth>= outerAmount){
		h = "100px";
	}
	else if(dWidth >= innerAmount){
		h = "120px";
	}
	else {
		small = true;
		h = "140px";
	}

	if (url.search("Contact") != -1) {
		main_page = contact();
		document.getElementById('main').innerHTML = main_page;
	}
	else if(url.search("Projects") != -1){
		main_page = project(small);
		document.getElementById('main').innerHTML = main_page;
	}
	else {
		main_page = resume(small);
		document.getElementById('main').innerHTML = main_page;
		document.getElementById('langSkill').style["height"] = h;
	}
}


function makeButtonMenu(){
	var button = "";

	button += "<a href=\"#\" onclick=\"return false\" onmousedown=\"buttonMenu()\" id=\"toggle\">"
			+ "<img src=\"images/button.png\" id=\"button\"> ";
	button += "</a> ";

	return button;
}

function buttonMenu(){

	if(buttonDown && !locked){
		locked = true
		retract('extraMenu');
		buttonDown = false;
		locked = false;
	}
	else if(!buttonDown && !locked){
		locked = true;
		expand('extraMenu');
		buttonDown = true;
		locked = false
	}
}

function langCreator(list){
	var string = "";
	var len = list.length;
	var dWidth = window.outerWidth;
	var width;

	if(dWidth>= outerAmount){
		width = "16.666%";

	}
	else if(dWidth >= innerAmount){
		width = "25%";
	}
	else {
		width = "33.333%";
	}

	string += "<ul id=\"list\">";
	for (var i = 0; i <= len-1; i++) {

		string += "<li";
		string += " style=\"width:";
		string += width + ";\" class=\"language\">" ;


		string += list[i] + "</li>";
	}
	string += "</ul>";
	return string;
}

function contact() {
	var string = "<div id=\"contactInfo\">";
	string += "<ul id=\"contactList\">\n";
	string += "<li class=\"contact\"> <strong> Email </strong>";
	string += "<a href=\"mailto:jasperforest@sandiego.edu?\"> Jasperforest@sandiego.edu </a> </li>\n"
	string += "<li class=\"contact\"> <strong> Phone </strong>";
	string += "+1 (831) 239 7476 </li>\n";
	string += "<li class=\"contact\"> <strong> Linkedin </strong>";
	string += "<a href=\"http://www.linkedin.com/pub/jasper-forest/\"> www.linkedin.com/pub/jasper-forest/ </a> </li>\n";
	string += "</div>";
	return string;
}


function projectMaker(names, dates, description, links){
	var s = "<div> <ul>";

	for (var i = 0; i < names.length; i++) {
		s += "<li style=\"width:50%;\">";
		s += eInsert(names[i]);
		s += eInsert(dates[i]);
		s += eInsert(links[i]);
		s += "<p>" + description[i] + "</p>";
		s += "</li>";
	};

	return s + "</ul> </div>"
}

function project(smallScreen) {
	var string = "<h1> Projects </h1>";
	string += projects(smallScreen, project_names, project_description, project_linkURL, project_date);
	return string;
}

function eInsert(s){
	return "<div class=\"experienceHeader\">" + s + "</div>";
}

function samllEInsert(t, n, y){
	var rtn =  "<div class=\"smallExperienceHeader\"> ";

	rtn += "<ul style=\"list-style-type: none; 	min-width: 200px;\">";
	rtn += "<li>" + t + "</li>";
	rtn += "<li>" + n + "</li>";
	rtn += "<li>" + y + "</li>";
	rtn += "</ul> </div>";

	return rtn;
}

function traitCreator(ov, list){
	var string = "";
	var len = list.length	;

	string += "<ul>";

	for (var i = -1; i < len; i++) {

		string += "<li ";
		if (i < 0) {
			string += "class=\"workOverView\">" + ov;
		}
		else{
			string += "class=\"traits\">" + list[i];
		}
		string += "</li>";

	}

	string += "</ul>";
	return string;
}

function experience(smallScreen, names, title,  years, overview, traits){
	var string = "";

	for (var i = 0; i <  names.length; i++) {

		string += "<header>";

		if(smallScreen){
			string += samllEInsert(title[i], names[i], years[i]);
		}
		else{
			string += eInsert(title[i]);
			string += eInsert(names[i]);
			string += eInsert(years[i]);
		}
		string += "</header>";
		string += traitCreator(overview[i], traits[i]);

	};

	return string;
}

function projects(smallScreen, name, description, links, dates){
	var string = "";
	var empty = [];

	for (var i = 0; i < name.length; i++) {
		string += "<header>";
		if (smallScreen){
			string += samllEInsert(name[i], "<a href=\"" + links[i] + "\">" + links[i] + "</a>", dates[i]);
		}
		else {
			string += eInsert(name[i]);
			string += eInsert("<a href=\"" + links[i] + "\">" + links[i] + "</a>");
			string += eInsert(dates[i]);
		}
		string += "</header>";
		string += traitCreator(empty, description[i] );
	};

	return string;
}

function resume(smallScreen){
	var string = "";
	var empty = [];
	string += "<article id=\"langSkill\"> <h1>Languages / Libraries</h1>\n";
	string += langCreator(languages_libraries);
	string += "</article> <article> <h1> Experience </h1>\n";
	string += experience(smallScreen, work_names, work_titles, work_years, work_overview, work_traits);
	string += "</article> <article> <h1> Education </h1>\n";
	string += experience(smallScreen, school_names, school_location, school_years, school_majors, school_classes);
	string += "</article> <article> <h1> Projects </h1>\n";
	string += projects(smallScreen, project_names, project_description, project_linkURL, project_date);
	string += "</article>";
	return string;
}

function expand(element){
	var target = document.getElementById(element);
	var h = target.offsetHeight;
	var sh = target.scrollHeight;
	var loopTimer = setTimeout('expand(\''+element+'\')',8);
	if(h < sh){
		h += 6;
	} else {
		clearTimeout(loopTimer);
	}
	target.style["height"] = h+"px";
}
function retract(element){
	var target = document.getElementById(element);
	var h = target.offsetHeight;
	var loopTimer = setTimeout('retract(\''+element+'\')',8);
	if(h > 0){
		h -= 6;
	} else {
		target.style["height"] = "0px";
		clearTimeout(loopTimer);
	}
	target.style["height"] = h+"px";
}
