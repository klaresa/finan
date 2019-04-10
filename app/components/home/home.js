
angular.module('app')
    .component('home', {
        templateUrl: 'components/home/home.html',
        bindings: {
            home: '=' //two-way data binding
        },

        // controlador do noticiasAPI que serve ao

        controller: function ($scope, $http, $location, requestServiceUrl, lancamentosAPI, categoriesAPI) {

            //let noticias = requestServiceUrl.getNoticias();
            //console.log(noticias);
            //$scope.clicke = function (noticia) {
            //    alert(requestServiceUrl.getNoticias());
            //}


            let finan;
            (function () {
                requestServiceUrl.getNoti().then(function (response) {
                    $scope.notici = response.data.noticias;
                }).catch(function (erro) {
                    console.log("socorro: ", erro.statusText)
                })
            }());

            (function () {
                lancamentosAPI.getLance().then(function (response) {
                    $scope.lancam = response.data.lancamentos;
                    finan = response.data.lancamentos;
                }).catch(function (erro) {
                    console.log("socorro: ", erro.statusText)
                })
            }());

            $scope.getTotal = function(){
                var total = 0;
                for(var i = 0; i < $scope.lancam.length; i++){
                    var v = $scope.lancam[i];
                    total += Math.max(Math.round(v.valor));
                }
                return total;
            };

            // eu quero a validacao aqui
            $scope.entrar = function (info) {
                if (($scope.pass === "test") && ($scope.usu === "test")){
                    console.log("simm");
                    $location.path("/user/test")
                } else {
                    console.log("no");
                    $location.path("/invalid")
                }
            };

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