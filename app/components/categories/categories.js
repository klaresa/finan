
angular.module('app')
    .component('categories', {
        templateUrl: 'components/categories/categories.html',
        bindings: {
            categories: '=' //two-way data binding
        },

        // controlador do noticiasAPI que serve ao

        controller: function ($scope, getCategAPI) {

            getCategAPI.getCategories().then((cate) => {
                $scope.categ = cate;
                console.log("1",cate);
                $scope.$apply();

            });
        }
    });