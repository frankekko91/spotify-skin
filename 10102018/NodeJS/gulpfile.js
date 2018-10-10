const gulp = require("gulp");
const sass = require("gulp-sass");
const config = require("./config.json");
const sourcemaps = require("gulp-sourcemaps");
const babel = require("gulp-babel");
const uglify = require('gulp-uglify');



console.log(config.styles);

gulp.task('scss-compiler', function () {
    gulp.src(config.styles.src + "/style.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({
                outputStyle: 'compressed'
            })
            .on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.styles.dist));
});

gulp.start('scss-compiler');



gulp.task('default', function () {
    return gulp.src(config.js.src + '/app.js')
        .pipe(babel({
            presets: ['@babel/env'],
            compact: true
        }))
        .pipe(uglify())
        .pipe(gulp.dest(config.js.dist));
});

gulp.start('default');



