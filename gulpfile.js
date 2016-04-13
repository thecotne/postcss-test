var postcss = require('gulp-postcss');
var gulp = require('gulp');
// var autoprefixer = require('autoprefixer');
// var cssnano = require('cssnano');
var cssnext = require('postcss-cssnext');
var cqProlyfill = require('cq-prolyfill/postcss-plugin');
var precss = require('precss');
var calc = require('postcss-calc');

gulp.task('css', function () {
    var processors = [
        // autoprefixer({browsers: ['last 1 version']}),
        // cssnano(),
        cssnext,
        cqProlyfill,
        precss,
        calc,
    ];
    return gulp.src('./css/main.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dist/css'));
});

