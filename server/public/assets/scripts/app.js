var app = angular.module('bitblot', []);
app.controller('BitBlotCtrl', function ($scope, $http) {

  //"Requesters": ('send 'envelope' with stuff in it from index.html', labeled with url, method, body)
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
    var imageName = $scope.currentImage.name;
    $http({
      method: 'PUT',
      url: '/imageData/' + imageName, //this is the same as "/imageData/:imageName'," in index.js PUT route.
      data: $scope.currentImage //userResponse data is contained here (including ex. curiosityAmount) imageResponse.curiosityAmount
    }).then(function() {
      console.log('Data saved. imageName = ' + imageName);
    })
  };

  //TODO: communicate with server & db regarding login route. (Also set this up on index.html)
  //TODO: Get results function and $http GET call to the server/app.js router.GET receiver.
});
