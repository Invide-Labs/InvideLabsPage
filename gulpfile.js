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
var del = require('del');

gulp.task('clean', function () {
  return del('build');
});

gulp.task('minify-css', () => {
  return gulp.src(['styles/**/*.css', 'assets/css/**/*.css'], {base: './'})
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('build'));
});

gulp.task('copy-font', () => {
    return gulp.src('styles/fonts/**/*.*', {base: './styles/'})
    .pipe(gulp.dest('build/styles'))
})

gulp.task('copy-files', () => {
    return gulp.src(['favicon/**/*.*', 'robots.txt', 'sitemap.txt', 'app.json', 'CNAME', 'assets/library/**/*.*'], {base: './'})
    .pipe(gulp.dest('build'))
})

// // Lint Task
// gulp.task('lint', function () {
//     return gulp.src(['js/*.js', 'javascripts/**/*.js'])
//         .pipe(jshint())
//         .pipe(jshint.reporter('default'));
// });

// Concatenate & Minify JS
gulp.task('minify-js',  () => {
    return gulp.src(['js/*.js', 'javascripts/**/*.js'], {base: './'})
        .pipe(uglify())
        .pipe(gulp.dest('build'));
});

gulp.task('minify-html', function() {
  return gulp.src('*.html')
    .pipe(htmlmin({collapseWhitespace: true, minifyCSS: true, minifyJS: true}))
    .pipe(gulp.dest('build'));
});

 
gulp.task('imagemin', () => {
    return gulp.src(['imgs/*', 'assets/img/**/*.*'], {base: './'})
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
    .pipe(gulp.dest('build'));
})


gulp.task('serve', () => {

    browserSync.init({
        server: "./"
    });

    gulp.watch(["*.html", "**/*.js", '**/*.css']).on('change', browserSync.reload);
});


gulp.task('build', gulp.series('clean', gulp.parallel('minify-css', 'copy-font', 'minify-js', 'minify-html', 'imagemin', 'copy-files'), () => {
 browserSync.init({
        server: "./build/"
    });
}));