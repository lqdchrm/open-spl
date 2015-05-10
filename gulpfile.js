var gulp = require('gulp'),
	del = require('del'),
	gutil = require('gulp-util'),
	mocha = require('gulp-mocha');

gulp.task('test', function (){
	return gulp.src(['test/**/*.js'], { read: false})
		.pipe(mocha({
			reporter: 'spec'
		}));
});

gulp.task('default', ['test']);
