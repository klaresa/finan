let app = angular.module("app", ['ngRoute', 'ngMessages']);

app.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            template: "<home></home>",
        })
        .when('/login', {
            template: "<login></login>",
        })
        .when('/user/test', {
            template: `<nave></nave><div class="padding">Logado.`,
        })
        .when('/invalid', {
            templateUrl: 'common/invalid/invalid.html',
        })
        .when('/noticias', {
            template: "<noticias></noticias>",
        })
        .when('/lancamentos', {
            template: "<lancamentos></lancamentos>",
        })
        .when('/categories', {
            template: "<categories></categories>",
        })
});