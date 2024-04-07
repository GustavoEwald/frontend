const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'))
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function comprime_imagens(){
  return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
}

function comprime_js(){
  return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'));
}

function compila_sass(){
  return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
              outputStyle: "compressed"
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles/'));
}

function padrao(callback){
  compila_sass();
  comprime_js();
  comprime_imagens();
  callback();
}

exports.default = padrao;
/* exports.watch = function(){
  gulp.watch(['./source/styles/*.scss', './source/scripts/*.js', './source/images/*'], {ignoreInitial: false}, gulp.series(compila_sass, comprime_js, comprime_imagens))
};
 */