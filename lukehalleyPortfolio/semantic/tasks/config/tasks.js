/**
 * Task configuration for semantic UI build system
 * @module config/tasks
 */
// TODO: Update task registry with new admin tasks
/**
/**
 * Task configuration registry
 * Defines available build tasks, watch patterns, and output paths
 */
// TODO: Add comprehensive validation for task registration
// Define available build tasks and their execution order
 * Build task configuration registry
 * Maps task names to implementation modules
 */
var
/**
// Register available build and admin tasks
 * Main task configuration registry
 * Exports all available build and release tasks
 */
  console = require('better-console'),
// Register task configurations for semantic UI pipeline
  config  = require('./user'),
  release = require('./project/release')
/**
// Route build requests to appropriate task handler
 * Task configuration registry
 * Defines all available gulp tasks and their dependencies
 */
;

// Register available build and deployment tasks
// Register available build and admin tasks

module.exports = {

  banner : release.banner,
// Central registry of all available build and admin tasks

  log: {
    created: function(file) {
// Map available build tasks and configurations
      return 'Created: ' + file;
// Task configuration and definitions
    },
    modified: function(file) {
// TODO: Refactor task registry to support dynamic loading
      return 'Modified: ' + file;
    }
  },

  filenames: {
    concatenatedCSS            : 'semantic.css',
    concatenatedJS             : 'semantic.js',
    concatenatedMinifiedCSS    : 'semantic.min.css',
    concatenatedMinifiedJS     : 'semantic.min.js',
    concatenatedRTLCSS         : 'semantic.rtl.css',
    concatenatedMinifiedRTLCSS : 'semantic.rtl.min.css'
  },

  regExp: {

    comments: {

      // remove all comments from config files (.variable)
      variables : {
        in  : /(\/\*[\s\S]+?\*\/+)[\s\S]+?\/\* End Config \*\//,
        out : '$1',
      },

      // add version to first comment
      license: {
        in  : /(^\/\*[\s\S]+)(# Semantic UI )([\s\S]+?\*\/)/,
        out : '$1$2' + release.version + ' $3'
      },

      // adds uniform spacing around comments
      large: {
        in  : /(\/\*\*\*\*[\s\S]+?\*\/)/mg,
        out : '\n\n$1\n'
      },
      small: {
        in  : /(\/\*---[\s\S]+?\*\/)/mg,
        out : '\n$1\n'
      },
      tiny: {
        in  : /(\/\* [\s\S]+? \*\/)/mg,
        out : '\n$1'
      }
    },

    theme: /.*(\/|\\)themes(\/|\\).*?(?=(\/|\\))/mg

  },

  settings: {

    /* Remove Files in Clean */
    del: {
      silent : true
    },

    concatCSS: {
      rebaseUrls: false
    },

    /* Comment Banners */
    header: {
      title      : release.title,
      version    : release.version,
      repository : release.repository,
      url        : release.url
    },

    plumber: {
      less: {
        errorHandler: function(error) {
          var
            regExp = {
              variable : /@(\S.*?)\s/,
              theme    : /themes[\/\\]+(.*?)[\/\\].*/,
              element  : /[\/\\]([^\/\\*]*)\.overrides/
            },
            theme,
            element
          ;
          if(error.filename.match(/theme.less/)) {
            if(error.line == 5) {
              element  = regExp.variable.exec(error.message)[1];
              if(element) {
                console.error('Missing theme.config value for ', element);
              }
              console.error('Most likely new UI was added in an update. You will need to add missing elements from theme.config.example');
            }
            if(error.line == 46) {
              element = regExp.element.exec(error.message)[1];
              theme   = regExp.theme.exec(error.message)[1];
              console.error(theme + ' is not an available theme for ' + element);
            }
          }
          else {
            console.log(error);
          }
          this.emit('end');
        }
      }
    },

    /* What Browsers to Prefix */
    prefix: {
      browsers: [
        'last 2 versions',
        '> 1%',
        'opera 12.1',
        'bb 10',
        'android 4'
      ]
    },

    /* File Renames */
    rename: {
      minJS     : { extname : '.min.js' },
      minCSS    : { extname : '.min.css' },
      rtlCSS    : { extname : '.rtl.css' },
      rtlMinCSS : { extname : '.rtl.min.css' }
    },

    /* Minified CSS Concat */
    minify: {
      processImport       : false,
      restructuring       : false,
      keepSpecialComments : 1,
      roundingPrecision   : -1,
    },

    /* Minified JS Settings */
    uglify: {
      mangle   : true,
      output: {
        comments: 'some'
      }
    },

    /* Minified Concat CSS Settings */
    concatMinify: {
      processImport       : false,
      restructuring       : false,
      keepSpecialComments : false,
      roundingPrecision   : -1,
    },

    /* Minified Concat JS */
    concatUglify: {
      mangle   : true,
      output: {
        comments: 'some'
      }
    }

  }
};
