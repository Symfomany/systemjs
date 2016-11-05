System.config({
  baseURL: '/',
  paths: {
    'bootstrap': 'lib/bootstrap/dist/js/bootstrap.min.js',
    'jquery': 'lib/jquery/dist/jquery.min.js',
    'fonctions': './fonctions.js'
  },
  defaultJSExtensions: true, // Backwards-compatibility mode sur l'extension en require()
  transpiler: "babel" // babel, traceur, typescript (qui prends de l'ES6 natif)
});