MyApp.controller("MessagesCtrl", ['$scope', 'Restangular', function($scope, Restangular){

  
  $scope.message = "MESSAGE HERE";

  $scope.messages = Restangular.all('messages').getList().$object;
}]);