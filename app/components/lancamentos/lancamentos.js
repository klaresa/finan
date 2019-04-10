
angular.module('app')
    .component('lancamentos', {
        templateUrl: 'components/lancamentos/lancamentos.html',
        bindings: {
            lancamentos: '=' //two-way data binding
        },

        // controlador do noticiasAPI que serve ao

        controller: function ($scope, lancamentosAPI) {

            (function () {
                lancamentosAPI.getLance().then(function (response) {
                    $scope.lancam = response.data.lancamentos;
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
        },

    });