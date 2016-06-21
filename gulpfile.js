var gulp = require('gulp');
var tag = require('./gitTag.js');

// get the repo of Tag with a version
gulp.task('tag', function(){
  tag('', '', {quiet:false}, function (err) {
    if (err) throw err;
  }, function (data) {
    console.log('data', data);
  });
});

// Run gulp's default task
gulp.task('default',[]);