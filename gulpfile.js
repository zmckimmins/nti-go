//npm install gulp-uglify, gulp-ruby-sass, (gulp-babel babel-preset-es2015) npm install --save-dev all;

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-ruby-sass');

//Styles task
gulp.task('styles', function(){
     return sass('scss/**/*.scss', {style:'compressed'})
      .pipe(gulp.dest('public/css/'));
});

//Watch Task
//Watches JS

gulp.task('watch', function() {
  gulp.watch('scss/**/*.scss', ['styles']);
});

gulp.task('default', ['styles', 'watch']);
