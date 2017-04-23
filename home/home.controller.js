angular.module('plunker')
  .directive('home', function(){
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'home/home.html',
      controller: HomeController,
      ControllerAs: 'vm'
    }
  });

  function HomeController(){
    var vm = this;
    vm.message = 'Hi from home';
  }
