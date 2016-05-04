var gulp = require('gulp'),
	server = require('gulp-server-livereload'),
	sass = require('gulp-ruby-sass'),
  htmlmin = require('gulp-htmlmin'),
  uglify = require('gulp-uglify'),
  cssmin = require('gulp-cssmin'),
  del = require('del');

gulp.task('sass', function () {
  return sass('../.scss/*.scss')
    .on('error', sass.logError)
    .pipe(gulp.dest('../css'));
});

gulp.task('watch:sass', function(){
  gulp.watch('../.scss/*.scss', ['sass'])
});

gulp.task('watch', ['server', 'watch:sass']);
  
gulp.task('default', function() {
});
