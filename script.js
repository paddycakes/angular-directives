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
});

angular.module('app').directive('userInfoCard', function() {
    return {
      templateUrl: "userInfoCard.html",
      restrict: "E"
    }
});