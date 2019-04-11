
angular.module("app")
    .service("getNotiAPI", function ($http) {

        isso = this;
        this.noti = [];

        this.getNoticias = function () {
            return new Promise(function (resolve, reject) {
                $http.get("repository/dados/noticias").then((response) => {
                    this.noti = response.data.noticias;
                    resolve(this.noti);
                }).catch((error) => {
                    reject(error)
                });
            })
        };
    });