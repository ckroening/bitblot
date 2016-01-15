var app = angular.module('bitblot', []);
app.controller('BitBlotCtrl', function ($scope, $http) {
  //TODO: already standing user responses need to be called with an $http GET call to a server/app.js GET receiver.
  $scope.images = [{  // FIXME: download from server using GET
    name: 'cat',
    src: '/assets/images/cat.jpg',
    likeAmount: '4'
  }, {
    name: 'city',
    src: '/assets/images/city.jpg'
  }];

  $scope.currentImageNum = 0;
  $scope.currentImage = $scope.images[$scope.currentImageNum];

  $scope.next = function() {
    $scope.currentImageNum++;
      console.log(JSON.stringify($scope.images, null, 2));
    $scope.currentImage = $scope.images[$scope.currentImageNum];
    if($scope.currentImageNum === $scope.images.length) {

    }
    $scope.save();
  };
  $scope.prev = function() {
    $scope.currentImageNum--;
    console.log(JSON.stringify($scope.images, null, 2));
    $scope.currentImage = $scope.images[$scope.currentImageNum];
    $scope.save();
  };

  $scope.save = function(){
    console.log("Savin' to the DB."); //TODO: Change this to a $http PUT call to the server/app.js router.PUT receiver.
  };

  //TODO: Get results function and $http GET call to the server/app.js router.GET receiver.
});
