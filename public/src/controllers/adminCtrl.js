// angular.module('ntigo').controller('adminCtrl', function($scope, userService, $state, $cookies) {
angular.module('ntigo')
  .controller('adminCtrl', ['$scope', 'userService', '$state', '$cookies', function($scope, userService, $state, $cookies) {

    var findUsers = function() {
      userService.getUsers()
        .then(function(res) {
          $scope.users = res.data;
          // console.log($scope.users);
        });
    };

    findUsers();


    // var getShifts = function() {
    //   userService.getUserShifts().then(function(result) {
    //       $scope.uzers = result.data;
    //     $scope.uzers.map(function(item) {
    //       $scope.shifts = item.shift;
    //     });
    //   });
    // };

    $scope.Shifts = [];
    var getShifts = function() {
      userService.getUserShifts().then(function(result) {
        // console.log('reult', result);
        var returnedUsers = result.data;
        for (var i = 0; i < returnedUsers.length; i++) {
          for (var j = 0; j < returnedUsers[i].shift.length; j++) {
            // console.log(returnedUsers[i].shift[j]);
            $scope.Shifts.push({
              'name': returnedUsers[i].firstname + ' ' + returnedUsers[i].lastname,
              'clock-in': returnedUsers[i].shift[j].clockin,
              'clock-out': returnedUsers[i].shift[j].clockout,
              'duration': returnedUsers[i].shift[j].duration
            });
          }
        }
        // console.log($scope.Shifts);
      });
    };

    getShifts();

    $scope.gridOptions = {
      enableCellSelection: true,
      enableCellEditOnFocus: true,
      cellEditableCondition: 'row.entity.editable',
      columnDefs: [{
        field: 'Name',
        displayName: 'Name',
        width: "15%",
        resizable: true,
        enableCellEdit: false
      }, {
        field: 'Clock-In',
        displayName: 'Clock-In',
        width: "20%",
        resizable: true,
        enableCellEdit: false
      }, {
        field: 'Clock-Out',
        displayName: 'Clock-Out',
        width: "20%",
        resizable: true,
        enableCellEdit: false
      }, {
        field: 'Duration',
        cellClass: 'Duration',
        width: "20%",
        resizable: true,
        enableCellEdit: false
      }]
    };

    //   $scope.gridOptions = {
    //   enableFiltering: true,
    //   enableCellEditOnFocus: false,
    //   enablePaginationControls: true,
    //   enableSorting: true,
    //   enableRowSelection: true,
    //   enableRowHeaderSelection: false,
    //   enableColumnResizing: true,
    //   paginationPageSizes: [10, 12, 15, 18],
    //   paginationPageSize: 18,
    // };

  }]);
