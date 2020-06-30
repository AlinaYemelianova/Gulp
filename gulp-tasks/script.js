const gulp = require('gulp'),
    config = require('./config'),
    rename = require('gulp-rename'),
    fileInclude = require('gulp-file-include'),
    sourceMaps = require('gulp-sourcemaps'),
    eslint = require('gulp-eslint'),
    uglify = require('gulp-uglify-es').default,
    babel = require('gulp-babel');

module.exports = function scriptGulp() {
    return gulp.src(config.path.src.js)
        .pipe(sourceMaps.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(fileInclude())
        .pipe(eslint({}))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
        .pipe(sourceMaps.write())
        .pipe(gulp.dest(config.path.build.js))
        .pipe(uglify())
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(gulp.dest(config.path.build.js));
};