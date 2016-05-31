var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: 'app'
		},
	})
})

gulp.task('css', function() {
	return gulp.src('app/css/**/*.css')
	  .pipe(browserSync.reload({
	  	stream: true
	  }))
});

gulp.task('watch', ['browserSync'], function (){
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/css/**/*.css', ['css']);
	gulp.watch('app/js/**/*.js', browserSync.reload);
})