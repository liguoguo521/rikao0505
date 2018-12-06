var gulp=require('gulp');
var sass=require('gulp-sass');
var mincss=require('gulp-clean-css');
var server=require('gulp-webserver');

gulp.task('scss',function(){
  return gulp.src('./src/scss/*.scss')
  .pipe(sass())
  .pipe(mincss())
  .pipe(gulp.dest('./src/styles'))
})


