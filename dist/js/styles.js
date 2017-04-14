var gulp = require('gulp'),
		sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    importUrl = require('postcss-import'),
    mixins = require('postcss-mixins');


gulp.task('scss', function(){
  return gulp.src('./app/assets/scss/**/main.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(postcss([importUrl, mixins,  cssvars, autoprefixer]))
  .pipe(gulp.dest('./app/assets/css'));
});