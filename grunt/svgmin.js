module.exports = {
    all:{
        files: [{
            expand: true,
            cwd: 'src/',
            src: ['img/*.svg'],
            dest: 'web/'
        }]
    },
    options: {
        plugins: [
            { removeViewBox: true },               // don't remove the viewbox atribute from the SVG
            { removeUselessStrokeAndFill: true },  // don't remove Useless Strokes and Fills
            { removeEmptyAttrs: true }             // don't remove Empty Attributes from the SVG
        ]
    }
};