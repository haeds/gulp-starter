var SRC = 'src/static/img/**';
var DEST = 'build/img/**';

module.exports = function () {
    $.gulp.task('img:dev', () => {
        return $.gulp.src(SRC)
            .pipe($.gulp.dest(DEST))
    })

    $.gulp.task('img', () => {
        return $.gulp.src(SRC)
            .pipe($.changed(DEST))
            .pipe($.gulpimage({
                pngquant: true,
                optipng: false,
                zopflipng: false,
                jpegRecompress: true,
                mozjpeg: false,
                guetzli: false,
                gifsicle: false,
                svgo: false,
                concurrent: 10
            }))
            .pipe($.gulp.dest(DEST))
            .pipe($.bs.reload({
                stream: true
            }))
    })
}