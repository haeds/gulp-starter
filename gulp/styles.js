var SRC = 'src/scss/main.scss';
var DEST = 'build/';


module.exports = function () {
    $.gulp.task('styles', function () {
        return $.gulp.src(SRC)
            .pipe($.changed(DEST))
            .pipe($.sass({}))
            .pipe($.autoprefixer({
                overrideBrowserslist: ['>0.1%'],
            }))
            .on("error", $.notify.onError({
                title: "style error"
            }))
            // .pipe($.gp.sourcemaps.init())
            .pipe($.cleanCSS({
                level: 2
            }))
            // .pipe($.gp.sourcemaps.write('.'))
            .pipe($.concat('styles.min.css'))
            .pipe($.gulp.dest(DEST))
            .pipe($.bs.reload({
                stream: true
            }));
    });
}