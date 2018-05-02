// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');

gulp.task('minify-css', () => {
  return gulp.src(['styles/**/*.css', 'assets/css/**/*.css'], {base: './'})
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('build'));
});

gulp.task('copy-font', () => {
    return gulp.src('styles/fonts/**/*.*', {base: './styles/'})
    .pipe(gulp.dest('build/styles'))
})

// Lint Task
gulp.task('lint', function () {
    return gulp.src(['js/*.js', 'javascripts/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Concatenate & Minify JS
gulp.task('scripts', function () {
    return gulp.src(['js/*.js', 'javascripts/**/*.js'], {base: './'})
        .pipe(uglify())
        .pipe(gulp.dest('build'));
});

gulp.task('minify-html', function() {
  return gulp.src('*.html')
    .pipe(htmlmin({collapseWhitespace: true, minifyCSS: true, minifyJS: true}))
    .pipe(gulp.dest('build'));
});

// // Watch Files For Changes
// gulp.task('watch', function () {
//     gulp.watch('js/*.js', ['lint', 'scripts']);
//     gulp.watch('scss/*.scss', ['sass']);
// });

 
gulp.task('imagemin', function(){
    return gulp.src('imgs/*')
    .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.jpegtran({progressive: true}),
        imagemin.optipng({optimizationLevel: 5}),
        imagemin.svgo({
            plugins: [
                {removeViewBox: true},
                {cleanupIDs: false}
            ]
        })
    ]))
    .pipe(gulp.dest('build/images'));
})


gulp.task('serve', function () {

    browserSync.init({
        server: "./"
    });

    gulp.watch(["*.html", "**/*.js", '**/*.css']).on('change', browserSync.reload);
});


