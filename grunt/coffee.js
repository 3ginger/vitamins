module.exports = {
    compile: {
        options: {
            bare: true
        },
        files: {
            'tmp/user.js': 'coffee/**/*.coffee'
        }
    }
};