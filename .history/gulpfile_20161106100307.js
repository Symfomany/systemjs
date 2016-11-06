var gulp = require("gulp");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");
var notify = require("gulp-notify");
var gutil = require("gulp-util");
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var Browserify = browserify({
    basedir: '.',
    debug: true,
    entries: ['./main.ts'],
    cache: {},
    packageCache: {}
}).plugin(tsify);
var browserSync = require('browser-sync');
var plumber = require('gulp-plumber'); // for debug....
var reload = browserSync.reload; // init browser


/**
 *  Warning: The Best Practices are spluit this file in sereval files in gulp directory
 * See https://github.com/Symfomany/gulp
 * server.js, build.js, watch.js, styles.js...
 */



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


/**
 * Build with Typescript -> ES6(tsify) -> ES5 (Babel) + SourceMaps
 * Synchronize with Browser Sync
 */
gulp.task("build", function() {
    return Browserify
        .plugin(tsify) // with tsify :  bridge Typescript for Gulp
        .transform('babelify', {
            presets: ['es2015'],
            extensions: ['.ts']
        }) // with BAbel, compilation es6 to es5
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>")
        }))
        .bundle()
        .pipe(source('bundle.js')) // name of output fil bundler

    .pipe(buffer()) // sourcemap by buffer writting
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sourcemaps.write('./'))
        .pipe(notify("Bundler avec Typescript, Babel,BrowserSync & SourceMaps !!"))
        .pipe(gulp.dest("dist"))
        .pipe(reload({ stream: true }));
});


/**
 * Task by Default
 */
gulp.task("default", ["build", "browser-sync"], function() {
    gulp.watch(['main.ts', 'common.js', 'app/*'], ['build']);
    gulp.watch(["*.html"]).on('change', browserSync.reload); //reload on HTML
});