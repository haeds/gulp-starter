'use strict';

var gulp = require('gulp'),
    gp = require('gulp-load-plugins')();
var browserSync = require('browser-sync').create();

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
});

gulp.task('pug', function () {
    return gulp.src('src/pug/pages/*.pug')
        .pipe(gp.pug({
            pretty:true
        }))
        .pipe(gulp.dest('build'))
        .on('end',browserSync.reload);
});

gulp.task('sass',function () {
    return gulp.src('src/static/scss/main.scss')
        .pipe(gp.sass({}))
        .pipe(gp.autoprefixer({
            overrideBrowserslist: ['last 3 versions'],
        }))
        .on("error", gp.notify.onError({
            title: "style error"
        }))
        .pipe(gp.csso())
        .pipe(gp.sourcemaps.write())
        .pipe(gulp.dest('build/static/css'))
        .pipe(browserSync.reload({
            stream:true
        }));
});

gulp.task('watch',function(){
    gulp.watch('src/pug/**/*.pug',gulp.series('pug'));
    gulp.watch('src/static/scss/**/*.scss',gulp.series('sass'))
});

gulp.task('default',gulp.series(
    gulp.parallel('pug','sass'),
    gulp.parallel('watch', 'serve')
));