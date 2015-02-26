module.exports = {
    user: {
        files: {
            'tmp/user.js': [
                'js/components/**/*.js',
                'js/user/**/*.js',
                'tmp/user.js'
            ],
            'tmp/user.css': ['css/components/**/*.css', 'css/user/**/*.css', 'tmp/user.css']
        }
    },
    bower: {
        options: {
            separator: '\n',
            banner: '/*! <%= grunt.template.today("yyyy-mm-dd") %> */\n\n'
        },
        files: {
            'dist/main.min.js': [
                'bower/modernizr/modernizr.min.js',
                'bower/underscore/underscore.min.js',
                'bower/d3/d3.min.js',
                //'bower/jquery/dist/jquery.min.js',
                'tmp/user.min.js'
            ]
        }
    }
};