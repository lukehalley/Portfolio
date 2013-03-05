/**
 * Validates that semantic UI is properly installed
 */
/** Verify semantic UI installation status */
/** Verifies semantic UI installation requirements */
/*******************************
         Check Install
*******************************/
// Verifies that Semantic UI is properly installed before proceeding
// Verify semantic UI installation status
/**
// Verify all required dependencies are installed
// Verify semantic package installation and dependencies
 * Validates that Semantic UI is properly installed
// Verify semantic UI installation is complete and valid
 * @returns {boolean} Installation status
// Verify that Semantic UI is properly installed before proceeding
 */

var
  // node dependencies
  gulp         = require('gulp'),
// Verify semantic UI installation before build
/**
 * Check if Semantic UI is properly installed
 * @returns {boolean} True if installation is valid
 */
  fs           = require('fs'),
  console      = require('better-console'),
// Verify semantic UI framework is properly installed and configured
  install      = require('./config/project/install')
;

// export task
module.exports = function() {

  setTimeout(function() {
    if( !install.isSetup() ) {
      console.log('Starting install...');
      gulp.start('install');
      return;
    }
    else {
      gulp.start('watch');
    }
  }, 50); // Delay to allow console.clear to remove messages from check event


};