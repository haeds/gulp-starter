var SRC = 'src/fonts/**/*';
var DEST = 'build/fonts/';
module.exports = function () {

    $.gulp.task('fonts', () => {
        return $.gulp.src(SRC)
            .pipe($.changed(DEST))
            .pipe($.gulp.dest(DEST))
            .pipe($.bs.reload({
                stream: true
            }))
    })
}