angular.module('App', [])
.controller('AppController', ['$scope', function($scope){
  $scope.min = null;
  $scope.max = null;
  $scope.guess = null;
  $scope.guesses = [];
  $scope.randomNumber = null;
  $scope.isGamePlaying = false;

  $scope.createRandomNumber = function(min, max){
    $scope.guesses=[];
    $scope.randomNumber = Math.round(Math.random()*(max-min)+min);
    $scope.isGamePlaying = true;
  };

  $scope.submitGuess = function(){
    $scope.guesses.push($scope.guess);
    $scope.isWinner();
    $scope.guess = '';
  };

  $scope.resetGame = function(){
    $scope.min = null;
    $scope.max = null;
    $scope.guess = null;
    $scope.guesses = [];
    $scope.randomNumber = null;
    $scope.isGamePlaying = false;
  };

  $scope.isWinner = function(){
    if($scope.guess === $scope.randomNumber){
      $scope.isGamePlaying = false;
    }
  };


}]);
