var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('default', ['watch']);

gulp.task('sass', function(){
  gulp.src('./pre/*.scss')
    .pipe(
      sass()
        .on('error', sass.logError)
    )
    .pipe(gulp.dest('./post')); //compiles sass to css spits it out to post
});


gulp.task('watch', ['sass'], function(){
  gulp.watch('./pre/*.scss', ['sass']);
});
