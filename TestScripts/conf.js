exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['Snow.js'],
  onPrepare: function() {
    protractor.basePath = __dirname;
 }
};
