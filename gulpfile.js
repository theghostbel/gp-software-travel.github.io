var gulp = require('gulp');
var inject = require('gulp-inject');
var bowerFiles = require('main-bower-files');
var uglify = require('gulp-uglify');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var minifyCss = require('gulp-minify-css');

gulp.task('default', function() {
  // Don't touch yet
})

// Artyom' tasks
// begin
gulp.task('ag-inject', function() {
  return gulp.src('app/index.html')
    .pipe(inject(gulp.src(['app/**/*.js', 'app/**/*.css'])))
    .pipe(inject(gulp.src(bowerFiles()), {
      name: 'bower'
    }))
    .pipe(gulp.dest('app/'));
});

gulp.task('ag-compress', function() {
  return gulp.src('app/*.html')
    .pipe(useref({
      searchPath: '../gp-software-travel.github.io'
    }))
    .pipe(gulpif('*.js', uglify({
      mangle: false
    })))
    .pipe(gulpif('*.css', minifyCss()))
    .pipe(gulp.dest('dist'))
});

gulp.task('ag-watch', function() {
  return gulp.watch('app/**/*', ['compress', 'annotate'])
});
// end