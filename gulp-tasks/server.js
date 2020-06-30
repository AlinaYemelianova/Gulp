const {watch, series, parallel} = require('gulp');
const config = require('./config');
const server = require('browser-sync').create();
//Tasks
const html = require('./html');
const styles = require('./styles');
const script = require('./script');
const image = require('./images');

function readyReload(cb) {
    server.reload();
    cb();
}

module.exports = function browserSync() {
    server.init({
        server: {
            baseDir: `./${config.projectFolder}/`,
        },
        port: 3000,
        notify: false
    });

    watch(config.path.watch.html, series(html, readyReload));
    watch(config.path.watch.css, series(styles, readyReload));
    watch(config.path.watch.js, series(script, readyReload));
    watch(config.path.watch.js, series(image, readyReload));
};
