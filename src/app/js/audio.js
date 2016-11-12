angular.module('audio', [
    'ui.router'
])
    .controller('audioController', ['$scope', '$state', function ($scope, $state) {
        $scope.playWay = "";
        // 播放器
        var Player = {
            // 歌曲路径
            path: 'src/music/',

            // 歌曲数据
            data: null,

            // 当前播放歌曲的 索引
            currentIndex: -1,

            //  播放器元素jquery对象
            $audio: $('audio'),

            // 歌曲列表
            $mList: $('#m-list'),

            //正在播放的歌曲
            $rmusic: $('#rmusic'),

            // 初始化 数据
            init: function () {
                // 数据一般来自服务器端,通过ajax 加载数据,这里是模拟
                Player.data = ['刘若英 - 后来 (Live).mp3', '薛之谦 - 丑八怪.mp3', '薛之谦 - 演员.mp3'];

                // 一般用模板引擎,把数据 与 模板 转换为 视图,来显示,这里是模拟
                var mhtml = '';
                var len = Player.data.length;
                for (var i = 0; i < len; i++) {
                    mhtml += '<li><a index="' + i + '">' + Player.data[i] + '</a></li>';
                }
                Player.$mList.html(mhtml);
                $("#control").addClass("play");
                $("#control").html("<span class='glyphicon glyphicon-play-circle'></span>");
            },

            // 就绪
            ready: function () {
                //$('#btn-order').click();
                // 控制
                Player.audio = Player.$audio.get(0);

                $('#ctrl-area').on('click', 'button', function () {
                    Player.$rmusic.html(Player.data[Player.currentIndex]);
                });
                $scope.playVideo = function () {
                    if ($("#control").hasClass("play")) {
                        $("#control").addClass("pause").removeClass("play");
                        $scope.order();//开始播放
                        $("#control").html("<span class='glyphicon glyphicon-pause'></span>");

                    } else {
                        $("#control").addClass("play").removeClass("pause");
                        $("#control").html("<span class='glyphicon glyphicon-play'></span>");
                        $scope.stopPlay();
                    }
                }

                // 播放
                $scope.startPlay = function () {
                    Player.audio.play();
                    if (Player.currentIndex == -1) {
                        $('#btn-next').click();
                    }
                }
                //暂停
                $scope.stopPlay = function () {
                    Player.audio.pause();
                }

                // 下一曲
                $('#btn-next').click(function () {
                    $("#control").addClass("pause").removeClass("play");
                    $("#control").html("<span class='glyphicon glyphicon-pause'></span>");
                    if (Player.currentIndex == -1) {
                        Player.currentIndex = 0;
                    } else if (Player.currentIndex == (Player.data.length - 1)) {
                        Player.currentIndex = 0;
                    } else {
                        Player.currentIndex++;
                    }
                    playByMe(Player.currentIndex);

                });

                // 上一曲
                $('#btn-pre').click(function () {
                    $("#control").addClass("pause").removeClass("play");
                    $("#control").html("<span class='glyphicon glyphicon-pause'></span>");
                    if (Player.currentIndex == -1) {
                        Player.currentIndex = 0;
                    } else if (Player.currentIndex == 0) {
                        Player.currentIndex = (Player.data.length - 1);
                    } else {
                        Player.currentIndex--;
                    }
                    playByMe(Player.currentIndex);
                });

                // 顺序播放
                $scope.order = function () {
                    Player.audio.onended = function () {
                        $('#btn-next').click();
                    };
                    $scope.startPlay();
                }

                // 播放指定歌曲
                function playByMe(i) {
                    console.log("index:", i);
                    Player.audio.src = Player.path + Player.data[i];
                    Player.audio.play();
                    Player.currentIndex = i;
                    Player.$rmusic.html(Player.data[Player.currentIndex]);
                }
            }
        };

        Player.init();
        Player.ready();

    }]);