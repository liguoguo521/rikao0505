//内置模块
var gulp=require("gulp");
var sass=require("gulp-sass");
var minCss=require('gulp-clean-css');
var server =require('gulp-webserver');
var url=require('url');
var fs=require('fs');
var path=require('path');

//编译scss
gulp.task ("scss",function() {
  return gulp.src('./src/scss/*.scss')
  .pipe(sass())
  .pipe(minCss())
  .pipe(gulp.dest('./src/styles'))
})

//监听
gulp.task('watch',function(){
  return gulp.watch('./src/scss/',gulp.series('scss'))
})

//其服务
gulp.task('server',function(){
  return gulp.src('src')
  .pipe(server({
    port:8888,
    open:true,
  }))
})

gulp.task('dev',gulp.series('scss','server','watch'));
