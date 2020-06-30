const gulp = require('gulp'),
    config = require('./config'),
    scss = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    groupMedia = require('gulp-group-css-media-queries'),
    gulpStylelint = require('gulp-stylelint'),
    shorthand = require('gulp-shorthand'),
    minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    sourceMaps = require('gulp-sourcemaps');


module.exports = function styles() {
    return gulp.src(config.path.src.css)
        .pipe(gulpStylelint({
            reporters: [
                {formatter: 'string', console: true}
            ]
        }))
        .pipe(sourceMaps.init())
        .pipe(
            scss({
                outputStyle: 'expanded'
            })
        )
        .pipe(
            autoprefixer({
                overrideBrowserslist: ['last 5 versions'],
                cascade: true,
            })
        )
        .pipe(groupMedia())
        .pipe(shorthand())
        .pipe(gulp.dest(config.path.build.css))
        .pipe(minifyCss())
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(sourceMaps.write())
        .pipe(gulp.dest(config.path.build.css));
};