module.exports = {

    options: {
        spawn: false,
        livereload: true
    },

    js: {
        files: [
            'src/js/**/*.js'
        ],
        tasks: [
            'jshint',
            'concat:js'
        ]
    },

    css: {
        files: [
            'src/css/**/*.styl',
            'src/css/**/*.css'
        ],
        tasks: [
            'stylus:compile',
            'concat:css',
            'autoprefixer'
        ]
    },

    jade: {
        files: [
            'src/**/*.jade'
        ],
        tasks: [
            'jade:compile'
        ]
    },

    img: {
        files: [
            'src/img/*.{png,jpg,gif}'
        ],
        tasks: [
            'newer:imagemin'
        ]
    },

    svg: {
        files: [
            'src/img/*.svg'
        ],
        tasks: [
            'newer:svgmin'
        ]
    }

};