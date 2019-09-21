module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch('src/pug/**/*.pug', $.gulp.series('pug'));
        $.gulp.watch('src/scss/**/*.scss', $.gulp.series('styles'))
        $.gulp.watch('src/js/**/*.js', $.gulp.series('scripts'))
        $.gulp.watch('src/img/**', $.gulp.series('img'))
    });
}