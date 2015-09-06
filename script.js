angular.module("app", []);

angular.module('app').controller('mainCtrl', function($scope) {
  $scope.user = {
    name: 'Luke Skywalker'
  }
});

angular.module('app').directive('userInfoCard', function() {
    return {
      template: "Name: {{ user.name }}",
      restrict: "E"
    }
});