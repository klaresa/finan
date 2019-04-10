
angular.module("app").service("requestServiceUrl", function ($http) {

    this.getNoticias = function () {
        return new Promise(function (resolve, reject) {
            $http.get("repository/dados/noticias").then((response) => {
                resolve(response.data);
            }).catch((error) => {
                reject(error)
            });
        })
    };
    this.getLancamentos = function () {
        return new Promise(function (resolve, reject) {
            $http.get("repository/dados/lancamentos.json").then((response) => {
                console.log(response.data);
                resolve(response.data)
            }).catch((error) => {
                reject(error)
            });
        })
    };
    this.getCategorias = function () {
        return new Promise(function (resolve, reject) {
            $http.get("repository/dados/categories.json").then((response) => {
                resolve(response.data)
            }).catch((error) => {
                reject(error)
            });
        })
    };

// noticias
    let _noti = function () {
        return $http.get("repository/dados/noticias");
    };
    return {
        getNoti: _noti
    };

// lancamentos
    let _lance = function () {
        return $http.get("repository/dados/lancamentos");
    };
    return {
        getLance: _lance
    };

// categorias
    let _cate = function () {
        return $http.get("repository/dados/categories");
    };
    return {
        getCate: _cate
    };
});