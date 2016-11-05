System.config({
  baseURL: '/',
  
  defaultJSExtensions: true, // Backwards-compatibility mode sur l'extension en require()
  transpiler: "babel", // babel, traceur, typescript (qui prends de l'ES6 natif)
   babelOptions: {
      presets: ['es2015']
    },

});