angular.module('ntigo')
  .controller('clockinCtrl', ['$scope', '$timeout', 'clockinSrvc', function($scope, $timeout, clockinSrvc) {

    var timeStart = 0,
      timeEnd = 0;
    $scope.timeSchedule = clockinSrvc.timeSchedule;
    $scope.mode = "Clock in";
    $scope.clockedIn = false;
    $scope.timer = "00:00:00";


    function checkTime(i) {
      i = (i < 1) ? 0 : i;
      if (i < 10) {
        i = "0" + i;
      } // add zero in front of numbers < 10
      return i;
    }

    function setMode() {
      $scope.mode === "Clock out" ? "Clock out" : "Clock in";
    }


    /*--------------------
    triggers timer to start,
    recursive, call again when timer expires
    --------------------*/
    function startTimer() {
      // toggle
      setMode();

      var h, m, s, ms, today = new Date();
      // compute for the duration,
      // normalize for the user
      timeEnd = today.getTime();
      ms = Math.floor((timeEnd - timeStart) / 1000);
      h = checkTime(Math.floor(ms / 3600));
      ms = Math.floor(ms % 3600);
      m = checkTime(Math.floor(ms / 60));
      ms = Math.floor(ms % 60);
      s = checkTime(Math.floor(ms));
      // normalize time string
      $scope.timer = h + ":" + m + ":" + s;

      // timer expired, restart timer
      tmPromise = $timeout(function() {
        startTimer();
      }, 500);
    }

    /*--------------------
    Handle end of timer
    --------------------*/
    function stopTimer() {
      // toggle
      setMode();

      // stop timeout service
      $timeout.cancel(tmPromise);

      // add to history

      $scope.timeSchedule.history.push([timeStart,
        timeEnd,
        (timeEnd - timeStart) / 1000
      ]);
      console.log("time start= ", timeStart);
      console.log("time end= ", timeEnd);
      console.log("History ", $scope.timeSchedule.history[0]);
      // console.log("number: ")

      function timeDuration() {
        clockinSrvc.addDuration(duration);

      }
    }

    /*--------------------
    toggle between modes
    --------------------*/

    $scope.toggleTimer = function() {
      // console.log($scope.mode);
      if ($scope.mode === 'Clock in') {
        if($scope.location !== undefined){
          console.log($scope.location);
          var today = new Date();
          timeStart = today.getTime();
          startTimer();
          $scope.mode = "Clock out";
          $scope.clockedIn = true;
        }
      } else {
        stopTimer();
        $scope.mode = "Clock in";
        $scope.clockedIn = false;
      }

    };


  }]);
