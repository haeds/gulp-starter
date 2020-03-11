var SRC = 'src/scss/main.scss';
var DEST = 'build';

module.exports = function () {
    $.gulp.task('styles', () => {
        return $.gulp.src(SRC)
            .pipe($.changed(DEST))
            .pipe($.plumber())
            .pipe($.sass({}))
            // .pipe($.autoprefixer({
            //     overrideBrowserslist: ['>0.1%'],
            // }))
            .on("error", $.notify.onError({
                title: "style error"
            }))
            // .pipe($.cleanCSS({
            //     level: 2
            // }))
            // .pipe($.purge({
            //     content: ['src/**/*.pug']
            // }))
            .pipe($.concat('styles.min.css'))
            .pipe($.gulp.dest(DEST))
            .pipe($.bs.reload({
                stream: true
            }));
    });
    $.gulp.task('styles:prod', () => {
        return $.gulp.src(SRC)
            .pipe($.changed(DEST))
            // .pipe($.plumber())
            .pipe($.sass({}))
            .pipe($.autoprefixer({
                overrideBrowserslist: ['>0.1%'],
            }))
            .on("error", $.notify.onError({
                title: "style error"
            }))
            .pipe($.cleanCSS({
                level: 2
            }))
            .pipe($.purge({
                content: ['src/**/*.pug']
            }))
            .pipe($.concat('styles.min.css'))
            .pipe($.gulp.dest(DEST))
            .pipe($.bs.reload({
                stream: true
            }));
    });
}