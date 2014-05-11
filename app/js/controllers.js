'use strict';

/* Controllers */

function EpisodeControl($scope, $http) {
	$http.get('episodes/qi-episodes.json').success(function(data) {
		$scope.episodes = data;

	});



	$scope.getvideo = function(e) {
		delete $http.defaults.headers.common['X-Requested-With'];
		var episodeTitle = e.currentTarget.id;
		var URL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=qi+" + episodeTitle + "&key=AIzaSyDhGDvHP-3MahgfA3jzO2FbgeKl7VMhd_I";
		$http.get(URL).success(function(data) {
			$scope.videoID = data.items[0].id.videoId;
			$scope.videoPlayer = "//www.youtube.com/embed/" + $scope.videoID;
		});

	};

}
    EpisodeControl.$inject = ['$scope', '$http'];

