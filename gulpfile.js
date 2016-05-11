var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

gulp.task('sass', function() {
	gulp.src('styles.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('.'))
	.pipe(connect.reload());
});

gulp.task('reload', function() {
	connect.reload();
});

gulp.task('server', function() {
	connect.server({
		livereload: true
	});
});

gulp.task('watch', function() {
	gulp.watch(['scripts.js', 'index.html'], ['reload']);
	gulp.watch(['styles.scss'], ['sass']);
});

gulp.task('default', ['sass', 'server', 'watch']);