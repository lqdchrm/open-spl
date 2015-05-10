var gulp = require('gulp'),
	del = require('del'),
	gutil = require('gulp-util'),
	mocha = require('gulp-mocha');
	
gulp.task('clean', function(cb) {
	del(['dist/**/*'], cb);
});
	
gulp.task('test', function (){
	return gulp.src(['js/test/**/*.js'], { read: false})
		.pipe(mocha({
			reporter: 'spec',
			globals: {
				should: require('should')
			}
		}));
});

gulp.task('build-jsdep', ['clean'], function() {
	return gulp.src([
		'node_modules/mocha/mocha.js',
		'node_modules/chai/chai.js'
		])
		.pipe(gulp.dest('dist/js/vendor'));
});

gulp.task('build-cssdep', ['clean'], function() {
	return gulp.src([
		'node_modules/mocha/mocha.css',
		])
		.pipe(gulp.dest('dist/css/vendor'));
});

gulp.task('build-js', ['clean', 'build-jsdep', 'test'], function() {
	return gulp.src(['js/**/*.js'])
		.pipe(gulp.dest('dist/js'));
});

gulp.task('build-css', ['clean', 'build-cssdep']);

gulp.task('build-html', ['clean'], function() {
	return gulp.src(['index.html'])
		.pipe(gulp.dest('dist'));
});

gulp.task('default', ['clean', 'build-html', 'build-js', 'build-css']);