/* Page navigation js */

// Main javascript
var personal_info = "Making the world a better place, one code block at a time.";
var personal_loc = "San Diego";
var personal_email = "jasperforest@sandiego.edu";
var personal_phone = "831.239.7476";
var personal_resume ="forest_resume.pdf";

var scroll_speed = 490;

var contact_street = "Crown Point";
var contact_city = "San Diego";
var contact_state = "CA";
var contact_zip = "92109";
// Languages known
var languages_libraries = ["Java", "JavaScript", "C",
			    "CSS", "HTML", "Git", "mongoDB", "angular.js",
			   "node.js", "express", "parse DB", "ejs templates", "bootstrap.js", "jquery.js"];

// School information
var school_names = ["University of San Diego", "Cabrillo College"];
var school_location = ["San Diego, CA", "Aptos, CA"];
var school_years = [ "2012 - 2015", "2009 - 2012"];
var school_major= ["B.A. - Computer Science", "A.A. - Mathamatics"];
var school_classes = [
		      ["Software Engineering, Operating Systems, Programming Languages, Website Design, Data Structures & Algorithms",
		       "Object Orientated Programming, Theory of Computation, Computer Graphics, Assembly Language, Math Logic"],
		      ["Calculus I, Calculus II, Calculus III"]
					];

// Work information
var work_names = ["PINT Inc.", "LIA", "University of San Diego", "University of San Diego"];
var work_titles = ["Software Engineer", "Software Intern", "Computer Science Tutor", "Teaching Assistant"];
var work_years = ["June 2015 - Present", "October 2014 - May 2015", "September 2014 - December 2014",
		  "October 2014 - December 2014"];
var work_overview = ["JavaScript Full Stack Engineer",
			"Quality Assurance testing the web, iOS, Android, and Window application",
			"Tutored intro level Computer Science Students",
			"Grading/Critique Homework"];
var work_traits = [
		   ["Building web and software applications using W3C-compliant HTML, CSS and JavaScript",
				"Designing and implementing node.js and NoSQL-type server and database environments, as well as traditional LAMP stack applications",
				"Provide feedback, solutions and recommendations on project direction as a member of a collaborative team"],
		   ["Q/A Product Testing", "Code Refactoring", "Regression Testing"],
		   ["Helped students have a better understanding of their classes.", "Helped guide students through their programs/assignments."],
		   ["Grade/Critique coursework from the introductory computer sceience classes", "Debuggin Programs"]
		   ];

// Project information
var project_names = ["E-commerce WebApp"];
var project_linkURL = ["https://bottleexchange.herokuapp.com"];
var project_overview = ["A juice delivery bussiness that allows their users to set up subscription based payments using the strip API."];
var project_description = [
			   ["Using node.js along with express.js & bootstrap.js to web framework.", "Working with stripe to incorporate online subscriptions and transactions."]
			   ];
var project_images = ["icons/jot.00_jpg_sz.00_jpg_srz"];

function pageLoad(){
   url = document.URL;
   //Generates navigations bar
   document.getElementById('menu-choice').innerHTML = generateMenu(url);
   //Generates content
   generateContent(url, false);
}

function firstLoad(){
   url = document.URL;
   //Generates navigations bar
   document.getElementById('menu-choice').innerHTML = generateMenu(url);
   //Generates content
   generateContent(url, true);
}

