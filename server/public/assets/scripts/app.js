var app = angular.module('bitblot', []);
app.controller('BitBlotCtrl', function ($scope, $http) {

  $http({
      method: 'GET',
      url: '/imageData'
    }).then(function (res) {
      $scope.images = res.data;
      $scope.currentImage = $scope.images[$scope.currentImageNum];
      console.log($scope.images);
    }, function (res) {
      if (err) {
        throw err;
      }
    });

  $scope.currentImageNum = 0;

  $scope.next = function() {
    $scope.save();
    $scope.currentImageNum++;
    console.log(JSON.stringify($scope.images, null, 2));
    $scope.currentImage = $scope.images[$scope.currentImageNum];
  };

  $scope.prev = function() {
    $scope.save();
    $scope.currentImageNum--;
    console.log(JSON.stringify($scope.images, null, 2));
    $scope.currentImage = $scope.images[$scope.currentImageNum];
  };

  $scope.save = function() {
    var imageNum = $scope.currentImageNum;
    $http({
      method: 'PUT',
      url: '/imageData/' + $scope.currentImageNum, //this is the same as "/imageData/:id'," in index.js PUT route.
      data: $scope.images[$scope.currentImageNum]
    }).then(function() {
      console.log('Data saved. imageNum=' + imageNum); //TODO: Change this to a $http PUT call to the server/app.js router.PUT receiver.
    })
  };

  //TODO: Get results function and $http GET call to the server/app.js router.GET receiver.
});
