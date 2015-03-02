module.exports = {

    // Настройки задач
    options: {
        limit: 5
    },

    prepareTask:[
        'clean:tmp',
        'bower_concat:d3',
        'jshint'
    ],
    prepareResources:[
        'copy',
        'stylus:compile',
        'jade:compile',
        'imagemin',
        'svgmin'
    ],
    production:[
        'uglify',
        'cssmin:app'
    ]
};