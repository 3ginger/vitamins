module.exports = {
    js: {
        files: {
            'web/js/app.js': [
                'build/_bower.js',
                'src/js/**/*.js'
            ]
        }
    },
    css:{
        files: {
            'web/css/app.css': [
                'build/_bower.css',
                'tmp/_app.css'
            ]
        }
    }
};