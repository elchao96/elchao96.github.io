$(document).ready(function() {
	var shuffle = function(array) {
		for (var n = 0; n < array.length - 1; n++) {
			var k = n + Math.floor(Math.random() * (array.length - n));

			var temp = array[k];
			array[k] = array[n];
			array[n] = temp;
		}
	};

	var experiences = {
		"list": [
			{
				"title": "Software Engineering Intern",
				"where": "Intuit",
				"when": "June 2015 - August 2015",
				"short": "intuit",
				"type": "experience"
			},
			{
				"title": "Web Developer",
				"where": "Miss Possible",
				"when": "February 2014 - Present",
				"short": "misspossible",
				"type": "experience"
			},
			{
				"title": "CS 225 Data Structures TA",
				"where": "University of Illinois at Urbana-Champaign",
				"when": "January 2015 - May 2015",
				"short": "cs225",
				"type": "experience"
			},
			{
				"title": "Systems Intern",
				"where": "Dow Chemical Company",
				"when": "August 2014 - May 2015",
				"short": "dow",
				"type": "experience"
			},
			{
				"title": "Software Engineering Intern",
				"where": "kCura",
				"when": "May 2014 - August 2014",
				"short": "kcura",
				"type": "experience"
			},
			{
				"title": "GBS-ITDO HRSS Intern",
				"where": "INTERalliance, P&G",
				"when": "July 2013 - August 2013",
				"short": "pg",
				"type": "experience"
			},
			{
				"title": "IT Development Intern",
				"where": "INTERalliance, Paycor Inc.",
				"when": "June 2012 - August 2012",
				"short": "paycor",
				"type": "experience"
			},
			{
				"title": "L.A.P.",
				"when": "July 2015",
				"fact": "2nd place - LinkedIn Intern Hackday",
				"short": "lap",
				"type": "project"
			},
			{
				"title": "Award Wizard",
				"when": "January 2015 - May 2015",
				"fact": "CS 411 Project",
				"short": "award",
				"type": "project"
			},
			{
				"title": "Where's Waldo International",
				"when": "November 2013",
				"fact": "Facebook Midwest Hackathon",
				"short": "ww",
				"type": "project"
			},
			{
				"title": "Recourser",
				"when": "January 2014",
				"fact": "MHacks",
				"short": "recourser",
				"type": "project"
			},
			{
				"title": "WCS Sign-in App",
				"when": "August 2013 - March 2014",
				"fact": "WCS Tech Team Project",
				"short": "signin",
				"type": "project"
			},
			{
				"title": "Society of Women Engineers",
				"when": "August 2013 - Present",
				"positions": [
					"Recruitment Committee CS Liason - 2014 - 2015",
					"Team Tech - 2013 - 2014"
				],
				"short": "swe",
				"type": "extracurricular"
			},
			{
				"title": "Women in Computer Science",
				"when": "August 2013 - Present",
				"positions": [
					"Webmaster - 2015 - 2016",
					"Mentoring Director - 2014 - 2015",
					"Team Tech - 2013 - 2014"
				],
				"short": "wcs",
				"type": "extracurricular"
			}
		]
	};

	var categories = {
		"list": [
			{
				"text": "all",
				"href": "*"
			},
			{
				"text": "experience"
			},
			{
				"text": "project"
			},
			{
				"text": "extracurricular"
			}
		]
	}

	shuffle(experiences.list);
	var gridOutput = Mustache.render($('#gridTemplate').html(), experiences);
	$('#grid').html(gridOutput);

	var categoryOutput = Mustache.render($('#gridCategoryTemplate').html(), categories);
	$('#gridCategories').html(categoryOutput);
	var grid = document.querySelector('#grid');
	var iso = new Isotope(grid, {
		itemSelector: '.grid-item',
		layoutMode: 'fitRows'
	});

	$('.categoryFilter').click(function(event) {
		event.preventDefault();
		var category = '*';
		if (event.currentTarget.getAttribute('href') !== '*') {
			category = '.' + event.currentTarget.getAttribute('href');
		}
		iso.arrange({filter: category});
	});
});