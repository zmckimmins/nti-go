angular.module('ntigo')
.directive('clockinDir', function ($scope,$timeout,$initService) {
  return {
    restrict: 'E',
    templateUrl: 'clockin.html',
    controller: function () {
      'use strict';

      var timeStart = 0, timeEnd = 0;
      $scope.timeSchedule = initService.timeSchedule;
      $scope.mode = "Start";
      $scope.timer = "00:00:00";


      function checkTime(i) {
        i = (i < 1) ? 0 : i;
        if (i < 10) { i = "0" + i; }  // add zero in front of numbers < 10
        return i;
      }

      /**
      *  @func startTimer
      *  trigger timer to start,
      *  recursive, call again when timer expires
      */
      function startTimer() {
        // toggle
        $scope.mode = "Stop";

        var h, m, s, ms, today = new Date();
        // compute for the duration,
        // normalize for the user
        timeEnd = today.getTime();
        ms = Math.floor((timeEnd - timeStart) / 1000);
        h =  checkTime(Math.floor(ms / 3600));
        ms = Math.floor(ms % 3600);
        m = checkTime(Math.floor(ms / 60));
        ms = Math.floor(ms % 60);
        s = checkTime(Math.floor(ms));
        // normalize time string
        $scope.timer = h + ":" + m + ":" + s;

        // timer expired, restart timer
        tmPromise = $timeout(function () {
          startTimer();
        }, 500);
      }

      /**
       * @func stopTimer
       * handle end of timer
       */
      function stopTimer() {
        // toggle
        $scope.mode = "Start";

        // stop timeout service
        $timeout.cancel(tmPromise);

        // add to history
        $scope.timeSchedule.history.push([timeStart,
                                          timeEnd,
                                          (timeEnd - timeStart) / 1000]);
      }

      /***  @func $scope.toggleTimer
       *  toggle between modes
       */
      $scope.toggleTimer = function () {

        // handle modes
        if ($scope.mode === 'Start') {
          var today = new Date();
          timeStart = today.getTime();
          startTimer();
        } else {
          stopTimer();
        }

      };

    },
    controllerAs: 'cbTimer'

  };
});
