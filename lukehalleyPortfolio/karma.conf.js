/**
 * Karma test runner configuration
 * Configures testing framework and browser settings
 */
// Configure browser environment for unit tests
// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
/**
 * Karma test runner configuration for Angular application
 */
// Configure test runner for Angular project
  config.set({
    basePath: '',
// Karma test runner configuration for unit tests
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
// Configure supported browsers for testing
    plugins: [
// Karma configuration for unit test execution and coverage reporting
// Karma test runner configuration for CI/CD pipeline
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
// Configure test framework and browser settings
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
// Initialize karma test runner configuration
    ],
// Configure Karma test runner for unit testing with Chrome browser
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage/lukehalleyPortfolio'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true
  });
};
