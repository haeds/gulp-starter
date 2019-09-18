module.exports = function () {
    $.gulp.task('img:dev', () => {
        return $.gulp.src(imgPATH.imput)
            .pipe($.gulp.dest(imgPATH.output))
    })
    $.gulp.task('img', function () {
        return $.gulp.src('src/static/img/**')
            .pipe($.gp.changed('build/static/img/**'))
            .pipe($.gp.imagemin(
                [
                    $.imageminJpegRecompress({
                        loops: 5,
                        min: 70,
                        max: 75,
                        quality: 'medium'
                    }),
                    $.imageminPngquant({
                        quality: [0.7, 0.9]
                    }),
                ]))
            .on("error", $.gp.notify.onError({
                title: "img error"
            }))
            .pipe($.gulp.dest('build/static/img/'))
            .pipe($.bs.reload({
                stream: true
            }));
    });
}