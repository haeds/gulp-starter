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
    purge: require('gulp-purgecss'),
    sourcemaps: require('gulp-sourcemaps'),
    webpack: require('webpack-stream'),
    del: require('del'),
    plumber: require('gulp-plumber'),
    rsync: require('gulp-rsync'),
    path: {
        tasks: require('./gulp/_tasks.js')
    }
};


$.path.tasks.forEach(function (taskPath) {
    require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
    $.gulp.parallel('pug', 'styles', 'img', 'fonts', 'scripts'),
    $.gulp.parallel('serve', 'watch')
));

$.gulp.task('prod', $.gulp.series(
    $.gulp.parallel('pug:prod', 'styles:prod', 'img', 'fonts', 'scripts-prod')
));

$.gulp.task('deploy', $.gulp.series(
	$.gulp.parallel('clear'),
	$.gulp.parallel('pug:prod', 'styles:prod', 'img', 'scripts-prod', 'fonts'),
    $.gulp.parallel('rsync')
));