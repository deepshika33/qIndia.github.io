var gulp = require("gulp");

var sass = require("gulp-sass");
var minifycss = require("gulp-minify-css");
var browserSync = require("browser-sync").create();
var plumber = require("gulp-plumber");
var notifier = require("node-notifier");
var notify = require("gulp-notify");
var uglify = require("gulp-uglify");

// BrowserSync server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('sass', function() {
    return gulp.src('src/scss/style.scss')
    	.pipe(plumber())
        .pipe(sass()
            .on("error", notify.onError({
                title: "Sass Error",
                message: "Error: <%= error.message %>"
            }))
        )
        .pipe(minifycss())
        .pipe(gulp.dest('assets/css'))
        .pipe(browserSync.stream());
});

// Javascript Task
gulp.task('scripts', function() {
    return gulp.src('src/js/*.js')
        .pipe(uglify())
        .on("error", notify.onError({
            title: "JS Error",
            message: "Error: <%= error.message %>"
        }))
        .pipe(gulp.dest('assets/js'));
});

gulp.task('default', ['sass', 'scripts', 'browser-sync'], function() {
    gulp.watch(['src/scss/*', 'src/scss/**/*'], ['sass']);
    gulp.watch(['src/js/*', 'src/js/**/*'], ['scripts']);
    gulp.watch('*.html').on('change', browserSync.reload);
});



