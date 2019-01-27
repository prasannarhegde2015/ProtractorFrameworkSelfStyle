exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./TestScripts/Snow.js'],
    onPrepare: function() {
      protractor.basePath = __dirname;
   }
  };
  