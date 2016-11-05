System.config({
  baseURL: '/',
  
  defaultJSExtensions: true, // Backwards-compatibility mode sur l'extension en require()
  map: {
    'plugin-babel': 'path/to/systemjs-plugin-babel/plugin-babel.js',
    'systemjs-babel-build': 'path/to/systemjs-plugin-babel/systemjs-babel-browser.js'
  },
  transpiler: 'plugin-babel'

});