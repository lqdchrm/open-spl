var gulp = require('gulp'),
    del = require('del'),
    gutil = require('gulp-util'),
    mocha = require('gulp-mocha'),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify');

// gulp error handling
var _gulpsrc = gulp.src;
gulp.src = function () {
    return _gulpsrc.apply(gulp, arguments)
        .pipe(plumber({
        errorHandler: function (err) {
            notify.onError({
                title: "Gulp Error",
                message: "Error: <%= error.message %>",
                sound: "Bottle"
            })(err);
            this.emit('end');
        }
    }));
};

gulp.task('test', function () {
    return gulp.src(['test/**/*.js'], { read: false })
        .pipe(mocha({
        reporter: 'nyan'
    }));
});

// watch task
gulp.task('watch', function () {
    gulp.watch(['src/**/*.js', 'test/**/*.js'], ['test']);
});

gulp.task('default', ['test']);
