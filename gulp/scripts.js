let webpackConfig = {
    output: {
        filename: 'main.min.js'
    },
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    }
}
module.exports = function () {
    $.gulp.task('scripts', function () {
        return $.gulp.src('./src/js/main.js')
            .pipe($.webpack(webpackConfig))
            .pipe($.gulp.dest('build/js/'))
            .pipe($.bs.reload({
                stream: true
            }));
    })
}