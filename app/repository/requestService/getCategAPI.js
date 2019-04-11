
angular.module("app")
    .service("getCategAPI", function ($http) {

        isso = this;
        this.cate = [];

        this.getCategories = function () {
            return new Promise(function (resolve, reject) {
                $http.get("repository/dados/categories").then((response) => {
                    this.cate = response.data.categories;
                    resolve(this.cate);
                }).catch((error) => {
                    reject(error)
                });
            })
        };
    });