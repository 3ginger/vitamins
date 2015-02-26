module.exports = {
    watch: {
        files: ['coffee/**/*.coffee', 'stylus/**/*.styl', 'js/**/*.js', 'css/**/*.css'],
        tasks: ['watch-compile', 'dist']
    }
};