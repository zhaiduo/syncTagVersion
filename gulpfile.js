var gulp = require('gulp');
var tag = require('./gitTag.js');
var lib = require('./lib.js');

// get the repo of Tag with a version
gulp.task('tag', function() {
    tag('', '', {
        quiet: false
    }, function(err) {
        if (err) throw err;
    }, function(tags) {
        console.log('tags', tags, lib.getLastVersion(tags));
    });
});

// Run gulp's default task
gulp.task('default', []);