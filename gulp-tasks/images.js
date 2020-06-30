const gulp = require('gulp'),
    config = require('./config'),
    imageMin = require('gulp-imagemin');

module.exports = function html() {
    return gulp.src(config.path.src.img)
        .pipe(imageMin({
            progressive: true,
            interlaced: true,
            optimizationLevel: 4
        }))
        .pipe(gulp.dest(config.path.build.img));
};