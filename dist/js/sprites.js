var gulp = require('gulp'),
    svgSprite = require('gulp-svg-sprite'),
    rename = require('gulp-rename'),
    del = require('del');

var config = {
  mode:{
    css:{
      sprite: 'sprite.svg',
      render:{
        scss:{
          template: './dist/temp/sprite.scss'
        }
      }
    }
  }
}
gulp.task('clean', function(){
  return del(['./app/assets/svg', './app/images/sprites']);
});
gulp.task('sprite', ['clean'], function(){
  return gulp.src('./app/assets/images/icons/**/*.svg')
         .pipe(svgSprite(config))
         .pipe(gulp.dest('./app/assets/svg/'));
});
gulp.task('spriteGraphic', ['sprite'], function(){
  return gulp.src('./app/assets/svg/**/*.svg')
          .pipe(gulp.dest('./app/assets/images/sprites'));
});
gulp.task('copySprite', ['sprite'], function(){
  return gulp.src('./app/assets/svg/css/*.scss')
              .pipe(rename('_sprite.scss'))
              .pipe(gulp.dest('./app/assets/scss/tools'));
});
gulp.task('endClean', ['spriteGraphic', 'copySprite'], function(){
  return del('./app/assets/svg');
});
gulp.task('icons', ['clean','sprite', 'spriteGraphic', 'copySprite', 'endClean']);