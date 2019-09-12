module.exports = function () {
    $.gulp.task('sass', function () {
        return $.gulp.src('src/static/scss/main.scss')
            .pipe($.gp.sass({}))
            .pipe($.gp.autoprefixer({
                overrideBrowserslist: ['last 3 versions'],
            }))
            .on("error", $.gp.notify.onError({
                title: "style error"
            }))
            .pipe($.gp.csso())
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest('build/static/css'))
            .pipe($.bs.reload({
                stream: true
            }));
    });
}