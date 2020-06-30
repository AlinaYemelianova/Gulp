const {src, dest} = require('gulp'),
    gulp = require('gulp');

// Functions
const browserSync = require('./gulp-tasks/server');
const html = require('./gulp-tasks/html');
const clean = require('./gulp-tasks/clean');
const styles = require('./gulp-tasks/styles');
const script = require('./gulp-tasks/script');
const image = require('./gulp-tasks/images');

const build = gulp.series(clean, gulp.parallel(html, styles, script), image);
const watch = gulp.parallel(browserSync, gulp.parallel(html, styles, script), image);

exports.build = build;
exports.watch = watch;
exports.default = watch;




