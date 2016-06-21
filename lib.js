'use strict';

//tags [ 'v0.1.0', 'v0.2.0', '' ] => 0.2.0
var getLastVersion = function(tags) {
    var v = '0.0.0';
    var vv = '0.0.0';
    if (typeof tags === 'object' && tags.constructor == Array) {
        for (var i = 0, imax = tags.length - 1; i < imax; i++) {
            if (tags[i].match(/^v([0-9]+\.[0-9]+\.[0-9]+)$/i)) {
                vv = RegExp.$1;
                if (vv > v) {
                    v = vv;
                }
            }
        }
    }
    return v;
};
module.exports.getLastVersion = getLastVersion;
