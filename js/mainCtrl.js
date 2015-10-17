var app = angular.module('chatroom');

app.controller('mainCtrl', function($scope, parseService){
  //In your controller you'll have a getParseData function and a postData function, but should be placed on $scope.

  //The getParseData function will call the getData method on the parseService object. You'll then save the result of that request to 
  //your controllers $scope as messages ($scope.messages)
  $scope.getParseData = function() {
    parseService.getData().then(function(text){
      $scope.messages = text.data.results;
    });
  }

  //The postData function will take whatever the user typed in (hint: look at the html and see what ng-model correlates to on the input box),
  //pass that text to the postData method on the parseService object which will then post it to the parse backend.

  $scope.postData = function(message){
    parseService.postData(message)
  }
    


  setInterval(function(){
    $scope.getParseData();
  }, 1500)

// createdAt.format("m/dd/yy")

})//end
