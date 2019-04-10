angular.module('app')
    .component('noticias', {
        templateUrl: 'components/noticias/noticias.html',
        bindings: {
            noticias: '=' //two-way data binding
        },

        // controlador do noticiasAPI que serve ao

        controller: function ($scope, $http, requestServiceUrl) {

            //let noticias = requestServiceUrl.getNoticias();
            //console.log(noticias);
            //$scope.clicke = function (noticia) {
            //    alert(requestServiceUrl.getNoticias());
            //}
            (function () {
                requestServiceUrl.getNoti().then(function (response) {
                    $scope.notici = response.data.noticias;
                }).catch(function (erro) {
                    console.log("socorro: ", erro.statusText)
                })
            }())
        },
    });