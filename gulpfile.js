'use strict';

var gulp = require('gulp'),
    gp = require('gulp-load-plugins')();

gulp.task('pug', function () {
    return gulp.src('src/pug/pages/*.pug')
        .pipe(gp.pug({
            pretty:true
        }))
        .pipe(gulp.dest('build'));
});

gulp.task('sass',function () {
    return gulp.src('src/static/scss/main.scss')
        .pipe(gp.sass({}))
        .pipe(gp.autoprefixer({
            overrideBrowserslist: ['last 3 versions'],
        }))
        .on("error", gp.notify.onError({
            title: "style"
        }))
        .pipe(gp.csso())
        .pipe(gp.sourcemaps.write())
        .pipe(gulp.dest('build/static/css'));
});

gulp.task('watch',function(){
    gulp.watch('src/pug/**/*.pug',gulp.series('pug'));
    gulp.watch('src/static/scss/main.sass',gulp.series('pug'))
});

gulp.task('default',gulp.series(
    gulp.parallel('pug','sass'),
    'watch'
));