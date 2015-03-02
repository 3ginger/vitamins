module.exports = {
    jquery: {
        dest: 'build/_bower.js',
        cssDest: 'build/_bower.css',
        exclude: [
            'jeet',
            'rupture-by-jenius',
            'typographic',
            'modernizr',
            'd3'
        ],
        dependencies: {
            'underscore': 'jquery'
        },
        bowerOptions: {
            relative: false
        }
    },
    d3: {
        dest: 'build/_bower.js',
        cssDest: 'build/_bower.css',
        exclude: [
            'jeet',
            'rupture-by-jenius',
            'typographic',
            'modernizr',
            'jquery'
        ],
        dependencies: {
            'underscore': 'jquery'
        },
        bowerOptions: {
            relative: false
        }
    }


};