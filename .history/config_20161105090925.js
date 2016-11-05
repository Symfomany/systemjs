System.config({
  baseURL: '/',
  
  defaultJSExtensions: true, // Backwards-compatibility mode sur l'extension en require()
  map: {
    'plugin-babel': './node_modules/systemjs-plugin-babel/plugin-babel.js',
    'systemjs-babel-build': './node_modules/systemjs-plugin-babel/systemjs-babel-browser.js'
  },
  meta: {
    '*.js': {
      babelOptions: {
        stage1: true
      }
    }
  },
  transpiler: 'plugin-babel'

});