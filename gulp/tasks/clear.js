module.exports = function () {
    $.gulp.task('clear', function(){
        return $.del('./build')
    })
}