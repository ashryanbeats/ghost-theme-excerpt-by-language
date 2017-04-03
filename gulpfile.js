const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const livereload = require('gulp-livereload');

gulp.task("reload", () => livereload.reload());

gulp.task("default", () => {
	livereload.listen();

	gulp.watch(["*", "!./asset/css/**/*"], ["reload"]);

	gulp.watch(["assets/css/sass/**/*"], ["buildCSS", "reload"]);
});

gulp.task("buildCSS", () => {
	return gulp.src("./assets/css/sass/main.scss")
		.pipe(sass())
		.pipe(rename("style.css"))
		.pipe(gulp.dest("./assets/css/"));
});
