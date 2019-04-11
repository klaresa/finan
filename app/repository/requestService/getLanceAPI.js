
angular.module("app")
    .service("getLanceAPI", function ($http) {

        isso = this;
        this.lance = [];

        this.getLancamentos = function () {
            return new Promise(function (resolve, reject) {
                $http.get("repository/dados/lancamentos").then((response) => {
                    this.lance = response.data.lancamentos;
                    resolve(this.lance);
                }).catch((error) => {
                    reject(error)
                });
            })
        };
    });