function generateMenu(url){
   if(url.indexOf("Resume")  > -1){
      return "<li style=\"padding-top:5px;\"> <a href=\"#Profile\"> <span class=\"glyphicon glyphicon-user\""+
      " aria-hidden=\"true\"></span> Profile</a></li><li class=\"active\"  style=\"padding-top:5px;\"><a href=\"#Resume\">" +
      " <span class=\"glyphicon glyphicon-equalizer\" aria-hidden=\"true\"></span> Resume </a></li>" +
      "<!-- <li style=\"padding-top:5px;\"><a href=\"#Portfolio\"> <span class=\"glyphicon glyphicon-folder-open\" aria-hidden=\"true\">" +
      " </span> Portfolio</a></li> --> <li style=\"padding-top:5px;\"><a href=\"#Contact\"> <span class=\"glyphicon glyphicon-send\" " +
      " aria-hidden=\"true\"></span> Contact</a></li>";
   }
   else if(url.indexOf("Portfolio") > -1){
      return "<li style=\"padding-top:5px;\"> <a href=\"#Profile\"> <span class=\"glyphicon glyphicon-user\""+
       " aria-hidden=\"true\"></span> Profile</a></li><li style=\"padding-top:5px;\"><a href=\"#Resume\">" +
       " <span class=\"glyphicon glyphicon-equalizer\" aria-hidden=\"true\"></span> Resume </a></li>" +
       "<!-- <li class=\"active\" style=\"padding-top:5px;\"><a href=\"#Portfolio\"> <span class=\"glyphicon glyphicon-folder-open\" aria-hidden=\"true\">" +
       " </span> Portfolio</a></li> --> <li style=\"padding-top:5px;\"><a href=\"#Contact\"> <span class=\"glyphicon glyphicon-send\" " +
       " aria-hidden=\"true\"></span> Contact</a></li>";
   }
   else if(url.indexOf("Contact") > -1){
      return "<li style=\"padding-top:5px;\"> <a href=\"#Profile\"> <span class=\"glyphicon glyphicon-user\""+
       " aria-hidden=\"true\"></span> Profile</a></li><li style=\"padding-top:5px;\"><a href=\"#Resume\">" +
       " <span class=\"glyphicon glyphicon-equalizer\" aria-hidden=\"true\"></span> Resume </a></li>" +
       "<!-- <li style=\"padding-top:5px;\"><a href=\"#Portfolio\"> <span class=\"glyphicon glyphicon-folder-open\" aria-hidden=\"true\">" +
       " </span> Portfolio</a></li> --><li class=\"active\" style=\"padding-top:5px;\"><a href=\"#Contact\"> <span class=\"glyphicon glyphicon-send\" " +
       " aria-hidden=\"true\"></span> Contact</a></li>";
   }
   else{
      return "<li class=\"active\" style=\"padding-top:5px;\"> <a> <span class=\"glyphicon glyphicon-user\""+
       " aria-hidden=\"true\"></span> Profile</a></li><li style=\"padding-top:5px;\"><a href=\"#Resume\">" +
       " <span class=\"glyphicon glyphicon-equalizer\" aria-hidden=\"true\"></span> Resume </a></li>" +
       " <!-- <li style=\"padding-top:5px;\"> <a href=\"#Portfolio\"> <span class=\"glyphicon glyphicon-folder-open\" aria-hidden=\"true\">" +
       " </span>  Portfolio</a></li> --> <li style=\"padding-top:5px;\"><a href=\"#Contact\"> <span class=\"glyphicon glyphicon-send\" " +
       " aria-hidden=\"true\"></span> Contact</a></li>";
   }
}

function generateContent(url, first){

   if(url.indexOf("Resume")  > -1){
      if(!first){
         $("#main-cont").slideUp(scroll_speed,function(){
            gen(generateResume);
         });
      }
      else{
         gen(generateResume);
      }
   }
   else if(url.indexOf("Portfolio") > -1){
      if(!first){
         $("#main-cont").slideUp(scroll_speed,function(){
            gen(generatePorfolio);
         });
      }
      else{
         gen(generatePorfolio);
      }
   }
   else if(url.indexOf("Contact") > -1){
      if(!first){
         $("#main-cont").slideUp(scroll_speed,function(){
            gen(generateContact);
         });
      }
      else{
         gen(generateContact);
      }
   }
   else{
      if(!first){
         $("#main-cont").slideUp(scroll_speed,function(){
            gen(generateProfile);
         });
      }
      else{
         gen(generateProfile);
      }
   }
   $("#main-cont").slideDown(scroll_speed);
}

function gen(f){
	document.getElementById('main-cont').innerHTML = f();
}

function generateResume(){
	var rtn = genExp();
	rtn += genLang();
	rtn += genEdu();
	rtn += genPDF();
   return rtn;
}


function genLine(){
	return "<div class=\"shift container\"><div class=\"container col-xs-6 col-md-6 col-lg-6" +
			" border-blue\"></div>";
}

function genExp(){
	var exp = "<div class=\"container\"><h3> Experience </h3>" + genLine();
	for(var i = 0;i < work_names.length; i++){
		exp += "<div style=\"margin-bottom:10px;\"> <div class=\"col-md-4 dark\">"+
				work_titles[i] + "</div><div class=\"col-md-4 dark\">" + work_names[i] + "</div>"+
				"<div class=\"col-md-4 dark\">" + work_years[i] + "</div><div class=\"container\">"+
				"<div class=\"container\"><ul class=\"list-unstyled\"><li>"+ work_overview[i]+"<ul>";
				for(var j = 0; j < work_traits[i].length; j++){
					exp += "<li>"+ work_traits[i][j] +"</li>";
				}
				exp += "</ul></li></ul></div></div></div>";
	}
	exp += "</div></div>";
	return exp;
}

function genLang(){
	var lang = "<div class=\"container\"><h3> Languages & Libraries </h3>" + genLine() + "<ul class=\"list-unstyled\">";

	for(var i = 0; i < languages_libraries.length; i++){
		lang += "<li class=\"col-xs-4 col-md-3\">" + languages_libraries[i] + "</li>";
	}

	lang += "</ul></div></div>";
	return lang;
}

function genEdu(){
	var edu = "<div class=\"container\"><h3> Education </h3>" + genLine();
	for(var i = 0;i < school_names.length; i++){
		edu += "<div style=\"margin-bottom:10px;\"> <div class=\"col-md-4 dark\">"+
				school_names[i] + "</div><div class=\"col-md-4 dark\">" + school_location[i] + "</div>"+
				"<div class=\"col-md-4 dark\">" + school_years[i] + "</div><div class=\"container\">"+
				"<div class=\"container\"><ul class=\"list-unstyled\"><li>"+ school_major[i]+"<ul>";
				for(var j = 0; j < school_classes[i].length; j++){
					edu += "<li>"+ school_classes[i][j] +"</li>";
				}
				edu += "</ul></li></ul></div></div></div>";
	}
	edu += "</div>";
	return edu;
}

