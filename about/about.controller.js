angular.module('plunker')
  .directive('about', function(){
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'about/about.html',
      controller: AboutController,
      controllerAs: 'vm'
    }
  });

  function AboutController(){
    var vm = this;
    vm.message = 'Hi from about';
  }
