
angular.module('app')
    .component('home', {
        templateUrl: 'components/home/home.html',
        bindings: {
            home: '=' //two-way data binding
        },

        // controlador do noticiasAPI que serve ao

        controller: function ($scope, $http, $location, getLanceAPI, getNotiAPI) {

            getNotiAPI.getNoticias().then((noti) => {
                $scope.notici = noti;
                console.log("1",noti);
                $scope.$apply();
            });

            getLanceAPI.getLancamentos().then((lance) => {
                $scope.lancam = lance;
                console.log("1",lance);
                $scope.$apply();

            });

            $scope.soma = function () {
                var totalRe = 0;
                var totalDe = 0;
                for (i = 0; i < $scope.lanca.length; i++) {
                    var ve = $scope.lanca;
                    totalRe += ve.repeticoes[i] * ve.valor[i]
                }
                return totalRe
            };

        },
    });