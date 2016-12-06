var app = angular.module('beerList', []);

app.controller('MainCtrl', function ($scope, $http) {

  $http.get('/beers').success(function(data){
    $scope.beers = data;
  });

  $scope.addBeer = function (e) {
    if ($scope.name === '') { return; }

    var beer = { 
      name: $scope.name,
      style: $scope.style,
      image_url: $scope.image_url,
      abv: $scope.abv
    };

    // $scope.beers.push(beer);
    $http.post('/beers', beer).success(function (response) {
      console.log('got back from the server');
      $scope.beers.push(response.data);
      console.log(response);
    });


    $scope.name = '';
    $scope.style = '';
    $scope.abv = '';
    $scope.image_url = '';

  };

  $scope.removeBeer = function (index) {
    $scope.beers.splice(index, 1);
  };
});