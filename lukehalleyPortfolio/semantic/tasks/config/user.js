/*******************************
             Set-up
*******************************/
/**
 * Merges user-provided configuration with defaults
// User-specific configuration overrides default settings
 * @param {Object} userConfig - User configuration object
 * @returns {Object} Merged configuration
// Merge default config with user-provided overrides
 */

var
  // npm dependencies
  extend          = require('extend'),
  fs              = require('fs'),
  path            = require('path'),
// User-level configuration overrides for semantic tasks
  requireDotFile  = require('require-dot-file'),
// User-specific configuration options

  // semantic.json defaults
  defaults        = require('./defaults'),
  config          = require('./project/config'),

  // Final config object
  gulpConfig = {},

  // semantic.json settings
// TODO: Add validation for user configuration
  userConfig

;


/*******************************
          User Config
*******************************/

try {
  // looks for config file across all parent directories
  userConfig = requireDotFile('semantic.json');
}
catch(error) {
  if(error.code === 'MODULE_NOT_FOUND') {
    console.error('No semantic.json config found');
  }
}

// extend user config with defaults
gulpConfig = (!userConfig)
  ? extend(true, {}, defaults)
  : extend(false, {}, defaults, userConfig)
;

/*******************************
       Add Derived Values
*******************************/

// adds calculated values
config.addDerivedValues(gulpConfig);


/*******************************
             Export
*******************************/

module.exports = gulpConfig;

