let myApp = angular.module('app', []);
myApp.factory('productFactory',[ function () {
    let factory = {};
    factory.products = [
        {name: 'microwave', price:44.99, quantity:50},
    ];
    factory.create = function (product) {
        if (product.price && product.name && Number(parseFloat(product.price)) == product.price){
            product.quantity = 50;
            factory.products.push(product);
        }
    };
    factory.deleteProduct = function (obj) {
        console.log(factory.products.indexOf(obj));
        factory.products.splice(factory.products.indexOf(obj), 1);
    };
    factory.indexProduct = function (callback) {

    };
    factory.buy = function (data) {
        console.log(data);
        if (data.quantity < 1) {
        data.quantity = 1;
        }
        else {
            data.quantity -= 1;
        }

    };
    return factory;
}]);
myApp.controller('productController', ['productFactory', function (productFactory) {
    this.products = productFactory.products;
    this.product = {};
    this.create = function () {
        productFactory.create(this.product);
        this.product = null;
    };
    this.productDelete = function (obj) {
        productFactory.deleteProduct(obj);
    }
}]);
myApp.controller('orderController', ['productFactory', function (productFactory) {
    this.orders = productFactory.products;
    this.buy = function (data) {
        productFactory.buy(data)
    }
}]);