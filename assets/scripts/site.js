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
	$scope.message = "UIUC CS '17</p><p>Miss Possible Web Dev, Part of NCWITAiC</p><p>Passionate about Gender Equality, LGBTQ Equality in the Workplace</p><p>Loves Coding, Thinking Deeply, Writing and Singing at the Top of My Lungs";
});

emilyChaoApp.controller('resumeController', function($scope) {
	$scope.message = "A Collection of Experiences and Education, A Log of My Ongoing Journey to Becoming A Competent Software Engineer";
});

emilyChaoApp.controller('projectsController', function($scope) {
	$scope.message = "A Record of Complete Projects, What's on the Pipeline, What's to Come, My Ideas Box";
});

emilyChaoApp.controller('blogController', function($scope) {
	$scope.message = "A Stream of Consciouness with Some Editing, An Output of Reflections and Ideas";
});

emilyChaoApp.controller('contactController', function($scope) {
	$scope.message = "All Ways to Reach Me, Excluding Snail Mail";
});