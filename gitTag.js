'use strict';
//source: https://github.com/stevelacy/gulp-git/blob/master/lib/tag.js

var gutil = require('gulp-util');
var exec = require('child_process').exec;
var escape = require('any-shell-escape');

module.exports = function (version, message, opt, cb, okCb) {
  if (!cb && typeof opt === 'function') {
    // optional options
    cb = opt;
    opt = {};
  }
  if (!cb && typeof version === 'function') {
    cb = version;
    version = '';
    message = '';
  }
  if (!cb || typeof cb !== 'function') cb = function () {};
  if (!message && version) return cb(new Error('Message must be defined'));
  if (!opt) opt = {};
  if (!opt.cwd) opt.cwd = process.cwd();
  if (!opt.args) opt.args = ' ';

  var signedarg = opt.signed ? ' -s ' : ' -a ';

  var cmd = 'git tag';
  if (version !== '') {
    cmd += ' ' + signedarg + ' -m "' + message + '" ' + opt.args + ' ' + escape([version]);
  }
  var templ = gutil.template(cmd, {file: message});
  return exec(templ, {cwd: opt.cwd}, function(err, stdout, stderr){
    if (err) return cb(err);
    if (version === '') {
      stdout = stdout.split('\n');
    }
    //gutil.log(stdout);
    return okCb(stdout);
  });
};