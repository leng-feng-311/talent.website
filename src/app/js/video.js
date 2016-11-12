angular.module('video', [
    'ui.router'
])
    .controller('videoController', ['$scope', '$state', function ($scope, $state) {
        $(document).ready(function () {
            $('video').mediaelementplayer({
                alwaysShowControls: true,
                videoVolume: 'horizontal',
                features: ['playpause', 'progress', 'volume', 'fullscreen']
            });
        });
    }]);