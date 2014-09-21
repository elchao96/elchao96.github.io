//my App
var emilyChaoApp = angular.module('emilyChaoApp', ['ngRoute']);

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
	$scope.message = "UIUC CS '17, \n Miss Possible Web Dev, Part of NCWITAiC, \n Passionate about Gender Equality, LGBTQ Equality in the Workplace, \n Loves Coding, Thinking Deeply, Writing and Singing at the Top of My Lungs";
});

emilyChaoApp.controller('resumeController', function($scope) {
	$scope.message = "A Collection of Experiences and Education, \n A Log of My Ongoing Journey to Becoming A Competent Software Engineer";
});

emilyChaoApp.controller('projectsController', function($scope) {
	$scope.message = "A Record of Complete Projects, \n What's on the Pipeline, \n What's to Come, \n My Ideas Box";
});

emilyChaoApp.controller('blogController', function($scope) {
	$scope.message = "A Stream of Consciouness with Some Editing, \n An Output of Reflections and Ideas";
});

emilyChaoApp.controller('contactController', function($scope) {
	$scope.message = "All Ways to Reach Me, Excluding Snail Mail";
});