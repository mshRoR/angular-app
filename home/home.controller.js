angular.module('plunker')
  // .controller('HomeController', HomeController);
  // .directive('home', function(){
  //   return {
  //     restrict: 'E',
  //     scope: {},
  //     templateUrl: 'home/home.html',
  //     controller: HomeController,
  //     ControllerAs: 'vm'
  //   }
  // });
  .component('home', {
    restrict: 'E',
    // scope: {},
    templateUrl: 'home/home.html',
    controller: HomeController
  });

  function HomeController(){
    var vm = this;
    vm.message = 'Hi from home';
  }
