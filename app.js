angular.module('plunker', [
    'ui.router'
  ])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider){
    $locationProvider.hashPrefix('');
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home/home.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'about/about.html',
        controller: 'AboutController',
        controllerAs: 'vm'
      });
  });
