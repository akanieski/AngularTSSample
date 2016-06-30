var gulp = require('gulp');
var clean = require('gulp-clean');
var run = require('gulp-run');

var destPath = './wwwroot/';

// Delete the dist directory
gulp.task('clean', function () {
    return gulp.src(destPath)
        .pipe(clean());
});

gulp.task("build-assets", () => {
    gulp.src([
            'requirejs/**',
            'angular/**',
            'jquery/dist/jquery.js',
            'bootstrap/**',
    ], {
        cwd: "node_modules/**"
    })
        .pipe(gulp.dest("./wwwroot/libs"));

    gulp.src([
        'src/**/*.html'
    ]).pipe(gulp.dest('./wwwroot/'));

    gulp.src([
        'src/**/*.css'
    ]).pipe(gulp.dest('./wwwroot/'));
});

gulp.task('ts', function (done) {
    return run('tsc')
        .exec()
        .pipe(gulp.dest('output'))
});

gulp.task('watch', ['watch.ts', 'watch.assets']);

gulp.task('watch.ts', ['ts'], function () {
    return gulp.watch('src/**/*.ts', ['ts']);
});

gulp.task('watch.assets', ['build-assets'], function () {
    return gulp.watch(['src/**/*.html', 'src/**/*.css'], ['build-assets']);
});

gulp.task('default', ['build-assets', 'watch']);
