var gulp = require('gulp');
var useref = (require('gulp-useref'));
var uglify = require('gulp-uglify');

gulp.task('useref', function() {
	var assets = useref.assets();
	return gulp.src('app/*.html')
		.pipe(assets)
		.pipe(uglify())
		.pipe(assets.restore())
		.pipe(useref())
		.pipe(gulp.dest('dist'));
});

gulp.task('hello', function() {
	console.log('Hello');
});