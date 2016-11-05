var gulp = require("gulp");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");
var watchify = require("watchify");
var gutil = require("gulp-util");
var paths = {
    pages: ['index.html']
};
var watchedBrowserify = watchify(browserify({
    basedir: '.',
    debug: true,
    entries: ['./main.ts'],
    cache: {},
    packageCache: {}
}).plugin(tsify));


gulp.task("copy-html", function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest("dist"));
});

gulp.task("build", function () {
    return watchedBrowserify
    .plugin(tsify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest("dist"));

});

gulp.task("default", ["copy-html", "build"], function () {
    gulp.watch(['main.ts', 'app/*'], ['build']);
});