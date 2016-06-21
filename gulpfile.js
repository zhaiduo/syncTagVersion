var gulp = require('gulp');
var change = require('gulp-change');
var tag = require('./gitTag.js');
var lib = require('./lib.js');

// get the repo of Tag with a version
gulp.task('tag', function() {
    tag('', '', {
        quiet: false
    }, function(err) {
        if (err) throw err;
    }, function(tags) {
        var latestVersion = lib.getLastVersion(tags);
        var updateVersion = function(content) {
            return content.replace(/\"version\": \"([^\"]*)\",/i, '"version": "' + latestVersion + '",');
        };
        return gulp.src('./package.json')
            .pipe(change(updateVersion))
            .pipe(gulp.dest('./'))
    });
});

// Run gulp's default task
gulp.task('default', []);