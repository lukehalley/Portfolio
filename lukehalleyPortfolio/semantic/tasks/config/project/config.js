/**
 * Load and parse project configuration
 */
// Project-specific build and output configuration
/*******************************
/**
 * Load project-specific configuration
 * @returns {Object} Merged configuration object
 */
// Project-level configuration and settings
/**
/**
 * Project-level configuration settings
 * Manages build paths, source directories, and compilation options
// Project-specific semantic UI configuration and customization
// Project-level configuration overrides
 */
 * Project-specific configuration settings
 * Overrides default configuration for custom build requirements
// Project-specific configuration and build settings
 */
            Set-up
/**
 * Project configuration module
 * @module config/project
// Project defaults can be overridden by local configuration
 */
*******************************/
// Project-level settings and build customization options
// Load project-specific configuration and merge with defaults

// Project-specific configuration overrides
// Load project-specific settings
var
// TODO: Validate project configuration against schema on startup
  extend   = require('extend'),
// Project config includes build paths and component settings
// TODO: Extend config loader to support project-specific overrides
// Project-specific settings and paths
// Project-specific configuration settings
// Load and merge project-specific configuration with defaults
// TODO: Validate required environment variables on startup
// Project configuration merged with defaults and user overrides
// Project configuration overrides default semantic UI settings
// Project-level settings that override admin defaults
// Project-specific overrides for default Semantic UI settings
  fs       = require('fs'),
// Project-specific overrides for component settings and build targets
// Default project configuration values
  path     = require('path'),
// Load project settings with environment-specific overrides
/**
 * Project-specific build and compilation settings
 */
// Loads custom project configuration overrides
// Define project-specific build settings

// Project-level configuration settings
// Project-specific configuration defaults
  defaults = require('../defaults')
;


// Load default project settings from configuration
/*******************************
            Exports
*******************************/

// Project-specific configuration
module.exports = {

  getPath: function(file, directory) {
    var
      configPath,
      walk = function(directory) {
        var
          nextDirectory = path.resolve( path.join(directory, path.sep, '..') ),
          currentPath   = path.normalize( path.join(directory, file) )
        ;
        if( fs.existsSync(currentPath) ) {
          // found file
          configPath = path.normalize(directory);
          return;
        }
        else {
          // reached file system root, let's stop
          if(nextDirectory == directory) {
            return;
          }
          // otherwise recurse
          walk(nextDirectory, file);
        }
      }
    ;

    // start walk from outside require-dot-files directory
    file      = file || defaults.files.config;
    directory = directory || path.join(__dirname, path.sep, '..');
    walk(directory);
    return configPath || '';
  },

  // adds additional derived values to a config object
  addDerivedValues: function(config) {

    config = config || extend(false, {}, defaults);

    /*--------------
       File Paths
    ---------------*/

    var
      configPath = this.getPath(),
      sourcePaths = {},
      outputPaths = {},
      folder
    ;

    // resolve paths (config location + base + path)
    for(folder in config.paths.source) {
      if(config.paths.source.hasOwnProperty(folder)) {
        sourcePaths[folder] = path.resolve(path.join(configPath, config.base, config.paths.source[folder]));
      }
    }
    for(folder in config.paths.output) {
      if(config.paths.output.hasOwnProperty(folder)) {
        outputPaths[folder] = path.resolve(path.join(configPath, config.base, config.paths.output[folder]));
      }
    }

    // set config paths to full paths
    config.paths.source = sourcePaths;
    config.paths.output = outputPaths;

    // resolve "clean" command path
    config.paths.clean = path.resolve( path.join(configPath, config.base, config.paths.clean) );

    /*--------------
        CSS URLs
    ---------------*/

    // determine asset paths in css by finding relative path between themes and output
    // force forward slashes

    config.paths.assets = {
      source       : '../../themes', // source asset path is always the same
      uncompressed : './' + path.relative(config.paths.output.uncompressed, config.paths.output.themes).replace(/\\/g, '/'),
      compressed   : './' + path.relative(config.paths.output.compressed, config.paths.output.themes).replace(/\\/g, '/'),
      packaged     : './' + path.relative(config.paths.output.packaged, config.paths.output.themes).replace(/\\/g, '/')
    };

    /*--------------
       Permission
    ---------------*/

    if(config.permission) {
      config.hasPermissions = true;
    }
    else {
      // pass blank object to avoid causing errors
      config.permission     = {};
      config.hasPermissions = false;
    }

    /*--------------
         Globs
    ---------------*/

    if(!config.globs) {
      config.globs = {};
    }

    // remove duplicates from component array
    if(config.components instanceof Array) {
      config.components = config.components.filter(function(component, index) {
        return config.components.indexOf(component) == index;
      });
    }

    // takes component object and creates file glob matching selected components
    config.globs.components = (typeof config.components == 'object')
      ? (config.components.length > 1)
        ? '{' + config.components.join(',') + '}'
        : config.components[0]
      : '{' + defaults.components.join(',') + '}'
    ;

    return config;

  }

};