function genPDF(){
	var pdf = "<div class=\"container\">";

	pdf += "<a href=\"" + personal_resume + "\" download><div class=\"btn-group\" role=\"group\" aria-label=\"...\">"+
	"<button type=\"button\" class=\"btn btn-primary\">Download resume as PDF</button></a>";

	pdf += "</div>";
	return pdf;
}


function generatePorfolio(){

	var port= "";
	for(var i = 0; i < project_names.length; i++){

		port += "<a target=\"_blank\" href=\""+ project_linkURL[i] + "\" class=\"hover-tilt\" id=\"proj"+ i +"\"><div class=\"container"+
					" blue-back col-xs-12 col-md-12 col-lg-12\"><div class=\"container col-xs-6 col-md-3\" >"+
					"<h3>"+ project_names[i] +"</h3></div><div class=\"container col-xs-3 col-md-3\">"+
					"<img src=\"" + project_images[i] + "\" class=\"project-img img-thumbnail\" style=\"margin-top:5px;"+
					" margin-bottom:5px;\"></div><div class=\"container col-xs-12 col-md-5\"><ul class"+
					"=\"list-unstyled\"><li>" + project_overview[i] +"</li><ul>";
		for(var j = 0; j < project_description[i].length; j++){
			port += "<li>" + project_description[i][j] + "</li>";
		}

		port += "</ul></ul></div></div></a><div style=\"margin-top:10px;\" "+
				"class=\"col-xs-12 col-md-12 col-lg-12 container\"></div>";
	}
	return port;
}

function generateContact(){
   return "<div class=\"row\"><div class=\"col-xs-5 col-md-5\"><address><h4>Contact Info</h4><br>"+
       contact_street + "<br>" + contact_city + "," + contact_state + " " + contact_zip + "<br>"+
       "</address><address><strong>Jasper Forest</strong><br>Email: "+ personal_email +"<br>"+
       "Phone: " + personal_phone + "<br>Website: jperf.github.io<br><a href=\""+
       "https://www.linkedin.com/pub/jasper-forest/61/26/316/en\"> LinkedIn Profile</a><br>"+
       "</address></div><div class=\"col-xs-5 col-md-6\"><p class=\"lead text-center\">"+
       "Send me a Message!</p><form id=\"mail-form\" action=\"#Contact\">"+
       "<div class=\"form-group\"><label for=\"nameIn\">Your Name</label><input class=" +
       "\"form-control focusedInput\" id=\"nameIn\" required focus></div><div class=\"form-group\">"+
       "<label for=\"emailIn\">Your Email</label><input type=\"email\" class=\"form-control\" id=\"emailIn\""+
       " required></div><div class=\"form-group\"><label for=\"messageIn\">Your Message</label>"+
       "<textarea style=\"max-width:555px; min-height:125px;\" class=\"form-control\" id=\"messageIn\" required>"+
       "</textarea></div><button onclick=\"sendIt()\" type=\"submit\" class=\"btn btn-primary\">Send</button></form></div></div>"+
       "<div id=\"php_code\"></div>";
}

function sendIt(){
   var name = document.getElementById('nameIn').value;
   var email = document.getElementById('emailIn').value;
 	var message = document.getElementById('messageIn').value;
	console.log(name, email, message);

    return false;
}

function generateProfile(){
   return "<div class=\"row\"><div class=\"container\"><div class=\"col-xs-4 col-md-3\"><img src=\"profile.jpg\" id=\"profile-Pic\""+
            " class=\"img-thumbnail\"></div><div class=\"col-xs-8 col-md-4\"><h2><strong>Jasper Forest</strong></h2>"+
            "<h4 style=\"color:primary;\">Software Developer</h4><p>" + personal_info +"</p> </div>"+
            "<div class=\"col-xs-7 col-md-4\"><br><br><ul class=\"list-unstyled\"><li>"+
            "<div class=\"col-xs-5 col-md-6\"><strong>Location</strong></div><div class=\"col-xs-7 col-md-6\">"+
            personal_loc + "</div></li><li><div class=\"col-xs-5 col-md-6\"><strong>Email</strong></div>"+
            "<div class=\"col-xs-7 col-md-6\">" + personal_email + "</div></li><li><div class=\"col-xs-5 col-md-6\">"+
            "<strong>Phone</strong></div><div class=\"col-xs-7 col-md-6\">" + personal_phone + "</div></li><li>"+
            "<div class=\"col-xs-5 col-md-6\"><strong>Hometown</strong></div><div class=\"col-xs-7 col-md-6\">"+
            "Scotts Valley, CA</div></li><li><div class=\"col-xs-5 col-md-6\"><strong> Current Town</strong></div>"+
				"<div class=\"col-xs-7 col-md-6\"> San Diego, CA</div></li></ul></div></div></div>";
}
