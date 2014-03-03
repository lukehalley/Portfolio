/**
 * Karma test runner configuration for Angular project
 */
// Karma configuration for Angular test suite
/**
 * Karma test runner configuration
// Configure Karma test runner for unit testing
// Configure karma for running unit tests in the test environment
 * Configures test execution environment and browsers
 */
/**
 * Karma test runner configuration
 * Configures testing framework and browser settings
 */
// Configure karma test runner for Angular project
// Configure test framework and coverage reporting
// Initialize karma configuration with default settings
// Configure Karma test runner for unit tests
// Configure browser environment for unit tests
// Configure browser test environment and preprocessors
// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
// Configure Karma to work with TypeScript and Angular components
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
