
angular.module('app')
    .component('categories', {
        templateUrl: 'components/categories/categories.html',
        bindings: {
            categories: '=' //two-way data binding
        },

        // controlador do noticiasAPI que serve ao

        controller: function ($scope, categoriesAPI) {

            (function () {
                categoriesAPI.getCate().then(function (response) {
                    $scope.categ = response.data.categories;
                }).catch(function (erro) {
                    console.log("socorro: ", erro.statusText)
                })

            }());
        }
    });