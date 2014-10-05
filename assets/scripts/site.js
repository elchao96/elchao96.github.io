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
	$scope.pageClass = "page-home";
});

emilyChaoApp.controller('resumeController', function($scope) {
	$scope.message0 = "A Collection of Experiences and Education";
	$scope.message1 = "A Log of My Ongoing Journey to Becoming A Competent Software Engineer";
	$scope.pageClass = "page-resume";
});

emilyChaoApp.controller('projectsController', function($scope) {
	$scope.message0 = "A Record of Complete Projects";
	$scope.message1 = "What's on the Pipeline";
	$scope.pageClass = "page-projects";
});

emilyChaoApp.controller('contactController', function($scope) {
	$scope.message0 = "All Ways to Reach Me, Excluding Snail Mail";
	$scope.pageClass = "page-contact";
});