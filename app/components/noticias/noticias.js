angular.module('app')
    .component('noticias', {
        templateUrl: 'components/noticias/noticias.html',
        bindings: {
            noticias: '=' //two-way data binding
        },

        // controlador do noticiasAPI que serve ao

        controller: function ($scope, $http, getNotiAPI) {

            getNotiAPI.getNoticias().then((noti) => {
                $scope.notici = noti;
                console.log("1",noti);
                $scope.$apply();
            });

            $scope.oioi = function () {
                console.log("oioi");
            }

        }
    });