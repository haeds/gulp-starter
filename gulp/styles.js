var SRC = 'src/scss/main.scss';
var DEST = 'build/css';


module.exports = function () {
    $.gulp.task('styles', function () {
        return $.gulp.src(SRC)
            .pipe($.gp.sass({}))
            .pipe($.gp.autoprefixer({
                overrideBrowserslist: ['last 10 versions'],
            }))
            .on("error", $.gp.notify.onError({
                title: "style error"
            }))
            .pipe($.gp.sourcemaps.write('.'))
            .pipe($.cleanCSS({
                compatibility: 'ie8'
            }))
            .pipe($.gp.concat('styles.min.css'))
            .pipe($.gulp.dest(DEST))
            .pipe($.bs.reload({
                stream: true
            }));
    });
}