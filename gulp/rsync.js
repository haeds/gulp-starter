var SRC = 'build/**';

module.exports = function () {
    $.gulp.task('rsync', () => {
        return $.gulp.src(SRC)
            .pipe($.rsync({
                root: 'build/',
                hostname: '172.105.83.140',
                destination: '~/www/dev.na-prokat28.ru/',
                archive: true,
                silent: false,
                verbose: true,
                compress: true,
                port: '47953'
            }));
    });
}