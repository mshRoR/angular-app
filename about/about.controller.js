angular.module('plunker')
  // .controller('AboutController', AboutController);
  // .directive('about', function(){
  //   return {
  //     restrict: 'E',
  //     scope: {},
  //     templateUrl: 'about/about.html',
  //     controller: AboutController,
  //     controllerAs: 'vm'
  //   }
  // });
  .component('about', {
    restrict: 'E',
    scope: {},
    templateUrl: 'about/about.html',
    controller: AboutController
  });

  function AboutController(){
    var vm = this;
    vm.message = 'Hi from about';
  }
