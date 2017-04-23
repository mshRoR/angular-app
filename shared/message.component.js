angular.module('plunker')
  .component('message', {
    bindings: {
      from: '<',
      msg: '<'
    },
    controller: MessageController,
    templateUrl: 'shared/message.template.html'
  });

  function MessageController(){
    
  }
