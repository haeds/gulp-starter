var SRC = 'src/js/main.js';
var DEST = 'build/';

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
    },
    mode: 'production'
}
module.exports = function () {
    $.gulp.task('scripts', function () {
        return $.gulp.src(SRC)
            .pipe($.changed(DEST))
            .pipe($.webpack(webpackConfig))
            .pipe($.gulp.dest(DEST))
            .pipe($.bs.reload({
                stream: true
            }));
    })
}