//my App
var emilyChaoApp = angular.module('emilyChaoApp', ['ngRoute', 'ngAnimate']);

//configure routes
emilyChaoApp.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl : 'pages/home.html',
			controller : 'mainController'
		})
		.when('/resume', {
			templateUrl : 'pages/resume.html',
			controller : 'resumeController'
		})
		.when('/projects', {
			templateUrl : 'pages/projects.html',
			controller : 'projectsController'
		})
		.when('/blog', {
			templateUrl : 'pages/blog.html',
			controller : 'blogController'
		})
		.when('/contact', {
			templateUrl : 'pages/contact.html',
			controller : 'contactController'
		});
})

emilyChaoApp.controller('mainController', function($scope) {
	$scope.message0 = "UIUC CS '17";
	$scope.message1 = "Miss Possible Web Dev, Part of NCWITAiC";
	$scope.message2 = "Passionate about Gender Equality, LGBTQ Visibility";
	$scope.message3 = "Loves Coding, Thinking Deeply, Writing and Singing at the Top of My Lungs";
});

emilyChaoApp.controller('resumeController', function($scope) {
	$scope.message0 = "A Collection of Experiences and Education";
	$scope.message1 = "A Log of My Ongoing Journey to Becoming A Competent Software Engineer";
});

emilyChaoApp.controller('projectsController', function($scope) {
	$scope.message0 = "A Record of Complete Projects";
	$scope.message1 = "What's on the Pipeline";
});

emilyChaoApp.controller('blogController', function($scope) {
	$scope.message0 = "A Stream of Consciouness with Some Editing";
	$scope.message1 = "An Output of Reflections and Ideas";
});

emilyChaoApp.controller('contactController', function($scope) {
	$scope.message0 = "All Ways to Reach Me, Excluding Snail Mail";
});

$(document).ready(function () {
	$('#educationExpand').click(function () {
		$('#education').toggle();
		$('#educationExpand').toggleClass('.fa-plus-square', '.fa-minus-square');
	});
	$('#education')
});