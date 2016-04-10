angular.module('ntigo').controller('adminCtrl', function($scope, userService, $state, $cookies) {

  $scope.gridOptions = {
  enableFiltering: true,
  enableCellEditOnFocus: false,
  enablePaginationControls: true,
  enableSorting: true,
  enableRowSelection: true,
  enableRowHeaderSelection: false,
  enableColumnResizing: true,
  paginationPageSizes: [10, 12, 15, 18],
  paginationPageSize: 18,
};

// $scope.gridOptions.columnDefs = [
//   { name: 'isbn13',
//     headerCellClass: $scope.highlightFilteredHeader,
//     cellTemplate:'<div class="editBook1"><a class="editBook" href="" ng-click="$event.stopPropagation(); grid.appScope.editBook(row.entity.isbn13, row);">'
//       + '{{row.entity[col.field] | uppercase }}&nbsp; <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></a></div>',
//     cellClass: 'gridField',
//     displayName: 'ISBN13',
//     width: 140,
//     maxWidth: 160,
//     minWidth: 130,
//     enableHiding: false,
//     enableCellEdit: false },
//   { name: 'title',
//     headerCellClass: $scope.highlightFilteredHeader ,
//     cellTemplate: '<div class="padded">{{row.entity.title}}</div>',
//     cellClass: 'gridField',
//     displayName: 'Title',
//     width: 250,
//     maxWidth: 480,
//     minWidth: 220,
//     enableHiding: false,
//     enableCellEdit: false }
// ];
//
// $scope.gridOptions = {
//     data: 'getUsers',
//     height: '110px',
//     sortInfo: {fields: ['Song', 'Artist', 'Collection', 'Type'], directions: ['asc']},
//     columnDefs: [
//       {field: 'Play', displayName: 'Play', width: '40px', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><a href="{{row.getProperty(col.field)}}"><img src="http://www.icty.org/x/image/Miscellaneous/play_icon30x30.png"></a></div>'},
//       {field: 'Artist', displayName: 'Artist'},
//       {field: 'Collection', displayName: 'Collection'},
//       {field: 'AlbumArt', displayName: 'Album Art', width: '110px', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><img src="{{row.getProperty(col.field)}}"></div>'},
//       {field: 'Type', displayName: 'Type'},
//       {field: 'CollectionPrice', displayName: 'Collection Price'},
//     ]
// };

});
