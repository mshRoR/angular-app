angular.module('plunker')
  .controller('AboutController', AboutController);

  function AboutController(){
    var vm = this;
    vm.message = 'Hi from about';
  }
