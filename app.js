angular.module('app', ['ui.router', 'ui.bootstrap']);

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    //Routes to homepage on default
    $urlRouterProvider
      .otherwise('/');

    $stateProvider

      .state('main', {
        url: '/',
        templateUrl: 'scripts/main.html',
        controller: 'MainController'
      });

}]);
