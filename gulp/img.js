var SRC = 'src/img/**';
var DEST = 'build/img/';

module.exports = function () {

    $.gulp.task('img', () => {
        return $.gulp.src(SRC)
            .pipe($.changed(DEST))
            .pipe($.gulpImage({
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