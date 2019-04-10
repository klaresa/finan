angular.module('app')
    .component('login', {
        templateUrl: 'components/login/login.html',
        bindings: {
            login: '=' //two-way data binding
        },
        controller: function ($scope, $http, $location) {

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


            //$scope.entrar = function (info) {
            //    return new Promise(function (resolve, reject) {
            //        $http.get("components/login/usuarios.JSON").then((response) => {
            //            resolve({response.data});
            //                $location.path("/user/test");
            //            console.log(response.data.usuarios)
            //        }).catch((error) => {
            //            reject(error)
            //        });
            //    });
            //
            //};
        }
    });