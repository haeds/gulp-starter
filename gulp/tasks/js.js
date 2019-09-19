module.exports = function () {
    $.gulp.task('jsLibs', function () {
        return $.gulp.src('src/static/js/libs.js')
            .pipe($.importFile({
                prefix: '@@',
                basepath: '@file'
            }))
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gulp.dest('build/js/'))
            .pipe($.bs.reload({
                stream: true
            }));
    })
    $.gulp.task('js', function () {
        return $.gulp.src(['src/static/js/main.js'])
            .pipe($.gulp.dest('build/js/'))
            .pipe($.bs.reload({
                stream: true
            }));
    })
}