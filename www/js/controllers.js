angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ShowsCtrl', function($scope, Shows) {

    $scope.shows = Shows.all();
})


.controller('ShowDetailsCtrl', function($scope, $stateParams, Shows) {
    $scope.show = Shows.get($stateParams.showId);
});
