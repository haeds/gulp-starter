module.exports = function () {
    $.gulp.task('pug', function () {
        return $.gulp.src(['src/pug/pages/*.pug'])
            .pipe($.pug({
                pretty:false
            }))
            .pipe($.gulp.dest('build'))
            .on('end',$.bs.reload);
    });
}