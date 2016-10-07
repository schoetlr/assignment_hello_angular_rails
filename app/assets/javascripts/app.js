var MyApp = angular.module('MyApp', ['ui.router', 'restangular']);



MyApp.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/");


  $stateProvider
    .state("messages", {
      url: "", 
      views: {
        '@': {
          templateUrl: "templates/messages/index.html",
          controller: "MessagesCtrl"
        }
      }
    })
})


MyApp.config(['RestangularProvider',
  function(RestangularProvider) {

    RestangularProvider.setBaseUrl('/api/v1');
    RestangularProvider.setRequestSuffix('.json');

}]);


MyApp.factory('_', ['$window', function($window) {
  return $window._; 
}]);




MyApp.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});