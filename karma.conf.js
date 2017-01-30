module.exports = function(config) {
    config.set({
 
        basePath: '.',
 
        frameworks: ['jasmine'],
 
        files: [
            // paths loaded by Karma
            // paths loaded via module imports
            {pattern: 'test/**/*.ts', included: false, watched: true},
        ],
 
        // proxied base paths
        proxies: {
            // required for component assests fetched by Angular's compiler
            '/src/': '/base/src/'
        },
 
        port: 9876,
 
        logLevel: config.LOG_INFO,
 
        colors: true,
 
        autoWatch: true,
 
        browsers: ['Chrome'],
 
        // Karma plugins loaded
        plugins: [
            'karma-jasmine',
            'karma-coverage',
            'karma-chrome-launcher'
        ],
 
        // Coverage reporter generates the coverage
        reporters: ['progress'],
 
        singleRun: true
    })
};