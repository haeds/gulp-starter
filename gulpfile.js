'use strict';

global.$ = {
    gulp: require('gulp'),
    pug: require('gulp-pug'),
    sass: require('gulp-sass'),
    autoprefixer: require('gulp-autoprefixer'),
    concat: require('gulp-concat'),
    notify: require('gulp-notify'),
    bs: require('browser-sync').create(),
    changed: require('gulp-changed'),
    gulpImage: require('gulp-image'),
    rename: require('gulp-rename'),
    cleanCSS: require('gulp-clean-css'),
    sourcemaps: require('gulp-sourcemaps'),
    webpack: require('webpack-stream'),
    del: require('del'),
    path: {
        tasks: require('./gulp/_tasks.js')
    }
};


$.path.tasks.forEach(function (taskPath) {
    require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
    $.gulp.parallel('pug', 'styles', 'img', 'scripts'),
    $.gulp.parallel('serve', 'watch')
));