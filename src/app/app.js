angular.module('resumeSupervise.app', [
    'ui.router',
    'audio',
    'resume',
    'timetables',
    'video',
    'videos',
    'information',
    'scienceAndTechnology',
    'service',
    'science',
    'resources'
])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        /* 使用when来对一些不合法的路由进行重定向 */
        // $urlRouterProvider.when('', '/home');
        $urlRouterProvider.otherwise('/home');
        /* 通过$stateProvider的state()函数来进行路由定义 */
        $stateProvider
            .state('home', {
                url: '/home',
                views: {
                    '': {
                        templateUrl: 'src/app/home/home.html'
                    },
                    'header@home': {
                        templateUrl: 'src/app/tpls/header.html'
                    },
                    'audio@home': {
                        templateUrl: 'src/app/tpls/audio.html',
                        controller: 'audioController'
                    }
                }
            })
            .state('home.resume', {
                url: '/resume',
                templateUrl: 'src/app/tpls/resume.html',
                controller: 'resumeController'
            })
            .state('home.timetables', {
                url: '/timetables',
                templateUrl: 'src/app/tpls/timetables.html',
                controller: 'timetablesController'
            })
            .state('home.video', {
                url: '/video',
                templateUrl: 'src/app/tpls/video.html',
                controller: 'videoController'
            })
            .state('home.videos', {
                url: '/videos',
                templateUrl: 'src/app/tpls/videos.html',
                controller: 'videosController'
            })
            .state('home.information', {
                url: '/information',
                templateUrl: 'src/app/tpls/Information.html',
                controller: 'informationController'
            })
            .state('home.scienceAndTechnology', {
                url: '/scienceAndTechnology',
                templateUrl: 'src/app/tpls/ScienceAndTechnology.html',
                controller: 'scienceAndTechnologyController'
            })
            .state('home.service', {
                url: '/service',
                templateUrl: 'src/app/tpls/service.html',
                controller: 'serviceController'
            })
            .state('home.science', {
                url: '/science',
                templateUrl: 'src/app/tpls/science.html',
                controller: 'scienceController'
            })
            .state('home.resources', {
                url: '/resources',
                templateUrl: 'src/app/tpls/resources.html',
                controller: 'resourcesController'
            })

    }])