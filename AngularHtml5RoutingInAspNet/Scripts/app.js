
var application = angular.module('testApp', ['ui.router']);

application.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider) {
            $locationProvider.html5Mode(true);

            $urlRouterProvider.otherwise("/home/page1");

            $stateProvider.state('home',
            {
                'abstract': true,
                url: '/home',
                template: '<ui-view/>'
            }).state('home.page1', {
                url: '/page1',
                templateUrl: 'page1'
            }).state('home.page2', {
                url: '/page2',
                templateUrl: 'page2'
            });
        }
]);

