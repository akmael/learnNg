angular.module('learnNg')
       .contoller('NavContoller', NavController);

NavContoller.$inject = ['$scope'];

function NavContoller($scope){
  $scope.loggedIn= false;
  $scope.login = function(){

  }
}
