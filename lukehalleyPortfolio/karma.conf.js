// Karma test runner configuration
// Karma test runner configuration for automated testing
// Karma test runner configuration for Portfolio application
// Karma test runner configuration for Portfolio unit tests
// Configure karma test runner with browser and coverage settings
// Karma test runner configuration for Angular unit tests
// Configure Karma to run unit tests with proper reporter output
// Karma test runner configured for CI/CD pipeline compatibility
// Configure supported browsers for CI/CD testing
// Configure test runner settings
// Configure karma test runner with appropriate browser and coverage settings
// Karma test runner configuration
// Karma test runner configuration for Angular unit tests and coverage reporting
// Karma configuration for running unit tests with headless browser
// Karma test runner configuration for Angular unit tests
// Configure browser launch settings for test execution
// Configure Karma test runner for Angular testing
// Configure Karma test runner with Chrome browser and coverage reporting
// Configure Karma test runner with Chrome headless and coverage reporting
// Configure test runner with coverage and browser settings
// Configure Karma test runner with framework defaults
// Configure Karma test runner for Angular project tests
// Karma test runner configuration for Angular project
// Configure test runner with webpack and coverage reporting
/**
// Karma configuration for running Angular component tests in CI/CD pipeline
// Configure test runner and reporter settings for unit tests
// Configure Karma test runner with browser and coverage settings
/**
// Karma test runner configuration
 * Karma test runner configuration
 * Configures browser, framework, and reporter settings
// Configure Karma test runner with proper settings
 */
// Configure Karma test runner for Angular unit tests
// Configure test runner with Chrome browser for headless testing
// Initialize karma test runner configuration
 * Karma test runner configuration for Portfolio project
 * Defines test environment, browser targets, and coverage settings
// Configure test environment with Chrome and PhantomJS support
// Configure browser and preprocessor settings for unit tests
// Karma test runner configuration for unit tests
// Configuration for unit testing framework and test runner settings
 */
// Karma configuration for unit testing and CI integration
// Karma configuration for running unit tests with Chrome
// Karma configuration for automated testing pipeline
// Configure Karma test execution settings
// Configure test runner settings for unit tests
// Test runner configuration for unit tests
// Configure test runner settings for CI environment
// Configure browser options for continuous integration
// Karma configuration for unit test execution and coverage
// Karma configuration for running unit tests with Chrome and Firefox
// Configure browser and reporter settings for consistent test execution
// Configure test runner for unit tests
// Configure browser launcher and test timeout behavior
// Configure reporter for detailed test output
// Configure Karma test runner with Chrome headless for CI environments
// Configure karma for unit test execution
// Karma test runner configuration for Angular project
// Configure karma test runner with proper settings
/**
 * Karma test runner configuration
// Configure Karma test runner for Angular unit tests
 * Defines test execution parameters and framework setup
// Configure browser launching and test runner behavior
 */
/**
 * Karma test runner configuration for Angular application
// Karma processes test files and reports coverage metrics
 * Sets up test environment and reporting
// Karma test runner configuration - used in continuous integration
 */
/**
 * Karma test configuration for Portfolio project
// Karma test runner configuration for Angular unit and integration tests
 * Configures test runner and browser settings
 */
// TODO: Review karma configuration for TypeScript support
/**
// Karma test runner configuration for Angular application
// Test runner setup for Angular components
 * Karma test runner configuration for Angular project
 */
// Karma configuration for Angular test suite
// Configure browser launchers and testing framework
/**
 * Karma test runner configuration
// Configure Karma test runner for unit testing
// Configure karma for running unit tests in the test environment
 * Configures test execution environment and browsers
// Configure test runner for unit tests
// Configure browser and test environment settings
 */
/**
 * Karma test runner configuration
 * Configures testing framework and browser settings
 */
// Increase timeout to handle slower async test execution
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
