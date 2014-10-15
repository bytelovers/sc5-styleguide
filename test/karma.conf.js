// Karma configuration
// Generated on Mon Oct 13 2014 13:30:11 GMT+0300 (EEST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'sinon-chai'],

    // list of files / patterns to load in the browser
    files: [
      // components
      'lib/app/js/components/angular/angular.js',
      'lib/app/js/components/ui-router/release/angular-ui-router.js',
      'lib/app/js/components/angular-animate/angular-animate.js',
      'lib/app/js/components/angular-bootstrap-colorpicker/js/bootstrap-colorpicker-module.js',
      'lib/app/js/components/angular-local-storage/dist/angular-local-storage.js',
      'lib/app/js/components/highlightjs/highlight.pack.js',
      'lib/app/js/components/angular-highlightjs/angular-highlightjs.js',
      'lib/app/js/components/oclazyload/dist/ocLazyLoad.js',
      'lib/app/js/components/angular-mocks/angular-mocks.js',
      'node_modules/mock-localstorage/lib/mock-localstorage.js',
      // application code
      'lib/app/js/*.js',
      'lib/app/js/controllers/*.js',
      'lib/app/js/directives/*.js',
      'lib/app/js/services/*.js',
      // tests
      'test/angular/**/*.js'
    ],

    // list of files to exclude
    exclude: [
      'test/structure.js'
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],

    plugins: [
      'karma-mocha',
      'karma-sinon-chai',
      'karma-mocha-reporter',
      'karma-phantomjs-launcher'
    ],

    // web server port
    port: 8080,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
