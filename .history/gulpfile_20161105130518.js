var gulp = require("gulp");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");
var notify = require("gulp-notify");
var gutil = require("gulp-util");
var paths = {
    pages: ['index.html']
};
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var watchedBrowserify = browserify({
    basedir: '.',
    debug: true,
    entries: ['./main.ts'],
    cache: {},
    packageCache: {}
}).plugin(tsify);
var browserSync = require('browser-sync');


//init tyo reload brower
var reload      = browserSync.reload;


// Browser-sync task, only cares about compiled CSS
gulp.task('browser-sync', function() {
    browserSync({
        port: 8066,
        server: {
            baseDir: "./", //base
            index: "index.html" //fichier a chargé
        }
    });
});

gulp.task("copy-html", function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest("dist"));
});

gulp.task("build", function () {
    return watchedBrowserify
    .plugin(tsify)
    .transform('babelify', {
        presets: ['es2015'],
        extensions: ['.ts']
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(notify("Style Modifié"))
    .pipe(gulp.dest("dist"));

});

gulp.task("default", ["copy-html", "build"], function () {
    gulp.watch(['main.ts', 'app/*'], ['build']);
    gulp.watch(["*.html"]).on('change', browserSync.reload); //reload on HTML

});