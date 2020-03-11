module.exports = function () {
    $.gulp.task('pug', function () {
        return $.gulp.src(['src/components/*.pug', 'src/pages/**/*.pug'])
            .pipe($.pug({
                pretty:false
            }))
            .pipe($.gulp.dest('build'))
            .on('end',$.bs.reload);
    });

    $.gulp.task('pug:prod', function () {
        return $.gulp.src(['src/components/*.pug', 'src/pages/**/*.pug'])
            .pipe($.pug({
                pretty:true
            }))
            .pipe($.gulp.dest('build'))
            .on('end',$.bs.reload);
    });
}