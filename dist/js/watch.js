var gulp = require('gulp'),
		watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();


gulp.task('html', function(){
	browserSync.reload();
});

gulp.task('watch', function() {
	browserSync.init({
		server: {
			baseDir: "app"
		}
	});
  watch('./app/index.html', function(){
    gulp.start('html');
  });
  watch('./app/assets/scss/**/*.scss', function(){
    gulp.start('cssInject');
  });
});

gulp.task('cssInject', ['scss'], function(){
	return gulp.src('./app/assets/css/main.css')
	.pipe(browserSync.stream());
});