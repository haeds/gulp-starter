module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch('src/**/*.pug', $.gulp.series('pug'));
        $.gulp.watch('src/**/*.scss', $.gulp.series('styles'));
        $.gulp.watch('src/js/**/*.js', $.gulp.series('scripts'));
        $.gulp.watch('src/img/**', $.gulp.series('img'));
        $.gulp.watch('src/fonts/**', $.gulp.series('fonts'));
    });
}