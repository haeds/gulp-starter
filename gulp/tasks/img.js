module.exports = function () {
    $.gulp.task('img', function () {
        return $.gulp.src('src/static/img/**')
            .pipe($.gp.imagemin({
                progressive: true,
                verbose: true
            }))
            .on("error", $.gp.notify.onError({
                title: "img error"
            }))
            .pipe($.gulp.dest('build/static/img/'))
            .pipe($.bs.reload({
                stream: true
            }));
    });
}