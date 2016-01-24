angular.module('starter.services', [])

.factory('Shows', function($http) {

    var shows = [];

    $http({
        method: 'GET',
        url: 'http://localhost:8100/json/coachella_data.json'
    }).then(function successCallback(response) {
        data = response.data;
        data.forEach(function(key, value) {
            shows.push(key);
        });
    },function errorCallback(response) {
        console.log("error");
    });

    return {
        all: function() {
            return shows;
        },
        remove: function(show) {
            shows.splice(shows.indexOf(show), 1);
        },
        get: function(showId) {
            for (var i = 0; i < shows.length; i++) {
                if (shows[i].id === parseInt(showId)) {
                    return shows[i];
                }
            }
            return null;
        }
    };
});
