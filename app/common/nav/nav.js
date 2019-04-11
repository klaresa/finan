
angular.module('app')
    .component('nave', {
        templateUrl: 'common/nav/nav.html',
        bindings: {
            nave: '=' //two-way data binding
        },
        controller: function(){
            //component controller
        }
    });