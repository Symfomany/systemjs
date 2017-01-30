preprocessors: {
        '**/*.ts': ['typescript']
    },

    typescriptPreprocessor: {
        options: {
            sourceMap: true, // generate source maps
            noResolve: false // enforce type resolution
        },
        transformPath: function(path) {
            return path.replace(/\.ts$/, '.js');
        }
    },