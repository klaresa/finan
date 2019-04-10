
angular.module('app')
    .component('nave', {
        templateUrl: 'components/nav/nav.html',
        bindings: {
            nave: '=' //two-way data binding
        },
        controller: function(){
            //component controller
        }
    });