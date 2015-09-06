angular.module("app", []);

angular.module('app').controller('mainCtrl', function($scope) {
  $scope.user = {
    name: 'Luke Skywalker',
    address: {
      street: 'PO Box 123',
      city: 'Mos Eisley',
      planet: 'Tatooine'
    },
    friends: [
      'Han',
      'Leia',
      'Chewbacca'
    ]
  }

  console.log($scope);

});

angular.module('app').directive('userInfoCard', function() {
  return {
    templateUrl: "userInfoCard.html",
    restrict: "E",
    scope: {},
    controller: function($scope) {
      $scope.knightMe = function(user) {
        user.rank = "knight";
      }
      console.log($scope);
    }
  }
});