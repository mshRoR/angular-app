angular.module('plunker')
  .controller('HomeController', HomeController);

  function HomeController(){
    var vm = this;
    vm.message = 'Hi from home';
  }
