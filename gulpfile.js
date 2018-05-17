'use strict';
var gulp = require('gulp');
var owsTasks = require('@owstack/ows-build');
owsTasks('ltc', 'message');
gulp.task('default', ['lint', 'coverage']);
