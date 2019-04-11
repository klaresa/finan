angular.module('app')
    .component('lancamentos', {
        templateUrl: 'components/lancamentos/lancamentos.html',
        bindings: {
            lancamentos: '=' //two-way data binding
        },

        // controlador do noticiasAPI que serve ao

        controller: function ($scope, $http, getLanceAPI) {

            getLanceAPI.getLancamentos().then((lance) => {
                $scope.lancam = lance;
                console.log("1",lance);
                $scope.$apply();

            });

            // $scope.getTotal = function () {
            //     var total = 0;
            //     for (var i = 0; i < $scope.lancam.length; i++) {
            //         var v = $scope.lancam[i];
            //         total += Math.max(Math.round(v.valor));
            //     }
            //     return total;
            // };
        },

    });