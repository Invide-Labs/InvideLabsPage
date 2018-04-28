// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');

// // Lint Task
// gulp.task('lint', function () {
//     return gulp.src('js/*.js')
//         .pipe(jshint())
//         .pipe(jshint.reporter('default'));
// });



// gulp.task('sass', function () {

//     return sass('app/scss', {
//             sourcemap: true
//         })
//         .on('error', function (err) {
//             console.error('Error!', err.message);
//         })
//         .pipe(sourcemaps.write('./', {
//             includeContent: false,
//             sourceRoot: '/app/scss'
//         }))
//         .pipe(browserSync.stream({
//             match: '**/*.css'
//         }));
// });

// // Concatenate & Minify JS
// gulp.task('scripts', function () {
//     return gulp.src('js/*.js')
//         .pipe(concat('all.js'))
//         .pipe(gulp.dest('dist'))
//         .pipe(rename('all.min.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('dist/js'));
// });

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


// // Static server
// gulp.task('serve', ['sass'], function () {

//     browserSync.init({
//         server: "./app"
//     });

//     gulp.watch("app/scss/*.scss", ['sass']);
//     gulp.watch("app/*.html").on('change', browserSync.reload);
// });


// // Default Task
// gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);