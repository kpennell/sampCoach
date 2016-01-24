angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ShowsCtrl', function($scope, Shows, ngAudio) {

    $scope.shows = Shows.all();

    $scope.playStream = function(show){
    	// if no object at all, play this one
    	if(!$scope.audioObject){
   			$scope.audioObject = ngAudio.load(show.track1_preview);
    		$scope.audioObject.play();

    		this.playing = true;
    	}
    	// if paused, play again
    	else if($scope.audioObject.paused){
    		$scope.audioObject = ngAudio.load(show.track1_preview);
    		$scope.audioObject.play();
    		this.playing = true;

    	}
    	else {
    		$scope.audioObject.stop();
    		$scope.audioObject = ngAudio.load(show.track1_preview);
    		$scope.audioObject.play();
    		this.playing = true;
    	}
    	
    	
    }

    $scope.pauseStream = function(show){
    	$scope.audioObject.stop();
    	this.playing = false;
    }



})


.controller('ShowDetailsCtrl', function($scope, $stateParams, Shows) {
    $scope.show = Shows.get($stateParams.showId);
})

.controller('FavoritesCtrl', function($scope) {
    $scope.name = "test";
});
