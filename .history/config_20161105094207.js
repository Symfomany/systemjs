System.config({
  baseURL: '/',
  transpiler: "typescript", // babel, traceur, typescript (qui prends de l'ES6 natif)
  packages: {
    src: {
      defaultExtension: 'ts'
    }
  } 

});