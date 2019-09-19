'use strict';

global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    bs: require('browser-sync').create(),
    changed: require('gulp-changed'),
    cache: require ('gulp-cache'),
    imageminPngquant: require('imagemin-pngquant'),
    imageminJpegRecompress: require('imagemin-jpeg-recompress'),
    gulpimage: require('gulp-image'),
    del: require('del'), 

    path: {
        tasks: require('./gulp/config/tasks.js')
    }
};

$.path.tasks.forEach(function (taskPath) {
    require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
    $.gulp.parallel('pug', 'sass', 'scripts:lib', 'scripts', 'img'),
    $.gulp.parallel('watch', 'serve')
));