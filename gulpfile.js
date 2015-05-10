var gulp = require('gulp'),
    gutil = require('gulp-util'),
	mocha = require('gulp-mocha');
	
gulp.task('test', function (){
	return gulp.src(['test/**/*.js'], { read: false})
		.pipe(mocha({
			reporter: 'spec',
			globals: {
				should: require('should')
			}
		}));
});