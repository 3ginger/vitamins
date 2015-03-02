module.exports = {
    compile: {
        files: [{
            cwd: 'src',
            src: ['**/*.jade', '!templates/**/*.jade'],
            dest: 'web',
            expand: true,
            ext: '.html'
        }]
    },
    options: {
        pretty: true
    }
};