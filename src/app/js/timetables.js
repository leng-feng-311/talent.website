angular.module('timetables', [
    'ui.router'
])
    .controller('timetablesController',['$scope','$state',function($scope,$state){
        $scope.playVideo = function () {
            $state.go('home.video', {});
        }
    }]);