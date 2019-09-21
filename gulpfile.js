'use strict';

global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    bs: require('browser-sync').create(),
    changed: require('gulp-changed'),
    cached: require('gulp-cached'),
    imageminPngquant: require('imagemin-pngquant'),
    imageminJpegRecompress: require('imagemin-jpeg-recompress'),
    gulpImage: require('gulp-image'),
    del: require('del'),
    importFile: require('gulp-file-include'),
    remember: require('gulp-remember'),
    rename: require('gulp-rename'),
    cleanCSS: require('gulp-clean-css'),
    webpack: require('webpack-stream'),
    path: {
        tasks: require('./gulp/_tasks.js')
    }
};


$.path.tasks.forEach(function (taskPath) {
    require(taskPath)();
});

$.gulp.task('default', $.gulp.series('clear',
    $.gulp.parallel('pug', 'styles', 'img', 'scripts'),
    $.gulp.parallel('serve', 'watch')
));