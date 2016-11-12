angular.module('videos', [
    'ui.router'
])
    .controller('videosController', ['$scope', '$state', function ($scope, $state) {
        $scope.playVideo = function () {
            $state.go('home.video', {});
        }
    }]);