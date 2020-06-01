(function(){
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',function($scope){
    // LunchCheckController.$inject = ['$scope'];
    $scope.list = "";
    $scope.totalNum =0;
    $scope.output="";
    $scope.listarr=[];

    $scope.countItems = function(){
      $scope.listarr = $scope.list.split(",");
      $scope.totalNum = $scope.listarr.length;
    }
    $scope.printMessage = function(){
      if($scope.totalNum==0){
        $scope.output="Please enter data first!";
        $scope.totalNum=0;
      }
      else if($scope.totalNum>3){
        $scope.output="Too Much!";
        $scope.totalNum=0;
      }
      else{
        $scope.output="Enjoy!";
        $scope.totalNum=0;
      }
    }
  });
})();
