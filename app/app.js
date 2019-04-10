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
            template: `<div class="padding">Esse usuario nao existe. 
                        <br>
                        <a class="btn btn-danger" href="#!/login">Entrar</a></div>`,
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