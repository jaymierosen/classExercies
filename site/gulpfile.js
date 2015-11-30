var gulp = require('gulp'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	jshint = require('gulp-jshint'),
	autoprefixer = require('gulp-autoprefixer'),
	stylish = require ('jshint-stylish'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload

gulp.task('styles', function () {
	return gulp.src('styles/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(concat('style.css'))
	.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
	.pipe(gulp.dest('styles/'))
	.pipe(reload({stream: true}));
});

gulp.task('jshint', function () {
	return gulp.src('scripts/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('jshint-stylish'))
	.pipe(reload({stream: true}));
});

gulp.task('browser-sync', function() {
	browserSync ({
		server:  { baseDir: "./"}
	});
});

gulp.task('watch', function () {
	gulp.watch('styles/*.scss', ['styles']);
	gulp.watch('scripts/*.js', ['jshint']);
	gulp.watch('*.html', reload);
});

gulp.task('default', ['browser-sync', 'styles', 'jshint', 'watch']);