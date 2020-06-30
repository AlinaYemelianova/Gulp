const del = require('del'),
    config = require('./config');

module.exports = function clean(cb) {
    return del(config.path.clean).then(() => {
        cb();
    });
};