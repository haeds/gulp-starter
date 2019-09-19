module.exports = function () {
    $.gulp.task('jsLibs', function () {
        return $.gulp.src('src/js/libs.js')
            .pipe($.cached('jsLibs'))
            .pipe($.importFile({
                prefix: '@@',
                basepath: '@file'
            }))
            .pipe($.gp.remember('jsLibs'))
            .pipe($.uglify())
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gulp.dest('build/js/'))
            .pipe($.bs.reload({
                stream: true
            }));
    })
    $.gulp.task('js', function () {
        return $.gulp.src(['src/js/main.js'])
            .pipe($.uglify())
            .pipe($.rename({ extname: '.min.js' }))
            .pipe($.gulp.dest('build/js/'))
            .pipe($.bs.reload({
                stream: true
            }));
    })
}