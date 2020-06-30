const gulp = require('gulp'),
    config = require('./config'),
    fileInclude = require('gulp-file-include');

module.exports = function html() {
    return gulp.src(config.path.src.html)
        .pipe(fileInclude())
        .pipe(gulp.dest(config.projectFolder));
};