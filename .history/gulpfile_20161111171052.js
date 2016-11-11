let gulp = require("gulp");
let browserify = require("browserify");
let source = require('vinyl-source-stream');
let tsify = require("tsify");
let notify = require("gulp-notify");
let gutil = require("gulp-util");
let buffer = require('vinyl-buffer');
let browserSync = require('browser-sync');
let plumber = require('gulp-plumber'); // for debug....
let reload = browserSync.reload; // init browser
let notifier = require('node-notifier');
let path = require('path');

//let ts = require('gulp-typescript');
//let tsProject = ts.createProject('tsconfig.json'); // take configuration of TypeScript

let Browserify = browserify({ // iT'S WORKS IN BROWSER!
        basedir: '.',
        debug: true,
        sourceMapsAbsolute: true,
        entries: ['./main.ts'],
    }).plugin(tsify) // browseify with TS... automatically read options from tsconfig.json
    .on('error', handleError)


/**
 *  Warning: The Best Practices are split this file in sereval files in gulp directory
 * See https://github.com/Symfomany/gulp
 * server.js, build.js, watch.js, styles.js...
 */



// Browser-sync task, only cares about compiled CSS
gulp.task('browser-sync', function() {
    browserSync({
        port: 8066,
        browser: process.platform === 'linux' ? 'google-chrome' : 'google chrome', //
        server: {
            baseDir: "./", //base
            index: "index.html" //fichier a chargé
        },
    });

});


/**
 * Handler Errors
 * @param {any} err
 */
function handleError(err) {
    console.log("************************************************** ERRORS*******************************************************");
    gutil.log('error', 'An error to compile/transpile', gutil.colors.bold.dim.white.bgRed(err.toString()));
    console.log(err.toString());
    console.log("************************************************** ERRORS*******************************************************");

    const NotificationCenter = require('node-notifier/notifiers/notificationcenter');
    new NotificationCenter(options).notify();
    notifier.notify();
    notify.onError(function(error) {
        return "Message to the notifier: " + err.toString();
    });
    this.emit('end');
}


/**
 * Build with Typescript -> ES6(tsify) -> ES5 (Babel) + SourceMaps
 * Synchronize with Browser Sync
 */
gulp.task("build", function() {
    return Browserify
        .transform('babelify', { // option of Babel here
            presets: ['es2015'],
            extensions: ['.ts'],
            sourceMapsAbsolute: true
        })

    // with Babel, compilation es6 to es5
    .bundle().on('error', handleError)
        .pipe(source('bundle.js')) // name of output file bundler
        .pipe(buffer()) // sourcemap by buffer writting
        .pipe(notify("Bundler avec Typescript, Babel,BrowserSync & SourceMaps !!"))
        .pipe(gulp.dest("dist"))
        .pipe(browserSync.stream({ once: true }));

});


/**
 * Task by Default
 */
gulp.task("default", ["build", "browser-sync"], function() {
    gulp.watch(['main.ts', 'common.js', 'app/*'], ['build']);
    gulp.watch(["*.html"]).on('change', browserSync.reload); //reload on HTML
});