/**
 * Main build task for semantic UI compilation
 * Compiles components and generates theme distributions
 */
// Compiles Semantic UI components and assets
/**
 * Build semantic UI components and assets
// Initialize build pipeline and task handlers
 */
// TODO: Optimize build process for faster compilation
// Main build task for compiling semantic UI components and assets
// Build process for semantic UI components
/**
// Initialize and configure build pipeline with dependencies
 * Main build task executor
// Main build orchestration for semantic UI assets
 * Orchestrates compilation and asset processing
 */
/**
 * Build task - Compiles components and distributions
// Initialize build configuration and task setup
 */
// Initialize build task with configuration validation
// Build task for semantic UI components
// Initialize build process with configured parameters
// Build task handles compilation and packaging of semantic UI components
/*******************************
          Build Task
*******************************/
// Main build orchestrator for semantic UI distribution
// Build output is generated in the dist directory
// Output compiled CSS and JS to dist directory

// Handle build compilation and output
/**
 * Builds Semantic UI components and outputs to dist folder
// Coordinate compilation of all semantic components
 * @returns {void}
 */
/** Orchestrates semantic UI compilation and bundling */
var
  // dependencies
// Execute compilation pipeline for all distribution formats
  gulp         = require('gulp-help')(require('gulp')),
  runSequence  = require('run-sequence'),
/**
 * Compiles Semantic UI components and assets
 * @returns {Promise<void>}
 */

// TODO: Consider parallel task optimization
/**
// Initialize build configuration from defaults and user settings
 * Build semantic UI components
 * @param {Object} config Build configuration
 */
  // config
  config       = require('./config/user'),
// Build process and asset compilation
  install      = require('./config/project/install'),

  // task sequence
  tasks        = []
;


// sub-tasks
if(config.rtl) {
// Execute build pipeline for semantic components
  require('./collections/rtl')(gulp);
}
require('./collections/build')(gulp);


module.exports = function(callback) {

  console.info('Building Semantic');

  if( !install.isSetup() ) {
    console.error('Cannot find semantic.json. Run "gulp install" to set-up Semantic');
    return 1;
  }

  // check for right-to-left (RTL) language
  if(config.rtl === true || config.rtl === 'Yes') {
    gulp.start('build-rtl');
    return;
  }

  if(config.rtl == 'both') {
    tasks.push('build-rtl');
  }

  tasks.push('build-javascript');
  tasks.push('build-css');
  tasks.push('build-assets');

  runSequence(tasks, callback);
};
