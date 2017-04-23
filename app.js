angular.module('plunker', [
    'ui.router'
  ])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider){
    $locationProvider.hashPrefix('');
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        template: '<home></home>'
      })
      .state('about', {
        url: '/about',
        template: '<about></about>'
      });
  });
